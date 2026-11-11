import { Link } from 'react-router-dom'

/**
 * Zaglavlje unutrašnjih stranica.
 * title: niz redova (string ili JSX), svaki red se "izranja" posebno.
 */
export default function PageHero({ eyebrow, crumb, title, lead }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div>
          <nav className="crumbs fade-up" style={{ '--d': '.05s' }} aria-label="Putanja">
            <Link to="/">Početna</Link>
            <i className="dia" />
            <span>{crumb || eyebrow}</span>
          </nav>
          <h1 className="h1">
            {title.map((line, i) => (
              <span className="line" key={i}>
                <span style={{ '--i': i }}>{line}</span>
              </span>
            ))}
          </h1>
        </div>
        {lead && (
          <p className="page-hero__lead fade-up" style={{ '--d': '.7s' }}>
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}
