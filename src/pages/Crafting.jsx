import { useEffect } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Steps from '../components/Steps.jsx'
import Faq from '../components/Faq.jsx'
import Button from '../components/Button.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Crafting() {
  useEffect(() => {
    document.title = 'Izrada po meri — Nori zlatara'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Izrada po meri"
        crumb="Izrada"
        title={['Nakit po meri,', <em key="k" className="gold-text">korak po korak.</em>]}
        lead="Nakit po meri ne mora biti komplikovan. Vodimo vas kroz čitav put — jasno, strpljivo i bez iznenađenja."
      />

      <section className="section dark process">
        <div className="container">
          <SectionHead eyebrow="Proces" title={<>Četiri koraka do <em className="gold-text">vašeg komada.</em></>}>
            Od prvog razgovora do trenutka kada nakit stavite na ruku — evo kako to izgleda kod nas.
          </SectionHead>
          <Steps />
          <Reveal className="process__cta">
            <p>Imate ideju, skicu ili samo fotografiju koja vam se dopada? Počnimo odatle.</p>
            <Button to="/kontakt">Pošaljite ideju</Button>
          </Reveal>
        </div>
      </section>

      <section className="section faq">
        <div className="container faq__grid">
          <div>
            <Reveal as="span" className="eyebrow">Pitanja</Reveal>
            <Reveal as="h2" className="h2" delay={0.1}>
              Ono što nas <em className="gold-text">najčešće pitate.</em>
            </Reveal>
          </div>
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
