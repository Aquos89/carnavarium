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
    v.play().catch(() => setDone(true));
  }, []);

  const finish = () => setDone(true);

  return (
    <div className={"hero-logo" + (done ? " is-done" : "")}>
      {!done && (
        <video
          ref={videoRef}
          src="media/logo-animation.mp4"
          poster="images/logo-carnavarium.png"
          muted
          playsInline
          preload="auto"
          onEnded={finish}
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
