// Podaci o firmi — zameni ih pravim podacima.
const site = {
  name: 'Nori',
  tagline: 'Nakit koji se ne nosi jednu sezonu. Čisto, iskreno i napravljeno da traje.',
  address: 'Karađorđeva 2',
  phone: '+381 64 206 6069',
  phoneHref: 'tel:+381642066069',
  email: 'zlataranori@gmail.com',
  hours: [
    ['Pon – Pet', '09:00 – 20:00'],
    ['Subota', '09:00 – 15:00'],
    ['Nedelja', 'Zatvoreno'],
  ],
  // Adresa na koju stižu poruke iz kontakt forme (preko servisa FormSubmit — vidi README).
  // Ne stoji u kodu: čita se iz fajla .env.local (koji se ne šalje na GitHub), promenljiva VITE_FORM_TO.
  formTo: import.meta.env.VITE_FORM_TO || '',
  get formEndpoint() {
    return `https://formsubmit.co/ajax/${this.formTo}`
  },
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'TikTok', href: '#' },
  ],
  nav: [
    { to: '/o-nama', label: 'O nama' },
    { to: '/kolekcije', label: 'Kolekcije' },
    { to: '/izrada', label: 'Izrada' },
    { to: '/usluge', label: 'Usluge' },
    { to: '/kontakt', label: 'Kontakt' },
  ],
}

export default site
