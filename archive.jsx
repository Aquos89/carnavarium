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
/* Las imágenes del archivo no se ofrecen para descargar: sin menú contextual ni arrastre. */
const NO_SAVE = { draggable: false, onContextMenu: e => e.preventDefault() };

const ARCHIVE_ITEMS = [
  { id: "AR-1301", tags: { carnavales: ["barranquilla"], elementos: ["marimonda", "sombrero-vueltiao"] }, type: "Illustrations", year: 2017, country: "CO", rights: PERM, author: "Javier Jara", img: "images/musica-carnaval.jpg",
    title: tr("Música en la calle — Carnaval de Barranquilla", "Street music — Barranquilla Carnival", "Straßenmusik — Karneval von Barranquilla"),
    desc: tr("Ilustración de músicos durante los desfiles del Carnaval de Barranquilla. Imagen de portada del artículo «La música del Carnaval de Barranquilla: patrimonio vivo».", "Illustration of musicians during the Barranquilla Carnival parades. Cover image of the article “The Music of the Barranquilla Carnival: A Living Heritage”.", "Illustration von Musikern während der Umzüge des Karnevals von Barranquilla. Titelbild des Artikels „Die Musik des Karnevals von Barranquilla: lebendiges Erbe“."),
    place: tr("Bogotá", "Bogotá", "Bogotá"), format: tr("Ilustración digital · 1 imagen", "Digital illustration · 1 image", "Digitale Illustration · 1 Bild"),
    collection: tr("Música del carnaval", "Carnival music", "Karnevalsmusik"),
    usedIn: { href: "essay-carnival-music.html", title: tr("La música del Carnaval de Barranquilla: patrimonio vivo", "The Music of the Barranquilla Carnival: A Living Heritage", "Die Musik des Karnevals von Barranquilla: lebendiges Erbe") } },
  { id: "AR-1303", tags: { carnavales: ["barranquilla"], elementos: ["marimonda", "coyongos"] }, type: "Illustrations", year: 2021, country: "CO", author: "José Palacio (JIPS)", img: "images/archivo/jips-otra-ola-que-nos-lleva.jpg",
    rights: tr("© José Palacio (JIPS) · Todos los derechos reservados", "© José Palacio (JIPS) · All rights reserved", "© José Palacio (JIPS) · Alle Rechte vorbehalten"),
    title: tr("Otra ola que nos lleva", "Otra ola que nos lleva (Another wave that carries us)", "Otra ola que nos lleva (Noch eine Welle, die uns trägt)"),
    desc: tr("Obra digital realizada en Procreate para iPad. Una ola gigante arrastra una canoa repleta de personajes del carnaval —marimondas y coyongos— frente al horizonte de rascacielos de Barranquilla; algunos caen al agua mientras otras embarcaciones navegan detrás.",
      "Digital work made in Procreate for iPad. A giant wave sweeps a canoe packed with carnival characters —marimondas and coyongos— past the high-rise skyline of Barranquilla; some fall into the water while other boats sail behind.",
      "Digitales Werk, geschaffen mit Procreate auf dem iPad. Eine riesige Welle reißt ein Kanu voller Karnevalsfiguren – Marimondas und Coyongos – an der Hochhaus-Skyline von Barranquilla vorbei; einige fallen ins Wasser, während dahinter weitere Boote fahren."),
    bio: tr("José Palacio (Barranquilla), conocido como JIPS, es un reconocido artista visual y animador colombiano, especializado en técnicas tradicionales y digitales que abarcan la animación, la pintura y la ilustración. Su trabajo expande los límites de la creación artística mediante la integración de tecnologías generativas, programación creativa y matemáticas fractales, explorando las intersecciones entre el arte, la ciencia y la tecnología para invitar a la reflexión, despertar emociones e inspirar un cambio positivo.",
      "José Palacio (Barranquilla), known as JIPS, is a renowned Colombian visual artist and animator, specialising in traditional and digital techniques spanning animation, painting and illustration. His work pushes the boundaries of artistic creation by integrating generative technologies, creative coding and fractal mathematics, exploring the intersections of art, science and technology to invite reflection, stir emotions and inspire positive change.",
      "José Palacio (Barranquilla), bekannt als JIPS, ist ein renommierter kolumbianischer bildender Künstler und Animator, spezialisiert auf traditionelle und digitale Techniken in Animation, Malerei und Illustration. Sein Werk erweitert die Grenzen des künstlerischen Schaffens durch generative Technologien, kreatives Programmieren und fraktale Mathematik und erkundet die Schnittstellen von Kunst, Wissenschaft und Technologie, um zum Nachdenken anzuregen, Emotionen zu wecken und positiven Wandel anzustoßen."),
    contact: { href: "https://www.jipslab.com/", label: "jipslab.com" },
    place: tr("Barranquilla", "Barranquilla", "Barranquilla"), format: tr("Obra digital en Procreate para iPad · 1 imagen", "Digital work in Procreate for iPad · 1 image", "Digitales Werk in Procreate auf dem iPad · 1 Bild"),
    collection: tr("Artistas del carnaval", "Carnival artists", "Karnevalskünstler") },
  { id: "AR-1304", tags: { carnavales: ["barranquilla"], elementos: ["marimonda"] }, type: "Illustrations", year: 2020, country: "CO", author: "José Palacio (JIPS)", img: "images/archivo/jips-reconstruccion-de-la-memoria.jpg",
    rights: tr("© José Palacio (JIPS) · Todos los derechos reservados", "© José Palacio (JIPS) · All rights reserved", "© José Palacio (JIPS) · Alle Rechte vorbehalten"),
    title: tr("Reconstrucción de la memoria", "Reconstrucción de la memoria (Rebuilding memory)", "Reconstrucción de la memoria (Rekonstruktion der Erinnerung)"),
    desc: tr("Obra digital realizada en tablet. De espaldas, una marimonda con túnica roja y un báculo de ramas luminosas alza los brazos ante el ahora demolido edificio Palma en Barranquilla que emerge de un mar azul; las aguas se abren a ambos lados bajo un cielo nocturno atravesado por raíces de luz.",
      "Digital work made on a tablet. Seen from behind, a marimonda in a red robe with a staff of glowing branches raises its arms before Barranquilla’s now-demolished Palma building, rising from a blue sea; the waters part on both sides beneath a night sky crossed by roots of light.",
      "Digitales Werk, auf dem Tablet geschaffen. Von hinten gesehen hebt eine Marimonda in rotem Gewand mit einem Stab aus leuchtenden Zweigen die Arme vor dem inzwischen abgerissenen Edificio Palma in Barranquilla, das aus einem blauen Meer aufsteigt; das Wasser teilt sich zu beiden Seiten unter einem Nachthimmel voller Lichtwurzeln."),
    bio: tr("José Palacio (Barranquilla), conocido como JIPS, es un reconocido artista visual y animador colombiano, especializado en técnicas tradicionales y digitales que abarcan la animación, la pintura y la ilustración. Su trabajo expande los límites de la creación artística mediante la integración de tecnologías generativas, programación creativa y matemáticas fractales, explorando las intersecciones entre el arte, la ciencia y la tecnología para invitar a la reflexión, despertar emociones e inspirar un cambio positivo.",
      "José Palacio (Barranquilla), known as JIPS, is a renowned Colombian visual artist and animator, specialising in traditional and digital techniques spanning animation, painting and illustration. His work pushes the boundaries of artistic creation by integrating generative technologies, creative coding and fractal mathematics, exploring the intersections of art, science and technology to invite reflection, stir emotions and inspire positive change.",
      "José Palacio (Barranquilla), bekannt als JIPS, ist ein renommierter kolumbianischer bildender Künstler und Animator, spezialisiert auf traditionelle und digitale Techniken in Animation, Malerei und Illustration. Sein Werk erweitert die Grenzen des künstlerischen Schaffens durch generative Technologien, kreatives Programmieren und fraktale Mathematik und erkundet die Schnittstellen von Kunst, Wissenschaft und Technologie, um zum Nachdenken anzuregen, Emotionen zu wecken und positiven Wandel anzustoßen."),
    contact: { href: "https://www.jipslab.com/", label: "jipslab.com" },
    place: tr("Barranquilla", "Barranquilla", "Barranquilla"), format: tr("Obra digital en tablet · 1 imagen", "Digital work on tablet · 1 image", "Digitales Werk auf dem Tablet · 1 Bild"),
    collection: tr("Artistas del carnaval", "Carnival artists", "Karnevalskünstler") },
  { id: "AR-1305", tags: { carnavales: ["barranquilla"], elementos: ["marimonda"] }, type: "Illustrations", year: 2020, country: "CO", author: "José Palacio (JIPS)", img: "images/archivo/jips-bocadillo-de-carnaval.jpg",
    rights: tr("© José Palacio (JIPS) · Todos los derechos reservados", "© José Palacio (JIPS) · All rights reserved", "© José Palacio (JIPS) · Alle Rechte vorbehalten"),
    title: tr("Bocadillo de carnaval", "Bocadillo de carnaval (Carnival snack)", "Bocadillo de carnaval (Karnevalshäppchen)"),
    desc: tr("Obra digital realizada en tablet. Un hombre con máscara de marimonda descansa sentado en una silla de madera frente a una casa amarilla, junto a un caimán multicolor de fauces abiertas; de la ventana brota una cascada de flores bajo el cielo azul.",
      "Digital work made on a tablet. A man in a marimonda mask rests on a wooden chair in front of a yellow house, beside a multicoloured caiman with open jaws; a cascade of flowers spills from the window under a blue sky.",
      "Digitales Werk, auf dem Tablet geschaffen. Ein Mann mit Marimonda-Maske ruht auf einem Holzstuhl vor einem gelben Haus, neben einem bunten Kaiman mit offenem Maul; aus dem Fenster quillt eine Blumenkaskade unter blauem Himmel."),
    bio: tr("José Palacio (Barranquilla), conocido como JIPS, es un reconocido artista visual y animador colombiano, especializado en técnicas tradicionales y digitales que abarcan la animación, la pintura y la ilustración. Su trabajo expande los límites de la creación artística mediante la integración de tecnologías generativas, programación creativa y matemáticas fractales, explorando las intersecciones entre el arte, la ciencia y la tecnología para invitar a la reflexión, despertar emociones e inspirar un cambio positivo.",
      "José Palacio (Barranquilla), known as JIPS, is a renowned Colombian visual artist and animator, specialising in traditional and digital techniques spanning animation, painting and illustration. His work pushes the boundaries of artistic creation by integrating generative technologies, creative coding and fractal mathematics, exploring the intersections of art, science and technology to invite reflection, stir emotions and inspire positive change.",
      "José Palacio (Barranquilla), bekannt als JIPS, ist ein renommierter kolumbianischer bildender Künstler und Animator, spezialisiert auf traditionelle und digitale Techniken in Animation, Malerei und Illustration. Sein Werk erweitert die Grenzen des künstlerischen Schaffens durch generative Technologien, kreatives Programmieren und fraktale Mathematik und erkundet die Schnittstellen von Kunst, Wissenschaft und Technologie, um zum Nachdenken anzuregen, Emotionen zu wecken und positiven Wandel anzustoßen."),
    contact: { href: "https://www.jipslab.com/", label: "jipslab.com" },
    place: tr("Barranquilla", "Barranquilla", "Barranquilla"), format: tr("Obra digital en tablet · 1 imagen", "Digital work on tablet · 1 image", "Digitales Werk auf dem Tablet · 1 Bild"),
    collection: tr("Artistas del carnaval", "Carnival artists", "Karnevalskünstler") },
  { id: "AR-1306", tags: { carnavales: ["barranquilla"], elementos: ["batalla-de-flores", "marimonda"] }, type: "Illustrations", year: 2018, country: "CO", author: "José Palacio (JIPS)", img: "images/archivo/jips-batalla-de-flores-2-0.jpg",
    rights: tr("© José Palacio (JIPS) · Todos los derechos reservados", "© José Palacio (JIPS) · All rights reserved", "© José Palacio (JIPS) · Alle Rechte vorbehalten"),
    title: tr("Batalla de Flores 2.0", "Batalla de Flores 2.0", "Batalla de Flores 2.0"),
    desc: tr("Obra digital realizada en smartphone. La Batalla de Flores vista desde la calle: una carroza gigante con forma de máscara de marimonda y una reina en lo alto avanza entre palcos repletos, camarógrafos y público. Entre la multitud se cuela un Mickey Mouse y un globo de diálogo bromea: «Sigue creyendo que la marimonda es Mickey».",
      "Digital work made on a smartphone. The Batalla de Flores seen from the street: a giant float shaped like a marimonda mask, with a queen on top, moves between packed stands, camera crews and spectators. A Mickey Mouse slips into the crowd while a speech bubble jokes: “Sigue creyendo que la marimonda es Mickey” (Keep believing the marimonda is Mickey).",
      "Digitales Werk, auf dem Smartphone geschaffen. Die Batalla de Flores von der Straße aus: Ein riesiger Wagen in Form einer Marimonda-Maske mit einer Königin obenauf zieht zwischen vollen Tribünen, Kamerateams und Publikum vorbei. In der Menge taucht ein Mickey Mouse auf, und eine Sprechblase spottet: „Sigue creyendo que la marimonda es Mickey“ (Glaub ruhig weiter, die Marimonda sei Mickey)."),
    bio: tr("José Palacio (Barranquilla), conocido como JIPS, es un reconocido artista visual y animador colombiano, especializado en técnicas tradicionales y digitales que abarcan la animación, la pintura y la ilustración. Su trabajo expande los límites de la creación artística mediante la integración de tecnologías generativas, programación creativa y matemáticas fractales, explorando las intersecciones entre el arte, la ciencia y la tecnología para invitar a la reflexión, despertar emociones e inspirar un cambio positivo.",
      "José Palacio (Barranquilla), known as JIPS, is a renowned Colombian visual artist and animator, specialising in traditional and digital techniques spanning animation, painting and illustration. His work pushes the boundaries of artistic creation by integrating generative technologies, creative coding and fractal mathematics, exploring the intersections of art, science and technology to invite reflection, stir emotions and inspire positive change.",
      "José Palacio (Barranquilla), bekannt als JIPS, ist ein renommierter kolumbianischer bildender Künstler und Animator, spezialisiert auf traditionelle und digitale Techniken in Animation, Malerei und Illustration. Sein Werk erweitert die Grenzen des künstlerischen Schaffens durch generative Technologien, kreatives Programmieren und fraktale Mathematik und erkundet die Schnittstellen von Kunst, Wissenschaft und Technologie, um zum Nachdenken anzuregen, Emotionen zu wecken und positiven Wandel anzustoßen."),
    contact: { href: "https://www.jipslab.com/", label: "jipslab.com" },
    place: tr("Barranquilla", "Barranquilla", "Barranquilla"), format: tr("Obra digital en smartphone · 1 imagen", "Digital work on smartphone · 1 image", "Digitales Werk auf dem Smartphone · 1 Bild"),
    collection: tr("Artistas del carnaval", "Carnival artists", "Karnevalskünstler") },
  { id: "AR-1307", tags: { carnavales: ["barranquilla"], elementos: ["verbena"] }, type: "Illustrations", year: 2018, country: "CO", author: "José Palacio (JIPS)", img: "images/archivo/jips-noche-de-verbena-en-la-popular.jpg",
    rights: tr("© José Palacio (JIPS) · Todos los derechos reservados", "© José Palacio (JIPS) · All rights reserved", "© José Palacio (JIPS) · Alle Rechte vorbehalten"),
    title: tr("Noche de verbena en la Popular", "Noche de verbena en la Popular (Verbena night at La Popular)", "Noche de verbena en la Popular (Verbena-Nacht in La Popular)"),
    desc: tr("Obra digital realizada en smartphone. Una verbena nocturna frente a los letreros de «La Popular» y «Los Robles Express»: guirnaldas de flecos de colores cruzan el cielo, el público se sienta en sillas plásticas amarillas y las parejas bailan en la calle bajo una luna sonriente.",
      "Digital work made on a smartphone. A night-time verbena (street party) in front of the “La Popular” and “Los Robles Express” signs: garlands of coloured fringe cross the sky, people sit on yellow plastic chairs and couples dance in the street under a smiling moon.",
      "Digitales Werk, auf dem Smartphone geschaffen. Eine nächtliche Verbena (Straßenfest) vor den Schildern von „La Popular“ und „Los Robles Express“: Girlanden aus bunten Fransen spannen sich über den Himmel, Gäste sitzen auf gelben Plastikstühlen, und Paare tanzen unter einem lächelnden Mond auf der Straße."),
    bio: tr("José Palacio (Barranquilla), conocido como JIPS, es un reconocido artista visual y animador colombiano, especializado en técnicas tradicionales y digitales que abarcan la animación, la pintura y la ilustración. Su trabajo expande los límites de la creación artística mediante la integración de tecnologías generativas, programación creativa y matemáticas fractales, explorando las intersecciones entre el arte, la ciencia y la tecnología para invitar a la reflexión, despertar emociones e inspirar un cambio positivo.",
      "José Palacio (Barranquilla), known as JIPS, is a renowned Colombian visual artist and animator, specialising in traditional and digital techniques spanning animation, painting and illustration. His work pushes the boundaries of artistic creation by integrating generative technologies, creative coding and fractal mathematics, exploring the intersections of art, science and technology to invite reflection, stir emotions and inspire positive change.",
      "José Palacio (Barranquilla), bekannt als JIPS, ist ein renommierter kolumbianischer bildender Künstler und Animator, spezialisiert auf traditionelle und digitale Techniken in Animation, Malerei und Illustration. Sein Werk erweitert die Grenzen des künstlerischen Schaffens durch generative Technologien, kreatives Programmieren und fraktale Mathematik und erkundet die Schnittstellen von Kunst, Wissenschaft und Technologie, um zum Nachdenken anzuregen, Emotionen zu wecken und positiven Wandel anzustoßen."),
    contact: { href: "https://www.jipslab.com/", label: "jipslab.com" },
    place: tr("Barranquilla", "Barranquilla", "Barranquilla"), format: tr("Obra digital en smartphone · 1 imagen", "Digital work on smartphone · 1 image", "Digitales Werk auf dem Smartphone · 1 Bild"),
    collection: tr("Artistas del carnaval", "Carnival artists", "Karnevalskünstler") },
  { id: "AR-1302", tags: { carnavales: ["barranquilla"], elementos: ["marimonda"] }, type: "Illustrations", year: 2019, country: "CO", author: "José Palacio (JIPS)", img: "images/archivo/jips-danza-de-las-marimondas.jpg",
    rights: tr("© José Palacio (JIPS) · Todos los derechos reservados", "© José Palacio (JIPS) · All rights reserved", "© José Palacio (JIPS) · Alle Rechte vorbehalten"),
    title: tr("Danza de las marimondas", "Danza de las marimondas", "Danza de las marimondas"),
    desc: tr("Obra digital realizada en smartphone. Cinco figuras con máscara de marimonda, el personaje del Carnaval de Barranquilla, bailan en ronda tomadas de las manos.", "Digital work made on a smartphone. Five figures wearing marimonda masks, the Barranquilla Carnival character, dance in a ring holding hands.", "Digitales, auf dem Smartphone geschaffenes Werk. Fünf Figuren mit Marimonda-Masken, der Figur des Karnevals von Barranquilla, tanzen Hand in Hand im Kreis."),
    bio: tr("José Palacio (Barranquilla), conocido como JIPS, es un reconocido artista visual y animador colombiano, especializado en técnicas tradicionales y digitales que abarcan la animación, la pintura y la ilustración. Su trabajo expande los límites de la creación artística mediante la integración de tecnologías generativas, programación creativa y matemáticas fractales, explorando las intersecciones entre el arte, la ciencia y la tecnología para invitar a la reflexión, despertar emociones e inspirar un cambio positivo.",
      "José Palacio (Barranquilla), known as JIPS, is a renowned Colombian visual artist and animator, specialising in traditional and digital techniques spanning animation, painting and illustration. His work pushes the boundaries of artistic creation by integrating generative technologies, creative coding and fractal mathematics, exploring the intersections of art, science and technology to invite reflection, stir emotions and inspire positive change.",
      "José Palacio (Barranquilla), bekannt als JIPS, ist ein renommierter kolumbianischer bildender Künstler und Animator, spezialisiert auf traditionelle und digitale Techniken in Animation, Malerei und Illustration. Sein Werk erweitert die Grenzen des künstlerischen Schaffens durch generative Technologien, kreatives Programmieren und fraktale Mathematik und erkundet die Schnittstellen von Kunst, Wissenschaft und Technologie, um zum Nachdenken anzuregen, Emotionen zu wecken und positiven Wandel anzustoßen."),
    contact: { href: "https://www.jipslab.com/", label: "jipslab.com" },
    place: tr("Barranquilla", "Barranquilla", "Barranquilla"), format: tr("Obra digital en smartphone · 1 imagen", "Digital work on smartphone · 1 image", "Digitales Werk auf dem Smartphone · 1 Bild"),
    collection: tr("Artistas del carnaval", "Carnival artists", "Karnevalskünstler") },
];

/* Etiquetas: carnavales y elementos (de carnavales.js y elementos.js) presentes en cada objeto */
const TAG_CARN = s => (window.CARNAVALES || []).find(c => c.slug === s);
const TAG_EL = id => (window.elemento ? window.elemento(id) : null);
const tagNames = it => !it.tags ? [] : (it.tags.carnavales || []).map(TAG_CARN).filter(Boolean).map(c => c.place)
  .concat((it.tags.elementos || []).map(TAG_EL).filter(Boolean).map(e => e.nombre));

const TYPE_KEY = { Texts: "text", Photographs: "photo", Illustrations: "illus", Videos: "video", Music: "audio" };
const TYPE_L = {
  All: tr("Todo", "All", "Alle"), Texts: tr("Textos", "Texts", "Texte"), Photographs: tr("Fotografías", "Photographs", "Fotografien"),
  Illustrations: tr("Ilustraciones", "Illustrations", "Illustrationen"), Videos: tr("Videos", "Videos", "Videos"), Music: tr("Música", "Music", "Musik"),
};
const UI = {
  title: tr("Archivo", "Archive", "Archiv"),
  eyebrow: tr("§ 04", "§ 04", "§ 04"),
  sub: tr("de fuentes primarias", "of primary sources", "der Primärquellen"),
  deck: tr("Una colección digital de materiales carnavalescos — textos, fotografías, ilustraciones, videos y música. Cada objeto conserva su procedencia, su formato y las condiciones bajo las que puede consultarse.",
    "A digital collection of carnival materials — texts, photographs, illustrations, videos and music. Each object keeps its provenance, its format and the conditions under which it can be consulted.",
    "Eine digitale Sammlung von Karnevalsmaterialien – Texte, Fotografien, Illustrationen, Videos und Musik. Jedes Objekt bewahrt seine Herkunft, sein Format und die Bedingungen, unter denen es eingesehen werden kann."),
  objects: tr("Objetos", "Objects", "Objekte"), countries: tr("Países", "Countries", "Länder"), collections: tr("Colecciones", "Collections", "Sammlungen"), oldest: tr("Más antiguo", "Oldest", "Ältestes"),
  search: tr("Buscar por título, lugar, año, carnaval o elemento…", "Search by title, place, year, carnival or element…", "Nach Titel, Ort, Jahr, Karneval oder Element suchen…"),
  tags: tr("Etiquetas", "Tags", "Schlagwörter"),
  searchL: tr("Buscar en el archivo", "Search the archive", "Archiv durchsuchen"), clear: tr("Limpiar búsqueda", "Clear search", "Suche löschen"),
  sort: tr("Orden", "Sort", "Sortierung"), recent: tr("Más reciente", "Newest", "Neueste"), old: tr("Más antiguo", "Oldest", "Älteste"), byTitle: tr("Título", "Title", "Titel"),
  nObj: tr("objetos", "objects", "Objekte"), of: tr("de", "of", "von"),
  none: tr("No hay objetos que coincidan con esa búsqueda.", "No objects match that search.", "Keine Objekte entsprechen dieser Suche."),
  all: tr("Ver todo el archivo", "View the whole archive", "Ganzes Archiv anzeigen"),
  close: tr("Cerrar", "Close", "Schließen"),
  type: tr("Tipo", "Type", "Typ"), author: tr("Autor", "Author", "Urheber"), year: tr("Año", "Year", "Jahr"), prov: tr("Procedencia", "Provenance", "Herkunft"),
  format: tr("Formato", "Format", "Format"), coll: tr("Colección", "Collection", "Sammlung"), rights: tr("Derechos", "Rights", "Rechte"),
  used: tr("Usado en", "Used in", "Verwendet in"),
  aboutArtist: tr("Sobre el artista", "About the artist", "Über den Künstler"),
  allRights: tr("Todos los derechos de esta obra pertenecen a", "All rights to this work belong to", "Alle Rechte an diesem Werk liegen bei"),
  moreInfo: tr("Para más información (préstamo, compra, licencias de uso, etc.):", "For more information (loans, purchase, usage licences, etc.):", "Weitere Informationen (Leihgabe, Kauf, Nutzungslizenzen usw.):"),
  credIll: tr("Ilustración", "Illustration", "Illustration"), credPh: tr("Foto", "Photo", "Foto"),
  hires: tr("Para solicitar el archivo en alta resolución o permisos de uso, escribe a", "To request the high-resolution file or usage permissions, write to", "Für die hochaufgelöste Datei oder Nutzungsrechte schreiben Sie an"),
  notOnline: tr("El objeto digital aún no está disponible en línea. Para consultarlo, escribe a", "The digital object is not yet available online. To consult it, write to", "Das digitale Objekt ist noch nicht online verfügbar. Zur Einsicht schreiben Sie an"),
  nav: [["project", tr("Proyecto", "Project", "Projekt")], ["timeline", tr("El Carnaval", "The Carnival", "Der Karneval")], ["world", tr("Atlas", "Atlas", "Atlas")], ["archive", tr("Archivo", "Archive", "Archiv")], ["research", tr("Taller", "Workshop", "Werkstatt")], ["news", tr("Noticias", "News", "News")]],
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
    document.title = t(UI.title) + " " + t(UI.sub) + " — Carnavarium";
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
      return [it.title, it.desc, it.place, it.collection].concat(tagNames(it)).flatMap(o => [o.es, o.en, o.de]).concat([it.id, String(it.year), it.author || ""])
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
              : <a key={id} href={id === "research" ? "workshop.html" : id === "world" ? "atlas.html" : "index.html#" + id}>{t(l)}</a>)}
          </div>
          <div className="lang-sw" role="group" aria-label="Idioma / Language / Sprache">
            {LANGS.map(l => <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
          </div>
        </div>
      </nav>

      <header className="shell arch-head">
        <div className="eyebrow" style={{ marginBottom: 20 }}>{t(UI.eyebrow)}</div>
        <h1>{t(UI.title)}<span style={{ display: "block", fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: ".36em", letterSpacing: 0, lineHeight: 1.2, color: "var(--pink-text)", marginTop: ".3em" }}>{t(UI.sub)}</span></h1>
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
          {["All", "Texts", "Photographs", "Illustrations", "Videos", "Music"].filter(f => counts[f]).map(f => (
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
                <div className={"arch-thumb t-" + TYPE_KEY[it.type] + (it.img ? " has-img" : "")} onContextMenu={e => e.preventDefault()}>
                  {it.img ? <img src={it.img} alt={t(it.title)} loading="lazy" {...NO_SAVE} /> : <span className="ph">{t(TYPE_L[it.type])}</span>}
                </div>
                <div className="arch-card-body">
                  <div className="arch-card-top">
                    <span className="id">{it.id}</span>
                    <span className={"type-pill type-" + TYPE_KEY[it.type]}>{t(TYPE_L[it.type])}</span>
                  </div>
                  <h3>{t(it.title)}</h3>
                  <p className="desc">{t(it.desc)}</p>
                  {tagNames(it).length > 0 && <div className="arch-card-tags">{tagNames(it).map((n, k) => <span key={k}>{t(n)}</span>)}</div>}
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
            <div className={"sheet-thumb t-" + TYPE_KEY[record.type] + (record.img ? " has-img" : "")} onContextMenu={e => e.preventDefault()}>
              {record.img ? <img src={record.img} alt={t(record.title) + (record.author ? " — " + record.author : "")} {...NO_SAVE} /> : <span className="ph">{t(TYPE_L[record.type])}</span>}
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
              {record.tags && <div className="sheet-tags">
                <div className="sheet-tags-k">{t(UI.tags)}</div>
                <div className="sheet-tags-row">
                  {(record.tags.carnavales || []).map(TAG_CARN).filter(Boolean).map(c => (
                    <a key={c.slug} className="tag tag-c" href={"carnival.html?c=" + c.slug + "&lang=" + lang}><i style={{ background: c.color }}></i>{t(c.place)}</a>
                  ))}
                  {(record.tags.elementos || []).map(TAG_EL).filter(Boolean).map(e => (
                    <a key={e.id} className="tag" href={"element.html?e=" + e.id + "&lang=" + lang}><i style={{ background: ((window.ELEMENTO_TIPOS || {})[e.tipo] || {}).color }}></i>{t(e.nombre)}</a>
                  ))}
                </div>
              </div>}
              {record.usedIn && <p className="sheet-used">{t(UI.used)} <a href={record.usedIn.href + "?lang=" + lang}>{t(record.usedIn.title)} →</a></p>}
              {record.bio && <><div className="sheet-id" style={{ marginTop: 20 }}>{t(UI.aboutArtist)}</div><p className="sheet-desc">{t(record.bio)}</p></>}
              {record.contact ? (
                <p className="sheet-note">
                  {t(UI.allRights)} {record.author}. {t(UI.moreInfo)} <a href={record.contact.href} target="_blank" rel="noopener">{record.contact.label} ↗</a>
                </p>
              ) : record.img ? (
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
