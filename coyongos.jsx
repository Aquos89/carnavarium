/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   Coyongos — geometric trapezoidal birds inspired by stained
   glass. Original placeholder design.
   ============================================================ */

function Coyongo({ palette, scale = 1, mirror = false, style }) {
  // palette: [body, wing, accent, beak]
  const [body, wing, accent, beak] = palette;
  return (
    <svg
      viewBox="0 0 120 220"
      width={120 * scale}
      height={220 * scale}
      className="coyongo"
      style={{ transform: mirror ? "scaleX(-1)" : "none", ...style }}
    >
      {/* legs */}
      <line x1="56" y1="170" x2="48" y2="218" stroke="#1c1a16" strokeWidth="2" strokeLinecap="round"/>
      <line x1="68" y1="170" x2="74" y2="218" stroke="#1c1a16" strokeWidth="2" strokeLinecap="round"/>
      <line x1="44" y1="218" x2="52" y2="218" stroke="#1c1a16" strokeWidth="2" strokeLinecap="round"/>
      <line x1="70" y1="218" x2="78" y2="218" stroke="#1c1a16" strokeWidth="2" strokeLinecap="round"/>

      {/* body — trapezoid with stained-glass partitions */}
      <polygon points="20,170 100,170 88,90 32,90" fill={body} stroke="#1c1a16" strokeWidth="1.6"/>
      {/* inner geometric panels (cathedral glass reference) */}
      <polygon points="32,90 60,120 32,150" fill={wing} stroke="#1c1a16" strokeWidth="1.4"/>
      <polygon points="88,90 60,120 88,150" fill={accent} stroke="#1c1a16" strokeWidth="1.4"/>
      <polygon points="32,150 60,120 88,150 88,170 32,170" fill={wing} opacity="0.55" stroke="#1c1a16" strokeWidth="1.2"/>

      {/* neck */}
      <polygon points="52,90 68,90 64,40 56,40" fill={body} stroke="#1c1a16" strokeWidth="1.6"/>

      {/* head */}
      <circle cx="60" cy="32" r="14" fill={body} stroke="#1c1a16" strokeWidth="1.6"/>
      {/* eye */}
      <circle cx="64" cy="29" r="2" fill="#1c1a16"/>
      {/* beak */}
      <polygon points="74,32 96,30 74,38" fill={beak} stroke="#1c1a16" strokeWidth="1.4"/>
      {/* head crest */}
      <polygon points="50,18 56,4 60,18" fill={accent} stroke="#1c1a16" strokeWidth="1.2"/>
    </svg>
  );
}

/* Logo glyph — small simplified version for the nav */
function LogoGlyph({ size = 36 }) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} aria-label="Carnavarium logo">
      {/* speech bubble */}
      <rect x="2" y="6" width="56" height="40" rx="6" fill="#f7f1e1" stroke="#1c1a16" strokeWidth="2"/>
      <polygon points="14,46 18,56 24,46" fill="#f7f1e1" stroke="#1c1a16" strokeWidth="2"/>
      {/* three tiny birds as triangles */}
      <polygon points="10,24 18,16 18,32" fill="#e8826f" stroke="#1c1a16" strokeWidth="1.2"/>
      <polygon points="22,28 30,14 30,32" fill="#e6b558" stroke="#1c1a16" strokeWidth="1.2"/>
      <polygon points="34,24 42,16 42,32" fill="#92c5a8" stroke="#1c1a16" strokeWidth="1.2"/>
      {/* dots = eyes */}
      <circle cx="14" cy="22" r="1.2" fill="#1c1a16"/>
      <circle cx="26" cy="20" r="1.2" fill="#1c1a16"/>
      <circle cx="38" cy="22" r="1.2" fill="#1c1a16"/>
    </svg>
  );
}

window.Coyongo = Coyongo;
window.LogoGlyph = LogoGlyph;
