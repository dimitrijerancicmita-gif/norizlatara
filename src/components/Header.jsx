import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useSite } from '../context/SiteContext.jsx'
import Button from './Button.jsx'

export default function Header() {
  const { site, menuOpen, setMenuOpen } = useSite()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const bar = useRef(null)

  // zaglavlje + traka napretka skrola
  useEffect(() => {
    let ticking = false
    const update = () => {
      const y = window.scrollY
      setScrolled(y > 30)
      const h = document.documentElement.scrollHeight - window.innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? Math.min(y / h, 1) : 0})`
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  // zatvori meni pri promeni stranice
  useEffect(() => setMenuOpen(false), [pathname, setMenuOpen])

  // zaključaj skrol dok je meni otvoren, Esc zatvara
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth > 960 && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen, setMenuOpen])

  const linkClass = ({ isActive }) => 'nav__link' + (isActive ? ' is-active' : '')

  return (
    <>
      <div className="progress" ref={bar} aria-hidden="true" />
      <header className={'header' + (scrolled ? ' is-scrolled' : '')}>
        <div className="container header__inner">
          <Logo />

          <nav className={'nav' + (menuOpen ? ' open' : '')} id="nav" aria-label="Glavna navigacija">
            <NavLink to="/" end className={(s) => linkClass(s) + ' nav__link--home'} style={{ '--i': 0 }}>
              Početna
            </NavLink>
            {site.nav.map((item, i) => (
              <NavLink key={item.to} to={item.to} className={linkClass} style={{ '--i': i + 1 }}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Button to="/kontakt" variant="line" size="sm" arrow={false} className="header__cta">
            Pišite nam
          </Button>

          <button
            className="burger"
            aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
            aria-expanded={menuOpen}
            aria-controls="nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  )
}
