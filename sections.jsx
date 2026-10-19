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
          <span><span>◦ {msg}</span><span>◦ {msg}</span></span>
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
          <a href="#carnival">{T("El Carnaval", "The Carnival", "Der Karneval")}</a>
          <a href="#world">{T("En el mundo", "In the World", "In der Welt")}</a>
          <a href="archive.html">{T("Archivo", "Archive", "Archiv")}</a>
          <a href="#research">{T("Investigación", "Research", "Forschung")}</a>
          <a href="#news">{T("Noticias", "News", "News")}</a>
        </div>
        <a className="nav-cta" href="archive.html">
          {T("Entrar al archivo", "Enter Archive", "Zum Archiv")} <span>→</span>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="shell">
        <div className="proclamation" style={{ marginBottom: 28 }}>
          <span className="pulse"></span>
          {T("Lectura del Bando — Se abre el archivo", "Lectura del Bando — The archive opens", "Lectura del Bando — Das Archiv öffnet sich")}
        </div>

        <window.LogoAnimation />

        <h1 className="hero-headline">
          Where carnival<br/>
          world goes <em>digital</em><br/>
          unfurled.
        </h1>

        <div className="hero-meta">
          <p className="lede">
            {T(
              "Un espacio digital para archivar, investigar y vivir el carnaval: un laboratorio abierto que entreteje fiesta, máscara, sonido y exceso en una forma crítica de conocimiento.",
              "A digital space to archive, research and experience carnival — an open laboratory weaving festival, mask, sound and excess into a critical form of knowledge.",
              "Ein digitaler Raum, um Karneval zu archivieren, zu erforschen und zu erleben – ein offenes Labor, das Fest, Maske, Klang und Exzess zu einer kritischen Form des Wissens verwebt."
            )}
          </p>
          <div className="stats">
            <div className="stat"><span className="num">1,248</span><span className="lab">{T("Ítems en el archivo", "Items in Archive", "Objekte im Archiv")}</span></div>
            <div className="stat"><span className="num">42</span><span className="lab">{T("Tradiciones mapeadas", "Traditions Mapped", "Kartierte Traditionen")}</span></div>
            <div className="stat"><span className="num">17</span><span className="lab">{T("Datasets abiertos", "Open Datasets", "Offene Datensätze")}</span></div>
            <div className="stat"><span className="num">9</span><span className="lab">{T("Líneas de investigación", "Active Research Lines", "Forschungslinien")}</span></div>
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
            <div className="name">Oscar Aquite</div>
            <div className="role">{T("Fundador · Humanista digital", "Founder · Digital Humanist", "Gründer · Digital Humanist")}</div>
            <p className="blurb">
              {T(
                "Investigador de las culturas del carnaval y de sus expresiones musicales y sociales. Master of Arts en Humanidades Digitales — Universität Regensburg (Alemania). Master of Arts en Etnomusicología — Universität Würzburg (Alemania). Maestría en Estudios Interdisciplinarios sobre Desarrollo — Universidad de los Andes (Bogotá, Colombia).",
                "Researcher of carnival cultures and their musical and social expressions. Master of Arts, Digital Humanities — Universität Regensburg (Germany). Master of Arts, Ethnomusicology — Universität Würzburg (Germany). Master of Arts, Interdisciplinary Development Studies — Universidad de los Andes (Bogotá, Colombia).",
                "Forscher zu Karnevalskulturen und ihren musikalischen und gesellschaftlichen Ausdrucksformen. Master of Arts, Digital Humanities — Universität Regensburg. Master of Arts, Musikethnologie — Universität Würzburg. Master of Arts, Interdisziplinäre Entwicklungsstudien — Universidad de los Andes (Bogotá, Kolumbien)."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const data = [
    {
      n: "A", title: T("El Carnaval", "The Carnival", "Der Karneval"),
      blurb: T("Fundamentos culturales y teóricos: del mundo al revés de Bajtín a la práctica festiva encarnada.", "Cultural and theoretical foundations: from Bakhtin's inverted world to embodied festival practice.", "Kulturelle und theoretische Grundlagen: von Bachtins verkehrter Welt bis zur verkörperten Festpraxis."),
      bullets: [T("Cronología 1500 — hoy", "Timeline 1500 — Now", "Chronik 1500 — heute"), T("Glosario de figuras", "Glossary of Figures", "Glossar der Figuren"), T("Conceptos y teoría", "Concepts & Theory", "Begriffe & Theorie")],
    },
    {
      n: "W", title: T("El carnaval en el mundo", "Carnival in the World", "Karneval in der Welt"),
      blurb: T("Una perspectiva global y comparada de las tradiciones del carnaval: calendario anual y estudios regionales.", "A global, comparative perspective on carnival traditions — annual calendar, regional studies.", "Eine globale, vergleichende Perspektive auf Karnevalstraditionen – Jahreskalender, Regionalstudien."),
      bullets: [T("Calendario anual", "Annual Calendar", "Jahreskalender"), T("Estudios regionales", "Regional Studies", "Regionalstudien"), T("Mapeo comparado", "Comparative Mapping", "Vergleichende Kartierung")],
    },
    {
      n: "R", title: T("Investigación y creación", "Research & Creation", "Forschung & Kreation"),
      blurb: T("Donde la investigación humanística se encuentra con la experimentación digital. Ensayos, datasets, visualizaciones.", "Where humanistic research meets digital experimentation. Essays, datasets, visualizations.", "Wo geisteswissenschaftliche Forschung auf digitales Experimentieren trifft. Essays, Datensätze, Visualisierungen."),
      bullets: [T("Proyectos de HD", "DH Projects", "DH-Projekte"), T("Visualización de datos", "Data Visualization", "Datenvisualisierung"), T("Datasets abiertos", "Open Datasets", "Offene Datensätze")],
    },
  ];
  return (
    <section id="carnival" className="section">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 02</div>
          <h2 className="title">{T("Tres entradas", "Three Ways In", "Drei Zugänge")}</h2>
          <a href="#" className="more">{T("Todas las secciones →", "All sections →", "Alle Rubriken →")}</a>
        </div>
        <div className="pillars">
          {data.map((p, i) => (
            <div className="pillar" key={i}>
              <div className="badge">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <ul>{p.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              <span className="arrow">→</span>
            </div>
          ))}
        </div>
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
  const go = d => { const el = ref.current; el.scrollTo({ left: el.scrollLeft + d * el.clientWidth, behavior: "smooth" }); };
  return (
    <div className="world-carousel">
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
          <a href="#" className="more">{T("Abrir el atlas →", "Open atlas →", "Atlas öffnen →")}</a>
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
        <a className="special-banner" href="especial-calypso.html">
          <div className="sb-tag"><b>{T("Especial", "Special", "Spezial")}</b><span>{T("Trinidad y Tobago · 8 capítulos", "Trinidad & Tobago · 8 chapters", "Trinidad und Tobago · 8 Kapitel")}</span></div>
          <h3>{T("La ruta del calipso", "The Calypso Route", "Die Route des Calypso")}</h3>
          <p>{T(
            "Historia, monarcas, géneros hermanos y rutas de migración del ritmo que cuenta la historia del carnaval de Port of Spain.",
            "History, monarchs, sister genres and migration routes of the rhythm that tells the story of Port of Spain's carnival.",
            "Geschichte, Monarchen, verwandte Genres und Migrationsrouten des Rhythmus, der die Geschichte des Karnevals von Port of Spain erzählt."
          )}</p>
          <span className="sb-cta">{T("Entrar al especial →", "Enter the special →", "Zum Spezial →")}</span>
        </a>
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
    { year: "1823", event: T("Fundación del Carnaval de Barranquilla en su forma moderna.", "Founding of the Barranquilla Carnival in its modern form.", "Gründung des Karnevals von Barranquilla in seiner modernen Form."), place: "Barranquilla, CO" },
    { year: "1837", event: T("Primer desfile documentado de Mardi Gras en Estados Unidos.", "First documented Mardi Gras parade in the United States.", "Erste dokumentierte Mardi-Gras-Parade in den Vereinigten Staaten."), place: T("Mobile / Nueva Orleans", "Mobile / New Orleans", "Mobile / New Orleans") },
    { year: "1928", event: T("El J'ouvert de Trinidad codifica su tradición de mas al amanecer.", "Trinidadian J'ouvert codifies its dawn-bound mas tradition.", "Das trinidadische J'ouvert festigt seine Mas-Tradition im Morgengrauen."), place: "Port of Spain, TT" },
    { year: "1965", event: T("Se publica La cultura popular en la Edad Media y en el Renacimiento de Bajtín: lo carnavalesco entra en la teoría.", "Bakhtin's Rabelais and His World published — the carnivalesque enters theory.", "Bachtins Rabelais und seine Welt erscheint – das Karnevaleske hält Einzug in die Theorie."), place: T("Moscú, RU", "Moscow, RU", "Moskau, RU") },
    { year: "2003", event: T("La UNESCO inscribe el Carnaval de Oruro en la lista del Patrimonio Cultural Inmaterial.", "UNESCO inscribes Oruro Carnival on Intangible Cultural Heritage list.", "Die UNESCO nimmt den Karneval von Oruro in die Liste des immateriellen Kulturerbes auf."), place: "Oruro, BO" },
    { year: "2024", event: T("Carnavarium empieza a construir su corpus de metadatos abiertos.", "Carnavarium begins building its open metadata corpus.", "Carnavarium beginnt mit dem Aufbau seines offenen Metadatenkorpus."), place: "Regensburg / Barranquilla" },
  ];
  return (
    <section className="section">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 05</div>
          <h2 className="title">{T("Una cronología del mundo al revés", "A Timeline of the Inverted World", "Eine Chronik der verkehrten Welt")}</h2>
          <a href="#" className="more">{T("Cronología completa →", "Full chronology →", "Ganze Chronik →")}</a>
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
    byline: T("Por Óscar Aquite · 13 min de lectura · Número 01", "By Óscar Aquite · 13 min read · Issue 01", "Von Óscar Aquite · 13 Min. Lesezeit · Ausgabe 01"),
  },
  samba: {
    href: "samba-enredo-corpus.html", img: "images/banners/rio.png", alt: "Carnaval de Río de Janeiro",
    kicker: T("Dataset · En construcción · ES · EN · DE", "Dataset · In progress · ES · EN · DE", "Datensatz · Im Aufbau · ES · EN · DE"),
    title: T("Samba-Enredo Corpus (CSEC)", "Samba-Enredo Corpus (CSEC)", "Samba-Enredo Corpus (CSEC)"),
    deck: T(
      "Un corpus estructurado de las letras del Carnaval de Río: escola, año, categoría, posición, puntuación y barrio.",
      "A structured corpus of Rio carnival lyrics: school, year, category, placement, score and neighbourhood.",
      "Ein strukturiertes Korpus der Liedtexte des Karnevals von Rio: Escola, Jahr, Kategorie, Platzierung, Punktzahl und Stadtteil."
    ),
    byline: T("Por Óscar Aquite · Universität Regensburg · Número 01", "By Óscar Aquite · Universität Regensburg · Issue 01", "Von Óscar Aquite · Universität Regensburg · Ausgabe 01"),
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
    byline: T("Por Óscar Aquite · Especial multimedia · Número 01", "By Óscar Aquite · Multimedia special · Issue 01", "Von Óscar Aquite · Multimedia-Spezial · Ausgabe 01"),
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

function Research() {
  const [cat, setCat] = useState("All");
  const cats = Object.keys(RESEARCH_CATS);
  const issue = T("Número 01", "Issue 01", "Ausgabe 01");
  const list = [
    { date: "2026-10-19", cat: "Datasets", kicker: T("Dataset · En construcción", "Dataset · In progress", "Datensatz · Im Aufbau"), title: FEATURES.samba.title, byline: <>Óscar Aquite · {issue}</>, href: "samba-enredo-corpus.html", feat: "samba" },
    { date: "2026-10-15", cat: "Specials", kicker: T("Especial · ES · EN · DE", "Special · ES · EN · DE", "Spezial · ES · EN · DE"), title: FEATURES.calypso.title, byline: <>Óscar Aquite · {issue}</>, href: "especial-calypso.html", feat: "calypso" },
    { date: "2026-06-01", cat: "Articles", kicker: T("Artículo · ES · EN · DE", "Article · ES · EN · DE", "Artikel · ES · EN · DE"), title: FEATURES.barranquilla.title, byline: <>Óscar Aquite · {issue}</>, href: "ensayo-musica-carnaval.html", feat: "barranquilla" },
    { date: "2026-05-01", cat: "Data Stories", kicker: T("Historia de datos", "Data Story", "Data Story"), title: T("Mapear 200 años de desfiles de Mardi Gras desde los archivos de la ciudad", "Mapping 200 years of Mardi Gras parades from city archives", "200 Jahre Mardi-Gras-Paraden aus städtischen Archiven kartiert"), byline: <>K. Devereaux · {issue}</> },
    { date: "2026-04-01", cat: "Field Notes", kicker: T("Notas de campo", "Field Notes", "Feldnotizen"), title: T("Escuchar una steelband desde dentro de la sala de máquinas", "On listening to a steelband from inside the engine room", "Eine Steelband aus dem Maschinenraum hören"), byline: <>T. Ramcharan · {issue}</> },
    { date: "2026-03-01", cat: "Visualizations", kicker: T("Visualización", "Visualization", "Visualisierung"), title: T("Una red de los disfraces prestados del carnaval (1900 — 2020)", "A network of carnival's borrowed costumes (1900 — 2020)", "Ein Netzwerk der entliehenen Karnevalskostüme (1900 — 2020)"), byline: <>Carnavarium Lab · {issue}</> },
    { date: "2026-02-01", cat: "Interviews", kicker: T("Entrevista", "Interview", "Interview"), title: T("Con Marisol — hacedora de disfraces, Sociedad de Negritos Puloy", "With Marisol — costume maker, Sociedad de Negritos Puloy", "Mit Marisol — Kostümbildnerin, Sociedad de Negritos Puloy"), byline: issue },
  ];
  // newest first; the newest item with a feature card is the default featured one
  const shown = list.filter(a => cat === "All" || a.cat === cat).sort((a, b) => b.date.localeCompare(a.date));
  const defFeat = (shown.find(a => a.feat) || list.filter(a => a.feat).sort((a, b) => b.date.localeCompare(a.date))[0]).feat;
  const [hover, setHover] = useState(null);
  const featured = hover || defFeat;
  const setFeatured = k => setHover(k);
  const pickCat = c => { setCat(c); setHover(null); };
  const f = FEATURES[featured];
  return (
    <section id="research" className="section">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 06</div>
          <h2 className="title">{T("Investigación y creación", "Research & Creation", "Forschung & Kreation")}</h2>
          <a href="#" className="more">{T("Todos los números →", "All issues →", "Alle Ausgaben →")}</a>
        </div>
        <p className="sec-intro">{T(
          <><b>Lo que significa.</b> Nuestras propias interpretaciones a partir de esas fuentes: artículos, ensayos, especiales digitales, historias de datos y visualizaciones.</>,
          <><b>What it means.</b> Our own interpretations built on those sources: articles, essays, digital specials, data stories and visualizations.</>,
          <><b>Was es bedeutet.</b> Unsere eigenen Deutungen auf Grundlage dieser Quellen: Artikel, Essays, digitale Spezials, Data Stories und Visualisierungen.</>
        )}</p>
        <div className="archive-filters research-filters">
          {cats.map(c => (
            <button key={c} className={cat === c ? "active" : ""} onClick={() => pickCat(c)}>{RESEARCH_CATS[c]}</button>
          ))}
        </div>
        <div className="editorial">
          <a className="feature-article" href={f.href} key={featured}>
            <div className="img">
              <img src={f.img} alt={f.alt} />
            </div>
            <div className="kicker">{f.kicker}</div>
            <h3>{f.title}</h3>
            <p className="deck">{f.deck}</p>
            <div className="byline">{f.byline}</div>
          </a>

          <div className="article-list" onMouseLeave={() => setHover(null)}>
            {shown.map((a, i) => (
              <article className={"article-item" + (a.feat && a.feat === featured ? " is-active" : "")} key={i} onMouseEnter={a.feat ? () => setFeatured(a.feat) : undefined} onFocus={a.feat ? () => setFeatured(a.feat) : undefined}>
                <div className="kicker">{a.kicker}</div>
                <h4>{a.href ? <a href={a.href}>{a.title}</a> : a.title}</h4>
                <div className="byline">{a.byline}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function News() {
  const items = [
    { date: T("10 may 2026", "10 May 2026", "10. Mai 2026"), title: T("Convocatoria de ensayos — Número 02: sonido, cuerpo y plaza pública", "Open call for essays — Issue 02: Sound, body and the public square", "Call for Essays — Ausgabe 02: Klang, Körper und öffentlicher Raum"), tag: T("Convocatorias", "Submissions", "Einreichungen") },
    { date: T("02 may 2026", "02 May 2026", "02. Mai 2026"), title: T("Carnavarium se presenta en el congreso DH 2026, Lisboa", "Carnavarium presents at the DH 2026 conference, Lisbon", "Carnavarium auf der DH-2026-Konferenz in Lissabon"), tag: T("Congreso", "Conference", "Konferenz") },
    { date: T("18 abr 2026", "18 Apr 2026", "18. Apr. 2026"), title: T("Nuevo dataset publicado — 1.248 ítems ya mapeables en JSON-LD", "New dataset released — 1,248 items now mappable in JSON-LD", "Neuer Datensatz veröffentlicht — 1.248 Objekte jetzt in JSON-LD kartierbar"), tag: T("Datos abiertos", "Open Data", "Offene Daten") },
  ];
  return (
    <section id="news" className="section" style={{ paddingBottom: 64 }}>
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 07</div>
          <h2 className="title">{T("Noticias", "News", "Neuigkeiten")}</h2>
          <a href="#" className="more">{T("Todas las novedades →", "All updates →", "Alle Neuigkeiten →")}</a>
        </div>
      </div>
      <div className="shell">
        <div className="news">
          {items.map((n, i) => (
            <div className="news-item" key={i}>
              <div className="date">{n.date}</div>
              <div className="title">{n.title}</div>
              <div className="tag">{n.tag}</div>
            </div>
          ))}
        </div>
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
            <li><a href="#carnival">{T("El Carnaval", "The Carnival", "Der Karneval")}</a></li>
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
            <li><a href="#">{T("Envíos", "Submissions", "Einreichungen")}</a></li>
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
