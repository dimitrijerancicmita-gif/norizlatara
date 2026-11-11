import { values } from '../data/values.js'
import Reveal from './Reveal.jsx'

const ICONS = {
  shield: (
    <>
      <path d="M20 4l13 5v10c0 9-6 15-13 18C13 34 7 28 7 19V9z" />
      <path d="M14 20l4 4 8-9" />
    </>
  ),
  chat: (
    <>
      <path d="M6 8h28v18H18l-8 7v-7H6z" />
      <path d="M13 15h14M13 20h9" />
    </>
  ),
  refresh: (
    <>
      <path d="M33 17a13 13 0 0 0-24-5M7 23a13 13 0 0 0 24 5" />
      <path d="M9 6v7h7M31 34v-7h-7" />
    </>
  ),
  gift: (
    <>
      <rect x="6" y="16" width="28" height="18" />
      <path d="M4 16h32v-5H4zM20 11v23M20 11c-3-6-10-6-10-2s7 2 10 2zM20 11c3-6 10-6 10-2s-7 2-10 2z" />
    </>
  ),
}

export default function Values() {
  return (
    <div className="vals">
      {values.map((v, i) => (
        <Reveal className="val" delay={i * 0.1} key={v.title}>
          <svg viewBox="0 0 40 40" aria-hidden="true">{ICONS[v.icon]}</svg>
          <h3>
            <span className="val__long">{v.title}</span>
            <span className="val__short">{v.short}</span>
          </h3>
          <p>{v.text}</p>
        </Reveal>
      ))}
    </div>
  )
}
