/* § 02 El Carnaval — calendario móvil y conceptos. Depende de T() y useState (sections.jsx). */

function easterDate(y) {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4,
    f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
    i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451),
    mo = Math.floor((h + l - 7 * m + 114) / 31), da = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(y, mo - 1, da));
}
const addD = (d, n) => new Date(d.getTime() + n * 864e5);
const MON = {
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  de: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
};
const fmtD = d => T(d.getUTCDate() + " " + MON.es[d.getUTCMonth()], MON.en[d.getUTCMonth()] + " " + d.getUTCDate(), d.getUTCDate() + ". " + MON.de[d.getUTCMonth()]);
const fmtR = (a, b) => a.getTime() === b.getTime() ? fmtD(a) : <>{fmtD(a)} – {fmtD(b)}</>;

/* offsets relativos al Domingo de Pascua (E). Martes de Carnaval = E−47. fixed: [mes, día inicio, día fin] */
const CAL_ROWS = [
  { slug: "pasto", name: T("Pasto", "Pasto", "Pasto"), color: "var(--purple)", fixed: [0, 2, 7] },
  { slug: "venecia", name: T("Venecia", "Venice", "Venedig"), color: "var(--teal)", o: [-64, -47], approx: true },
  { slug: "colonia", name: T("Colonia", "Cologne", "Köln"), color: "var(--green)", o: [-52, -47] },
  { slug: "cadiz", name: T("Cádiz", "Cádiz", "Cádiz"), color: "var(--teal)", o: [-52, -42] },
  { slug: "salvador", name: "Salvador", color: "var(--amber)", o: [-52, -46] },
  { slug: "rio", name: T("Río de Janeiro", "Rio de Janeiro", "Rio de Janeiro"), color: "var(--amber)", o: [-51, -46] },
  { slug: "recife", name: "Recife", color: "var(--amber)", o: [-50, -46] },
  { slug: "barranquilla", name: "Barranquilla", color: "var(--coral)", o: [-50, -47] },
  { slug: "oruro", name: "Oruro", color: "var(--purple)", o: [-50, -47] },
  { slug: "binche", name: "Binche", color: "var(--green)", o: [-49, -47] },
  { slug: "port-of-spain", name: T("Puerto España", "Port of Spain", "Port of Spain"), color: "var(--coral)", o: [-48, -47] },
  { slug: "nueva-orleans", name: T("Nueva Orleans", "New Orleans", "New Orleans"), color: "var(--coral)", o: [-47, -47] },
  { slug: "basilea", name: T("Basilea", "Basel", "Basel"), color: "var(--green)", o: [-41, -39] },
];

function CarnivalCalendar() {
  const today = new Date();
  const thisY = today.getFullYear();
  const defY = today > addD(easterDate(thisY), -46) ? thisY + 1 : thisY;
  const [y, setY] = useState(defY);
  const E = easterDate(y), tue = addD(E, -47), ash = addD(E, -46);
  const start = Date.UTC(y, 0, 1), end = Date.UTC(y, 3, 1), span = end - start;
  const pct = d => ((d.getTime() - start) / span) * 100;
  const rows = CAL_ROWS.map(r => {
    const a = r.fixed ? new Date(Date.UTC(y, r.fixed[0], r.fixed[1])) : addD(E, r.o[0]);
    const b = r.fixed ? new Date(Date.UTC(y, r.fixed[0], r.fixed[2])) : addD(E, r.o[1]);
    return { ...r, a, b };
  });
  const months = [0, 1, 2].map(m => ({ m, left: pct(new Date(Date.UTC(y, m, 1))) }));
  return (
    <div className="cc">
      <div className="cc-explain">
        <p className="cc-lead">{T(
          <>El carnaval termina el <b>Martes de Carnaval</b>, la víspera del Miércoles de Ceniza, que abre la Cuaresma. Ese martes cae siempre <b>47 días antes del Domingo de Pascua</b>, y la Pascua es el primer domingo después de la primera luna llena de primavera.</>,
          <>Carnival ends on <b>Shrove Tuesday</b>, the eve of Ash Wednesday, which opens Lent. That Tuesday always falls <b>47 days before Easter Sunday</b>, and Easter is the first Sunday after the first full moon of spring.</>,
          <>Der Karneval endet am <b>Fastnachtsdienstag</b>, dem Vorabend des Aschermittwochs, mit dem die Fastenzeit beginnt. Dieser Dienstag liegt immer <b>47 Tage vor Ostersonntag</b> – und Ostern ist der erste Sonntag nach dem ersten Frühlingsvollmond.</>
        )}</p>
        <p className="cc-note">{T("Por eso la fecha se mueve cada año entre el 3 de febrero y el 9 de marzo.", "That is why the date moves every year between 3 February and 9 March.", "Deshalb wandert das Datum jedes Jahr zwischen dem 3. Februar und dem 9. März.")}</p>
        <div className="cc-year">
          <button type="button" onClick={() => setY(y - 1)} aria-label="−1">←</button>
          <span className="cc-y">{y}</span>
          <button type="button" onClick={() => setY(y + 1)} aria-label="+1">→</button>
          {y !== defY && <button type="button" className="cc-reset" onClick={() => setY(defY)}>{T("Próximo", "Next", "Nächster")}</button>}
        </div>
        <dl className="cc-keys">
          <div><dt>{T("Martes de Carnaval", "Shrove Tuesday", "Fastnachtsdienstag")}</dt><dd>{fmtD(tue)}</dd></div>
          <div><dt>{T("Miércoles de Ceniza", "Ash Wednesday", "Aschermittwoch")}</dt><dd>{fmtD(ash)}</dd></div>
          <div><dt>{T("Domingo de Pascua", "Easter Sunday", "Ostersonntag")}</dt><dd>{fmtD(E)}</dd></div>
        </dl>
      </div>
      <div className="cc-chart">
        <div className="cc-axis">
          {months.map(mm => <span key={mm.m} style={{ left: mm.left + "%" }}>{T(MON.es[mm.m], MON.en[mm.m], MON.de[mm.m])}</span>)}
        </div>
        <div className="cc-rows">
          <div className="cc-over">
            {months.map(mm => <i key={mm.m} className="cc-grid" style={{ left: mm.left + "%" }}></i>)}
            <i className="cc-ash" style={{ left: pct(ash) + "%" }}><span>{T("Ceniza", "Ash Wed.", "Aschermittwoch")}</span></i>
          </div>
          {rows.map(r => (
            <a key={r.slug} className="cc-row" href={"carnaval.html?c=" + r.slug}>
              <span className="cc-name">{r.name}</span>
              <span className="cc-track">
                <span className={"cc-bar" + (r.fixed ? " fixed" : "")} style={{ left: pct(r.a) + "%", width: `max(8px, ${pct(addD(r.b, 1)) - pct(r.a)}%)`, background: r.color }}></span>
                <span className="cc-dates" style={{ left: `calc(${pct(addD(r.b, 1))}% + 8px)` }}>{fmtR(r.a, r.b)}{r.approx ? " (≈)" : ""}</span>
              </span>
            </a>
          ))}
        </div>
        <div className="cc-legend">
          <span><i className="cc-sw"></i>{T("Fecha móvil, según la Pascua", "Moveable date, set by Easter", "Bewegliches Datum, nach Ostern")}</span>
          <span><i className="cc-sw fixed"></i>{T("Fecha fija", "Fixed date", "Festes Datum")}</span>
          <span>{T("Colonia abre su temporada el 11.11 a las 11:11", "Cologne opens its season on 11.11 at 11:11", "Köln eröffnet die Session am 11.11. um 11:11 Uhr")}</span>
        </div>
      </div>
    </div>
  );
}

const CONCEPTS = [
  { k: T("Lo carnavalesco", "The carnivalesque", "Das Karnevaleske"), who: "Mijaíl Bajtín", year: 1965, work: T("La cultura popular en la Edad Media y en el Renacimiento (sobre Rabelais)", "Rabelais and His World", "Rabelais und seine Welt"),
    d: T("El carnaval suspende por un tiempo las jerarquías: todos participan, nadie es espectador. Su risa es colectiva y ambivalente, y su imagen central es el cuerpo grotesco que come, bebe y renace.", "Carnival temporarily suspends hierarchies: everyone takes part, no one is a spectator. Its laughter is collective and ambivalent, and its central image is the grotesque body that eats, drinks and is reborn.", "Der Karneval hebt die Hierarchien auf Zeit auf: Alle machen mit, niemand ist Zuschauer. Sein Lachen ist kollektiv und ambivalent, sein zentrales Bild der groteske Leib, der isst, trinkt und neu geboren wird.") },
  { k: T("Liminalidad y communitas", "Liminality & communitas", "Liminalität & Communitas"), who: "Victor Turner", year: 1969, work: T("El proceso ritual", "The Ritual Process", "Das Ritual"),
    d: T("Los rituales abren un umbral entre dos estados en el que las normas quedan en suspenso. En ese umbral surge la communitas, un vínculo igualitario entre quienes lo atraviesan juntos.", "Rituals open a threshold between two states where norms are suspended. In it arises communitas, an egalitarian bond among those who cross together.", "Rituale öffnen eine Schwelle zwischen zwei Zuständen, auf der die Normen ruhen. Dort entsteht Communitas, eine egalitäre Verbindung derer, die sie gemeinsam überschreiten.") },
  { k: T("El mundo al revés", "The world turned upside down", "Die verkehrte Welt"), who: "Peter Burke", year: 1978, work: T("La cultura popular en la Europa moderna", "Popular Culture in Early Modern Europe", "Helden, Schurken und Narren"),
    d: T("La inversión es el gran tema del carnaval europeo: el pobre reina, el hombre se viste de mujer, el loco gobierna. ¿Válvula de escape que refuerza el orden o ensayo de su crítica?", "Inversion is the great theme of European carnival: the poor man reigns, men dress as women, the fool rules. A safety valve that reinforces order, or a rehearsal of its critique?", "Die Umkehrung ist das große Thema des europäischen Karnevals: Der Arme regiert, Männer tragen Frauenkleider, der Narr herrscht. Ventil, das die Ordnung stützt, oder Probe ihrer Kritik?") },
  { k: T("Carnaval y jerarquía", "Carnival and hierarchy", "Karneval und Hierarchie"), who: "Roberto DaMatta", year: 1979, work: "Carnavais, malandros e heróis",
    d: T("En Brasil, el carnaval es el reverso de una sociedad jerárquica: la calle se impone a la casa y el «¿sabe con quién está hablando?» deja paso, por unos días, a la igualdad.", "In Brazil, carnival is the reverse of a hierarchical society: the street prevails over the house, and “do you know who you're talking to?” gives way, for a few days, to equality.", "In Brasilien ist der Karneval die Kehrseite einer hierarchischen Gesellschaft: Die Straße siegt über das Haus, und das „Wissen Sie, mit wem Sie reden?“ weicht für ein paar Tage der Gleichheit.") },
];

function CarnivalConcepts() {
  return (
    <div className="ccp">
      {CONCEPTS.map((c, i) => (
        <article className="ccp-card" key={i}>
          <div className="ccp-y">{c.year}</div>
          <h4>{c.k}</h4>
          <p>{c.d}</p>
          <div className="ccp-src"><b>{c.who}</b> · <i>{c.work}</i></div>
        </article>
      ))}
    </div>
  );
}

Object.assign(window, { CarnivalCalendar, CarnivalConcepts });
