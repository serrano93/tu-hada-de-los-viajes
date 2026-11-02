import React from 'react';

interface FairyMascotProps {
  size?: number;
  uid?: string;
  animate?: boolean;
  sleepy?: boolean;
  className?: string;
}

/**
 * Lumi, el hada mascota de Tu Hada de los Viajes. SVG inline, sin imágenes externas.
 * `uid` evita colisiones de ids de degradados cuando hay varias instancias en la página.
 * Equivalente a CarlosMascot de automatizes (mismo API: size / uid / animate).
 */
export const FairyMascot: React.FC<FairyMascotProps> = ({
  size = 80,
  uid = 'a',
  animate = true,
  sleepy = false,
  className = '',
}) => (
  <svg
    className={`fairy ${animate ? 'fairy-anim' : ''} ${sleepy ? 'fairy-sleepy' : ''} ${className}`}
    width={size}
    height={size * 1.15}
    viewBox="0 0 120 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id={`fw-${uid}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffffff" stopOpacity=".95" />
        <stop offset="1" stopColor="#DFC58E" stopOpacity=".75" />
      </linearGradient>
      <linearGradient id={`fd-${uid}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8FA392" />
        <stop offset="1" stopColor="#4A5D4E" />
      </linearGradient>
    </defs>

    <ellipse className="f-shadow" cx="60" cy="134" rx="24" ry="3.2" fill="#1E201D" opacity=".28" />

    <g className="f-body">
      {/* alas */}
      <g className="f-wings">
        <path d="M58 70 C30 52 6 58 10 82 C14 100 40 94 58 78 Z" fill={`url(#fw-${uid})`} stroke="#C5A059" strokeWidth="3" strokeLinejoin="round" />
        <path d="M62 70 C90 52 114 58 110 82 C106 100 80 94 62 78 Z" fill={`url(#fw-${uid})`} stroke="#C5A059" strokeWidth="3" strokeLinejoin="round" />
        <path d="M56 80 C40 84 26 100 34 108 C44 114 54 98 58 86 Z" fill={`url(#fw-${uid})`} stroke="#C5A059" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M64 80 C80 84 94 100 86 108 C76 114 66 98 62 86 Z" fill={`url(#fw-${uid})`} stroke="#C5A059" strokeWidth="2.5" strokeLinejoin="round" />
      </g>

      {/* vestido */}
      <path d="M46 86 L74 86 L86 124 Q60 134 34 124 Z" fill={`url(#fd-${uid})`} stroke="#1E201D" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M44 112 Q60 120 76 112" stroke="#DFC58E" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* pelo (moño con corona dorada) */}
      <circle cx="60" cy="22" r="11" fill="#C86D51" stroke="#1E201D" strokeWidth="3.5" />
      <path d="M52 14 L56 8 L60 13 L64 8 L68 14 Z" fill="#C5A059" stroke="#1E201D" strokeWidth="2.5" strokeLinejoin="round" />
      <circle className="f-star" cx="60" cy="6" r="3.2" fill="#DFC58E" stroke="#1E201D" strokeWidth="2" />

      {/* cabeza */}
      <circle cx="60" cy="52" r="29" fill="#F5E4D0" stroke="#1E201D" strokeWidth="4" />
      <path d="M32 50 C34 30 86 30 88 50 C78 40 44 40 32 50 Z" fill="#C86D51" stroke="#1E201D" strokeWidth="3" strokeLinejoin="round" />
      {/* orejitas de hada */}
      <path d="M31 54 L22 48 L33 62 Z" fill="#F5E4D0" stroke="#1E201D" strokeWidth="3" strokeLinejoin="round" />
      <path d="M89 54 L98 48 L87 62 Z" fill="#F5E4D0" stroke="#1E201D" strokeWidth="3" strokeLinejoin="round" />
      {/* ojos */}
      <ellipse className="f-eye" cx="49" cy="58" rx="4.6" ry="6.4" fill="#1E201D" />
      <ellipse className="f-eye" cx="71" cy="58" rx="4.6" ry="6.4" fill="#1E201D" />
      <circle className="f-shine" cx="50.8" cy="55.4" r="1.7" fill="#fff" />
      <circle className="f-shine" cx="72.8" cy="55.4" r="1.7" fill="#fff" />
      {/* sonrisa y mejillas */}
      <path d="M52 70 Q60 77 68 70" stroke="#1E201D" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="40" cy="68" r="4.2" fill="#E8907A" opacity=".7" />
      <circle cx="80" cy="68" r="4.2" fill="#E8907A" opacity=".7" />

      {/* varita mágica */}
      <g className="f-wand">
        <line x1="88" y1="112" x2="108" y2="84" stroke="#1E201D" strokeWidth="4" strokeLinecap="round" />
        <path className="f-spark" d="M108 70 L111 79 L120 82 L111 85 L108 94 L105 85 L96 82 L105 79 Z" fill="#DFC58E" stroke="#1E201D" strokeWidth="2.5" strokeLinejoin="round" />
      </g>
    </g>

    {/* zzz: solo visibles cuando el hada está dormida (sin conexión) */}
    <g className="f-zzz" aria-hidden="true">
      <text x="92" y="30" fontSize="15" fontWeight="800" fill="#8FA392" fontFamily="Cormorant Garamond, serif">z</text>
      <text x="102" y="16" fontSize="11" fontWeight="800" fill="#8FA392" fontFamily="Cormorant Garamond, serif">z</text>
    </g>
  </svg>
);

export default FairyMascot;
