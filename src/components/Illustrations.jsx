// Ilustracije nakita (SVG). Gradijenti su definisani u SvgDefs.jsx.

const sparkPath = (s) => {
  const c = (s * 0.14).toFixed(1)
  return `M0-${s}Q${c}-${c} ${s} 0Q${c} ${c} 0 ${s}Q-${c} ${c} -${s} 0Q-${c}-${c} 0-${s}Z`
}

function Spark({ x, y, s = 14, d = 0 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path className="spark" style={{ '--d': `${d}s` }} d={sparkPath(s)} />
    </g>
  )
}

export function Ring() {
  return (
    <svg className="ill" viewBox="0 0 400 440" fill="none" aria-hidden="true">
      <ellipse cx="200" cy="276" rx="112" ry="122" stroke="url(#g-gold)" strokeWidth="20" />
      <ellipse cx="200" cy="276" rx="103" ry="113" stroke="#FFF6D8" strokeOpacity=".5" strokeWidth="1.5" />
      <path d="M168 158 Q200 190 232 158 L226 134 L174 134Z" fill="url(#g-gold)" />
      <path d="M150 124 L168 160 M250 124 L232 160" stroke="#B8923F" strokeWidth="7" strokeLinecap="round" />
      <g strokeLinejoin="round">
        <polygon points="148,122 252,122 200,186" fill="url(#g-gem)" stroke="#C9A24D" strokeWidth="1.6" />
        <polygon points="172,90 228,90 252,122 148,122" fill="url(#g-gem)" stroke="#C9A24D" strokeWidth="1.6" />
        <polygon points="148,122 186,122 200,186" fill="#D9E3EA" opacity=".85" />
        <polygon points="214,122 252,122 200,186" fill="#EEF2F5" opacity=".9" />
        <polygon points="172,90 200,90 186,122 148,122" fill="#E4EBF0" opacity=".8" />
        <path
          d="M172 90 L186 122 M228 90 L214 122 M200 90 L186 122 M200 90 L214 122 M186 122 L200 186 M214 122 L200 186"
          stroke="#C9A24D"
          strokeOpacity=".65"
          strokeWidth="1"
        />
      </g>
      <Spark x={120} y={78} s={16} d={0.2} />
      <Spark x={284} y={60} s={12} d={1.4} />
      <Spark x={262} y={168} s={9} d={2.4} />
    </svg>
  )
}

export function Bands() {
  return (
    <svg className="ill" viewBox="0 0 400 440" fill="none" aria-hidden="true">
      <defs>
        <clipPath id="clipTop"><rect x="178" y="112" width="44" height="70" /></clipPath>
        <clipPath id="clipBot"><rect x="178" y="280" width="44" height="70" /></clipPath>
      </defs>
      <ellipse cx="160" cy="230" rx="78" ry="98" stroke="url(#g-gold)" strokeWidth="18" />
      <ellipse cx="240" cy="230" rx="78" ry="98" stroke="url(#g-silver)" strokeWidth="18" />
      <ellipse cx="160" cy="230" rx="78" ry="98" stroke="url(#g-gold)" strokeWidth="18" clipPath="url(#clipTop)" />
      <ellipse cx="240" cy="230" rx="78" ry="98" stroke="url(#g-silver)" strokeWidth="18" clipPath="url(#clipBot)" />
      <ellipse cx="160" cy="230" rx="69" ry="89" stroke="#FFF6D8" strokeOpacity=".5" strokeWidth="1.2" />
      <Spark x={330} y={120} s={14} d={0.4} />
      <Spark x={76} y={350} s={10} d={1.5} />
    </svg>
  )
}

function Drop({ dx = 0 }) {
  return (
    <g transform={`translate(${dx} 0)`}>
      <circle cx="125" cy="84" r="13" fill="url(#g-gold)" />
      <circle cx="125" cy="84" r="5" fill="url(#g-gem)" />
      <path d="M125 97 V142" stroke="#C9A24D" strokeWidth="4" strokeLinecap="round" />
      <path d="M125 140 C140 190 176 235 176 282 A51 51 0 0 1 74 282 C74 235 110 190 125 140Z" fill="url(#g-gold)" />
      <path
        d="M125 178 C134 208 154 238 154 278 A29 29 0 0 1 96 278 C96 238 116 208 125 178Z"
        fill="url(#g-gem)"
        stroke="#E6CF8E"
        strokeWidth="1.5"
      />
      <path d="M112 250 Q116 236 126 230" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".9" />
    </g>
  )
}

export function Earrings() {
  return (
    <svg className="ill" viewBox="0 0 400 440" fill="none" aria-hidden="true">
      <Drop />
      <Drop dx={150} />
      <Spark x={200} y={380} s={12} d={0.7} />
    </svg>
  )
}

export function Necklace() {
  return (
    <svg className="ill" viewBox="0 0 400 440" fill="none" aria-hidden="true">
      <path d="M46 64 C84 330 316 330 354 64" stroke="#C9A24D" strokeWidth="1.6" />
      <path d="M46 64 C84 330 316 330 354 64" stroke="url(#g-gold)" strokeWidth="6" strokeDasharray="0 10" strokeLinecap="round" />
      <circle cx="200" cy="270" r="8" stroke="#B8923F" strokeWidth="3" />
      <path d="M200 284 C210 308 236 324 236 348 A36 36 0 0 1 164 348 C164 324 190 308 200 284Z" fill="url(#g-gold)" />
      <circle cx="200" cy="348" r="20" fill="url(#g-gem)" stroke="#E6CF8E" strokeWidth="1.5" />
      <path d="M190 354 Q192 344 202 340" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <Spark x={278} y={300} s={14} d={0.3} />
      <Spark x={120} y={360} s={10} d={1.6} />
    </svg>
  )
}

export function Bracelet() {
  return (
    <svg className="ill" viewBox="0 0 400 440" fill="none" aria-hidden="true">
      <ellipse cx="200" cy="232" rx="140" ry="92" stroke="url(#g-gold)" strokeWidth="24" />
      <ellipse cx="200" cy="232" rx="140" ry="92" stroke="url(#g-gem)" strokeWidth="12" strokeDasharray="0 19.6" strokeLinecap="round" />
      <ellipse cx="200" cy="232" rx="152" ry="102" stroke="#C9A24D" strokeOpacity=".5" strokeWidth="1" />
      <ellipse cx="200" cy="232" rx="128" ry="82" stroke="#C9A24D" strokeOpacity=".5" strokeWidth="1" />
      <Spark x={330} y={120} s={16} d={0.2} />
      <Spark x={86} y={340} s={11} d={1.2} />
    </svg>
  )
}

export function Cross() {
  return (
    <svg className="ill" viewBox="0 0 400 440" fill="none" aria-hidden="true">
      <circle cx="200" cy="70" r="12" stroke="#B8923F" strokeWidth="4" />
      <rect x="190" y="86" width="20" height="270" rx="10" fill="url(#g-gold)" />
      <rect x="165" y="114" width="70" height="18" rx="9" fill="url(#g-gold)" />
      <rect x="130" y="168" width="140" height="22" rx="11" fill="url(#g-gold)" />
      <rect x="168" y="292" width="64" height="18" rx="9" fill="url(#g-gold)" transform="rotate(-16 200 301)" />
      <circle cx="200" cy="179" r="6" fill="url(#g-gem)" />
      <circle cx="146" cy="179" r="3" fill="url(#g-gem)" />
      <circle cx="254" cy="179" r="3" fill="url(#g-gem)" />
      <Spark x={300} y={110} s={14} d={0.5} />
      <Spark x={100} y={300} s={10} d={1.7} />
    </svg>
  )
}

export const ART = {
  ring: Ring,
  bands: Bands,
  earrings: Earrings,
  necklace: Necklace,
  bracelet: Bracelet,
  cross: Cross,
}
