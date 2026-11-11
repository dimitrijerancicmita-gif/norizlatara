import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Arrow from './Arrow.jsx'

// Magnetski efekat: dugme lagano prati miša.
function useMagnetic(ref, enabled) {
  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const move = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', ((e.clientX - (r.left + r.width / 2)) * 0.18).toFixed(1) + 'px')
      el.style.setProperty('--my', ((e.clientY - (r.top + r.height / 2)) * 0.28).toFixed(1) + 'px')
    }
    const leave = () => {
      el.style.setProperty('--mx', '0px')
      el.style.setProperty('--my', '0px')
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [ref, enabled])
}

/**
 * variant: 'gold' | 'line'
 * to   -> unutrašnja stranica (React Router)
 * href -> spoljašnji link (tel:, mailto:, ...)
 * extra -> dodatni elementi unutar dugmeta (npr. stanja forme)
 */
export default function Button({
  to,
  href,
  variant = 'gold',
  size,
  arrow = true,
  magnetic = true,
  extra = null,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  useMagnetic(ref, magnetic)

  const cls = ['btn', `btn--${variant}`, size && `btn--${size}`, className].filter(Boolean).join(' ')
  const inner = (
    <>
      <span className="btn__label">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      {arrow && (
        <span className="btn__arrow">
          <Arrow />
        </span>
      )}
      {extra}
    </>
  )

  if (to) return <Link ref={ref} to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a ref={ref} href={href} className={cls} {...rest}>{inner}</a>
  return <button ref={ref} className={cls} {...rest}>{inner}</button>
}
