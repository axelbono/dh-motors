interface CarIllustrationProps {
  className?: string
  brand?: string
}

export default function CarIllustration({ className = '', brand = '' }: CarIllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="160" cy="142" rx="140" ry="8" fill="rgba(0,0,0,0.5)" />
      <path
        d="M40 105 L68 68 L105 52 L215 52 L262 68 L280 105 L280 118 L40 118 Z"
        fill="#222"
        stroke="#2e2e2e"
        strokeWidth="1"
      />
      <path d="M75 68 L110 54 L118 68 Z" fill="#1a1a1a" />
      <path
        d="M118 54 L202 54 L210 68 L110 68 Z"
        fill="rgba(242,101,34,0.12)"
        stroke="#F26522"
        strokeWidth="0.8"
      />
      <path d="M202 54 L240 68 L212 68 Z" fill="#1a1a1a" />
      {/* Left window */}
      <rect x="76" y="72" width="34" height="30" rx="2" fill="rgba(242,101,34,0.08)" stroke="#2e2e2e" strokeWidth="0.8" />
      {/* Center window */}
      <rect x="114" y="70" width="92" height="32" rx="2" fill="rgba(242,101,34,0.06)" stroke="#F26522" strokeWidth="0.6" />
      {/* Right window */}
      <rect x="210" y="72" width="34" height="30" rx="2" fill="rgba(242,101,34,0.08)" stroke="#2e2e2e" strokeWidth="0.8" />
      {/* Left wheel */}
      <circle cx="92" cy="128" r="16" fill="#111" stroke="#3a3a3a" strokeWidth="1.5" />
      <circle cx="92" cy="128" r="9" fill="#1a1a1a" stroke="#F26522" strokeWidth="1" />
      <circle cx="92" cy="128" r="3" fill="#F26522" />
      {/* Right wheel */}
      <circle cx="236" cy="128" r="16" fill="#111" stroke="#3a3a3a" strokeWidth="1.5" />
      <circle cx="236" cy="128" r="9" fill="#1a1a1a" stroke="#F26522" strokeWidth="1" />
      <circle cx="236" cy="128" r="3" fill="#F26522" />
      {/* Front lights */}
      <rect x="40" y="100" width="42" height="14" rx="1" fill="#1a1a1a" stroke="#F26522" strokeWidth="0.8" />
      <rect x="43" y="103" width="14" height="7" rx="1" fill="rgba(255,200,100,0.25)" />
      {/* Rear lights */}
      <rect x="238" y="100" width="42" height="14" rx="1" fill="#1a1a1a" stroke="#F26522" strokeWidth="0.8" />
      <rect x="261" y="103" width="14" height="7" rx="1" fill="rgba(255,80,80,0.3)" />
      {/* Brand label */}
      {brand && (
        <text
          x="160"
          y="38"
          fill="#3a3a3a"
          fontFamily="sans-serif"
          fontSize="10"
          textAnchor="middle"
          letterSpacing="3"
        >
          {brand.toUpperCase()}
        </text>
      )}
    </svg>
  )
}
