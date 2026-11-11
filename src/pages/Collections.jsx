import { useEffect } from 'react'
import { collections } from '../data/collections.js'
import { materials, tips } from '../data/materials.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import CollectionCard from '../components/CollectionCard.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Collections() {
  useEffect(() => {
    document.title = 'Kolekcije — Nori zlatara'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Kolekcije"
        title={['Komadi za svaku', <em key="p" className="gold-text">priču.</em>]}
        lead="Naša ponuda raste polako i pažljivo. Ne trudimo se da imamo sve, već da ono što imamo bude dobro napravljeno, lepo i smisleno."
      />

      <section className="section collections">
        <div className="container">
          <div className="cards cards--first">
            {collections.map((item, i) => (
              <CollectionCard key={item.id} item={item} delay={(i % 3) * 0.12} />
            ))}
          </div>
        </div>
      </section>

      <section className="section materials">
        <div className="container">
          <SectionHead eyebrow="Materijali" title={<>Zlato u četiri <em className="gold-text">nijanse.</em></>}>
            Boja i čvrstina zlata zavise od legure. Zato vam pre kupovine uvek objasnimo razliku, kako
            biste izabrali ono što najbolje odgovara vašem stilu i načinu života.
          </SectionHead>

          <div className="mats">
            {materials.map((m, i) => (
              <Reveal delay={i * 0.1} key={m.swatch}>
                <article className="mat">
                  <div className={`swatch ${m.swatch}`} />
                  <span className="mat__k">{m.label}</span>
                  <h3>{m.name}</h3>
                  <p>{m.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="care">
            <Reveal as="h3">
              Kako da vam nakit <em className="gold-text">traje čitav život.</em>
            </Reveal>
            <div className="care__list">
              {tips.map((t, i) => (
                <Reveal className="tip" delay={i * 0.12} key={t.n}>
                  <span>{t.n}</span>
                  <h4>{t.title}</h4>
                  <p>{t.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
