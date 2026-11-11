// Zajednički gradijenti za sve ilustracije — renderuje se jednom u App.jsx.
export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="g-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F3E3AE" />
          <stop offset=".35" stopColor="#C9A24D" />
          <stop offset=".68" stopColor="#8F6B1F" />
          <stop offset="1" stopColor="#DCC27A" />
        </linearGradient>
        <linearGradient id="g-gold-soft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F8EBC4" />
          <stop offset="1" stopColor="#C9A24D" />
        </linearGradient>
        <linearGradient id="g-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FBFBF8" />
          <stop offset=".4" stopColor="#BDB8AB" />
          <stop offset=".7" stopColor="#8F8A7D" />
          <stop offset="1" stopColor="#ECE9E1" />
        </linearGradient>
        <linearGradient id="g-gem" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".55" stopColor="#E3EAEF" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
