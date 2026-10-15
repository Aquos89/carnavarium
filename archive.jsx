/* global React */
const { useState, useMemo } = React;

/* ============================================================
   Archive — the collection, browsable.
   Data lives in ARCHIVE_ITEMS; swap in real records as they come.
   ============================================================ */

const ARCHIVE_ITEMS = [
  { id: "AR-0142", title: "Letanía de los Coyongos", desc: "Grabación de campo de la danza de relación en su formato tradicional, con caja, guacharaca y voz.", type: "Music", year: 1987, place: "Barranquilla", country: "CO", rights: "Con permiso", format: "Audio · 12 min", collection: "Danzas de relación" },
  { id: "AR-0211", title: "Notas sobre la inversión del mundo", desc: "Ejemplar anotado del capítulo sobre el carnavalesco, con marginalia de un lector no identificado.", type: "Texts", year: 1965, place: "Moscú", country: "RU", rights: "Dominio público", format: "PDF · 38 pp.", collection: "Teoría del carnaval" },
  { id: "AR-0339", title: "Lectura del Bando, Plaza de la Paz", desc: "Transferencia digital de un carrete de 8mm. Registro del acto de proclamación frente a la catedral.", type: "Videos", year: 1972, place: "Barranquilla", country: "CO", rights: "Con permiso", format: "Video · 6 min", collection: "Ceremonias de apertura" },
  { id: "AR-0407", title: "Diablos de Yare — máscaras y procesión", desc: "Serie fotográfica de la festividad, con detalle de la construcción de máscaras de cartón piedra.", type: "Photographs", year: 2001, place: "San Francisco de Yare", country: "VE", rights: "CC BY-NC", format: "24 imágenes", collection: "Máscaras del Caribe" },
  { id: "AR-0512", title: "Die Narrenkappe und die Umkehrung der Ordnung", desc: "Estudio sobre el gorro de bufón como signo de la suspensión temporal de la jerarquía social.", type: "Texts", year: 1998, place: "Colonia", country: "DE", rights: "Solo consulta", format: "PDF · 22 pp.", collection: "Fastnacht" },
  { id: "AR-0628", title: "Mangueira — ensayo de escola de samba", desc: "Metraje de archivo del ensayo previo al desfile, con la bateria completa en la cuadra.", type: "Videos", year: 1984, place: "Río de Janeiro", country: "BR", rights: "Solo consulta", format: "Video · 19 min", collection: "Escolas de samba" },
  { id: "AR-0701", title: "Renegades Panyard — ensayo de steelband", desc: "Registro sonoro de la sección de tenores durante el ensayo de Panorama.", type: "Music", year: 2019, place: "Puerto España", country: "TT", rights: "CC BY-NC", format: "Audio · 31 min", collection: "Steelpan" },
  { id: "AR-0823", title: "Diablada — notación coreográfica", desc: "Transcripción de las figuras de la danza, con esquemas de desplazamiento en planta.", type: "Texts", year: 2014, place: "Oruro", country: "BO", rights: "CC BY", format: "PDF · 14 pp.", collection: "Coreografías andinas" },
  { id: "AR-0904", title: "Las cuatro fiestas — Adolfo Echeverría", desc: "Prensado original en vinilo de 45 rpm, cara A. Voz de Nury Borrás.", type: "Music", year: 1972, place: "Barranquilla", country: "CO", rights: "Solo consulta", format: "Audio · 3 min", collection: "Discografía carnavalera" },
  { id: "AR-1015", title: "Carnaval de Basel — Morgestraich", desc: "Fotografías del inicio nocturno del cortejo, con los faroles pintados a mano.", type: "Photographs", year: 2018, place: "Basilea", country: "CH", rights: "CC BY-NC", format: "16 imágenes", collection: "Fasnacht" },
  { id: "AR-1122", title: "Fastnachtspiel — texto y acotaciones", desc: "Edición de un juego de carnaval del siglo XVI, con las acotaciones escénicas originales.", type: "Texts", year: 1553, place: "Núremberg", country: "DE", rights: "Dominio público", format: "PDF · 46 pp.", collection: "Teatro carnavalesco" },
  { id: "AR-1208", title: "Garabato — vestuario y utilería", desc: "Documentación fotográfica del traje completo: capa, sombrero y el garabato como objeto.", type: "Photographs", year: 2016, place: "Barranquilla", country: "CO", rights: "CC BY", format: "31 imágenes", collection: "Danzas de relación" },
];

const TYPE_KEY = { Texts: "text", Photographs: "photo", Videos: "video", Music: "audio" };
const TYPE_ES  = { Texts: "Textos", Photographs: "Fotografías", Videos: "Videos", Music: "Música" };

function ArchivePage() {
  const [type, setType] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("recent");
  const [open, setOpen] = useState(null);

  const counts = useMemo(() => {
    const c = { All: ARCHIVE_ITEMS.length };
    for (const it of ARCHIVE_ITEMS) c[it.type] = (c[it.type] || 0) + 1;
    return c;
  }, []);

  const items = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let out = ARCHIVE_ITEMS.filter(it => {
      if (type !== "All" && it.type !== type) return false;
      if (!needle) return true;
      return [it.title, it.desc, it.place, it.collection, it.id, String(it.year)]
        .join(" ").toLowerCase().includes(needle);
    });
    out = [...out].sort((a, b) =>
      sort === "recent" ? b.year - a.year :
      sort === "oldest" ? a.year - b.year :
      a.title.localeCompare(b.title, "es"));
    return out;
  }, [type, q, sort]);

  const record = open != null ? ARCHIVE_ITEMS.find(i => i.id === open) : null;

  return (
    <>
      <nav className="legal-nav">
        <div className="shell row">
          <a className="wordmark" href="index.html">
            <img src="images/logo-mark.png" alt="" aria-hidden="true" className="logo-mark" />
            <span>carnavarium</span>
          </a>
          <a className="back" href="index.html">← Inicio</a>
        </div>
      </nav>

      <header className="shell arch-head">
        <div className="eyebrow" style={{ marginBottom: 20 }}>§ 05 · La colección</div>
        <h1>Archive</h1>
        <p className="arch-deck">
          Una colección digital de materiales carnavalescos — textos, fotografías,
          videos y música. Cada objeto conserva su procedencia, su formato y las
          condiciones bajo las que puede consultarse.
        </p>
        <div className="arch-stats">
          <div className="stat"><span className="num">{counts.All}</span><span className="lab">Objetos</span></div>
          <div className="stat"><span className="num">{new Set(ARCHIVE_ITEMS.map(i => i.country)).size}</span><span className="lab">Países</span></div>
          <div className="stat"><span className="num">{new Set(ARCHIVE_ITEMS.map(i => i.collection)).size}</span><span className="lab">Colecciones</span></div>
          <div className="stat"><span className="num">{Math.min(...ARCHIVE_ITEMS.map(i => i.year))}</span><span className="lab">Más antiguo</span></div>
        </div>
      </header>

      <div className="shell arch-controls">
        <div className="arch-search">
          <input
            type="search"
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Buscar por título, lugar, año o colección…"
            aria-label="Buscar en el archivo"
          />
          {q && <button className="clear" onClick={() => setQ("")} aria-label="Limpiar búsqueda">×</button>}
        </div>
        <div className="arch-filters">
          {["All", "Texts", "Photographs", "Videos", "Music"].map(f => (
            <button key={f} className={type === f ? "active" : ""} onClick={() => setType(f)}>
              {f === "All" ? "Todo" : TYPE_ES[f]}
              <span className="n">{counts[f] || 0}</span>
            </button>
          ))}
        </div>
        <div className="arch-sort">
          <label htmlFor="sort">Orden</label>
          <select id="sort" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="recent">Más reciente</option>
            <option value="oldest">Más antiguo</option>
            <option value="title">Título</option>
          </select>
        </div>
      </div>

      <main className="shell arch-main">
        <div className="arch-count">
          {items.length === counts.All
            ? `${items.length} objetos`
            : `${items.length} de ${counts.All} objetos`}
        </div>

        {items.length === 0 ? (
          <div className="arch-empty">
            <p>No hay objetos que coincidan con esa búsqueda.</p>
            <button onClick={() => { setQ(""); setType("All"); }}>Ver todo el archivo</button>
          </div>
        ) : (
          <div className="arch-grid">
            {items.map(it => (
              <article className="arch-card" key={it.id} onClick={() => setOpen(it.id)}>
                <div className={"arch-thumb t-" + TYPE_KEY[it.type]}>
                  <span className="ph">{TYPE_ES[it.type]}</span>
                </div>
                <div className="arch-card-body">
                  <div className="arch-card-top">
                    <span className="id">{it.id}</span>
                    <span className={"type-pill type-" + TYPE_KEY[it.type]}>{TYPE_ES[it.type]}</span>
                  </div>
                  <h3>{it.title}</h3>
                  <p className="desc">{it.desc}</p>
                  <div className="arch-card-meta">
                    <span>{it.place}, {it.country}</span>
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
          <div className="arch-sheet" onClick={e => e.stopPropagation()} role="dialog" aria-label={record.title}>
            <button className="sheet-x" onClick={() => setOpen(null)} aria-label="Cerrar">×</button>
            <div className={"sheet-thumb t-" + TYPE_KEY[record.type]}>
              <span className="ph">{TYPE_ES[record.type]}</span>
            </div>
            <div className="sheet-body">
              <div className="sheet-id">{record.id}</div>
              <h2>{record.title}</h2>
              <p className="sheet-desc">{record.desc}</p>
              <dl className="sheet-dl">
                <div><dt>Tipo</dt><dd>{TYPE_ES[record.type]}</dd></div>
                <div><dt>Año</dt><dd>{record.year}</dd></div>
                <div><dt>Procedencia</dt><dd>{record.place}, {record.country}</dd></div>
                <div><dt>Formato</dt><dd>{record.format}</dd></div>
                <div><dt>Colección</dt><dd>{record.collection}</dd></div>
                <div><dt>Derechos</dt><dd>{record.rights}</dd></div>
              </dl>
              <p className="sheet-note">
                El objeto digital aún no está disponible en línea. Para consultarlo,
                escribe a <a href="mailto:oscaraquite.x@gmail.com">oscaraquite.x@gmail.com</a>.
              </p>
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
            <h5>Sections</h5>
            <ul>
              <li><a href="index.html#project">Project &amp; Me</a></li>
              <li><a href="index.html#carnival">The Carnival</a></li>
              <li><a href="index.html#world">In the World</a></li>
              <li><a href="archive.html">Archive</a></li>
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
            <h5>Contact</h5>
            <ul>
              <li>oscaraquite.x@gmail.com</li>
              <li>Luitpoldstraße 10<br />93047 Regensburg, DE</li>
            </ul>
          </div>
          <div className="legal">
            <span>© 2026 Carnavarium · A Digital Humanities Project</span>
            <span><a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a></span>
          </div>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ArchivePage />);
