import Reveal from './Reveal.jsx'

export default function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="sec-head">
      <Reveal as="span" className="eyebrow">{eyebrow}</Reveal>
      <Reveal as="h2" className="h2" delay={0.1}>{title}</Reveal>
      {children && <Reveal as="p" delay={0.2}>{children}</Reveal>}
    </div>
  )
}
