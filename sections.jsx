/* global React */
const { useState } = React;

/* ============================================================
   Sections of the Carnavarium home page
   ============================================================ */

function UtilityBar() {
  const items = [
    "Welcome to Carnavarium! Where carnival world goes digital unfurled.",
  ];
  const loop = [...items, ...items];
  return (
    <div className="utility">
      <div className="shell row">
        <div className="marquee">
          <span>{loop.map((t, i) => <span key={i}>◦ {t}</span>)}</span>
        </div>
        <div className="links">
          <a href="#">EN</a>
          <a href="#" style={{ opacity: 0.55 }}>DE</a>
          <a href="#" style={{ opacity: 0.55 }}>ES</a>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="shell row">
        <a className="wordmark" href="#">
          <window.LogoGlyph size={36} />
          <span>Carnavarium</span>
        </a>
        <div className="nav-links">
          <a href="#project">Project</a>
          <a href="#carnival">The Carnival</a>
          <a href="#world">In the World</a>
          <a href="#archive">Archive</a>
          <a href="#research">Research</a>
          <a href="#news">News</a>
          <a href="impressum.html">Impressum</a>
        </div>
        <a className="nav-cta" href="#archive">
          Enter Archive <span>→</span>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const palettes = [
    ["#e8826f", "#c66758", "#e6b558", "#1c1a16"],
    ["#7faec5", "#5d8aa3", "#92c5a8", "#1c1a16"],
    ["#b59cc6", "#8e5a7a", "#e8826f", "#1c1a16"],
  ];
  return (
    <section className="hero">
      <div className="shell">
        <div className="proclamation" style={{ marginBottom: 28 }}>
          <span className="pulse"></span>
          Lectura del Bando — The archive opens
        </div>

        <div className="coyongo-stage">
          <window.Coyongo palette={palettes[0]} scale={1.0} style={{ marginInline: 12 }}/>
          <window.Coyongo palette={palettes[1]} scale={1.15} style={{ marginInline: 12 }}/>
          <window.Coyongo palette={palettes[2]} scale={1.0} mirror style={{ marginInline: 12 }}/>
        </div>

        <h1 className="hero-headline">
          Where carnival<br/>
          world goes <em>digital</em><br/>
          unfurled.
        </h1>

        <div className="hero-meta">
          <p className="lede">
            A digital space to archive, research and experience carnival —
            an open laboratory weaving festival, mask, sound and excess
            into a critical form of knowledge.
          </p>
          <div className="stats">
            <div className="stat"><span className="num">1,248</span><span className="lab">Items in Archive</span></div>
            <div className="stat"><span className="num">42</span><span className="lab">Traditions Mapped</span></div>
            <div className="stat"><span className="num">17</span><span className="lab">Open Datasets</span></div>
            <div className="stat"><span className="num">9</span><span className="lab">Active Research Lines</span></div>
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
          <h2 className="title">The Project &amp; Me</h2>
          <a href="#" className="more">Read full →</a>
        </div>
        <div className="project">
          <div className="text">
            <p>
              Carnavarium acts at once as <em>archive, magazine and digital
              laboratory</em>, gathering the history and theory of carnival,
              its global manifestations, and the conferences, state initiatives
              and private projects that engage with this practice.
            </p>
            <p>
              It opens space for creative work — essays, cultural journalism,
              art and literature — alongside research from ethnomusicology,
              anthropology, political science, gender studies and
              comparative cultural analysis. A corpus is being built, and with
              it, new digital humanities tools.
            </p>
          </div>
          <div className="card">
            <div className="portrait"></div>
            <div className="name">Oscar Aquite Peña</div>
            <div className="role">Founder · Digital Humanist</div>
            <p className="blurb">
              Researcher of carnival cultures and their musical and social
              expressions. Master of Arts, Digital Humanities — Universität
              Regensburg (Germany). Master of Arts, Ethnomusicology — Universität
              Würzburg (Germany). Master of Arts, Interdisciplinary Development Studies 
               — Universidad de los Andes (Bogotá, Colombia).
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
      n: "A", title: "The Carnival",
      blurb: "Cultural and theoretical foundations: from Bakhtin's inverted world to embodied festival practice.",
      bullets: ["Timeline 1500 — Now", "Glossary of Figures", "Concepts & Theory"],
    },
    {
      n: "W", title: "Carnival in the World",
      blurb: "A global, comparative perspective on carnival traditions — annual calendar, regional studies.",
      bullets: ["Annual Calendar", "Regional Studies", "Comparative Mapping"],
    },
    {
      n: "R", title: "Research & Creation",
      blurb: "Where humanistic research meets digital experimentation. Essays, datasets, visualizations.",
      bullets: ["DH Projects", "Data Visualization", "Open Datasets"],
    },
  ];
  return (
    <section id="carnival" className="section">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 02</div>
          <h2 className="title">Three Ways In</h2>
          <a href="#" className="more">All sections →</a>
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

function World() {
  const cells = [
    { place: "Barranquilla", country: "Colombia", date: "Feb 14 — 17", color: "var(--coral)" },
    { place: "Venice",        country: "Italy",    date: "Feb 1 — 17",  color: "var(--lilac)" },
    { place: "Salvador",      country: "Brazil",   date: "Feb 12 — 17", color: "var(--mustard)" },
    { place: "Basel",         country: "Switzerland", date: "Mar 2 — 4", color: "var(--sky)" },
    { place: "Cologne",       country: "Germany",  date: "Feb 12 — 17", color: "var(--mint)" },
    { place: "Port of Spain", country: "Trinidad &amp; Tobago", date: "Feb 16 — 17", color: "var(--coral)" },
    { place: "Oruro",         country: "Bolivia",  date: "Feb 14 — 17", color: "var(--plum)" },
    { place: "New Orleans",   country: "USA",      date: "Feb 17 (Mardi Gras)", color: "var(--mustard)" },
  ];
  return (
    <section id="world" className="section" style={{ background: "var(--canvas-soft)" }}>
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 03</div>
          <h2 className="title">Carnival in the World</h2>
          <a href="#" className="more">Open atlas →</a>
        </div>
        <div className="world">
          <div className="world-intro">
            <p>
              Carnival is a global cultural phenomenon. Each tradition speaks
              its own dialect of mask, rhythm and excess — yet shares a common
              grammar of inversion and renewal.
            </p>
            <p>
              Browse the calendar; click any city to enter its dossier of
              practices, sounds, images and bibliography.
            </p>
          </div>
          <div className="world-grid">
            {cells.map((c, i) => (
              <div className="world-cell" key={i}>
                <span className="swatch" style={{ background: c.color }}></span>
                <div>
                  <div className="place">{c.place}</div>
                  <div className="country" dangerouslySetInnerHTML={{ __html: c.country }}></div>
                </div>
                <div className="date">{c.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Archive() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Texts", "Photographs", "Videos", "Music"];
  const items = [
    { id: "AR-0142", title: "Letánia de los Coyongos — field recording, 1987", year: "1987", origin: "Barranquilla, CO", type: "Music", typeKey: "audio" },
    { id: "AR-0211", title: "On the Inversion of the World — essay by Bakhtin (annot.)", year: "1965", origin: "Moscow, RU", type: "Texts", typeKey: "text" },
    { id: "AR-0339", title: "La Lectura del Bando — Plaza de la Paz (8mm transfer)", year: "1972", origin: "Barranquilla, CO", type: "Videos", typeKey: "video" },
    { id: "AR-0407", title: "Diablos de Yare — masks and processional documentation", year: "2001", origin: "San Francisco de Yare, VE", type: "Photographs", typeKey: "photo" },
    { id: "AR-0512", title: "Notes on the Narrenkappe and the temporary inversion of order", year: "1998", origin: "Köln, DE", type: "Texts", typeKey: "text" },
    { id: "AR-0628", title: "Sambaschool footage — Mangueira, archival reel", year: "1984", origin: "Rio de Janeiro, BR", type: "Videos", typeKey: "video" },
    { id: "AR-0701", title: "Steel pan ensemble — Renegades Panyard rehearsal", year: "2019", origin: "Port of Spain, TT", type: "Music", typeKey: "audio" },
    { id: "AR-0823", title: "Diablada — choreographic notation, Oruro", year: "2014", origin: "Oruro, BO", type: "Texts", typeKey: "text" },
  ];
  const visible = filter === "All" ? items : items.filter(i => i.type === filter);
  return (
    <section id="archive" className="section">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 04</div>
          <h2 className="title">Archive</h2>
          <a href="#" className="more">Browse all 1,248 items →</a>
        </div>
        <div className="archive">
          <div className="archive-filters">
            {filters.map(f => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
              >{f}</button>
            ))}
          </div>
          <div className="archive-list">
            {visible.map(it => (
              <div className="archive-row" key={it.id}>
                <span className="id">{it.id}</span>
                <span className="title">{it.title}</span>
                <span className="meta">{it.origin}</span>
                <span className="meta">{it.year}</span>
                <span className={`type-pill type-${it.typeKey}`}>{it.type}</span>
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
    { year: "1296", event: "Earliest written reference to carnevale in Venetian doge's decree.", place: "Venice, IT" },
    { year: "1500s", event: "Carnival arrives in the Spanish American colonies, fused with Indigenous and African traditions.", place: "Caribbean Coast" },
    { year: "1823", event: "Founding of the Barranquilla Carnival in its modern form.", place: "Barranquilla, CO" },
    { year: "1837", event: "First documented Mardi Gras parade in the United States.", place: "Mobile / New Orleans" },
    { year: "1928", event: "Trinidadian J'ouvert codifies its dawn-bound mas tradition.", place: "Port of Spain, TT" },
    { year: "1965", event: "Bakhtin's Rabelais and His World published — the carnivalesque enters theory.", place: "Moscow, RU" },
    { year: "2003", event: "UNESCO inscribes Oruro Carnival on Intangible Cultural Heritage list.", place: "Oruro, BO" },
    { year: "2024", event: "Carnavarium begins building its open metadata corpus.", place: "Regensburg / Barranquilla" },
  ];
  return (
    <section className="section">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 05</div>
          <h2 className="title">A Timeline of the Inverted World</h2>
          <a href="#" className="more">Full chronology →</a>
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

function Research() {
  return (
    <section id="research" className="section">
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 06</div>
          <h2 className="title">Research &amp; Creation</h2>
          <a href="#" className="more">All issues →</a>
        </div>
        <div className="editorial">
          <article className="feature-article">
            <div className="img"></div>
            <div className="kicker">Feature · Long Read</div>
            <h3>Geometries of Excess: Reading the Coyongos as Stained Glass</h3>
            <p className="deck">
              The danza de los Coyongos in Barranquilla shares a visual grammar
              with the cathedral that watches over its proclamation — colour
              blocks, partitioned light, geometric bodies in slow rotation.
            </p>
            <div className="byline">By Oscar Aquite Peña · 14 min read · Issue 01</div>
          </article>

          <div className="article-list">
            {[
              { kicker: "Essay", title: "The Mask Before the Face: a phenomenology of carnival's first hours", byline: "M. Hauer · Issue 01" },
              { kicker: "Data Story", title: "Mapping 200 years of Mardi Gras parades from city archives", byline: "K. Devereaux · Issue 01" },
              { kicker: "Field Notes", title: "On listening to a steelband from inside the engine room", byline: "T. Ramcharan · Issue 01" },
              { kicker: "Visualization", title: "A network of carnival's borrowed costumes (1900 — 2020)", byline: "Carnavarium Lab · Issue 01" },
              { kicker: "Interview", title: "With Marisol — costume maker, Sociedad de Negritos Puloy", byline: "Issue 01" },
            ].map((a, i) => (
              <article className="article-item" key={i}>
                <div className="kicker">{a.kicker}</div>
                <h4>{a.title}</h4>
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
    { date: "10 May 2026", title: "Open call for essays — Issue 02: Sound, body and the public square", tag: "Submissions" },
    { date: "02 May 2026", title: "Carnavarium presents at the DH 2026 conference, Lisbon", tag: "Conference" },
    { date: "18 Apr 2026", title: "New dataset released — 1,248 items now mappable in JSON-LD", tag: "Open Data" },
  ];
  return (
    <section id="news" className="section" style={{ paddingBottom: 64 }}>
      <div className="shell">
        <div className="sec-head">
          <div className="num">§ 07</div>
          <h2 className="title">News</h2>
          <a href="#" className="more">All updates →</a>
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
          <div className="big">Carnavarium</div>
          <div className="slogan">"Where carnival world goes digital unfurled."</div>
        </div>
        <div className="col">
          <h5>Sections</h5>
          <ul>
            <li><a href="#project">Project &amp; Me</a></li>
            <li><a href="#carnival">The Carnival</a></li>
            <li><a href="#world">In the World</a></li>
            <li><a href="#archive">Archive</a></li>
          </ul>
        </div>
        <div className="col">
          <h5>Open</h5>
          <ul>
            <li><a href="#">Open Metadata</a></li>
            <li><a href="#">API & Datasets</a></li>
            <li><a href="#">Methodology</a></li>
            <li><a href="#">Submissions</a></li>
          </ul>
        </div>
        <div className="col">
          <h5>Contact</h5>
          <ul>
            <li>oscaraquite.x<br/>@gmail.com</li>
            <li>Luitpoldstrasse 10<br/>93047 Regensburg, DE</li>
          </ul>
        </div>
        <div className="legal">
          <span>© 2026 Carnavarium · A Digital Humanities Project</span>
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