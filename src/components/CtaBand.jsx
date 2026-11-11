import { useSite } from '../context/SiteContext.jsx'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

// Tamna traka sa pozivom na akciju na dnu stranica.
export default function CtaBand() {
  const { site } = useSite()
  return (
    <section className="dark cta-band">
      <div className="container cta-band__inner">
        <div>
          <Reveal as="span" className="eyebrow">Kontakt</Reveal>
          <Reveal as="h2" className="h2" delay={0.1}>
            Dobrodošli u našu <em className="gold-text">kuću nakita</em>
          </Reveal>
        </div>
        <Reveal className="cta-band__btns" delay={0.2}>
          <Button to="/kontakt">Pošaljite poruku</Button>
          <Button href={site.phoneHref} variant="line" arrow={false}>{site.phone}</Button>
        </Reveal>
      </div>
    </section>
  )
}
