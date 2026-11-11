import { stats } from '../data/values.js'
import CountUp from './CountUp.jsx'
import Reveal from './Reveal.jsx'

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <Reveal className="stat" delay={i * 0.12} key={s.n}>
          <div className="stat__n gold-text">
            <CountUp to={s.n} />
          </div>
          <p>
            <span className="stat__long">{s.text}</span>
            <span className="stat__short">{s.short}</span>
          </p>
        </Reveal>
      ))}
    </div>
  )
}
