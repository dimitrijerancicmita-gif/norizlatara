import { Link } from 'react-router-dom'
import Arrow from './Arrow.jsx'
import Reveal from './Reveal.jsx'
import { ART } from './Illustrations.jsx'

export default function CollectionCard({ item, delay = 0, className = '' }) {
  const Art = ART[item.art]
  return (
    <Reveal delay={delay} className={className}>
      <Link to="/kontakt" className="card">
        <div className="card__art">
          <Art />
        </div>
        <div className="card__body">
          <div className="card__top">
            <h3>{item.name}</h3>
            <span className="card__no">{item.no}</span>
          </div>
          <p>{item.text}</p>
          <span className="link">
            Pogledajte <Arrow />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
