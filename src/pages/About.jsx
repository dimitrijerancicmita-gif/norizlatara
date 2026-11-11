import { useEffect } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Monogram from '../components/Monogram.jsx'
import Stats from '../components/Stats.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Values from '../components/Values.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function About() {
  useEffect(() => {
    document.title = 'O nama — Nori zlatara'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="O nama"
        title={['Priča o zlatari', <em key="n" className="gold-text">Nori.</em>]}
        lead="Mesto gde se nakit bira polako, savetuje iskreno i bira tako da traje decenijama."
      />

      <section className="section about">
        <div className="container about__grid">
          <div className="about__aside">
            <Reveal as="span" className="eyebrow">Naša priča</Reveal>
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
              godišnjica, diploma, ili poklon bez povoda — i da takav trenutak zaslužuje punu pažnju. Zato
              vreme koje provedete kod nas nikada nije žurba. Sednete, pogledate, probate, pitate sve što vas
              zanima, a mi vam odgovaramo onako kako bismo odgovorili članu porodice.
            </Reveal>
            <Reveal as="p">
              Ime Nori izabrali smo zbog njegove jednostavnosti — kratko je, melodično i lako se pamti, baš kao
              i nakit koji volimo. Naš pristup je tih i promišljen: bez buke, bez pritiska i bez praznih
              obećanja. Biramo čiste linije, proverene materijale i komade koji se lako uklapaju u svakodnevicu,
              a opet ostaju posebni.
            </Reveal>

            <Reveal as="blockquote" className="quote">
              Dobar nakit ne viče. Prepoznaje se po tome koliko lepo stari.
            </Reveal>

            <Reveal as="p">
              Svaki komad u našoj ponudi prolazi kroz ruke ljudi koji nakit zaista poznaju. Pregledamo kvalitet
              izrade, proveravamo žig i finoću zlata i otvoreno vam kažemo šta kupujete — jer poverenje je jedini
              luksuz koji se ne može kupiti. Ako je nešto bolje da sačekate, reći ćemo vam. Ako vam određeni
              komad ne stoji, reći ćemo i to.
            </Reveal>
            <Reveal as="p">
              Od klasičnih burmi koje se nose čitav život, preko laganih lančića za svaki dan, do prstena
              izrađenih tačno prema vašoj skici — trudimo se da u Nori pronađete nešto što će vas pratiti
              decenijama, a ne jednu sezonu.
            </Reveal>

            <Stats />
          </div>
        </div>
      </section>

      <section className="section promise">
        <div className="container">
          <SectionHead eyebrow="Naše obećanje" title={<>Malo reči, <em className="gold-text">puno poverenja.</em></>} />
          <Values />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
