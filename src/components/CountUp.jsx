import { useEffect, useRef, useState } from 'react'

// Broj koji "naraste" do zadate vrednosti kada postane vidljiv.
export default function CountUp({ to, duration = 1800 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || reduce || !('IntersectionObserver' in window)) {
      setValue(to)
      return
    }
    let raf
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1)
          setValue(Math.round(to * (1 - Math.pow(1 - p, 4))))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, duration])

  return <span ref={ref}>{value}</span>
}
