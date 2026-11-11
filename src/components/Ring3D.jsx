import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { Ring } from './Illustrations.jsx'

// ---- podešavanja ----
const SPIN_AXIS = 'y' // 'y' = okreće se kao na postolju, 'x' = prevrće se napred
const SPIN_SPEED = 0.38 // radijana u sekundi (~16 s za pun krug)

// Zvezdasti "sjaj" nacrtan na canvasu (bela jezgra + topli zlatni oreol)
function makeStarTexture(size = 256) {
  const c = document.createElement('canvas')
  c.width = c.height = size
  const g = c.getContext('2d')
  const m = size / 2

  const glow = g.createRadialGradient(m, m, 0, m, m, m)
  glow.addColorStop(0, 'rgba(255,255,255,1)')
  glow.addColorStop(0.1, 'rgba(255,250,232,.9)')
  glow.addColorStop(0.32, 'rgba(228,196,112,.3)')
  glow.addColorStop(1, 'rgba(228,196,112,0)')
  g.fillStyle = glow
  g.fillRect(0, 0, size, size)

  const ray = (rot) => {
    g.save()
    g.translate(m, m)
    g.rotate(rot)
    const lg = g.createLinearGradient(-m, 0, m, 0)
    lg.addColorStop(0, 'rgba(255,255,255,0)')
    lg.addColorStop(0.5, 'rgba(255,255,255,1)')
    lg.addColorStop(1, 'rgba(255,255,255,0)')
    g.fillStyle = lg
    g.beginPath()
    g.moveTo(-m, 0)
    g.quadraticCurveTo(0, -size * 0.03, m, 0)
    g.quadraticCurveTo(0, size * 0.03, -m, 0)
    g.fill()
    g.restore()
  }
  ray(0)
  ray(Math.PI / 2)

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

// Prsten: traka + postolje + kandže + brilijant
function buildRing() {
  const ring = new THREE.Group()

  const gold = new THREE.MeshStandardMaterial({ color: 0xd8b560, metalness: 1, roughness: 0.2 })
  const gem = new THREE.MeshStandardMaterial({
    color: 0xf6f9fc,
    metalness: 0.85,
    roughness: 0.02,
    emissive: 0xd4dee8, // osnovna svetlina, da dijamant nikad ne potamni
    emissiveIntensity: 0.38,
    envMapIntensity: 1.4,
    flatShading: true,
    side: THREE.DoubleSide,
  })

  // traka
  const band = new THREE.Mesh(new THREE.TorusGeometry(1, 0.085, 40, 180), gold)
  band.scale.z = 1.35
  ring.add(band)

  // postolje
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.08, 0.2, 28), gold)
  cup.position.y = 1.12
  ring.add(cup)

  // četiri kandže
  for (let i = 0; i < 4; i++) {
    const holder = new THREE.Group()
    holder.rotation.y = (i * Math.PI) / 2 + Math.PI / 4
    const prong = new THREE.Mesh(new THREE.CapsuleGeometry(0.034, 0.26, 6, 14), gold)
    prong.position.set(0.325, 1.2, 0)
    prong.rotation.z = -0.55
    holder.add(prong)
    ring.add(holder)
  }

  // brilijant (strukturisan profil, 12 stranica)
  const profile = [
    [0, -0.3],
    [0.22, -0.15],
    [0.42, -0.01],
    [0.42, 0.02],
    [0.31, 0.13],
    [0.19, 0.22],
    [0, 0.22],
  ].map(([r, y]) => new THREE.Vector2(r, y))
  const diamond = new THREE.Mesh(new THREE.LatheGeometry(profile, 12), gem)
  diamond.position.y = 1.34
  diamond.scale.setScalar(1.12)
  ring.add(diamond)

  ring.position.y = -0.23 // centriranje u kadru
  return ring
}

export default function Ring3D() {
  const box = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = box.current
    if (!el) return

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches

    // canvas pravimo ručno, da se čisto ukloni pri odlasku sa stranice
    const canvas = document.createElement('canvas')
    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
    } catch {
      return // bez WebGL-a ostaje SVG ilustracija
    }
    el.appendChild(canvas)
    renderer.setClearColor(0x000000, 0)
    renderer.toneMapping = THREE.NeutralToneMapping ?? THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

    const scene = new THREE.Scene()
    const pmrem = new THREE.PMREMGenerator(renderer)
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    scene.environment = envTex
    scene.environmentIntensity = 1.15

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50)

    // spoljna grupa = blagi nagib, unutrašnja = rotacija
    const tilt = new THREE.Group()
    tilt.rotation.x = SPIN_AXIS === 'y' ? 0.2 : 0
    const spin = new THREE.Group()
    const ring = buildRing()
    spin.add(ring)
    tilt.add(spin)
    scene.add(tilt)

    // sjaj na dijamantu + par sitnih zlatnih iskrica
    const starTex = makeStarTexture()
    const sparkles = [
      { pos: [-0.14, 1.36, 0.55], size: 0.85, speed: 1.9, phase: 0.0 }, // glavni — na dijamantu
      { pos: [-1.0, 1.25, 0.3], size: 0.42, speed: 1.2, phase: 1.7 },
      { pos: [0.95, 0.75, 0.3], size: 0.34, speed: 1.5, phase: 3.1 },
    ].map((s) => {
      const mat = new THREE.SpriteMaterial({ map: starTex, transparent: true, depthTest: false, depthWrite: false, opacity: 0 })
      const sprite = new THREE.Sprite(mat)
      sprite.position.set(...s.pos)
      sprite.renderOrder = 10
      scene.add(sprite)
      return { ...s, sprite }
    })

    const setSparkles = (t, still) => {
      sparkles.forEach((s) => {
        const k = still ? 0.7 : Math.pow(Math.max(0, Math.sin(t * s.speed + s.phase)), 5)
        s.sprite.material.opacity = k
        s.sprite.material.rotation = k * 0.6
        const sc = s.size * (0.25 + 0.75 * k)
        s.sprite.scale.set(sc, sc, 1)
      })
    }

    // kadar
    const fov = (camera.fov * Math.PI) / 180
    const resize = () => {
      const w = el.clientWidth || 1
      const h = el.clientHeight || 1
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      const zByHeight = 3.1 / 2 / Math.tan(fov / 2)
      const zByWidth = 2.7 / 2 / (Math.tan(fov / 2) * camera.aspect)
      camera.position.set(0, 0, Math.max(zByHeight, zByWidth))
      camera.updateProjectionMatrix()
      if (reduce) renderer.render(scene, camera)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(el)
    resize()

    // petlja (pauzira se kad prsten nije vidljiv)
    let raf = 0
    let last = performance.now()
    let t = 0
    let visible = true
    const tick = (now) => {
      raf = requestAnimationFrame(tick)
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      t += dt
      spin.rotation[SPIN_AXIS] += dt * SPIN_SPEED
      setSparkles(t, false)
      renderer.render(scene, camera)
    }
    const start = () => {
      if (reduce || raf || !visible || document.hidden) return
      last = performance.now()
      raf = requestAnimationFrame(tick)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    if (reduce) {
      spin.rotation.y = 0.5
      setSparkles(0, true)
      renderer.render(scene, camera)
    } else {
      start()
    }
    setReady(true)

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      visible ? start() : stop()
    })
    io.observe(el)
    const onVis = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVis)

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose()
        if (o.material) o.material.dispose()
      })
      starTex.dispose()
      envTex.dispose()
      pmrem.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
      canvas.remove()
      setReady(false)
    }
  }, [])

  return (
    <div className={'ring3d' + (ready ? ' is-ready' : '')} ref={box}>
      {/* SVG je rezerva dok se 3D model učitava (ili ako WebGL nije dostupan) */}
      <div className="ring3d__fallback">
        <Ring />
      </div>
    </div>
  )
}
