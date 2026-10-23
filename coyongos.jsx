/* global React */
const { useState, useRef, useEffect } = React;

/* ============================================================
   Carnavarium logo assets.
   media/logo-animation.mp4     the After Effects animation
   images/logo-carnavarium.png  final lockup (also the fallback)
   images/logo-mark.png         the three coyongos alone, square
   ============================================================ */

/* Plays the animation once, then holds on the crisp PNG.
   Falls back to the PNG if the video can't play (or reduced motion). */
function LogoAnimation() {
  const videoRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setDone(true); return; }
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    const guard = setTimeout(() => { if (v.paused || v.readyState < 2) setDone(true); }, 6000);
    v.addEventListener("playing", () => clearTimeout(guard), { once: true });
    const tryPlay = () => v.play().catch(() => {
      const kick = () => { v.play().catch(() => setDone(true)); window.removeEventListener("pointerdown", kick); window.removeEventListener("keydown", kick); };
      window.addEventListener("pointerdown", kick, { once: true });
      window.addEventListener("keydown", kick, { once: true });
    });
    if (v.readyState >= 2) tryPlay(); else { v.addEventListener("loadeddata", tryPlay, { once: true }); v.load(); }
    return () => clearTimeout(guard);
  }, []);

  const finish = () => setDone(true);
  useEffect(() => { if (done) { window.__cvLogoDone = true; window.dispatchEvent(new Event("cv:logo-done")); } }, [done]);

  return (
    <div className={"hero-logo" + (done ? " is-done" : "")}>
      {!done && (
        <video
          ref={videoRef}
          src="media/logo-animation.mp4"
          muted
          autoPlay
          playsInline
          preload="auto"
          onEnded={finish}
          onPlaying={(e) => { const v = e.currentTarget; const d = isFinite(v.duration) ? Math.max(.6, v.duration - v.currentTime) : 4; window.__cvLogoStart = d; window.dispatchEvent(new CustomEvent("cv:logo-start", { detail: d })); }}
          onError={finish}
          aria-label="Carnavarium logo animation"
        ></video>
      )}
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
