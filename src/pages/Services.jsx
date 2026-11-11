import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/services.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Arrow from '../components/Arrow.jsx'
import Button from '../components/Button.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Services() {
  useEffect(() => {
    document.title = 'Usluge — Nori zlatara'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Usluge"
        title={['Briga koja', <em key="s" className="gold-text">ne staje na kasi.</em>]}
        lead="Nakit je živ materijal — menja se sa vama. Zato nudimo sve što je potrebno da vaši komadi ostanu lepi, ispravni i spremni za još mnogo godina nošenja."
      />

      <section className="section services">
        <div className="container services__grid">
          <div className="services__aside">
            <Reveal as="span" className="eyebrow">Šta radimo</Reveal>
            <Reveal as="h2" className="h2" delay={0.1}>
              Brinemo i <em className="gold-text">posle</em> kupovine.
            </Reveal>
            <Reveal delay={0.25}>
              <Button to="/kontakt" variant="line">Zatražite ponudu</Button>
            </Reveal>
          </div>

          <div className="svc-list">
            {services.map((s, i) => (
              <Reveal delay={(i % 3) * 0.08} key={s.no}>
                <Link to="/kontakt" className="svc">
                  <span className="svc__n">{s.no}</span>
                  <div>
                    <h3>{s.name}</h3>
                    <p>{s.text}</p>
                  </div>
                  <span className="svc__arrow"><Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
