import { Link } from 'react-router-dom'

// Prsten sa dijamantom koji zamenjuje slovo „O" u NORI
function RingO() {
  return (
    <svg className="logo__ring" viewBox="0 0 24 30" fill="none" aria-hidden="true">
      <circle cx="12" cy="19.2" r="8.2" stroke="url(#g-gold)" strokeWidth="2.2" />
      <polygon points="7.5,3.2 16.5,3.2 19.6,7.4 12,14.6 4.4,7.4" fill="url(#g-gem)" stroke="#B8923F" strokeWidth="1" strokeLinejoin="round" />
      <path d="M4.4 7.4 H19.6 M7.5 3.2 L9.6 7.4 L12 14.6 L14.4 7.4 L16.5 3.2 M9.6 7.4 L12 3.2 L14.4 7.4" stroke="#B8923F" strokeWidth=".7" strokeLinejoin="round" opacity=".75" />
    </svg>
  )
}

export default function Logo({ label = 'Nori zlatara — početna' }) {
  return (
    <Link to="/" className="logo" aria-label={label}>
      <span className="logo__mark" aria-hidden="true">
        N<RingO />RI
      </span>
      <span className="logo__sub">Zlatara</span>
    </Link>
  )
}
