/* global React */
const { useState, useMemo, useEffect } = React;

/* Archive — the collection, browsable, in ES · EN · DE.
   Text fields take { es, en, de }; swap in real records as they come. */

const LANGS = ["es", "en", "de"];
const getLang = () => {
  const q = new URLSearchParams(location.search).get("lang");
  let s = null; try { s = localStorage.getItem("carnavarium-lang"); } catch (e) {}
  return LANGS.includes(q) ? q : LANGS.includes(s) ? s : "en";
};
const tr = (es, en, de) => ({ es, en, de });
const CONSULT = tr("Solo consulta", "Consultation only", "Nur Einsicht");
const PERM = tr("Con permiso", "With permission", "Mit Genehmigung");
const PD = tr("Dominio público", "Public domain", "Gemeinfrei");

const ARCHIVE_ITEMS = [
  { id: "AR-0142", type: "Music", year: 1987, country: "CO", rights: PERM,
    title: tr("Letanía de los Coyongos", "Litany of the Coyongos", "Litanei der Coyongos"),
    desc: tr("Grabación de campo de la danza de relación en su formato tradicional, con caja, guacharaca y voz.", "Field recording of the narrative dance in its traditional format, with drum, guacharaca and voice.", "Feldaufnahme des Erzähltanzes in seiner traditionellen Form, mit Trommel, Guacharaca und Gesang."),
    place: tr("Barranquilla", "Barranquilla", "Barranquilla"), format: tr("Audio · 12 min", "Audio · 12 min", "Audio · 12 Min."),
    collection: tr("Danzas de relación", "Narrative dances", "Erzähltänze") },
  { id: "AR-0211", type: "Texts", year: 1965, country: "RU", rights: PD,
    title: tr("Notas sobre la inversión del mundo", "Notes on the world upside down", "Notizen zur verkehrten Welt"),
    desc: tr("Ejemplar anotado del capítulo sobre el carnavalesco, con marginalia de un lector no identificado.", "Annotated copy of the chapter on the carnivalesque, with marginalia by an unidentified reader.", "Annotiertes Exemplar des Kapitels über das Karnevaleske, mit Randnotizen eines unbekannten Lesers."),
    place: tr("Moscú", "Moscow", "Moskau"), format: tr("PDF · 38 pp.", "PDF · 38 pp.", "PDF · 38 S."),
    collection: tr("Teoría del carnaval", "Carnival theory", "Karnevalstheorie") },
  { id: "AR-0339", type: "Videos", year: 1972, country: "CO", rights: PERM,
    title: tr("Lectura del Bando, Plaza de la Paz", "Lectura del Bando, Plaza de la Paz", "Lectura del Bando, Plaza de la Paz"),
    desc: tr("Transferencia digital de un carrete de 8mm. Registro del acto de proclamación frente a la catedral.", "Digital transfer of an 8mm reel. Record of the proclamation ceremony in front of the cathedral.", "Digitalisierung einer 8-mm-Filmrolle. Aufnahme der Proklamation vor der Kathedrale."),
    place: tr("Barranquilla", "Barranquilla", "Barranquilla"), format: tr("Video · 6 min", "Video · 6 min", "Video · 6 Min."),
    collection: tr("Ceremonias de apertura", "Opening ceremonies", "Eröffnungszeremonien") },
  { id: "AR-0407", type: "Photographs", year: 2001, country: "VE", rights: tr("CC BY-NC", "CC BY-NC", "CC BY-NC"),
    title: tr("Diablos de Yare — máscaras y procesión", "Dancing Devils of Yare — masks and procession", "Teufel von Yare — Masken und Prozession"),
    desc: tr("Serie fotográfica de la festividad, con detalle de la construcción de máscaras de cartón piedra.", "Photo series of the festival, detailing how the papier-mâché masks are made.", "Fotoserie des Festes, mit Details zur Herstellung der Pappmaché-Masken."),
    place: tr("San Francisco de Yare", "San Francisco de Yare", "San Francisco de Yare"), format: tr("24 imágenes", "24 images", "24 Bilder"),
    collection: tr("Máscaras del Caribe", "Caribbean masks", "Masken der Karibik") },
  { id: "AR-0512", type: "Texts", year: 1998, country: "DE", rights: CONSULT,
    title: tr("Die Narrenkappe und die Umkehrung der Ordnung", "Die Narrenkappe und die Umkehrung der Ordnung", "Die Narrenkappe und die Umkehrung der Ordnung"),
    desc: tr("Estudio sobre el gorro de bufón como signo de la suspensión temporal de la jerarquía social.", "A study of the fool's cap as a sign of the temporary suspension of social hierarchy.", "Studie über die Narrenkappe als Zeichen der zeitweiligen Aufhebung sozialer Hierarchie."),
    place: tr("Colonia", "Cologne", "Köln"), format: tr("PDF · 22 pp.", "PDF · 22 pp.", "PDF · 22 S."),
    collection: tr("Fastnacht", "Fastnacht", "Fastnacht") },
  { id: "AR-0628", type: "Videos", year: 1984, country: "BR", rights: CONSULT,
    title: tr("Mangueira — ensayo de escola de samba", "Mangueira — samba school rehearsal", "Mangueira — Probe einer Sambaschule"),
    desc: tr("Metraje de archivo del ensayo previo al desfile, con la bateria completa en la cuadra.", "Archival footage of the pre-parade rehearsal, with the full bateria in the quadra.", "Archivmaterial der Probe vor dem Umzug, mit der kompletten Bateria in der Quadra."),
    place: tr("Río de Janeiro", "Rio de Janeiro", "Rio de Janeiro"), format: tr("Video · 19 min", "Video · 19 min", "Video · 19 Min."),
    collection: tr("Escolas de samba", "Samba schools", "Sambaschulen") },
  { id: "AR-0701", type: "Music", year: 2019, country: "TT", rights: tr("CC BY-NC", "CC BY-NC", "CC BY-NC"),
    title: tr("Renegades Panyard — ensayo de steelband", "Renegades Panyard — steelband rehearsal", "Renegades Panyard — Steelband-Probe"),
    desc: tr("Registro sonoro de la sección de tenores durante el ensayo de Panorama.", "Sound recording of the tenor section during the Panorama rehearsal.", "Tonaufnahme der Tenor-Sektion während der Panorama-Probe."),
    place: tr("Puerto España", "Port of Spain", "Port of Spain"), format: tr("Audio · 31 min", "Audio · 31 min", "Audio · 31 Min."),
    collection: tr("Steelpan", "Steelpan", "Steelpan") },
  { id: "AR-0823", type: "Texts", year: 2014, country: "BO", rights: tr("CC BY", "CC BY", "CC BY"),
    title: tr("Diablada — notación coreográfica", "Diablada — choreographic notation", "Diablada — choreografische Notation"),
    desc: tr("Transcripción de las figuras de la danza, con esquemas de desplazamiento en planta.", "Transcription of the dance figures, with floor-plan movement diagrams.", "Transkription der Tanzfiguren, mit Grundriss-Schemata der Bewegungen."),
    place: tr("Oruro", "Oruro", "Oruro"), format: tr("PDF · 14 pp.", "PDF · 14 pp.", "PDF · 14 S."),
    collection: tr("Coreografías andinas", "Andean choreographies", "Andine Choreografien") },
  { id: "AR-0904", type: "Music", year: 1972, country: "CO", rights: CONSULT,
    title: tr("Las cuatro fiestas — Adolfo Echeverría", "Las cuatro fiestas — Adolfo Echeverría", "Las cuatro fiestas — Adolfo Echeverría"),
    desc: tr("Prensado original en vinilo de 45 rpm, cara A. Voz de Nury Borrás.", "Original 45 rpm vinyl pressing, side A. Vocals by Nury Borrás.", "Originalpressung auf 45er-Vinyl, Seite A. Gesang: Nury Borrás."),
    place: tr("Barranquilla", "Barranquilla", "Barranquilla"), format: tr("Audio · 3 min", "Audio · 3 min", "Audio · 3 Min."),
    collection: tr("Discografía carnavalera", "Carnival discography", "Karnevalsdiskografie") },
  { id: "AR-1015", type: "Photographs", year: 2018, country: "CH", rights: tr("CC BY-NC", "CC BY-NC", "CC BY-NC"),
    title: tr("Carnaval de Basel — Morgestraich", "Basel Carnival — Morgestraich", "Basler Fasnacht — Morgestraich"),
    desc: tr("Fotografías del inicio nocturno del cortejo, con los faroles pintados a mano.", "Photographs of the night-time start of the procession, with hand-painted lanterns.", "Fotografien vom nächtlichen Beginn des Umzugs, mit handbemalten Laternen."),
    place: tr("Basilea", "Basel", "Basel"), format: tr("16 imágenes", "16 images", "16 Bilder"),
    collection: tr("Fasnacht", "Fasnacht", "Fasnacht") },
  { id: "AR-1122", type: "Texts", year: 1553, country: "DE", rights: PD,
    title: tr("Fastnachtspiel — texto y acotaciones", "Fastnachtspiel — text and stage directions", "Fastnachtspiel — Text und Regieanweisungen"),
    desc: tr("Edición de un juego de carnaval del siglo XVI, con las acotaciones escénicas originales.", "Edition of a sixteenth-century carnival play, with the original stage directions.", "Edition eines Fastnachtspiels aus dem 16. Jahrhundert, mit den originalen Regieanweisungen."),
    place: tr("Núremberg", "Nuremberg", "Nürnberg"), format: tr("PDF · 46 pp.", "PDF · 46 pp.", "PDF · 46 S."),
    collection: tr("Teatro carnavalesco", "Carnival theatre", "Fastnachtstheater") },
  { id: "AR-1301", type: "Illustrations", year: 2017, country: "CO", rights: PERM, author: "Javier Jara", img: "images/musica-carnaval.jpg",
    title: tr("Música en la calle — Carnaval de Barranquilla", "Street music — Barranquilla Carnival", "Straßenmusik — Karneval von Barranquilla"),
    desc: tr("Ilustración de músicos durante los desfiles del Carnaval de Barranquilla. Imagen de portada del artículo «La música del Carnaval de Barranquilla: patrimonio vivo».", "Illustration of musicians during the Barranquilla Carnival parades. Cover image of the article “The Music of the Barranquilla Carnival: A Living Heritage”.", "Illustration von Musikern während der Umzüge des Karnevals von Barranquilla. Titelbild des Artikels „Die Musik des Karnevals von Barranquilla: lebendiges Erbe“."),
    place: tr("Barranquilla", "Barranquilla", "Barranquilla"), format: tr("Ilustración digital · 1 imagen", "Digital illustration · 1 image", "Digitale Illustration · 1 Bild"),
    collection: tr("Música del carnaval", "Carnival music", "Karnevalsmusik"),
    usedIn: { href: "ensayo-musica-carnaval.html", title: tr("La música del Carnaval de Barranquilla: patrimonio vivo", "The Music of the Barranquilla Carnival: A Living Heritage", "Die Musik des Karnevals von Barranquilla: lebendiges Erbe") } },
  { id: "AR-1208", type: "Photographs", year: 2016, country: "CO", rights: tr("CC BY", "CC BY", "CC BY"),
    title: tr("Garabato — vestuario y utilería", "Garabato — costume and props", "Garabato — Kostüm und Requisiten"),
    desc: tr("Documentación fotográfica del traje completo: capa, sombrero y el garabato como objeto.", "Photographic documentation of the full costume: cape, hat and the garabato itself.", "Fotodokumentation des kompletten Kostüms: Umhang, Hut und der Garabato als Objekt."),
    place: tr("Barranquilla", "Barranquilla", "Barranquilla"), format: tr("31 imágenes", "31 images", "31 Bilder"),
    collection: tr("Danzas de relación", "Narrative dances", "Erzähltänze") },
];

const TYPE_KEY = { Texts: "text", Photographs: "photo", Illustrations: "illus", Videos: "video", Music: "audio" };
const TYPE_L = {
  All: tr("Todo", "All", "Alle"), Texts: tr("Textos", "Texts", "Texte"), Photographs: tr("Fotografías", "Photographs", "Fotografien"),
  Illustrations: tr("Ilustraciones", "Illustrations", "Illustrationen"), Videos: tr("Videos", "Videos", "Videos"), Music: tr("Música", "Music", "Musik"),
};
const UI = {
  title: tr("Archivo", "Archive", "Archiv"),
  eyebrow: tr("§ 04 · La colección", "§ 04 · The collection", "§ 04 · Die Sammlung"),
  deck: tr("Una colección digital de materiales carnavalescos — textos, fotografías, ilustraciones, videos y música. Cada objeto conserva su procedencia, su formato y las condiciones bajo las que puede consultarse.",
    "A digital collection of carnival materials — texts, photographs, illustrations, videos and music. Each object keeps its provenance, its format and the conditions under which it can be consulted.",
    "Eine digitale Sammlung von Karnevalsmaterialien – Texte, Fotografien, Illustrationen, Videos und Musik. Jedes Objekt bewahrt seine Herkunft, sein Format und die Bedingungen, unter denen es eingesehen werden kann."),
  objects: tr("Objetos", "Objects", "Objekte"), countries: tr("Países", "Countries", "Länder"), collections: tr("Colecciones", "Collections", "Sammlungen"), oldest: tr("Más antiguo", "Oldest", "Ältestes"),
  search: tr("Buscar por título, lugar, año o colección…", "Search by title, place, year or collection…", "Nach Titel, Ort, Jahr oder Sammlung suchen…"),
  searchL: tr("Buscar en el archivo", "Search the archive", "Archiv durchsuchen"), clear: tr("Limpiar búsqueda", "Clear search", "Suche löschen"),
  sort: tr("Orden", "Sort", "Sortierung"), recent: tr("Más reciente", "Newest", "Neueste"), old: tr("Más antiguo", "Oldest", "Älteste"), byTitle: tr("Título", "Title", "Titel"),
  nObj: tr("objetos", "objects", "Objekte"), of: tr("de", "of", "von"),
  none: tr("No hay objetos que coincidan con esa búsqueda.", "No objects match that search.", "Keine Objekte entsprechen dieser Suche."),
  all: tr("Ver todo el archivo", "View the whole archive", "Ganzes Archiv anzeigen"),
  close: tr("Cerrar", "Close", "Schließen"),
  type: tr("Tipo", "Type", "Typ"), author: tr("Autor", "Author", "Urheber"), year: tr("Año", "Year", "Jahr"), prov: tr("Procedencia", "Provenance", "Herkunft"),
  format: tr("Formato", "Format", "Format"), coll: tr("Colección", "Collection", "Sammlung"), rights: tr("Derechos", "Rights", "Rechte"),
  used: tr("Usado en", "Used in", "Verwendet in"),
  credIll: tr("Ilustración", "Illustration", "Illustration"), credPh: tr("Foto", "Photo", "Foto"),
  hires: tr("Para solicitar el archivo en alta resolución o permisos de uso, escribe a", "To request the high-resolution file or usage permissions, write to", "Für die hochaufgelöste Datei oder Nutzungsrechte schreiben Sie an"),
  notOnline: tr("El objeto digital aún no está disponible en línea. Para consultarlo, escribe a", "The digital object is not yet available online. To consult it, write to", "Das digitale Objekt ist noch nicht online verfügbar. Zur Einsicht schreiben Sie an"),
  nav: [["project", tr("Proyecto", "Project", "Projekt")], ["timeline", tr("El Carnaval", "The Carnival", "Der Karneval")], ["world", tr("En el mundo", "In the World", "In der Welt")], ["archive", tr("Archivo", "Archive", "Archiv")], ["research", tr("Investigación", "Research", "Forschung")], ["news", tr("Noticias", "News", "News")]],
  sections: tr("Secciones", "Sections", "Rubriken"), contact: tr("Contacto", "Contact", "Kontakt"),
  dh: tr("Un proyecto de humanidades digitales", "A Digital Humanities Project", "Ein Digital-Humanities-Projekt"),
  me: tr("El proyecto y yo", "Project & Me", "Projekt und ich"),
};

function ArchivePage() {
  const [lang, setLangS] = useState(getLang);
  const t = o => (o && typeof o === "object" ? o[lang] : o);
  const setLang = l => {
    setLangS(l);
    try { localStorage.setItem("carnavarium-lang", l); } catch (e) {}
  };
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.title = t(UI.title) + " — Carnavarium";
    const u = new URL(location.href); u.searchParams.set("lang", lang); history.replaceState(null, "", u);
  }, [lang]);

  const [type, setType] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("recent");
  const [open, setOpen] = useState(() => { const id = new URLSearchParams(location.search).get("id"); return ARCHIVE_ITEMS.some(i => i.id === id) ? id : null; });
  useEffect(() => { const u = new URL(location.href); if (open) u.searchParams.set("id", open); else u.searchParams.delete("id"); history.replaceState(null, "", u); }, [open]);

  const counts = useMemo(() => {
    const c = { All: ARCHIVE_ITEMS.length };
    ARCHIVE_ITEMS.forEach(i => { c[i.type] = (c[i.type] || 0) + 1; });
    return c;
  }, []);

  const items = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let out = ARCHIVE_ITEMS.filter(it => {
      if (type !== "All" && it.type !== type) return false;
      if (!needle) return true;
      return [it.title, it.desc, it.place, it.collection].flatMap(o => [o.es, o.en, o.de]).concat([it.id, String(it.year), it.author || ""])
        .join(" ").toLowerCase().includes(needle);
    });
    out = [...out].sort((a, b) =>
      sort === "recent" ? b.year - a.year :
      sort === "oldest" ? a.year - b.year :
      t(a.title).localeCompare(t(b.title), lang));
    return out;
  }, [type, q, sort, lang]);

  const record = open != null ? ARCHIVE_ITEMS.find(i => i.id === open) : null;
  const mail = <a href="mailto:oscaraquite.x@gmail.com">oscaraquite.x@gmail.com</a>;

  return (
    <>
      <nav className="legal-nav">
        <div className="shell row">
          <a className="wordmark" href="index.html">
            <img src="images/logo-mark.png" alt="" aria-hidden="true" className="logo-mark" />
            <span>carnavarium</span>
          </a>
          <div className="nav-links">
            {UI.nav.map(([id, l]) => id === "archive"
              ? <a key={id} href="archive.html" className="is-current" aria-current="page">{t(l)}</a>
              : <a key={id} href={id === "research" ? "investigacion.html" : id === "world" ? "atlas.html" : "index.html#" + id}>{t(l)}</a>)}
          </div>
          <div className="lang-sw" role="group" aria-label="Idioma / Language / Sprache">
            {LANGS.map(l => <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
          </div>
        </div>
      </nav>

      <header className="shell arch-head">
        <div className="eyebrow" style={{ marginBottom: 20 }}>{t(UI.eyebrow)}</div>
        <h1>{t(UI.title)}</h1>
        <p className="arch-deck">{t(UI.deck)}</p>
        <div className="arch-stats">
          <div className="stat"><span className="num">{counts.All}</span><span className="lab">{t(UI.objects)}</span></div>
          <div className="stat"><span className="num">{new Set(ARCHIVE_ITEMS.map(i => i.country)).size}</span><span className="lab">{t(UI.countries)}</span></div>
          <div className="stat"><span className="num">{new Set(ARCHIVE_ITEMS.map(i => i.collection.es)).size}</span><span className="lab">{t(UI.collections)}</span></div>
          <div className="stat"><span className="num">{Math.min(...ARCHIVE_ITEMS.map(i => i.year))}</span><span className="lab">{t(UI.oldest)}</span></div>
        </div>
      </header>

      <div className="shell arch-controls">
        <div className="arch-search">
          <input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder={t(UI.search)} aria-label={t(UI.searchL)} />
          {q && <button className="clear" onClick={() => setQ("")} aria-label={t(UI.clear)}>×</button>}
        </div>
        <div className="arch-filters">
          {["All", "Texts", "Photographs", "Illustrations", "Videos", "Music"].map(f => (
            <button key={f} className={type === f ? "active" : ""} onClick={() => setType(f)}>
              {t(TYPE_L[f])}
              <span className="n">{counts[f] || 0}</span>
            </button>
          ))}
        </div>
        <div className="arch-sort">
          <label htmlFor="sort">{t(UI.sort)}</label>
          <select id="sort" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="recent">{t(UI.recent)}</option>
            <option value="oldest">{t(UI.old)}</option>
            <option value="title">{t(UI.byTitle)}</option>
          </select>
        </div>
      </div>

      <main className="shell arch-main">
        <div className="arch-count">
          {items.length === counts.All ? `${items.length} ${t(UI.nObj)}` : `${items.length} ${t(UI.of)} ${counts.All} ${t(UI.nObj)}`}
        </div>

        {items.length === 0 ? (
          <div className="arch-empty">
            <p>{t(UI.none)}</p>
            <button onClick={() => { setQ(""); setType("All"); }}>{t(UI.all)}</button>
          </div>
        ) : (
          <div className="arch-grid">
            {items.map(it => (
              <article className="arch-card" key={it.id} onClick={() => setOpen(it.id)}>
                <div className={"arch-thumb t-" + TYPE_KEY[it.type] + (it.img ? " has-img" : "")}>
                  {it.img ? <img src={it.img} alt={t(it.title)} loading="lazy" /> : <span className="ph">{t(TYPE_L[it.type])}</span>}
                </div>
                <div className="arch-card-body">
                  <div className="arch-card-top">
                    <span className="id">{it.id}</span>
                    <span className={"type-pill type-" + TYPE_KEY[it.type]}>{t(TYPE_L[it.type])}</span>
                  </div>
                  <h3>{t(it.title)}</h3>
                  <p className="desc">{t(it.desc)}</p>
                  <div className="arch-card-meta">
                    <span>{t(it.place)}, {it.country}</span>
                    <span>{it.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {record && (
        <div className="arch-overlay" onClick={() => setOpen(null)}>
          <div className="arch-sheet" onClick={e => e.stopPropagation()} role="dialog" aria-label={t(record.title)}>
            <button className="sheet-x" onClick={() => setOpen(null)} aria-label={t(UI.close)}>×</button>
            <div className={"sheet-thumb t-" + TYPE_KEY[record.type] + (record.img ? " has-img" : "")}>
              {record.img ? <img src={record.img} alt={t(record.title) + (record.author ? " — " + record.author : "")} /> : <span className="ph">{t(TYPE_L[record.type])}</span>}
            </div>
            <div className="sheet-body">
              <div className="sheet-id">{record.id}</div>
              <h2>{t(record.title)}</h2>
              <p className="sheet-desc">{t(record.desc)}</p>
              <dl className="sheet-dl">
                <div><dt>{t(UI.type)}</dt><dd>{t(TYPE_L[record.type])}</dd></div>
                {record.author && <div><dt>{t(UI.author)}</dt><dd>{record.author}</dd></div>}
                <div><dt>{t(UI.year)}</dt><dd>{record.year}</dd></div>
                <div><dt>{t(UI.prov)}</dt><dd>{t(record.place)}, {record.country}</dd></div>
                <div><dt>{t(UI.format)}</dt><dd>{t(record.format)}</dd></div>
                <div><dt>{t(UI.coll)}</dt><dd>{t(record.collection)}</dd></div>
                <div><dt>{t(UI.rights)}</dt><dd>{t(record.rights)}</dd></div>
              </dl>
              {record.usedIn && <p className="sheet-used">{t(UI.used)} <a href={record.usedIn.href + "?lang=" + lang}>{t(record.usedIn.title)} →</a></p>}
              {record.img ? (
                <p className="sheet-note">
                  {record.author ? t(record.type === "Illustrations" ? UI.credIll : UI.credPh) + ": " + record.author + ", " + record.year + ". " : ""}{t(UI.hires)} {mail}.
                </p>
              ) : (
                <p className="sheet-note">{t(UI.notOnline)} {mail}.</p>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="shell footer-grid">
          <div className="brand">
            <img src="images/logo-mark.png" alt="" aria-hidden="true" className="footer-mark" style={{ height: 64, width: "auto" }} />
            <div className="big">Carnavarium</div>
            <div className="slogan">"Where carnival world goes digital unfurled."</div>
          </div>
          <div className="col">
            <h5>{t(UI.sections)}</h5>
            <ul>
              <li><a href="index.html#project">{t(UI.me)}</a></li>
              <li><a href="index.html#timeline">{t(UI.nav[1][1])}</a></li>
              <li><a href="index.html#world">{t(UI.nav[2][1])}</a></li>
              <li><a href="archive.html">{t(UI.title)}</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Legal</h5>
            <ul>
              <li><a href="impressum.html">Impressum</a></li>
              <li><a href="datenschutz.html">Datenschutz</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>{t(UI.contact)}</h5>
            <ul>
              <li>oscaraquite.x@gmail.com</li>
              <li>Luitpoldstraße 10<br />93047 Regensburg, DE</li>
            </ul>
          </div>
          <div className="legal">
            <span>© 2026 Carnavarium · {t(UI.dh)}</span>
            <span><a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a></span>
          </div>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ArchivePage />);
