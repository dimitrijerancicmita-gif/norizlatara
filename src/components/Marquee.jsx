const items = [
  'Zlato 585',
  'Zlato 750',
  'Srebro 925',
  'Verenički prstenovi',
  'Burme',
  'Izrada po meri',
  'Gravura',
  'Otkup zlata',
]

export default function Marquee() {
  const row = [...items, ...items] // udvostručeno za neprekidno kretanje
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip__track">
        {row.map((text, i) => (
          <span className="strip__item" key={i}>
            <span>{text}</span>
            <i className="dia" />
          </span>
        ))}
      </div>
    </div>
  )
}
