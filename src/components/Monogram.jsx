import Reveal from './Reveal.jsx'

export default function Monogram() {
  return (
    <Reveal scale delay={0.2} className="mono" aria-hidden="true">
      <div className="arch arch--outline" />
      <div className="arch arch--fill">
        <span className="mono__n gold-text">N</span>
        <span className="mono__cap">Zlatara</span>
      </div>
    </Reveal>
  )
}
