import { useEffect, useState } from 'react'
import { useSite } from '../context/SiteContext.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'

const TOPICS = [
  'Upit za nakit',
  'Izrada po meri',
  'Otkup zlata',
  'Popravka ili gravura',
  'Ostalo',
]

const empty = { name: '', contact: '', topic: TOPICS[0], message: '' }

export default function Contact() {
  const { site } = useSite()
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | loading | done
  const [error, setError] = useState('')
  const [honey, setHoney] = useState('') // zamka za botove — pravi korisnici je ne vide

  useEffect(() => {
    document.title = 'Kontakt — Nori zlatara'
  }, [])

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'loading') return
    const missing = ['name', 'contact', 'message'].find((k) => !form[k].trim())
    if (missing) {
      document.getElementById(`f-${missing}`)?.focus()
      return
    }

    setStatus('loading')
    setError('')
    try {
      if (!site.formTo) throw new Error('Nije podešena adresa za primanje poruka (VITE_FORM_TO)')
      const contact = form.contact.trim()
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Nori sajt — ${form.topic}`,
          _template: 'table',
          _honey: honey,
          'Ime i prezime': form.name.trim(),
          'Telefon ili e-pošta': contact,
          Tema: form.topic,
          Poruka: form.message.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === false || data.success === 'false') {
        throw new Error(data.message || 'Slanje nije uspelo')
      }
      setStatus('done')
      setForm(empty)
      setTimeout(() => setStatus('idle'), 3200)
    } catch {
      setStatus('idle')
      setError(`Poruka nije poslata. Pokušajte ponovo ili nas pozovite na ${site.phone}.`)
    }
  }

  const submitClass =
    'btn--submit' + (status === 'loading' ? ' is-loading' : '') + (status === 'done' ? ' is-done' : '')

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={['Dobrodošli u našu', <em key="k" className="gold-text">kuću nakita</em>]}
        lead="Pišite nam, pozovite ili dođite direktno u radnju. Rado ćemo vam pokazati sve što vas zanima."
      />

      <section className="section dark contact">
        <div className="container contact__grid">
          <Reveal as="dl" className="info">
            <div><dt>Adresa</dt><dd>{site.address}</dd></div>
            <div><dt>Telefon</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd></div>
            <div><dt>E-pošta</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div>
              <dt>Radno vreme</dt>
              <dd className="hours">
                {site.hours.map(([day, time]) => (
                  <span key={day} style={{ display: 'contents' }}>
                    <b>{day}</b>
                    <span>{time}</span>
                  </span>
                ))}
              </dd>
            </div>
          </Reveal>

          <Reveal as="form" className="form" delay={0.15} onSubmit={onSubmit} noValidate>
            <h3>Pošaljite nam poruku</h3>
            <div className="form__row">
              <div className="field">
                <input id="f-name" type="text" placeholder=" " autoComplete="name" value={form.name} onChange={set('name')} required />
                <label htmlFor="f-name">Ime i prezime</label>
              </div>
              <div className="field">
                <input id="f-contact" type="text" placeholder=" " autoComplete="email" value={form.contact} onChange={set('contact')} required />
                <label htmlFor="f-contact">Telefon ili e-pošta</label>
              </div>
            </div>
            <div className="field field--select">
              <select id="f-topic" value={form.topic} onChange={set('topic')}>
                {TOPICS.map((t) => <option key={t}>{t}</option>)}
              </select>
              <label htmlFor="f-topic">Tema</label>
            </div>
            <div className="field">
              <textarea id="f-message" rows="4" placeholder=" " value={form.message} onChange={set('message')} required />
              <label htmlFor="f-message">Vaša poruka</label>
            </div>
            <div className="form__foot">
              <Button
                type="submit"
                className={submitClass}
                extra={
                  <>
                    <span className="state state--load"><span className="spinner" /></span>
                    <span className="state state--done">
                      <svg className="check" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7" />
                      </svg>
                    </span>
                  </>
                }
              >
                Pošaljite poruku
              </Button>
              <span className="form__note">Odgovaramo u toku radnog vremena, najčešće isti dan.</span>
            </div>
            <input
              type="text"
              name="_honey"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: 'none' }}
            />
            <p className={'form__msg' + (status === 'done' ? ' show' : '')} role="status" aria-live="polite">
              Hvala vam! Javićemo se u najkraćem roku.
            </p>
            <p className={'form__msg form__msg--error' + (error ? ' show' : '')} role="alert">
              {error}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
