import React from 'react';

interface CrestLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'color';
}

export const CrestLogo: React.FC<CrestLogoProps> = ({
  className = '',
  size = 48,
  showText = false,
  variant = 'color'
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm transition-transform hover:scale-105 duration-200"
        aria-label="JDT Islam College of Arts and Science Official Crest"
      >
        <defs>
          <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="crestBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="crestInner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B192C" />
            <stop offset="100%" stopColor="#1E3E62" />
          </linearGradient>
        </defs>

        {/* Outer Ring */}
        <circle cx="60" cy="60" r="56" fill="url(#crestBlue)" stroke="url(#crestGold)" strokeWidth="3" />
        
        {/* Decorative inner beaded circle */}
        <circle cx="60" cy="60" r="50" fill="none" stroke="#FDE68A" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

        {/* Central Shield Medallion */}
        <circle cx="60" cy="60" r="44" fill="url(#crestInner)" stroke="url(#crestGold)" strokeWidth="2" />

        {/* Radiant Rays behind book */}
        <g opacity="0.25">
          <line x1="60" y1="32" x2="60" y2="44" stroke="#FCD34D" strokeWidth="1.5" />
          <line x1="48" y1="36" x2="54" y2="46" stroke="#FCD34D" strokeWidth="1.5" />
          <line x1="72" y1="36" x2="66" y2="46" stroke="#FCD34D" strokeWidth="1.5" />
          <line x1="38" y1="46" x2="48" y2="52" stroke="#FCD34D" strokeWidth="1.5" />
          <line x1="82" y1="46" x2="72" y2="52" stroke="#FCD34D" strokeWidth="1.5" />
        </g>

        {/* Laurel Wreath Left */}
        <path
          d="M 32 64 C 31 52 38 42 46 38 C 45 44 41 52 41 62 C 41 72 48 80 56 84 C 47 82 35 76 32 64 Z"
          fill="url(#crestGold)"
          opacity="0.85"
        />
        {/* Laurel Wreath Right */}
        <path
          d="M 88 64 C 89 52 82 42 74 38 C 75 44 79 52 79 62 C 79 72 72 80 64 84 C 73 82 85 76 88 64 Z"
          fill="url(#crestGold)"
          opacity="0.85"
        />

        {/* Torch / Lamp of Knowledge */}
        <path
          d="M 58 35 C 57 30 63 26 60 21 C 65 24 66 29 62 35 Z"
          fill="#EF4444"
        />
        <path
          d="M 59 34 C 58 31 62 29 60 25 C 63 27 64 30 61 34 Z"
          fill="#FDE047"
        />
        
        {/* Open Book of Knowledge */}
        <g transform="translate(0, 2)">
          {/* Left Page */}
          <path
            d="M 60 62 C 54 58 44 57 37 59 L 37 73 C 44 71 54 72 60 76 Z"
            fill="#FFFFFF"
            stroke="#D97706"
            strokeWidth="1.2"
          />
          {/* Right Page */}
          <path
            d="M 60 62 C 66 58 76 57 83 59 L 83 73 C 76 71 66 72 60 76 Z"
            fill="#FFFFFF"
            stroke="#D97706"
            strokeWidth="1.2"
          />
          {/* Book Spine */}
          <line x1="60" y1="62" x2="60" y2="76" stroke="#92400E" strokeWidth="1.8" />
          {/* Subtle text lines on pages */}
          <line x1="42" y1="63" x2="54" y2="62" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="42" y1="67" x2="54" y2="66" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="66" y1="62" x2="78" y2="63" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="66" y1="66" x2="78" y2="67" stroke="#CBD5E1" strokeWidth="1" />
        </g>

        {/* Base Banner with 1922 / 2005 */}
        <path
          d="M 38 88 L 82 88 L 78 96 L 60 94 L 42 96 Z"
          fill="url(#crestGold)"
          stroke="#78350F"
          strokeWidth="0.8"
        />
        <text
          x="60"
          y="94.5"
          fontSize="6.5"
          fontFamily="system-ui, sans-serif"
          fontWeight="bold"
          fill="#0F172A"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          ESTD 2005
        </text>

        {/* Star Accents */}
        <circle cx="28" cy="60" r="1.5" fill="#FCD34D" />
        <circle cx="92" cy="60" r="1.5" fill="#FCD34D" />
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`text-base sm:text-lg font-bold tracking-tight font-cinzel leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
            JDT ISLAM
          </span>
          <span className={`text-xs font-semibold tracking-wide uppercase mt-1 ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
            College of Arts & Science
          </span>
          <span className={`text-[10px] tracking-normal leading-tight hidden sm:block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Affiliated to University of Calicut · Kozhikode
          </span>
        </div>
      )}
    </div>
  );
};
