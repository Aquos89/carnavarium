/* global React */
const { useState } = React;

/* Trilingual helper — same mechanism as especial-calypso.html (html[data-lang] + [data-l]) */
const T = (es, en, de) => (<><span data-l="es">{es}</span><span data-l="en">{en}</span><span data-l="de">{de}</span></>);
const LANGS = ["en", "de", "es"];
const getLang = () => document.documentElement.getAttribute("data-lang") || "en";
const TITLES = {
  en: "Carnavarium — Where Carnival World Goes Digital Unfurled",
  es: "Carnavarium — Archivo, revista y laboratorio digital del carnaval",
  de: "Carnavarium — Archiv, Magazin und digitales Labor des Karnevals",
};
function applyLang(l) {
  document.documentElement.setAttribute("data-lang", l);
  document.documentElement.lang = l;
  document.title = TITLES[l];
  try { localStorage.setItem("carnavarium-lang", l); } catch (e) {}
  const u = new URL(location.href); u.searchParams.set("lang", l); history.replaceState(null, "", u);
}
applyLang(getLang());

function LangSwitch() {
  const [lang, setLang] = useState(getLang());
  return (
    <div className="lang-sw" role="group" aria-label="Idioma / Language / Sprache">
      {["es", "en", "de"].map(l => (
        <button key={l} type="button" aria-pressed={lang === l} onClick={() => { applyLang(l); setLang(l); }}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}

function UtilityBar() {
  const msg = T("¡Bienvenidos a Carnavarium! Where carnival world goes digital unfurled.", "Welcome to Carnavarium! Where carnival world goes digital unfurled.", "Willkommen bei Carnavarium! Where carnival world goes digital unfurled.");
  return (
    <div className="utility">
      <div className="shell row">
        <div className="marquee">
          <span>{[0, 1].map(k => <React.Fragment key={k}><span>◦ {msg}</span>{NEWS[0] && <a className="mq-news" href="#news"><b>{T("Agenda", "Agenda", "Agenda")}</b> {NEWS[0].short}</a>}</React.Fragment>)}</span>
        </div>
        <LangSwitch />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="shell row">
        <a className="wordmark" href="#">
          <window.LogoMark size={36} />
          <span>carnavarium</span>
        </a>
        <div className="nav-links">
          <a href="#project">{T("Proyecto", "Project", "Projekt")}</a>
          <a href="#timeline">{T("El Carnaval", "The Carnival", "Der Karneval")}</a>
          <a href="#world">{T("En el mundo", "In the World", "In der Welt")}</a>
          <a href="#archive">{T("Archivo", "Archive", "Archiv")}</a>
          <a href="#research">{T("Investigación", "Research", "Forschung")}</a>
          <a href="#news">{T("Noticias", "News", "News")}</a>
        </div>
        <a className="nav-cta" href="apoyar.html">
          {T("Apoya el proyecto", "Support the project", "Projekt unterstützen")} <span>→</span>
        </a>
      </div>
    </nav>
  );
}

function useTopBars() {
  React.useEffect(() => {
    const set = () => { const u = document.querySelector(".utility"), n = document.querySelector(".nav"); const h = (u ? u.offsetHeight : 0) + (n ? n.offsetHeight : 0); if (h) document.documentElement.style.setProperty("--top-bars", h + "px"); };
    set(); const t = setTimeout(set, 300); window.addEventListener("resize", set);
    return () => { clearTimeout(t); window.removeEventListener("resize", set); };
  }, []);
}

function HeroHighlights() {
  useTopBars();
  const [open, setOpen] = useState(!!window.__cvLogoDone);
  const [wide, setWide] = useState(false);
  const hhRef = React.useRef(null);
  const [hh, setHh] = useState(0);
  const wideRef = React.useRef(false);
  const busy = React.useRef(0);
  React.useEffect(() => {
    const measure = () => {
      const el = hhRef.current; if (!el) return;
      const top = el.parentNode, lg = top && top.querySelector(".hero-logo-wrap"), hl = top && top.querySelector(".hero-headline"), mn = top && top.querySelector(".hero-main");
      if (lg && hl && mn && window.innerWidth > 1180) {
        const r = document.createRange(); r.selectNodeContents(hl);
        const G = Math.max(lg.offsetWidth, r.getBoundingClientRect().width), C = mn.clientWidth;
        const tl = top.getBoundingClientRect().left, er = el.getBoundingClientRect().right;
        if (!wideRef.current) { el.dataset.wc = el.offsetWidth; el.dataset.hl = el.getBoundingClientRect().left; }
        const wc = +el.dataset.wc || el.offsetWidth;
        const ww = 2 * wc - 72 + Math.min(580, window.innerWidth * .4);
        const sx = Math.max(0, Math.min(C - G, ((+el.dataset.hl || (tl + C)) - tl - G) / 2));
        const sxw = Math.max(0, Math.min(sx, er - ww - 24 - G - tl));
        top.style.setProperty("--sx", Math.round(sx) + "px");
        top.style.setProperty("--sxw", Math.round(sxw) + "px");
        el.style.setProperty("--hh-avail", Math.round(er - tl - G - 24) + "px");
      }
      if (wideRef.current || Date.now() < busy.current) return;
      const main = el.parentNode && el.parentNode.querySelector(".hero-main");
      if (!main) return;
      const h = Math.round(main.getBoundingClientRect().height);
      if (h > 120) setHh(h);
    };
    const t1 = setTimeout(measure, 60), t2 = setTimeout(measure, 900);
    const onDone = () => setTimeout(measure, 60);
    window.addEventListener("cv:logo-done", onDone);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    let rt; const onR = () => { clearTimeout(rt); rt = setTimeout(measure, 150); };
    window.addEventListener("resize", onR);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(rt); window.removeEventListener("resize", onR); window.removeEventListener("cv:logo-done", onDone); };
  }, []);
  const toggle = () => { busy.current = Date.now() + 900; wideRef.current = !wide; setWide(!wide); };
  const leaveT = React.useRef(0);
  const setW = (v) => { clearTimeout(leaveT.current); const go = () => { if (wideRef.current === v) return; busy.current = Date.now() + 900; wideRef.current = v; setWide(v); }; if (v) go(); else leaveT.current = setTimeout(go, 180); };
  const hov = true;
  const canHov = () => window.innerWidth > 1180;
  const [dur, setDur] = useState(window.__cvLogoStart || 0);
  React.useEffect(() => {
    if (open) return;
    const st = () => {};
    const on = () => setTimeout(() => setOpen(true), 200);
    window.addEventListener("cv:logo-start", st);
    window.addEventListener("cv:logo-done", on);
    const fb = setTimeout(() => setOpen(true), 9000);
    return () => { window.removeEventListener("cv:logo-start", st); window.removeEventListener("cv:logo-done", on); clearTimeout(fb); };
  }, [open]);
  const n = NEWS[0];
  const items = [
    { ac: "var(--amber)", pos: "64% 30%", href: FEATURES.samba.href, img: FEATURES.samba.img, k: T("Dataset", "Dataset", "Datensatz"), t: FEATURES.samba.title, d: T("Letras del Carnaval de Río con metadatos abiertos.", "Rio Carnival lyrics with open metadata.", "Liedtexte des Karnevals von Rio mit offenen Metadaten.") },
    { ac: "var(--pink)", pos: "24% 45%", href: FEATURES.calypso.href, img: FEATURES.calypso.img, k: T("Especial", "Special", "Spezial"), t: T("La ruta del calipso", "The Calypso Route", "Die Calypso-Route"), d: T("Ocho capítulos con música, mapas y archivo.", "Eight chapters with music, maps and archive.", "Acht Kapitel mit Musik, Karten und Archiv.") },
    n && { ac: "var(--teal)", href: n.href, ext: true, date: n, logo: n.logo, k: n.tag, t: n.title, d: n.place },
  ].filter(Boolean);
  return (
    <aside ref={hhRef} style={{ ...(hh ? { "--hh-h": hh + "px" } : {}), ...(dur ? { "--hh-in": dur + "s" } : {}) }} className={"hh" + (open ? " open" : "") + (wide ? " wide" : "")} aria-label="Destacados / Highlights" onMouseEnter={() => canHov() && setW(true)} onMouseLeave={() => canHov() && setW(false)}>
      <div className="hh-win">
        <div className="hh-bar"><span className="hh-dots"><i></i><i></i><i></i></span><span className="hh-title">{T("Destacados", "Highlights", "Highlights")}</span><span className="hh-n">0{items.length}</span><button type="button" className="hh-toggle" onClick={toggle} aria-expanded={wide}><b className="hh-spark" aria-hidden="true">✦</b><span className="hh-word" aria-label="Highlights">{[["es", "Destacados"], ["en", "Highlights"], ["de", "Highlights"]].map(([l, w]) => <span key={l} data-l={l} className="hh-wl">{w.split("").map((c, i) => <span key={i} className="hh-ch" style={{ "--i": i }} aria-hidden="true">{c}</span>)}</span>)}</span><i aria-hidden="true">{wide ? "→" : "←"}</i></button></div>
        <div className="hh-list">
          {items.map((it, i) => (
            <a key={i} className={"hh-item" + (i === 0 ? " hh-feat" : "")} href={it.href} style={{ "--d": (0.55 + i * 0.14) + "s", "--ac": it.ac }} {...(it.ext ? { target: "_blank", rel: "noopener" } : {})}>
              {it.logo ? <span className="hh-img hh-logo"><img src={it.logo} alt="NFDI4Culture" /></span> : it.img ? <span className="hh-img"><img src={it.img} alt="" style={it.pos ? { objectPosition: it.pos } : null} /></span> : <span className="hh-img hh-date"><b>{it.date.day}</b><span>{it.date.month}</span></span>}
              <span className="hh-txt"><span className="hh-k">{it.k}</span><span className="hh-t">{it.t}</span><span className="hh-d">{it.d}</span></span>
              <span className="hh-go" aria-hidden="true">{it.ext ? "↗" : "→"}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="shell">
        <div className="hero-top">
        <div className="hero-main">


        <div className="hero-logo-wrap">
        <window.LogoAnimation />
        </div>

        <h1 className="hero-headline">
          Where carnival<br/>
          world goes <em>digital</em><br/>
          unfurled.
        </h1>
        </div>
        <HeroHighlights />
        </div>

        <div className="hero-meta">
          <p className="lede">
            {T(
              "Un espacio digital para archivar, investigar y vivir el carnaval: un laboratorio abierto que entreteje fiesta, máscara, sonido y exceso en una forma crítica de conocimiento.",
              "A digital space to archive, research and experience carnival — an open laboratory weaving festival, mask, sound and excess into a critical form of knowledge.",
              "Ein digitaler Raum, um Karneval zu archivieren, zu erforschen und zu erleben – ein offenes Labor, das Fest, Maske, Klang und Exzess zu einer kritischen Form des Wissens verwebt."
            )}
          </p>
          <div className="stats">
            <div className="stat"><span className="num">16</span><span className="lab">{T("Carnavales en el atlas", "Carnivals in the Atlas", "Karnevale im Atlas")}</span></div>
            <div className="stat"><span className="num">6</span><span className="lab">{T("Regiones culturales", "Cultural Regions", "Kulturregionen")}</span></div>
            <div className="stat"><span className="num">3</span><span className="lab">{T("Publicaciones", "Publications", "Publikationen")}</span></div>
            <div className="stat"><span className="num">1</span><span className="lab">{T("Dataset abierto", "Open Dataset", "Offener Datensatz")}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectSection() {
  return (
    <section id="project" className="section">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 01</div>
          <h2 className="title">{T("El proyecto y yo", "The Project & Me", "Das Projekt und ich")}</h2>
          <a href="#" className="more">{T("Leer completo →", "Read full →", "Weiterlesen →")}</a>
        </div>
        <div className="project">
          <div className="text">
            <p>
              {T(
                <>Carnavarium funciona a la vez como <em>archivo, revista y laboratorio digital</em>: reúne la historia y la teoría del carnaval, sus manifestaciones en el mundo y los congresos, iniciativas estatales y proyectos privados que se ocupan de esta práctica.</>,
                <>Carnavarium acts at once as <em>archive, magazine and digital laboratory</em>, gathering the history and theory of carnival, its global manifestations, and the conferences, state initiatives and private projects that engage with this practice.</>,
                <>Carnavarium ist zugleich <em>Archiv, Magazin und digitales Labor</em>: Es versammelt Geschichte und Theorie des Karnevals, seine weltweiten Erscheinungsformen sowie Tagungen, staatliche Initiativen und private Projekte, die sich mit dieser Praxis befassen.</>
              )}
            </p>
            <p>
              {T(
                "Abre espacio al trabajo creativo —ensayo, periodismo cultural, arte y literatura— junto a la investigación desde la etnomusicología, la antropología, la ciencia política, los estudios de género y el análisis cultural comparado. Se está construyendo un corpus y, con él, nuevas herramientas de humanidades digitales.",
                "It opens space for creative work — essays, cultural journalism, art and literature — alongside research from ethnomusicology, anthropology, political science, gender studies and comparative cultural analysis. A corpus is being built, and with it, new digital humanities tools.",
                "Es öffnet Raum für kreative Arbeit – Essays, Kulturjournalismus, Kunst und Literatur – neben Forschung aus Musikethnologie, Anthropologie, Politikwissenschaft, Gender Studies und vergleichender Kulturanalyse. Ein Korpus entsteht und mit ihm neue Werkzeuge der Digital Humanities."
              )}
            </p>
          </div>
          <div className="card">
            <div className="portrait">
              <img src="images/oscar-aquite.png" alt="Oscar Aquite Peña" />
            </div>
            <div className="name"><a href="autor-oscar-aquite.html">Oscar Aquite</a></div>
            <div className="role">{T("Fundador · Humanista digital", "Founder · Digital Humanist", "Gründer · Digital Humanist")}</div>
            <p className="blurb">
              {T(
                "Investigador de las culturas del carnaval y de sus expresiones musicales y sociales. Master of Arts en Humanidades Digitales — Universität Regensburg (Alemania). Master of Arts en Etnomusicología — Universität Würzburg (Alemania). Maestría en Estudios Interdisciplinarios sobre Desarrollo — Universidad de los Andes (Bogotá, Colombia).",
                "Researcher of carnival cultures and their musical and social expressions. Master of Arts, Digital Humanities — Universität Regensburg (Germany). Master of Arts, Ethnomusicology — Universität Würzburg (Germany). Master of Arts, Interdisciplinary Development Studies — Universidad de los Andes (Bogotá, Colombia).",
                "Forscher zu Karnevalskulturen und ihren musikalischen und gesellschaftlichen Ausdrucksformen. Master of Arts, Digital Humanities — Universität Regensburg. Master of Arts, Musikethnologie — Universität Würzburg. Master of Arts, Interdisziplinäre Entwicklungsstudien — Universidad de los Andes (Bogotá, Kolumbien)."
              )}
            </p>
            <a className="pf-more" href="autor-oscar-aquite.html">{T("Ver perfil →", "View profile →", "Profil ansehen →")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const data = [
    {
      n: "02", href: "#timeline", title: T("El Carnaval", "The Carnival", "Der Karneval"),
      blurb: T("Fundamentos culturales y teóricos: del mundo al revés de Bajtín a la práctica festiva encarnada.", "Cultural and theoretical foundations: from Bakhtin's inverted world to embodied festival practice.", "Kulturelle und theoretische Grundlagen: von Bachtins verkehrter Welt bis zur verkörperten Festpraxis."),
      bullets: [T("Cronología 1268 — hoy", "Timeline 1268 — Now", "Chronik 1268 — heute"), T("Contexto histórico", "Historical context", "Historischer Kontext"), T("Teoría del carnaval", "Carnival theory", "Karnevalstheorie")],
    },
    {
      n: "03", href: "#world", title: T("El carnaval en el mundo", "Carnival in the World", "Karneval in der Welt"),
      blurb: T("Una perspectiva global y comparada de las tradiciones del carnaval: calendario anual y estudios regionales.", "A global, comparative perspective on carnival traditions — annual calendar, regional studies.", "Eine globale, vergleichende Perspektive auf Karnevalstraditionen – Jahreskalender, Regionalstudien."),
      bullets: [T("Atlas de 16 carnavales", "Atlas of 16 carnivals", "Atlas mit 16 Karnevalen"), T("6 regiones culturales", "6 cultural regions", "6 Kulturregionen"), T("Calendario de próximas ediciones", "Calendar of upcoming editions", "Kalender der nächsten Ausgaben")],
    },
    {
      n: "04", href: "#archive", title: T("Archivo", "Archive", "Archiv"),
      blurb: T("Fuentes primarias digitalizadas —textos, grabaciones, fotografías y videos— con metadatos abiertos. En construcción.", "Digitised primary sources — texts, recordings, photographs and videos — with open metadata. In progress.", "Digitalisierte Primärquellen – Texte, Aufnahmen, Fotografien und Videos – mit offenen Metadaten. Im Aufbau."),
      bullets: [T("Textos y documentos", "Texts & documents", "Texte & Dokumente"), T("Sonido e imagen", "Sound & image", "Ton & Bild"), T("Búsqueda por tipo", "Search by type", "Suche nach Typ")],
    },
    {
      n: "05", href: "#research", title: T("Investigación y creación", "Research & Creation", "Forschung & Kreation"),
      blurb: T("Donde la investigación humanística se encuentra con la experimentación digital. Ensayos, datasets, visualizaciones.", "Where humanistic research meets digital experimentation. Essays, datasets, visualizations.", "Wo geisteswissenschaftliche Forschung auf digitales Experimentieren trifft. Essays, Datensätze, Visualisierungen."),
      bullets: [T("Artículos y especiales", "Articles & specials", "Artikel & Spezials"), T("Datasets abiertos", "Open datasets", "Offene Datensätze"), T("Líneas de investigación", "Research lines", "Forschungslinien")],
    },
  ];
  return (
    <section id="carnival" className="section">
      <div className="shell">
        <div className="entries-head">
          <span className="k">§ 01 · {T("Cómo explorar Carnavarium", "How to explore Carnavarium", "Carnavarium erkunden")}</span>
          <h2>{T("Cuatro entradas al proyecto", "Four ways into the project", "Vier Zugänge zum Projekt")}</h2>
        </div>
        <div className="pillars">
          {data.map((p, i) => (
            <a className="pillar" key={i} href={p.href} style={{ color: "inherit", textDecoration: "none" }}>
              <div className="badge">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <ul>{p.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              <span className="arrow">→</span>
            </a>
          ))}
        </div>
        <a className="entries-news" href="#news">
          <span className="en-badge">06</span>
          <span className="en-main">
            <span className="en-k">{T("Además", "Also", "Außerdem")}</span>
            <span className="en-t">{T("Noticias y convocatorias", "News & Calls", "News & Calls")}</span>
            <span className="en-d">{T("La actualidad de los carnavales y de su investigación: novedades, congresos y convocatorias.", "The latest on carnivals and their research: news, conferences and calls.", "Aktuelles aus den Karnevalen und ihrer Erforschung: Neuigkeiten, Tagungen und Calls.")}</span>
          </span>
          <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}

const WORLD_BANNERS = { barranquilla: 1, "port-of-spain": 1, colonia: 1, venecia: 1, "nueva-orleans": 1, rio: 1, oruro: 1, cadiz: 1, pasto: 1, recife: 1, basilea: 1, "buenos-aires": 1, montevideo: 1, salvador: 1, binche: 1, gualeguaychu: 1 };

function WorldCarousel({ children }) {
  const ref = React.useRef(null);
  const [st, setSt] = useState({ page: 0, pages: 1 });
  const update = () => {
    const el = ref.current; if (!el) return;
    const pages = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
    const page = Math.round(el.scrollLeft / el.clientWidth);
    setSt({ page, pages });
  };
  React.useEffect(() => { update(); window.addEventListener("resize", update); return () => window.removeEventListener("resize", update); }, []);
  const hold = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.scrollSnapType = "none";
    let pos = el.scrollLeft, raf, last = performance.now(), wait = 0, ours = false;
    const SPEED = 28; // px per second
    const tick = now => {
      const dt = Math.min(64, now - last); last = now;
      if (!hold.current && !document.hidden) {
        const max = el.scrollWidth - el.clientWidth;
        if (wait > 0) wait -= dt;
        else if (pos >= max - 1) { wait = 1800; pos = 0; ours = true; el.scrollTo({ left: 0, behavior: "smooth" }); }
        else { pos += SPEED * dt / 1000; ours = true; el.scrollLeft = pos; }
      }
      raf = requestAnimationFrame(tick);
    };
    const onScroll = () => { if (!ours) pos = el.scrollLeft; ours = false; };
    el.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);
    // occasional reveal of a hidden banner
    let peeked = null;
    const peek = () => {
      if (peeked) { peeked.classList.remove("peek"); peeked = null; }
      if (hold.current) return;
      const r = el.getBoundingClientRect();
      const vis = [...el.querySelectorAll(".world-cell.has-img")].filter(c => { const b = c.getBoundingClientRect(); return b.left >= r.left - 2 && b.right <= r.right + 2; });
      if (!vis.length) return;
      peeked = vis[Math.floor(Math.random() * vis.length)];
      peeked.classList.add("peek");
      setTimeout(() => { if (peeked) { peeked.classList.remove("peek"); peeked = null; } }, 2600);
    };
    const pi = setInterval(peek, 4200);
    return () => { cancelAnimationFrame(raf); clearInterval(pi); el.removeEventListener("scroll", onScroll); };
  }, []);
  const pause = v => () => { hold.current = v; if (v) ref.current && ref.current.querySelectorAll(".peek").forEach(c => c.classList.remove("peek")); };
  const go = d => { const el = ref.current; hold.current = true; setTimeout(() => { hold.current = false; }, 5000); el.scrollTo({ left: el.scrollLeft + d * el.clientWidth, behavior: "smooth" }); };
  return (
    <div className="world-carousel" onMouseEnter={pause(true)} onMouseLeave={pause(false)} onFocus={pause(true)} onBlur={pause(false)} onTouchStart={pause(true)} onTouchEnd={() => setTimeout(pause(false), 4000)}>
      <div className="world-grid" ref={ref} onScroll={update}>{children}</div>
      <div className="wc-nav">
        <button type="button" onClick={() => go(-1)} disabled={st.page <= 0} aria-label="←">←</button>
        <span className="wc-dots">{Array.from({ length: st.pages }, (_, i) => <button type="button" key={i} className={i === st.page ? "on" : ""} aria-label={"" + (i + 1)} onClick={() => { const el = ref.current; el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" }); }}></button>)}</span>
        <button type="button" onClick={() => go(1)} disabled={st.page >= st.pages - 1} aria-label="→">→</button>
      </div>
    </div>
  );
}

function World() {
  const cells = [
    { slug: "barranquilla", place: "Barranquilla", country: T("Colombia", "Colombia", "Kolumbien"), date: T("6 — 9 feb 2027", "Feb 6 — 9, 2027", "6.–9. Feb. 2027"), color: "var(--coral)" },
    { slug: "venecia", place: T("Venecia", "Venice", "Venedig"), country: T("Italia", "Italy", "Italien"), date: T("23 ene — 9 feb 2027", "Jan 23 — Feb 9, 2027", "23. Jan. – 9. Feb. 2027"), color: "var(--teal)" },
    { slug: "salvador", alias: T("Carnaval de Bahía", "Carnaval da Bahia", "Karneval von Bahia"), place: "Salvador", country: T("Brasil", "Brazil", "Brasilien"), date: T("4 — 10 feb 2027", "Feb 4 — 10, 2027", "4.–10. Feb. 2027"), color: "var(--amber)" },
    { slug: "basilea", alias: T("Basler Fasnacht", "Basler Fasnacht", "Basler Fasnacht"), place: T("Basilea", "Basel", "Basel"), country: T("Suiza", "Switzerland", "Schweiz"), date: T("15 — 17 feb 2027", "Feb 15 — 17, 2027", "15.–17. Feb. 2027"), color: "var(--green)" },
    { slug: "colonia", alias: T("Kölner Karneval", "Kölner Karneval", "Kölner Karneval"), place: T("Colonia", "Cologne", "Köln"), country: T("Alemania", "Germany", "Deutschland"), date: T("4 — 9 feb 2027", "Feb 4 — 9, 2027", "4.–9. Feb. 2027"), color: "var(--green)" },
    { slug: "port-of-spain", alias: T("Carnaval de Trinidad y Tobago", "Trinidad and Tobago Carnival", "Karneval von Trinidad und Tobago"), place: T("Puerto España", "Port of Spain", "Port of Spain"), country: T("Trinidad y Tobago", "Trinidad & Tobago", "Trinidad und Tobago"), date: T("8 — 9 feb 2027", "Feb 8 — 9, 2027", "8.–9. Feb. 2027"), color: "var(--coral)" },
    { slug: "oruro", place: "Oruro", country: T("Bolivia", "Bolivia", "Bolivien"), date: T("6 — 9 feb 2027", "Feb 6 — 9, 2027", "6.–9. Feb. 2027"), color: "var(--purple)" },
    { slug: "nueva-orleans", alias: T("Mardi Gras", "Mardi Gras", "Mardi Gras"), place: T("Nueva Orleans", "New Orleans", "New Orleans"), country: T("EE. UU.", "USA", "USA"), date: T("9 feb 2027 (Mardi Gras)", "Feb 9, 2027 (Mardi Gras)", "9. Feb. 2027 (Mardi Gras)"), color: "var(--coral)" },
    { slug: "rio", place: T("Río de Janeiro", "Rio de Janeiro", "Rio de Janeiro"), country: T("Brasil", "Brazil", "Brasilien"), date: T("5 — 10 feb 2027", "Feb 5 — 10, 2027", "5.–10. Feb. 2027"), color: "var(--amber)" },
    { slug: "pasto", alias: T("Carnaval de Negros y Blancos", "Carnival of Blacks and Whites", "Karneval der Schwarzen und Weißen"), place: T("Pasto", "Pasto", "Pasto"), country: T("Colombia", "Colombia", "Kolumbien"), date: T("2 — 7 ene 2027", "Jan 2 — 7, 2027", "2.–7. Jan. 2027"), color: "var(--purple)" },
    { slug: "cadiz", place: T("Cádiz", "Cádiz", "Cádiz"), country: T("España", "Spain", "Spanien"), date: T("4 — 14 feb 2027", "Feb 4 — 14, 2027", "4.–14. Feb. 2027"), color: "var(--teal)" },
    { slug: "binche", place: T("Binche", "Binche", "Binche"), country: T("Bélgica", "Belgium", "Belgien"), date: T("7 — 9 feb 2027", "Feb 7 — 9, 2027", "7.–9. Feb. 2027"), color: "var(--green)" },
    { slug: "montevideo", place: T("Montevideo", "Montevideo", "Montevideo"), country: T("Uruguay", "Uruguay", "Uruguay"), date: T("21 ene — 6 feb 2027", "Jan 21 — Feb 6, 2027", "21. Jan. – 6. Feb. 2027"), color: "var(--blue)" },
    { slug: "gualeguaychu", alias: T("Carnaval del País", "Carnaval del País", "Carnaval del País"), place: T("Gualeguaychú", "Gualeguaychú", "Gualeguaychú"), country: T("Argentina", "Argentina", "Argentinien"), date: T("Ene — feb 2027", "Jan — Feb 2027", "Jan. – Feb. 2027"), color: "var(--blue)" },
    { slug: "buenos-aires", alias: T("Carnaval porteño", "Carnaval porteño", "Carnaval porteño"), place: T("Buenos Aires", "Buenos Aires", "Buenos Aires"), country: T("Argentina", "Argentina", "Argentinien"), date: T("Feb 2027", "Feb 2027", "Feb. 2027"), color: "var(--blue)" },
    { slug: "recife", place: T("Recife", "Recife", "Recife"), country: T("Brasil", "Brazil", "Brasilien"), date: T("6 — 10 feb 2027", "Feb 6 — 10, 2027", "6.–10. Feb. 2027"), color: "var(--amber)" },
  ];
  return (
    <section id="world" className="section" style={{ background: "var(--canvas-soft)" }}>
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 03</div>
          <h2 className="title">{T("El carnaval en el mundo", "Carnival in the World", "Karneval in der Welt")}</h2>
        </div>
        <div className="world">
          <div className="world-intro">
            <p>
              {T(
                "El carnaval es un fenómeno cultural global. Cada tradición habla su propio dialecto de máscara, ritmo y exceso, pero todas comparten una gramática común de inversión y renovación.",
                "Carnival is a global cultural phenomenon. Each tradition speaks its own dialect of mask, rhythm and excess — yet shares a common grammar of inversion and renewal.",
                "Karneval ist ein globales kulturelles Phänomen. Jede Tradition spricht ihren eigenen Dialekt aus Maske, Rhythmus und Exzess – und teilt doch eine gemeinsame Grammatik der Umkehrung und Erneuerung."
              )}
            </p>
            <p>
              {T(
                "Recorra el calendario; haga clic en una ciudad para entrar en su dossier de prácticas, sonidos, imágenes y bibliografía.",
                "Browse the calendar; click any city to enter its dossier of practices, sounds, images and bibliography.",
                "Stöbern Sie im Kalender; klicken Sie auf eine Stadt, um ihr Dossier mit Praktiken, Klängen, Bildern und Bibliografie zu öffnen."
              )}
            </p>
          </div>
          <a className="atlas-teaser" href="atlas.html">
            <span className="at-img"><img src="images/atlas-preview.svg" alt="" /><span className="at-pill">{T("Explorar el Atlas", "Explore the Atlas", "Atlas erkunden")}<i aria-hidden="true">→</i></span></span>
            <span className="at-txt"><span className="at-k">{T("16 carnavales · 6 regiones culturales", "16 carnivals · 6 cultural regions", "16 Karnevale · 6 Kulturregionen")}</span></span>
          </a>
          <WorldCarousel>
            {cells.map((c, i) => (
              <a className={"world-cell" + (WORLD_BANNERS[c.slug] ? " has-img" : "")} key={i} href={"carnaval.html?c=" + c.slug} style={{ "--c": c.color, "--img": WORLD_BANNERS[c.slug] ? "url(images/banners/" + c.slug + ".png)" : "none" }}>
                <span className="wc-bg" aria-hidden="true"></span>
                <span className="swatch" style={{ background: c.color }}></span>
                <div>
                  <div className="place">{c.place}</div>
                  {c.alias && <div className="wc-alias">{c.alias}</div>}
                  <div className="country">{c.country}</div>
                </div>
                <div className="date"><span>{c.date}</span><span className="wc-num">{String(i + 1).padStart(2, "0")}<span className="wc-go">→</span></span></div>
              </a>
            ))}
          </WorldCarousel>
        </div>
        <ul className="world-legend">
          {[
            ["var(--coral)", T("Gran Caribe", "Greater Caribbean", "Großkaribik")],
            ["var(--amber)", T("Brasil", "Brazil", "Brasilien")],
            ["var(--purple)", T("Andes", "Andes", "Anden")],
            ["var(--blue)", T("Río de la Plata", "Río de la Plata", "Río de la Plata")],
            ["var(--teal)", T("Europa mediterránea", "Mediterranean Europe", "Mittelmeer-Europa")],
            ["var(--green)", T("Europa central", "Central Europe", "Mitteleuropa")],
          ].map(([col, lab], i) => <li key={i}><span className="swatch" style={{ background: col }}></span>{lab}</li>)}
        </ul>
      </div>
    </section>
  );
}

const ARCHIVE_TYPES = {
  All: T("Todo", "All", "Alle"),
  Texts: T("Textos", "Texts", "Texte"),
  Photographs: T("Fotografías", "Photographs", "Fotografien"),
  Videos: T("Videos", "Videos", "Videos"),
  Music: T("Música", "Music", "Musik"),
};

function Archive() {
  const [filter, setFilter] = useState("All");
  const filters = Object.keys(ARCHIVE_TYPES);
  const items = [
    { id: "AR-0142", title: T("Letanía de los Coyongos — grabación de campo, 1987", "Letanía de los Coyongos — field recording, 1987", "Letanía de los Coyongos — Feldaufnahme, 1987"), year: "1987", origin: "Barranquilla, CO", type: "Music", typeKey: "audio" },
    { id: "AR-0211", title: T("Sobre la inversión del mundo — ensayo de Bajtín (anotado)", "On the Inversion of the World — essay by Bakhtin (annot.)", "Über die Umkehrung der Welt — Essay von Bachtin (annotiert)"), year: "1965", origin: "Moscow, RU", type: "Texts", typeKey: "text" },
    { id: "AR-0339", title: T("La Lectura del Bando — Plaza de la Paz (transferencia de 8 mm)", "La Lectura del Bando — Plaza de la Paz (8mm transfer)", "La Lectura del Bando — Plaza de la Paz (8-mm-Transfer)"), year: "1972", origin: "Barranquilla, CO", type: "Videos", typeKey: "video" },
    { id: "AR-0407", title: T("Diablos de Yare — máscaras y documentación procesional", "Diablos de Yare — masks and processional documentation", "Diablos de Yare — Masken und Prozessionsdokumentation"), year: "2001", origin: "San Francisco de Yare, VE", type: "Photographs", typeKey: "photo" },
    { id: "AR-0512", title: T("Notas sobre la Narrenkappe y la inversión temporal del orden", "Notes on the Narrenkappe and the temporary inversion of order", "Notizen zur Narrenkappe und zur zeitweiligen Umkehrung der Ordnung"), year: "1998", origin: "Köln, DE", type: "Texts", typeKey: "text" },
    { id: "AR-0628", title: T("Escuela de samba — Mangueira, rollo de archivo", "Sambaschool footage — Mangueira, archival reel", "Sambaschule — Mangueira, Archivfilm"), year: "1984", origin: "Rio de Janeiro, BR", type: "Videos", typeKey: "video" },
    { id: "AR-0701", title: T("Conjunto de steel pan — ensayo en el Renegades Panyard", "Steel pan ensemble — Renegades Panyard rehearsal", "Steelpan-Ensemble — Probe im Renegades Panyard"), year: "2019", origin: "Port of Spain, TT", type: "Music", typeKey: "audio" },
    { id: "AR-0823", title: T("Diablada — notación coreográfica, Oruro", "Diablada — choreographic notation, Oruro", "Diablada — choreografische Notation, Oruro"), year: "2014", origin: "Oruro, BO", type: "Texts", typeKey: "text" },
  ];
  const visible = filter === "All" ? items : items.filter(i => i.type === filter);
  return (
    <section id="archive" className="section">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 04</div>
          <h2 className="title">{T("Archivo", "Archive", "Archiv")}</h2>
          <a href="archive.html" className="more">{T("Ver todo el archivo →", "View full archive →", "Ganzes Archiv →")}</a>
        </div>
        <p className="sec-intro">{T(
          <><b>Lo que hay.</b> Las fuentes primarias: fotografías, videos, grabaciones, carteles y corpus de textos, descritos con metadatos abiertos para buscar, filtrar y consultar.</>,
          <><b>What there is.</b> The primary sources: photographs, videos, recordings, posters and text corpora, described with open metadata to search, filter and consult.</>,
          <><b>Was es gibt.</b> Die Primärquellen: Fotografien, Videos, Aufnahmen, Plakate und Textkorpora, beschrieben mit offenen Metadaten zum Suchen, Filtern und Nachschlagen.</>
        )}</p>
        <div className="archive">
          <div className="archive-filters">
            {filters.map(f => (
              <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>{ARCHIVE_TYPES[f]}</button>
            ))}
          </div>
          <div className="archive-list">
            {visible.map(it => (
              <div className="archive-row" key={it.id}>
                <span className="id">{it.id}</span>
                <span className="title">{it.title}</span>
                <span className="meta">{it.origin}</span>
                <span className="meta">{it.year}</span>
                <span className={`type-pill type-${it.typeKey}`}>{ARCHIVE_TYPES[it.type]}</span>
                <span className="arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const events = [
    { year: "1296", event: T("Primera referencia escrita al carnevale en un decreto del dux de Venecia.", "Earliest written reference to carnevale in Venetian doge's decree.", "Früheste schriftliche Erwähnung des carnevale in einem Dekret des venezianischen Dogen."), place: T("Venecia, IT", "Venice, IT", "Venedig, IT") },
    { year: "1500s", event: T("El carnaval llega a las colonias españolas en América y se funde con tradiciones indígenas y africanas.", "Carnival arrives in the Spanish American colonies, fused with Indigenous and African traditions.", "Der Karneval erreicht die spanischen Kolonien in Amerika und verschmilzt mit indigenen und afrikanischen Traditionen."), place: T("Costa Caribe", "Caribbean Coast", "Karibikküste") },
    { year: "1857", event: T("La Mistick Krewe of Comus desfila por primera vez en el Mardi Gras.", "The Mistick Krewe of Comus parades for the first time at Mardi Gras.", "Die Mistick Krewe of Comus zieht erstmals beim Mardi Gras."), place: T("Nueva Orleans, US", "New Orleans, US", "New Orleans, US") },
    { year: "1881", event: T("Revueltas de Canboulay: Puerto España resiste la prohibición de las procesiones con antorchas.", "Canboulay riots: Port of Spain resists the ban on torch processions.", "Canboulay-Unruhen: Port of Spain widersetzt sich dem Verbot der Fackelumzüge."), place: "Port of Spain, TT" },
    { year: "1903", event: T("Primera Batalla de Flores en Barranquilla, al terminar la Guerra de los Mil Días.", "First Batalla de Flores in Barranquilla, at the end of the Thousand Days' War.", "Erste Batalla de Flores in Barranquilla zum Ende des Tausend-Tage-Krieges."), place: "Barranquilla, CO" },
    { year: "1965", event: T("Se publica La cultura popular en la Edad Media y en el Renacimiento de Bajtín: lo carnavalesco entra en la teoría.", "Bakhtin's Rabelais and His World published — the carnivalesque enters theory.", "Bachtins Rabelais und seine Welt erscheint – das Karnevaleske hält Einzug in die Theorie."), place: T("Moscú, RU", "Moscow, RU", "Moskau, RU") },
    { year: "2001", event: T("La UNESCO proclama el Carnaval de Oruro Obra Maestra del Patrimonio Oral e Inmaterial.", "UNESCO proclaims the Oruro Carnival a Masterpiece of the Oral and Intangible Heritage.", "Die UNESCO erklärt den Karneval von Oruro zum Meisterwerk des mündlichen und immateriellen Erbes."), place: "Oruro, BO" },
    { year: "2024", event: T("Carnavarium empieza a construir su corpus de metadatos abiertos.", "Carnavarium begins building its open metadata corpus.", "Carnavarium beginnt mit dem Aufbau seines offenen Metadatenkorpus."), place: "Regensburg / Barranquilla" },
  ];
  return (
    <section id="timeline" className="section">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 02</div>
          <h2 className="title">{T("El Carnaval", "The Carnival", "Der Karneval")}</h2>
        </div>
        <div className="sub-head">
          <h3>{T("¿Por qué el carnaval cambia de fecha?", "Why does carnival change date?", "Warum wandert der Karneval im Kalender?")}</h3>
        </div>
        <window.CarnivalCalendar />
        <div className="sub-head">
          <h3>{T("Una cronología del mundo al revés", "A Timeline of the Inverted World", "Eine Chronik der verkehrten Welt")}</h3>
          <a href="chronology.html" className="more">{T("Cronología completa →", "Full chronology →", "Ganze Chronik →")}</a>
        </div>
        <div className="timeline-wrap">
          <div className="timeline">
            {events.map((e, i) => (
              <div className="tl-tick" key={i}>
                <div className="year">{e.year}</div>
                <div className="event">{e.event}</div>
                <div className="place">{e.place}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="sub-head">
          <h3>{T("Conceptos para pensar el carnaval", "Concepts for thinking about carnival", "Begriffe, um den Karneval zu denken")}</h3>
          <a href="chronology.html?th=theory" className="more">{T("La teoría en la cronología →", "Theory in the chronology →", "Theorie in der Chronik →")}</a>
        </div>
        <window.CarnivalConcepts />
      </div>
    </section>
  );
}

const FEATURES = {
  barranquilla: {
    href: "ensayo-musica-carnaval.html", img: "images/musica-carnaval.jpg", alt: "Música durante el Carnaval de Barranquilla",
    kicker: T("Destacado · Lectura larga · ES · EN · DE", "Feature · Long Read · ES · EN · DE", "Feature · Longread · ES · EN · DE"),
    title: T("La música del Carnaval de Barranquilla: patrimonio vivo", "The Music of the Barranquilla Carnival: A Living Heritage", "Die Musik des Karnevals von Barranquilla: lebendiges Erbe"),
    deck: T(
      "Cumbias, papayeras, Congos de Oro, verbenas y picós. Un recorrido por los circuitos donde suena el Carnaval de Barranquilla, y por las formas en que esa música se sostiene, se disputa y se renueva.",
      "Cumbias, papayeras, Congos de Oro, verbenas and picós. A journey through the circuits where the Barranquilla Carnival sounds, and the ways that music is sustained, contested and renewed.",
      "Cumbias, Papayeras, Congos de Oro, Verbenas und Picós. Ein Streifzug durch die Orte, an denen der Karneval von Barranquilla erklingt, und durch die Weisen, wie diese Musik bewahrt, umkämpft und erneuert wird."
    ),
    byline: T("Por Óscar Aquite · 13 min de lectura", "By Óscar Aquite · 13 min read", "Von Óscar Aquite · 13 Min. Lesezeit"),
  },
  garabato: {
    href: "ensayo-garabato.html", img: "images/banner-reina.png", alt: "Carnaval de Barranquilla",
    kicker: T("Ensayo · Barranquilla · Texto en inglés", "Essay · Barranquilla · English", "Essay · Barranquilla · Englisch"),
    title: T("¿Realeza venida a menos? Música, dinámicas de clase y moral en el Carnaval de Barranquilla", "Royalty downgrade? Music, class dynamics, and morality in the Carnival of Barranquilla", "Königlicher Abstieg? Musik, Klassendynamik und Moral im Karneval von Barranquilla"),
    deck: T("Cómo una danza de origen esclavo llegó a encabezar uno de los desfiles de la élite barranquillera. Estratos, gusto y violencia simbólica en el carnaval.", "How a dance of enslaved origin came to lead one of the parades of Barranquilla’s elite. Estratos, taste and symbolic violence in carnival.", "Wie ein Tanz versklavter Herkunft an die Spitze eines Umzugs der Elite Barranquillas gelangte. Estratos, Geschmack und symbolische Gewalt im Karneval."),
    byline: T("Por Óscar Aquite · 24 min de lectura", "By Óscar Aquite · 24 min read", "Von Óscar Aquite · 24 Min. Lesezeit"),
  },
  macta: {
    href: "ensayo-macta-llega.html", img: "images/banner-macta.png", alt: "Carnaval de Barranquilla",
    kicker: T("Ensayo · Barranquilla · ES · EN · DE", "Essay · Barranquilla · ES · EN · DE", "Essay · Barranquilla · ES · EN · DE"),
    title: T(<><em>Llegó Macta</em>: música, comunidad y redes sociales en el Carnaval de Barranquilla</>, <><em>Macta arrived</em>: Music, community, and social media in Barranquilla’s Carnival</>, <><em>Macta ist da</em>: Musik, Gemeinschaft und soziale Medien im Karneval von Barranquilla</>),
    deck: T(
      "Nadie elige la canción del carnaval: la adoptan la calle y las redes. Comunidades virtuales, algoritmos y una champeta irreverente.",
      "No one chooses the song of the carnival: the street and the networks adopt it. Virtual communities, algorithms and an irreverent champeta.",
      "Niemand wählt das Karnevalslied: Straße und Netzwerke machen es dazu. Virtuelle Gemeinschaften, Algorithmen und eine respektlose Champeta."
    ),
    byline: T("Por Óscar Aquite · 26 min de lectura", "By Óscar Aquite · 26 min read", "Von Óscar Aquite · 26 Min. Lesezeit"),
  },
  samba: {
    href: "samba-enredo-corpus.html", img: "images/banners/rio.png", alt: "Carnaval de Río de Janeiro",
    kicker: T("Dataset · Metadatos abiertos · ES · EN · DE", "Dataset · Open metadata · ES · EN · DE", "Datensatz · Offene Metadaten · ES · EN · DE"),
    title: T("Samba-Enredo Corpus (CSEC)", "Samba-Enredo Corpus (CSEC)", "Samba-Enredo Corpus (CSEC)"),
    deck: T(
      "Un corpus estructurado de las letras del Carnaval de Río: escola, año, categoría, posición, puntuación y barrio.",
      "A structured corpus of Rio carnival lyrics: school, year, category, placement, score and neighbourhood.",
      "Ein strukturiertes Korpus der Liedtexte des Karnevals von Rio: Escola, Jahr, Kategorie, Platzierung, Punktzahl und Stadtteil."
    ),
    byline: T("Por Óscar Aquite · Universität Regensburg", "By Óscar Aquite · Universität Regensburg", "Von Óscar Aquite · Universität Regensburg"),
  },
  calypso: {
    href: "especial-calypso.html", img: "images/calypso-hero.png", alt: "Especial Calipso — Trinidad y Tobago",
    kicker: T("Especial · Digital · ES · EN · DE", "Special · Digital · ES · EN · DE", "Spezial · Digital · ES · EN · DE"),
    title: T("Calipso: la voz del carnaval de Trinidad y Tobago", "Calypso: the voice of Trinidad and Tobago's carnival", "Calypso: die Stimme des Karnevals von Trinidad und Tobago"),
    deck: T(
      "Del kaiso de las calles de Port of Spain al Calypso Monarch: ocho capítulos con música, mapas y voces sobre el género que convirtió el carnaval en periódico cantado.",
      "From the kaiso of Port of Spain's streets to the Calypso Monarch: eight chapters of music, maps and voices on the genre that turned carnival into a sung newspaper.",
      "Vom Kaiso der Straßen von Port of Spain bis zum Calypso Monarch: acht Kapitel mit Musik, Karten und Stimmen über das Genre, das den Karneval zur gesungenen Zeitung machte."
    ),
    byline: T("Por Óscar Aquite · Especial multimedia", "By Óscar Aquite · Multimedia special", "Von Óscar Aquite · Multimedia-Spezial"),
  },
};

const RESEARCH_CATS = {
  All: T("Todo", "All", "Alle"),
  Specials: T("Especiales", "Specials", "Spezials"),
  Articles: T("Artículos", "Articles", "Artikel"),
  "Data Stories": T("Historias de datos", "Data Stories", "Data Stories"),
  Datasets: T("Datasets", "Datasets", "Datensätze"),
  "Field Notes": T("Notas de campo", "Field Notes", "Feldnotizen"),
  Visualizations: T("Visualizaciones", "Visualizations", "Visualisierungen"),
  Interviews: T("Entrevistas", "Interviews", "Interviews"),
};

const RESEARCH_LINES = {
  music: T("Música y sonido del carnaval", "Carnival music and sound", "Musik und Klang des Karnevals"),
  corpus: T("Corpus textuales del carnaval", "Carnival text corpora", "Textkorpora des Karnevals"),
  atlas: T("Carnaval comparado", "Comparative carnival", "Karneval im Vergleich"),
  data: T("Datos abiertos y metadatos", "Open data and metadata", "Offene Daten und Metadaten"),
};

function Research() {
  const [cat, setCat] = useState("All");
  const [hover, setHover] = useState(null);
  const list = [
    { date: "2026-10-19", cat: "Datasets", kicker: T("Dataset · En construcción", "Dataset · In progress", "Datensatz · Im Aufbau"), title: FEATURES.samba.title, byline: <><a className="au" href="autor-oscar-aquite.html"><img className="av" src="images/oscar-aquite.png" alt="" aria-hidden="true" />Óscar Aquite</a></>, href: "samba-enredo-corpus.html", feat: "samba", lines: ["corpus", "music", "data"] },
    { date: "2026-10-15", cat: "Specials", kicker: T("Especial · ES · EN · DE", "Special · ES · EN · DE", "Spezial · ES · EN · DE"), title: FEATURES.calypso.title, byline: <><a className="au" href="autor-oscar-aquite.html"><img className="av" src="images/oscar-aquite.png" alt="" aria-hidden="true" />Óscar Aquite</a></>, href: "especial-calypso.html", feat: "calypso", lines: ["music", "atlas"] },
    { date: "2026-06-01", cat: "Articles", kicker: T("Artículo · ES · EN · DE", "Article · ES · EN · DE", "Artikel · ES · EN · DE"), title: FEATURES.barranquilla.title, byline: <><a className="au" href="autor-oscar-aquite.html"><img className="av" src="images/oscar-aquite.png" alt="" aria-hidden="true" />Óscar Aquite</a></>, href: "ensayo-musica-carnaval.html", feat: "barranquilla", lines: ["music"] },
    { date: "2022-03-22", cat: "Articles", kicker: T("Ensayo · ES · EN · DE", "Essay · ES · EN · DE", "Essay · ES · EN · DE"), title: FEATURES.macta.title, byline: <><a className="au" href="autor-oscar-aquite.html"><img className="av" src="images/oscar-aquite.png" alt="" aria-hidden="true" />Óscar Aquite</a></>, href: "ensayo-macta-llega.html", feat: "macta", lines: ["music"] },
    { date: "2022-02-24", cat: "Articles", kicker: T("Ensayo · Texto en inglés", "Essay · English", "Essay · Englisch"), title: FEATURES.garabato.title, byline: <><a className="au" href="autor-oscar-aquite.html"><img className="av" src="images/oscar-aquite.png" alt="" aria-hidden="true" />Óscar Aquite</a></>, href: "ensayo-garabato.html", feat: "garabato", lines: ["music"] },
  ];
  const cats = Object.keys(RESEARCH_CATS).filter(c => c === "All" || list.some(a => a.cat === c));
  // newest first; the newest item with a feature card is the default featured one
  const [line, setLine] = useState(null);
  const lineKeys = Object.keys(RESEARCH_LINES).filter(k => list.some(a => (a.lines || []).includes(k)));
  const pickLine = k => { setLine(line === k ? null : k); setHover(null); };
  const shown = list.filter(a => (cat === "All" || a.cat === cat) && (!line || (a.lines || []).includes(line))).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const defFeat = (shown.find(a => a.feat) || list.filter(a => a.feat).sort((a, b) => b.date.localeCompare(a.date))[0]).feat;
  const featured = hover || defFeat;
  const setFeatured = k => setHover(k);
  const pickCat = c => { setCat(c); setHover(null); };
  const f = FEATURES[featured];
  return (
    <section id="research" className="section">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 05</div>
          <h2 className="title">{T("Investigación y creación", "Research & Creation", "Forschung & Kreation")}</h2>
          
        </div>
        <p className="sec-intro">{T(
          <><b>Lo que significa.</b> Nuestras propias interpretaciones a partir de esas fuentes: artículos, ensayos, especiales digitales, historias de datos y visualizaciones.</>,
          <><b>What it means.</b> Our own interpretations built on those sources: articles, essays, digital specials, data stories and visualizations.</>,
          <><b>Was es bedeutet.</b> Unsere eigenen Deutungen auf Grundlage dieser Quellen: Artikel, Essays, digitale Spezials, Data Stories und Visualisierungen.</>
        )}</p>
        <div className="rs-latest">
          <h3>{T("Últimas entregas", "Latest releases", "Neueste Beiträge")}</h3>
          <a className="rs-finder" href="investigacion.html">{T("Buscador de proyectos →", "Project finder →", "Projektsuche →")}</a>
        </div>
        <div className="editorial">
          <a className="feature-article" href={f.href} key={featured}>
            <div className="img">
              <img src={f.img} alt={f.alt} />
            </div>
            <div className="kicker">{f.kicker}</div>
            <h3>{f.title}</h3>
            <p className="deck">{f.deck}</p>
            <div className="byline au-row"><img className="av" src="images/oscar-aquite.png" alt="" aria-hidden="true" /><span>{f.byline}</span></div>
          </a>

          <div className="article-list" onMouseLeave={() => setHover(null)}>
            {shown.map((a, i) => (
              <article className={"article-item" + (a.feat && a.feat === featured ? " is-active" : "")} key={i} onMouseEnter={a.feat ? () => setFeatured(a.feat) : undefined} onFocus={a.feat ? () => setFeatured(a.feat) : undefined}>
                <div className="kicker">{a.kicker}</div>
                <h4>{a.href ? <a href={a.href}>{a.title}</a> : a.title}</h4>
                <div className="byline">{a.byline}</div>
                {a.lines && <div className="rl-tags">{a.lines.map(k => (
                  <button key={k} className={"rl-tag" + (line === k ? " active" : "")} onClick={() => pickLine(k)}>{RESEARCH_LINES[k]}</button>
                ))}</div>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const NFDI4C_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/NFDI4Culture_Logo.png/1920px-NFDI4Culture_Logo.png";
const NEWS = [
  { logo: NFDI4C_LOGO, day: "9–11", month: T("nov 2026", "Nov 2026", "Nov. 2026"), date: T("Publicado el 20 oct 2026", "Posted 20 Oct 2026", "Veröffentlicht am 20. Okt. 2026"), title: T("Carnavarium se presenta en el 6.º Culture Community Plenary de NFDI4Culture", "Carnavarium presents at NFDI4Culture's 6th Culture Community Plenary", "Carnavarium auf dem 6. Culture Community Plenary von NFDI4Culture"), short: T("Carnavarium en el 6.º Plenary de NFDI4Culture · Bochum, 9–11 nov", "Carnavarium at NFDI4Culture's 6th Plenary · Bochum, 9–11 Nov", "Carnavarium beim 6. Plenary von NFDI4Culture · Bochum, 9.–11. Nov."), place: "Deutsches Bergbau-Museum · Bochum, DE", tag: T("Congreso", "Conference", "Konferenz"), href: "https://nfdi4culture.de/de/veranstaltungen/details/6th-culture-community-plenary.html" },
];

function News() {
  const [first, ...rest] = NEWS;
  return (
    <section id="news" className="section news-sec">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 06</div>
          <h2 className="title">{T("Noticias y convocatorias", "News & Calls", "News & Calls")}</h2>
        </div>
        <p className="sec-intro">{T(
          <><b>Lo que pasa en el mundo del carnaval.</b> Novedades de los carnavales y de su investigación, congresos, convocatorias y noticias del proyecto.</>,
          <><b>What is happening in the world of carnival.</b> News from carnivals and their research, conferences, calls and project updates.</>,
          <><b>Was in der Welt des Karnevals geschieht.</b> Neues aus den Karnevalen und ihrer Erforschung, Tagungen, Calls und Projektneuigkeiten.</>
        )}</p>
        <div className="news-layout">
          {first && (
            <a className="news-feat" href={first.href} target="_blank" rel="noopener">
              <div className="nf-date"><span className="d">{first.day}</span><span className="m">{first.month}</span></div>
              <div className="nf-body">
                {first.logo && <img className="nf-logo" src={first.logo} alt="NFDI4Culture" />}
                <div className="nf-tag">{first.tag}</div>
                <h3>{first.title}</h3>
                <div className="nf-place">{first.place}</div>
                <div className="nf-foot"><span>{first.date}</span><span className="nf-cta">{T("Más información", "More information", "Mehr erfahren")} <i aria-hidden="true">↗</i></span></div>
              </div>
            </a>
          )}
          <aside className="news-submit">
            <div className="ns-k">{T("Comparta una noticia", "Share news", "Neuigkeit teilen")}</div>
            <p>{T("¿Tiene una noticia sobre un carnaval, un congreso o una convocatoria? Envíenos la información y la difundimos aquí.", "Have news about a carnival, a conference or a call? Send us the details and we'll share it here.", "Haben Sie Neuigkeiten zu einem Karneval, einer Tagung oder einem Call? Schicken Sie uns die Informationen, wir verbreiten sie hier.")}</p>
            <a className="ns-btn" href="mailto:oscaraquite.x@gmail.com?subject=Carnavarium%20%E2%80%94%20Noticia%20%2F%20Convocatoria">{T("Enviar una noticia", "Submit news", "Neuigkeit einsenden")} <i aria-hidden="true">→</i></a>
          </aside>
        </div>
        {rest.length > 0 && (
          <div className="news">
            {rest.map((n, i) => (
              <a className="news-item" key={i} href={n.href || "#news"} {...(n.href ? { target: "_blank", rel: "noopener" } : {})} style={{ color: "inherit", textDecoration: "none" }}>
                <div className="date">{n.day} {n.month}</div>
                <div className="title">{n.title}</div>
                <div className="tag">{n.tag}{n.href ? " ↗" : ""}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="brand">
          <window.LogoMark size={64} className="footer-mark" />
          <div className="big">Carnavarium</div>
          <div className="slogan">"Where carnival world goes digital unfurled."</div>
        </div>
        <div className="col">
          <h5>{T("Secciones", "Sections", "Rubriken")}</h5>
          <ul>
            <li><a href="#project">{T("El proyecto y yo", "Project & Me", "Projekt und ich")}</a></li>
            <li><a href="#timeline">{T("El Carnaval", "The Carnival", "Der Karneval")}</a></li>
            <li><a href="#world">{T("En el mundo", "In the World", "In der Welt")}</a></li>
            <li><a href="archive.html">{T("Archivo", "Archive", "Archiv")}</a></li>
          </ul>
        </div>
        <div className="col">
          <h5>{T("Abierto", "Open", "Offen")}</h5>
          <ul>
            <li><a href="#">{T("Metadatos abiertos", "Open Metadata", "Offene Metadaten")}</a></li>
            <li><a href="#">{T("API y datasets", "API & Datasets", "API & Datensätze")}</a></li>
            <li><a href="#">{T("Metodología", "Methodology", "Methodik")}</a></li>
            <li><a href="apoyar.html">{T("Apoya el proyecto", "Support the project", "Projekt unterstützen")}</a></li>
          </ul>
        </div>
        <div className="col">
          <h5>{T("Contacto", "Contact", "Kontakt")}</h5>
          <ul>
            <li>oscaraquite.x<br/>@gmail.com</li>
            <li>Luitpoldstrasse 10<br/>93047 Regensburg, DE</li>
          </ul>
        </div>
        <div className="legal">
          <span>© 2026 Carnavarium · {T("Un proyecto de humanidades digitales", "A Digital Humanities Project", "Ein Digital-Humanities-Projekt")}</span>
          <span><a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a></span>
        </div>
      </div>
    </footer>
  );
}

window.UtilityBar = UtilityBar;
window.Nav = Nav;
window.Hero = Hero;
window.ProjectSection = ProjectSection;
window.Pillars = Pillars;
window.World = World;
window.Archive = Archive;
window.Timeline = Timeline;
window.Research = Research;
window.News = News;
window.Footer = Footer;
