/* Carnavarium — Elementos: lo que hace reconocible a cada carnaval
   (disfraces, personajes, agrupaciones, danzas, ritmos, objetos, ritos, lugares…)
   y cómo se relacionan entre sí.

   Cómo añadir un elemento:
     E("id-sin-espacios", "tipo", ["slug-del-carnaval"],
       { es: "Nombre", en: "Name", de: "Name" },
       { es: "Descripción corta", en: "…", de: "…" },
       { img: "images/…", rel: [["relacion", "id-de-otro-elemento"]], en: [enlaces], wikidata: "Q…" })
   · tipo: una clave de ELEMENTO_TIPOS.
   · rel: cada relación se escribe UNA sola vez; la ficha del otro elemento muestra sola el sentido contrario.
   · en ("aparece en"): [{ href: "pagina.html", k: tipo-de-contenido, t: { es, en, de } }].
   · El slug del carnaval es el de carnavales.js. */

window.ELEMENTO_TIPOS = {
  "disfraz":         { es: "Disfraz", en: "Costume", de: "Kostüm", color: "#e85898" },
  "personaje":       { es: "Personaje", en: "Character", de: "Figur", color: "#886890" },
  "simbolico":       { es: "Personaje simbólico", en: "Symbolic figure", de: "Symbolfigur", color: "#c9a227" },
  "agrupacion":      { es: "Agrupación", en: "Group", de: "Gruppe", color: "#2f9e8f" },
  "tipo-agrupacion": { es: "Tipo de agrupación", en: "Type of group", de: "Gruppentyp", color: "#68b030" },
  "danza":           { es: "Danza", en: "Dance", de: "Tanz", color: "#e8704a" },
  "ritmo":           { es: "Ritmo o género musical", en: "Rhythm or genre", de: "Rhythmus oder Genre", color: "#e0a800" },
  "objeto":          { es: "Objeto", en: "Object", de: "Objekt", color: "#a0703a" },
  "rito":            { es: "Rito o evento", en: "Rite or event", de: "Ritus oder Ereignis", color: "#4a78c0" },
  "lugar":           { es: "Lugar", en: "Place", de: "Ort", color: "#6f7b6a" }
};

/* Relaciones: etiqueta en el sentido escrito y en el sentido contrario. */
window.ELEMENTO_RELACIONES = {
  "ritmo":       { es: "Se baila al ritmo de", en: "Danced to", de: "Getanzt zu",
                   inv: { es: "Es el ritmo de", en: "Rhythm of", de: "Rhythmus von" } },
  "deriva":      { es: "Deriva de", en: "Derives from", de: "Abgeleitet von",
                   inv: { es: "Da origen a", en: "Gives rise to", de: "Ursprung von" } },
  "personaje":   { es: "Personajes", en: "Characters", de: "Figuren",
                   inv: { es: "Aparece en", en: "Appears in", de: "Erscheint in" } },
  "lleva":       { es: "Lleva", en: "Carries", de: "Trägt",
                   inv: { es: "Lo lleva", en: "Carried by", de: "Getragen von" } },
  "interpreta":  { es: "Interpreta", en: "Performs", de: "Führt auf",
                   inv: { es: "Interpretado por", en: "Performed by", de: "Aufgeführt von" } },
  "protagoniza": { es: "Protagoniza", en: "Leads", de: "Steht im Mittelpunkt von",
                   inv: { es: "Protagonizado por", en: "Led by", de: "Mit" } },
  "es-un":       { es: "Tipo de agrupación", en: "Type of group", de: "Gruppentyp",
                   inv: { es: "Ejemplos", en: "Examples", de: "Beispiele" } },
  "lugar":       { es: "Tiene lugar en", en: "Takes place at", de: "Findet statt in",
                   inv: { es: "Escenario de", en: "Venue of", de: "Schauplatz von" } },
  "parecido":    { es: "Se parece a", en: "Similar to", de: "Ähnlich wie",
                   inv: { es: "Se parece a", en: "Similar to", de: "Ähnlich wie" } }
};

(function () {
  function E(id, tipo, carnavales, nombre, resumen, x) {
    x = x || {};
    return { id: id, tipo: tipo, carnavales: carnavales, nombre: nombre, resumen: resumen,
      img: x.img || "", rel: (x.rel || []).map(function (r) { return { tipo: r[0], a: r[1] }; }),
      en: x.en || [], wikidata: x.wikidata || "" };
  }
  function N(es, en, de) { return { es: es, en: en === undefined ? es : en, de: de === undefined ? es : de }; }

  var ESP = { es: "Especial", en: "Special", de: "Spezial" }, ENS = { es: "Ensayo", en: "Essay", de: "Essay" },
      TES = { es: "Tesis", en: "Thesis", de: "Abschlussarbeit" }, ARC = { es: "Archivo", en: "Archive", de: "Archiv" };
  var CUMBIA = { href: "especial-cumbia.html", k: ESP, t: N("Ruta de la cumbia", "The Cumbia Route", "Die Cumbia-Route") },
      GARABATO = { href: "ensayo-garabato.html", k: ENS, t: N("¿Realeza venida a menos? Música, dinámicas de clase y moral en el Carnaval de Barranquilla", "Royalty downgrade? Music, class dynamics, and morality in the Carnival of Barranquilla", "Königlicher Abstieg? Musik, Klassendynamik und Moral im Karneval von Barranquilla") },
      MUSICA = { href: "ensayo-musica-carnaval.html", k: ENS, t: N("La música del Carnaval de Barranquilla: patrimonio vivo", "The Music of the Barranquilla Carnival: A Living Heritage", "Die Musik des Karnevals von Barranquilla: lebendiges Erbe") },
      MACTA = { href: "ensayo-macta-llega.html", k: ENS, t: N("Llegó Macta: música, comunidad y redes sociales en el Carnaval de Barranquilla", "Macta arrived: Music, community, and social media in Barranquilla’s Carnival", "Macta ist da: Musik, Gemeinschaft und soziale Medien im Karneval von Barranquilla") },
      TESIS = { href: "tesis-la-puntica.html", k: TES, t: N("Between millo and picó") },
      JIPS = { href: "archive.html?id=AR-1302", k: ARC, t: N("Danza de las marimondas — JIPS, 2019") };
  var BAQ = ["barranquilla"];

  window.ELEMENTOS = [
    /* ---------- Barranquilla · la Danza del Garabato ---------- */
    E("danza-del-garabato", "danza", BAQ, N("Danza del Garabato", "Garabato Dance", "Garabato-Tanz"),
      N("Danza que escenifica la lucha entre la vida y la muerte: el Caporal se enfrenta a la Muerte. Su nombre viene del palo con gancho que llevan los bailarines.",
        "Dance that stages the struggle between life and death: the Caporal faces Death. It is named after the hooked stick the dancers carry.",
        "Tanz, der den Kampf zwischen Leben und Tod inszeniert: Der Caporal tritt gegen den Tod an. Benannt ist er nach dem Hakenstock der Tänzer."),
      { rel: [["ritmo", "son-de-garabato"], ["personaje", "caporal"], ["personaje", "la-muerte"]], en: [GARABATO] }),
    E("son-de-garabato", "ritmo", BAQ, N("Son de garabato", "Son de garabato", "Son de garabato"),
      N("Ritmo con el que se baila la Danza del Garabato.", "Rhythm to which the Garabato Dance is performed.", "Rhythmus, zu dem der Garabato-Tanz getanzt wird."),
      { img: "images/ritmo-son-de-garabato.png", rel: [["deriva", "chande"]], en: [CUMBIA] }),
    E("chande", "ritmo", BAQ, N("Chandé", "Chandé", "Chandé"),
      N("Ritmo de tambores del Caribe colombiano del que deriva el son de garabato.", "Drum rhythm from the Colombian Caribbean from which the son de garabato derives.", "Trommelrhythmus der kolumbianischen Karibik, aus dem der Son de garabato hervorgeht."),
      { img: "images/ritmo-chande.png", en: [CUMBIA] }),
    E("caporal", "personaje", BAQ, N("Caporal", "Caporal", "Caporal"),
      N("Personaje que guía a los bailarines de la Danza del Garabato y se enfrenta a la Muerte.", "Character who leads the dancers of the Garabato Dance and confronts Death.", "Figur, die die Tänzer des Garabato-Tanzes anführt und sich dem Tod stellt."),
      { rel: [["lleva", "garabato-baston"]], en: [GARABATO] }),
    E("la-muerte", "personaje", BAQ, N("La Muerte", "Death (La Muerte)", "Der Tod (La Muerte)"),
      N("Personaje de la Danza del Garabato que representa a la muerte y se enfrenta al Caporal.", "Character in the Garabato Dance who embodies death and confronts the Caporal.", "Figur des Garabato-Tanzes, die den Tod verkörpert und gegen den Caporal antritt."),
      { en: [GARABATO] }),
    E("garabato-baston", "objeto", BAQ, N("Garabato (bastón)", "Garabato (stick)", "Garabato (Stock)"),
      N("Palo con un gancho en la punta que llevan los bailarines y que da nombre a la danza.", "Stick with a hook at the tip, carried by the dancers, which gives the dance its name.", "Stock mit Haken an der Spitze, den die Tänzer tragen und der dem Tanz seinen Namen gibt."),
      {}),

    /* ---------- Barranquilla · disfraces y personajes ---------- */
    E("marimonda", "disfraz", BAQ, N("Marimonda", "Marimonda", "Marimonda"),
      N("Disfraz de máscara con trompa, orejas grandes y traje de colores; se burla de la élite y es símbolo del carnaval. Sus movimientos jocosos acompañan los fandangos.",
        "Mask costume with a trunk-like nose, large ears and a colourful suit; it mocks the elite and is a symbol of the carnival. Its playful moves follow the fandangos.",
        "Maskenkostüm mit rüsselartiger Nase, großen Ohren und buntem Anzug; verspottet die Elite und ist ein Symbol des Karnevals. Seine spaßhaften Bewegungen folgen den Fandangos."),
      { rel: [["ritmo", "fandango"]], en: [MUSICA, JIPS] }),
    E("monocuco", "disfraz", BAQ, N("Monocuco", "Monocuco", "Monocuco"),
      N("Disfraz de capucha y máscara de tela satinada que oculta por completo la identidad de quien lo lleva.", "Costume of satin hood and mask that completely hides the wearer’s identity.", "Kostüm aus Satinkapuze und Maske, das die Identität der Trägerin oder des Trägers vollständig verbirgt."),
      {}),
    E("joselito-carnaval", "simbolico", BAQ, N("Joselito Carnaval", "Joselito Carnaval", "Joselito Carnaval"),
      N("Personaje que «muere» el martes de carnaval; su entierro, llorado por viudas, cierra la fiesta.", "Character who “dies” on Carnival Tuesday; his burial, mourned by widows, closes the festivities.", "Figur, die am Karnevalsdienstag „stirbt“; ihr von Witwen beweintes Begräbnis beendet das Fest."),
      { rel: [["protagoniza", "entierro-de-joselito"]] }),
    E("rey-momo", "simbolico", BAQ, N("Rey Momo", "King Momo", "König Momo"),
      N("Rey del carnaval. Cada año el título reconoce a un hacedor de la fiesta, a menudo director de una danza o un grupo tradicional.", "King of the carnival. Each year the title honours one of the festival’s makers, often the director of a traditional dance or group.", "König des Karnevals. Jedes Jahr ehrt der Titel einen Macher des Fests, oft den Leiter eines traditionellen Tanzes oder einer Gruppe."),
      {}),

    /* ---------- Barranquilla · ritos, eventos y lugares ---------- */
    E("lectura-del-bando", "rito", BAQ, N("Lectura del Bando", "Lectura del Bando", "Lectura del Bando"),
      N("Ceremonia de apertura en la que la Reina del Carnaval lee el decreto que ordena la fiesta.", "Opening ceremony in which the Carnival Queen reads the decree that orders the city to celebrate.", "Eröffnungszeremonie, in der die Karnevalskönigin das Dekret verliest, das die Stadt zum Feiern verpflichtet."),
      {}),
    E("guacherna", "rito", BAQ, N("Guacherna", "Guacherna", "Guacherna"),
      N("Desfile nocturno con faroles, velas y tambores, previo a los días centrales del carnaval.", "Night parade with lanterns, candles and drums, held before the main carnival days.", "Nächtlicher Umzug mit Laternen, Kerzen und Trommeln vor den Hauptkarnevalstagen."),
      {}),
    E("batalla-de-flores", "rito", BAQ, N("Batalla de Flores", "Battle of Flowers", "Blumenschlacht (Batalla de Flores)"),
      N("Gran desfile del sábado de carnaval, celebrado desde 1903.", "Grand parade on Carnival Saturday, held since 1903.", "Großer Umzug am Karnevalssamstag, seit 1903."),
      { rel: [["lugar", "via-40"]], en: [MACTA, GARABATO, CUMBIA] }),
    E("entierro-de-joselito", "rito", BAQ, N("Entierro de Joselito", "Burial of Joselito", "Begräbnis des Joselito"),
      N("Cortejo fúnebre burlesco del martes de carnaval: las viudas lloran a Joselito y con su entierro termina la fiesta.", "Mock funeral procession on Carnival Tuesday: widows mourn Joselito, and his burial ends the festivities.", "Burlesker Trauerzug am Karnevalsdienstag: Witwen beweinen Joselito, mit seinem Begräbnis endet das Fest."),
      {}),
    E("via-40", "lugar", BAQ, N("Vía 40", "Vía 40", "Vía 40"),
      N("Avenida de Barranquilla por la que pasan los grandes desfiles del carnaval.", "Barranquilla avenue along which the carnival’s grand parades pass.", "Straße in Barranquilla, über die die großen Karnevalsumzüge ziehen."),
      {}),
    E("plaza-de-la-paz", "lugar", BAQ, N("Plaza de la Paz", "Plaza de la Paz", "Plaza de la Paz"),
      N("Plaza central de Barranquilla, frente a la catedral metropolitana; escenario de actos del carnaval.", "Barranquilla’s central square, facing the metropolitan cathedral; a venue for carnival events.", "Zentraler Platz Barranquillas gegenüber der Kathedrale; Schauplatz von Karnevalsveranstaltungen."),
      {}),

    /* ---------- Barranquilla · danzas, ritmos, agrupaciones ---------- */
    E("congo", "danza", BAQ, N("Congo", "Congo", "Congo"),
      N("Danza de guerreros de raíz africana, con turbantes floridos y cintas; los grupos más antiguos datan del siglo XIX.", "Warrior dance of African roots, with flowered turbans and ribbons; the oldest groups date from the 19th century.", "Kriegertanz afrikanischen Ursprungs mit geblümten Turbanen und Bändern; die ältesten Gruppen stammen aus dem 19. Jahrhundert."),
      {}),
    E("cumbia", "ritmo", BAQ, N("Cumbia", "Cumbia", "Cumbia"),
      N("Ritmo y baile del Caribe colombiano, convertido en emblema del carnaval y del país.", "Rhythm and dance of the Colombian Caribbean, which became an emblem of the carnival and of the country.", "Rhythmus und Tanz der kolumbianischen Karibik, zum Wahrzeichen des Karnevals und des Landes geworden."),
      { en: [CUMBIA] }),
    E("fandango", "ritmo", BAQ, N("Fandango", "Fandango", "Fandango"),
      N("Género y baile del Caribe colombiano, tocado por bandas de viento y bailado en rueda alrededor de los músicos.", "Genre and dance of the Colombian Caribbean, played by wind bands and danced in a ring around the musicians.", "Genre und Tanz der kolumbianischen Karibik, von Blaskapellen gespielt und im Kreis um die Musiker getanzt."),
      { en: [MUSICA] }),
    E("sombrero-vueltiao", "objeto", BAQ, N("Sombrero vueltiao", "Sombrero vueltiao", "Sombrero vueltiao"),
      N("Sombrero de caña flecha trenzada en franjas blancas y negras, símbolo cultural de Colombia.", "Hat of braided caña flecha fibre in black and white bands, a cultural symbol of Colombia.", "Hut aus geflochtener Caña-flecha-Faser in schwarz-weißen Bändern, ein kulturelles Symbol Kolumbiens."),
      {}),
    E("cumbiamba", "tipo-agrupacion", BAQ, N("Cumbiamba", "Cumbiamba", "Cumbiamba"),
      N("Grupo de danza que baila cumbia en el carnaval, con el atuendo tradicional: pollera, camisa blanca, pañuelo rojo y sombrero vueltiao.", "Dance group that performs cumbia in the carnival in traditional dress: pollera skirt, white shirt, red scarf and sombrero vueltiao.", "Tanzgruppe, die im Karneval Cumbia tanzt, in traditioneller Tracht: Pollera, weißes Hemd, rotes Halstuch und Sombrero vueltiao."),
      { img: "images/desfile-cumbiamba.jpg", rel: [["ritmo", "cumbia"], ["lleva", "sombrero-vueltiao"]], en: [CUMBIA] }),
    E("comparsa", "tipo-agrupacion", BAQ, N("Comparsa", "Comparsa", "Comparsa"),
      N("Agrupación que desfila con un disfraz, una coreografía y una música comunes.", "Group that parades with a shared costume, choreography and music.", "Gruppe, die mit gemeinsamem Kostüm, gemeinsamer Choreografie und Musik im Umzug auftritt."),
      {}),
    E("teatro", "tipo-agrupacion", BAQ, N("Teatro de carnaval", "Carnival theatre", "Karnevalstheater"),
      N("Agrupaciones que llevan al desfile o a la tarima piezas teatrales, comedias y sátiras.", "Groups that bring theatre pieces, comedies and satires to the parade or the stage.", "Gruppen, die Theaterstücke, Komödien und Satiren in den Umzug oder auf die Bühne bringen."),
      {}),
    E("papayera", "tipo-agrupacion", BAQ, N("Papayera", "Papayera (brass band)", "Papayera (Blaskapelle)"),
      N("Banda de vientos y percusión del Caribe colombiano que anima fiestas y desfiles.", "Wind and percussion band from the Colombian Caribbean that livens up festivities and parades.", "Bläser- und Perkussionskapelle der kolumbianischen Karibik, die Feste und Umzüge belebt."),
      { rel: [["interpreta", "fandango"]] }),
    E("la-puntica", "agrupacion", BAQ, N("La Puntica No Ma’"),
      N("Comparsa de Barranquilla estudiada en la tesis de maestría «Between millo and picó».", "Barranquilla comparsa studied in the master’s thesis “Between millo and picó”.", "Comparsa aus Barranquilla, untersucht in der Masterarbeit „Between millo and picó“."),
      { rel: [["es-un", "comparsa"], ["interpreta", "cumbia"]], en: [TESIS, CUMBIA] }),

    /* ---------- Río de Janeiro ---------- */
    E("escola-de-samba", "tipo-agrupacion", ["rio"], N("Escola de samba"),
      N("Agrupación comunitaria que compite en el desfile con un tema, una canción y miles de integrantes.", "Community association that competes in the parade with a theme, a song and thousands of members.", "Gemeinschaftsverein, der mit Thema, Lied und Tausenden Mitgliedern im Umzug antritt."),
      {}),
    E("portela", "agrupacion", ["rio"], N("Portela"),
      N("Escola de samba de Río de Janeiro fundada en 1923, una de las más antiguas y laureadas.", "Rio de Janeiro samba school founded in 1923, one of the oldest and most decorated.", "1923 gegründete Sambaschule aus Rio de Janeiro, eine der ältesten und erfolgreichsten."),
      { rel: [["es-un", "escola-de-samba"]] }),

    /* ---------- Colonia ---------- */
    E("narrenkappe", "objeto", ["colonia"], N("Narrenkappe"),
      N("Gorro de bufón que llevan los miembros de las sociedades de carnaval; cada sociedad tiene sus colores.", "Fool’s cap worn by members of the carnival societies; each society has its own colours.", "Narrenkappe der Mitglieder der Karnevalsgesellschaften; jede Gesellschaft hat ihre eigenen Farben."),
      {}),
    E("kamelle", "objeto", ["colonia"], N("Kamelle"),
      N("Caramelos que se lanzan desde las carrozas al grito de «Kamelle!».", "Sweets thrown from the floats to cries of “Kamelle!”.", "Süßigkeiten, die unter „Kamelle!“-Rufen von den Wagen geworfen werden."),
      {}),

    /* ---------- Montevideo y Cádiz ---------- */
    E("murga", "tipo-agrupacion", ["montevideo", "cadiz"], N("Murga"),
      N("Coro teatral que canta crítica social y política con humor; heredero del carnaval de Cádiz.", "Theatrical chorus singing social and political critique with humour; heir to the Cádiz carnival.", "Theaterchor, der mit Humor soziale und politische Kritik singt; Erbe des Karnevals von Cádiz."),
      {})
  ];

  /* ---------- utilidades para las páginas ---------- */
  var byId = {};
  window.ELEMENTOS.forEach(function (e) { byId[e.id] = e; });
  window.elemento = function (id) { return byId[id] || null; };
  window.elementosDe = function (slug) { return window.ELEMENTOS.filter(function (e) { return e.carnavales.indexOf(slug) > -1; }); };
  /* Todas las relaciones de un elemento, en los dos sentidos: [{ rel, inversa, otro }] */
  window.relacionesDe = function (id) {
    var out = [];
    window.ELEMENTOS.forEach(function (e) {
      e.rel.forEach(function (r) {
        if (!byId[r.a]) return;
        if (e.id === id) out.push({ rel: r.tipo, inversa: false, otro: byId[r.a] });
        else if (r.a === id) out.push({ rel: r.tipo, inversa: true, otro: e });
      });
    });
    return out;
  };
})();
