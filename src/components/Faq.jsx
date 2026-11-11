import { useState } from 'react'
import { faq } from '../data/faq.js'
import Reveal from './Reveal.jsx'

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <Reveal className="faq__list">
      {faq.map((item, i) => (
        <div className="faq__item" key={item.q}>
          <button
            className="faq__q"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {item.q}
            <span className="faq__icon" />
          </button>
          <div className="faq__a">
            <div>
              <p>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </Reveal>
  )
}
