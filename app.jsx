/* global React, ReactDOM */
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#f1e9d6", "#201f18", "#e85898", "#ffc840", "#70c0a0"],
  "serif": "Roboto Slab",
  "intensity": "balanced",
  "showGrain": true
}/*EDITMODE-END*/;

const PALETTES = {
  "Parchment":  ["#f1e9d6", "#201f18", "#e85898", "#ffc840", "#70c0a0"],
  "Logo White": ["#f8f8f8", "#201f18", "#e85898", "#f0e830", "#70c0a0"],
  "Bando":      ["#f6efe1", "#201f18", "#886890", "#ffc840", "#68b030"],
  "Cool Archive": ["#ececea", "#13161c", "#70c0a0", "#e85898", "#f0e830"]
};

const SERIFS = ["Roboto Slab", "Zilla Slab", "DM Serif Display", "Bevan"];

function App() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  // Apply palette CSS vars
  useEffect(() => {
    const [canvas, ink, coral, mustard, mint] = t.palette;
    const root = document.documentElement.style;
    root.setProperty('--canvas', canvas);
    // derive a couple of variants
    root.setProperty('--canvas-soft', mix(canvas, '#ffffff', 0.45));
    root.setProperty('--canvas-deep', mix(canvas, ink, 0.10));
    root.setProperty('--ink', ink);
    root.setProperty('--ink-soft', mix(ink, canvas, 0.35));
    root.setProperty('--ink-faint', mix(ink, canvas, 0.30));
    root.setProperty('--rule', mix(ink, canvas, 0.15));
    root.setProperty('--coral', coral);
    root.setProperty('--pink-text', mix(coral, ink, 0.35));
    root.setProperty('--mustard', mustard);
    root.setProperty('--mint', mint);
    root.setProperty('--serif', `"${t.serif}", "Rockwell", Georgia, serif`);

    // intensity → section spacing
    const gap = t.intensity === 'compact' ? '52px' : t.intensity === 'editorial' ? '160px' : '110px';
    root.setProperty('--section-gap', gap);

    document.body.style.backgroundImage = t.showGrain
      ? `radial-gradient(1100px 600px at 80% -10%, ${withAlpha(coral, 0.10)}, transparent 60%),
         radial-gradient(900px 500px at -10% 10%, ${withAlpha(mint, 0.10)}, transparent 60%)`
      : 'none';
  }, [t]);

  const paletteName = Object.entries(PALETTES).find(
    ([, v]) => v.join(',') === t.palette.join(',')
  )?.[0] || "Custom";

  return (
    <>
      <window.UtilityBar />
      <window.Nav />
      <window.Hero />
      <window.ProjectSection />
      <window.Pillars />
      <window.World />
      <window.Archive />
      <window.Timeline />
      <window.Research />
      <window.News />
      <window.Footer />

      <window.TweaksPanel>
        <window.TweakSection label="Palette" />
        <window.TweakSelect
          label="Theme"
          value={paletteName}
          options={["Parchment", "Logo White", "Bando", "Cool Archive"]}
          onChange={(name) => setTweak('palette', PALETTES[name])}
        />
        <window.TweakSection label="Typography" />
        <window.TweakRadio
          label="Display serif"
          value={t.serif}
          options={SERIFS}
          onChange={(v) => setTweak('serif', v)}
        />
        <window.TweakSection label="Layout" />
        <window.TweakRadio
          label="Density"
          value={t.intensity}
          options={["compact", "balanced", "editorial"]}
          onChange={(v) => setTweak('intensity', v)}
        />
        <window.TweakToggle
          label="Paper grain"
          value={t.showGrain}
          onChange={(v) => setTweak('showGrain', v)}
        />
      </window.TweaksPanel>
    </>
  );
}

/* small color helpers */
function hexToRgb(h) {
  h = h.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function rgbToHex([r, g, b]) {
  const t = (v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0');
  return '#' + t(r) + t(g) + t(b);
}
function mix(a, b, t) {
  const ra = hexToRgb(a), rb = hexToRgb(b);
  return rgbToHex(ra.map((c, i) => c * (1 - t) + rb[i] * t));
}
function withAlpha(hex, a) {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
