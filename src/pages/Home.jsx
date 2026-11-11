import { lazy, Suspense, useEffect } from 'react'
import { collections } from '../data/collections.js'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import Marquee from '../components/Marquee.jsx'
import Monogram from '../components/Monogram.jsx'
import Stats from '../components/Stats.jsx'
import SectionHead from '../components/SectionHead.jsx'
import CollectionCard from '../components/CollectionCard.jsx'
import Steps from '../components/Steps.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Ring } from '../components/Illustrations.jsx'

// three.js se učitava odvojeno, da ne usporava prvi prikaz stranice
const Ring3D = lazy(() => import('../components/Ring3D.jsx'))

// reč naslova koja "izranja" (maska + podizanje)
const Word = ({ i, children }) => (
  <span className="w"><span style={{ '--i': i }}>{children}</span></span>
)

export default function Home() {
  useEffect(() => {
    document.title = 'Nori — Zlatara'
  }, [])

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <span className="eyebrow fade-up" style={{ '--d': '.1s' }}>Zlatara Nori</span>
            {/* Prelomi redova: računar "Zlato koje čuva / vaše najlepše / trenutke."
                telefon "Zlato koje [prsten] / čuva vaše / najlepše / trenutke." */}
            <h1 className="h1">
              <Word i={0}>Zlato</Word>{' '}<Word i={1}>koje</Word><br className="br-m" />{' '}
              <Word i={2}>čuva</Word><br className="br-d" />{' '}
              <Word i={3}>vaše</Word><br className="br-m" />{' '}
              <Word i={4}>najlepše</Word><br />
              <Word i={5}><em className="gold-text">trenutke.</em></Word>
            </h1>
            <p className="hero__lead fade-up" style={{ '--d': '.85s' }}>
              Nori je zlatara za ljude koji nakit biraju srcem, a kupuju pametno. Čiste linije,
              proveren materijal i iskren savet — da svaki komad dobije svoje mesto u vašoj priči.
            </p>
            <div className="hero__cta fade-up" style={{ '--d': '1s' }}>
              <Button to="/kolekcije">Istražite kolekcije</Button>
              <Button to="/kontakt" variant="line" arrow={false}>Pišite nam</Button>
            </div>
            <ul className="hero__facts fade-up" style={{ '--d': '1.15s' }}>
              <li><i className="dia" />Žig na svakom komadu</li>
              <li><i className="dia" />Izrada po meri</li>
              <li><i className="dia" />Iskren savet</li>
            </ul>
          </div>

          <div className="hero__art fade-up" style={{ '--d': '.5s' }}>
            <div className="arch arch--outline" />
            <div className="arch arch--fill" />
            <div className="hero__ring float">
              <Suspense fallback={<Ring />}>
                <Ring3D />
              </Suspense>
            </div>
            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 140 140">
                <defs>
                  <path id="circ" d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0" />
                </defs>
                <text>
                  <textPath href="#circ" textLength="322" lengthAdjust="spacing">
                    NORI · ZLATARA · NORI · ZLATARA ·
                  </textPath>
                </text>
              </svg>
              <i className="dia" />
            </div>
            <div className="chip"><b>585 · 750</b>Zlato sa žigom</div>
          </div>
        </div>
        <a href="#uvod" className="scroll-hint" aria-label="Skrolujte dole"><i />Skrolujte</a>
      </section>

      <Marquee />

      {/* ============ O NAMA (kratko) ============ */}
      <section className="section about" id="uvod">
        <div className="container about__grid">
          <div className="about__aside">
            <Reveal as="span" className="eyebrow">O nama</Reveal>
            <Reveal as="h2" className="h2" delay={0.1}>
              Nakit nije ukras. To je <em className="gold-text">sećanje</em> koje se nosi.
            </Reveal>
            <Monogram />
          </div>

          <div className="prose">
            <Reveal as="p" className="lead">
              Zlatara Nori nastala je iz jednostavne ideje: da kupovina zlata bude lep, miran i častan doživljaj.
            </Reveal>
            <Reveal as="p">
              Verujemo da iza svakog prstena, burme ili lančića stoji razlog — rođenje deteta, venčanje,
              godišnjica ili poklon bez povoda — i da takav trenutak zaslužuje punu pažnju. Zato vreme koje
              provedete kod nas nikada nije žurba.
            </Reveal>
            <Reveal as="blockquote" className="quote">
              Dobar nakit ne viče. Prepoznaje se po tome koliko lepo stari.
            </Reveal>
            <Reveal>
              <Button to="/o-nama" variant="line">Saznajte više o nama</Button>
            </Reveal>
            <Stats />
          </div>
        </div>
      </section>

      {/* ============ KOLEKCIJE (pregled) ============ */}
      <section className="section collections">
        <div className="container">
          <SectionHead eyebrow="Kolekcije" title={<>Komadi za svaku <em className="gold-text">priču.</em></>}>
            Naša ponuda raste polako i pažljivo. Ne trudimo se da imamo sve, već da ono što imamo bude
            dobro napravljeno, lepo i smisleno.
          </SectionHead>

          <div className="cards">
            {/* 4. kartica se vidi samo na telefonu, da u dve kolone ne ostane prazno mesto */}
            {collections.slice(0, 4).map((item, i) => (
              <CollectionCard
                key={item.id}
                item={item}
                delay={(i % 3) * 0.12}
                className={i === 3 ? 'card-mobile-only' : ''}
              />
            ))}
          </div>

          <Reveal className="section-cta">
            <Button to="/kolekcije" variant="line">Sve kolekcije</Button>
          </Reveal>
        </div>
      </section>

      {/* ============ IZRADA (pregled) ============ */}
      <section className="section dark process">
        <div className="container">
          <SectionHead eyebrow="Izrada po meri" title={<>Kako nastaje komad <em className="gold-text">samo vaš.</em></>}>
            Nakit po meri ne mora biti komplikovan. Vodimo vas kroz čitav put — od prve ideje do trenutka
            kada ga stavite na ruku.
          </SectionHead>
          <Steps />
          <Reveal className="process__cta">
            <p>Imate ideju, skicu ili samo fotografiju koja vam se dopada? Počnimo odatle.</p>
            <Button to="/izrada">Kako izgleda izrada</Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
