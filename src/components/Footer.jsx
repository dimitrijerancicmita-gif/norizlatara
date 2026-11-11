import { Link } from 'react-router-dom'
import { useSite } from '../context/SiteContext.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  const { site } = useSite()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Logo label="Nori zlatara" />
            <p className="footer__about">{site.tagline}</p>
          </div>
          <div>
            <h4>Navigacija</h4>
            <ul>
              {site.nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Pratite nas</h4>
            <ul>
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} rel="noopener">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Nori zlatara. Sva prava zadržana.</span>
          <span>Zlato i srebro sa žigom finoće.</span>
        </div>
        <div className="wordmark gold-text" aria-hidden="true">NORI</div>
      </div>
    </footer>
  )
}
