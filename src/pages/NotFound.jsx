import { useEffect } from 'react'
import Button from '../components/Button.jsx'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Stranica nije pronađena — Nori zlatara'
  }, [])

  return (
    <section className="notfound">
      <div className="container">
        <span className="eyebrow">Greška 404</span>
        <h1 className="h1">Ovu stranicu nismo <em className="gold-text">pronašli.</em></h1>
        <p>Možda je link pogrešan ili je stranica premeštena.</p>
        <Button to="/">Nazad na početnu</Button>
      </div>
    </section>
  )
}
