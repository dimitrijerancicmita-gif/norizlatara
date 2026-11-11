import { steps } from '../data/process.js'
import Reveal from './Reveal.jsx'

export default function Steps() {
  return (
    <div className="steps">
      {steps.map((s, i) => (
        <Reveal className="step" delay={i * 0.15} key={s.n}>
          <div className="step__n gold-text">{s.n}</div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </Reveal>
      ))}
    </div>
  )
}
