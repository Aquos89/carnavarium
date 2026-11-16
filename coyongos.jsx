/* global React */
const { useState, useRef, useEffect } = React;

/* ============================================================
   Carnavarium logo assets.
   media/logo-animation.webm    the animation with a transparent background (Chrome, Edge, Firefox)
   media/logo-animation.mp4     the original After Effects export (light background; Safari fallback,
                                blended with "multiply" so its background disappears on the page)
   images/logo-carnavarium.png  final lockup (also the fallback)
   images/logo-mark.png         the three coyongos alone, square
   ============================================================ */

/* Plays the animation once, then holds on the crisp PNG.
   Falls back to the PNG if the video can't play (or reduced motion). */
function LogoAnimation() {
  const hostRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setDone(true); return; }
    const host = hostRef.current;
    if (!host) return;
    /* Reutiliza el video que index.html empezó a descargar desde el primer instante (window.__cvLogoPre);
       si no existe, crea uno igual. Así el video no se descarga dos veces. */
    let v = window.__cvLogoPre;
    if (!v) {
      v = document.createElement("video");
      v.src = v.canPlayType('video/webm; codecs="vp9"') ? "media/logo-animation.webm" : "media/logo-animation.mp4";
      v.preload = "auto";
    }
    v.muted = true; v.playsInline = true; v.setAttribute("playsinline", ""); v.setAttribute("aria-label", "Carnavarium logo animation");
    if (/\.mp4($|\?)/.test(v.currentSrc || v.src)) v.style.mixBlendMode = "multiply";
    host.insertBefore(v, host.firstChild);
    let finished = false;
    const finish = () => { if (finished) return; finished = true; setDone(true); };
    const onPlaying = () => { clearTimeout(guard); const d = isFinite(v.duration) ? Math.max(.6, v.duration - v.currentTime) : 4; window.__cvLogoStart = d; window.dispatchEvent(new CustomEvent("cv:logo-start", { detail: d })); };
    v.addEventListener("playing", onPlaying, { once: true });
    v.addEventListener("ended", finish);
    v.addEventListener("error", finish);
    const guard = setTimeout(() => { if (v.paused || v.readyState < 2) finish(); }, 6000);
    const tryPlay = () => v.play().catch(() => {
      const kick = () => { v.play().catch(finish); window.removeEventListener("pointerdown", kick); window.removeEventListener("keydown", kick); };
      window.addEventListener("pointerdown", kick, { once: true });
      window.addEventListener("keydown", kick, { once: true });
    });
    if (v.readyState >= 2) tryPlay(); else { v.addEventListener("canplay", tryPlay, { once: true }); if (v.networkState === 0 || v.networkState === 3) v.load(); }
    return () => { clearTimeout(guard); v.removeEventListener("ended", finish); v.removeEventListener("error", finish); };
  }, []);

  useEffect(() => {
    if (!done) return;
    const v = window.__cvLogoPre || (hostRef.current && hostRef.current.querySelector("video"));
    if (v && v.parentNode) { try { v.pause(); } catch (e) {} v.parentNode.removeChild(v); }
    window.__cvLogoDone = true; window.dispatchEvent(new Event("cv:logo-done"));
  }, [done]);

  return (
    <div ref={hostRef} className={"hero-logo" + (done ? " is-done" : "")}>
      <img src="images/logo-carnavarium.png" alt="Carnavarium" />
    </div>
  );
}

function LogoLockup({ height = 38, className = "" }) {
  return (
    <img
      src="images/logo-carnavarium.png"
      alt="Carnavarium"
      className={"logo-lockup " + className}
      style={{ height, width: "auto" }}
    />
  );
}

function LogoMark({ size = 40, className = "" }) {
  return (
    <img
      src="images/logo-mark.png"
      alt=""
      aria-hidden="true"
      className={"logo-mark " + className}
      style={{ height: size, width: "auto" }}
    />
  );
}

window.LogoAnimation = LogoAnimation;
window.LogoLockup = LogoLockup;
window.LogoMark = LogoMark;
