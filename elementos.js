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
   · fuentes: [F("Apellido, Nombre (año). Título. Editorial.", "https://…")] — la URL es opcional.
     Usa las constantes de fuentes de abajo para no repetir la misma referencia.
   · imgCred: de dónde sale la imagen (p. ej. la transcripción de un patrón rítmico); se muestra bajo la imagen como «Fuente de la imagen: …».
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
      en: x.en || [], fuentes: x.fuentes || [], imgCred: x.imgCred || "", wikidata: x.wikidata || "" };
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

  /* Fuentes (las mismas referencias que usa la bibliografía de los especiales y ensayos) */
  function F(t, url) { return { t: t, url: url || "" }; }
  var F_BURGOS = F("Burgos, Toño (2019). Ritmo de garabato. YouTube.", "https://youtu.be/dYTze47E1kM"),
      F_CARTILLA = F("Ministerio de Cultura de Colombia. Cartilla de iniciación musical: Pitos y tambores. Plan Nacional de Música para la Convivencia.", "https://mng.mincultura.gov.co/proyectoeditorial/Pages/Cartilla-de-iniciaci%C3%B3n-musical-Pitos-y-tambores.aspx"),
      F_PNMC = F("Ministerio de Cultura de Colombia. Plan Nacional de Música para la Convivencia: ejes de músicas tradicionales (cartillas de iniciación musical).", "https://mng.mincultura.gov.co/proyectoeditorial/Documentos%20Publicaciones/Que%20te%20pasa%20a%20vo/Que%20te%20pasa%20a%20vo.pdf"),
      F_OCHOA = F("Ochoa Escobar, Juan Sebastián (2016). «La cumbia en Colombia: invención de una tradición». Revista Musical Chilena, 70 (226): 31–52."),
      F_WADE = F("Wade, Peter (2000). Music, Race and Nation: Música Tropical in Colombia. Chicago: University of Chicago Press."),
      F_ZAPATA = F("Zapata Olivella, Delia (1962). «La cumbia: síntesis musical de la nación colombiana. Reseña histórica y coreográfica». Revista Colombiana de Folclor, 3 (7)."),
      F_TESIS = F("Aquite Pena, Oscar (2024). Between millo and picó. Tesis de maestría.", "tesis-la-puntica.html"),
      F_PUNTICA = F("La Puntica No Ma’ (2023). Sitio web de la comparsa (citado en Aquite Pena 2024)."),
      F_E_GARABATO = F("Aquite Pena, Oscar. «¿Realeza venida a menos? Música, dinámicas de clase y moral en el Carnaval de Barranquilla». Carnavarium.", "ensayo-garabato.html"),
      F_W_DEIXA = F("Wikipedia. «Deixa Falar».", "https://en.wikipedia.org/wiki/Deixa_Falar"),
      F_W_ESTACIO = F("Wikipedia. «Estácio de Sá (samba school)».", "https://en.wikipedia.org/wiki/Est%C3%A1cio_de_S%C3%A1_(samba_school)"),
      F_W_TUIUTI = F("Wikipedia. «Paraíso do Tuiuti».", "https://en.wikipedia.org/wiki/Para%C3%ADso_do_Tuiuti"),
      F_E_MUSICA = F("Aquite Pena, Oscar. «La música del Carnaval de Barranquilla: patrimonio vivo». Carnavarium.", "ensayo-musica-carnaval.html");

  window.ELEMENTOS = [
    /* ---------- Barranquilla · la Danza del Garabato ---------- */
    E("danza-del-garabato", "danza", BAQ, N("Danza del Garabato", "Garabato Dance", "Garabato-Tanz"),
      N("Danza que escenifica la lucha entre la vida y la muerte: el Caporal se enfrenta a la Muerte. Su nombre viene del palo con gancho que llevan los bailarines.",
        "Dance that stages the struggle between life and death: the Caporal faces Death. It is named after the hooked stick the dancers carry.",
        "Tanz, der den Kampf zwischen Leben und Tod inszeniert: Der Caporal tritt gegen den Tod an. Benannt ist er nach dem Hakenstock der Tänzer."),
      { rel: [["ritmo", "son-de-garabato"], ["personaje", "caporal"], ["personaje", "la-muerte"]], en: [GARABATO], fuentes: [F_E_GARABATO] }),
    E("son-de-garabato", "ritmo", BAQ, N("Son de garabato", "Son de garabato", "Son de garabato"),
      N("Ritmo con el que se baila la Danza del Garabato.", "Rhythm to which the Garabato Dance is performed.", "Rhythmus, zu dem der Garabato-Tanz getanzt wird."),
      { img: "images/ritmo-son-de-garabato.png", imgCred: "Toño Burgos, «Ritmo de garabato» (2019)", rel: [["deriva", "chande"]], en: [CUMBIA], fuentes: [F_BURGOS] }),
    E("chande", "ritmo", BAQ, N("Chandé", "Chandé", "Chandé"),
      N("Ritmo de tambores del Caribe colombiano del que deriva el son de garabato.", "Drum rhythm from the Colombian Caribbean from which the son de garabato derives.", "Trommelrhythmus der kolumbianischen Karibik, aus dem der Son de garabato hervorgeht."),
      { img: "images/ritmo-chande.png", imgCred: "Ministerio de Cultura de Colombia, Cartilla de iniciación musical: Pitos y tambores", en: [CUMBIA], fuentes: [F_CARTILLA, F_PNMC] }),
    E("caporal", "personaje", BAQ, N("Caporal", "Caporal", "Caporal"),
      N("Personaje que guía a los bailarines de la Danza del Garabato y se enfrenta a la Muerte.", "Character who leads the dancers of the Garabato Dance and confronts Death.", "Figur, die die Tänzer des Garabato-Tanzes anführt und sich dem Tod stellt."),
      { rel: [["lleva", "garabato-baston"]], en: [GARABATO], fuentes: [F_E_GARABATO] }),
    E("la-muerte", "personaje", BAQ, N("La Muerte", "Death (La Muerte)", "Der Tod (La Muerte)"),
      N("Personaje de la Danza del Garabato que representa a la muerte y se enfrenta al Caporal.", "Character in the Garabato Dance who embodies death and confronts the Caporal.", "Figur des Garabato-Tanzes, die den Tod verkörpert und gegen den Caporal antritt."),
      { en: [GARABATO], fuentes: [F_E_GARABATO] }),
    E("garabato-baston", "objeto", BAQ, N("Garabato (bastón)", "Garabato (stick)", "Garabato (Stock)"),
      N("Palo con un gancho en la punta que llevan los bailarines y que da nombre a la danza.", "Stick with a hook at the tip, carried by the dancers, which gives the dance its name.", "Stock mit Haken an der Spitze, den die Tänzer tragen und der dem Tanz seinen Namen gibt."),
      {}),

    /* ---------- Barranquilla · disfraces y personajes ---------- */
    E("marimonda", "disfraz", BAQ, N("Marimonda", "Marimonda", "Marimonda"),
      N("Disfraz de máscara con trompa, orejas grandes y traje de colores; se burla de la élite y es símbolo del carnaval. Sus movimientos jocosos acompañan los fandangos.",
        "Mask costume with a trunk-like nose, large ears and a colourful suit; it mocks the elite and is a symbol of the carnival. Its playful moves follow the fandangos.",
        "Maskenkostüm mit rüsselartiger Nase, großen Ohren und buntem Anzug; verspottet die Elite und ist ein Symbol des Karnevals. Seine spaßhaften Bewegungen folgen den Fandangos."),
      { rel: [["ritmo", "fandango"]], en: [MUSICA, JIPS], fuentes: [F_E_MUSICA] }),
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
      { en: [CUMBIA], fuentes: [F_ZAPATA, F_WADE, F_OCHOA] }),
    E("fandango", "ritmo", BAQ, N("Fandango", "Fandango", "Fandango"),
      N("Género y baile del Caribe colombiano, tocado por bandas de viento y bailado en rueda alrededor de los músicos.", "Genre and dance of the Colombian Caribbean, played by wind bands and danced in a ring around the musicians.", "Genre und Tanz der kolumbianischen Karibik, von Blaskapellen gespielt und im Kreis um die Musiker getanzt."),
      { en: [MUSICA], fuentes: [F_PNMC, F_E_MUSICA] }),
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
      { rel: [["es-un", "comparsa"], ["interpreta", "cumbia"]], en: [TESIS, CUMBIA], fuentes: [F_TESIS, F_PUNTICA] }),

    /* ---------- Río de Janeiro ---------- */
    E("escola-de-samba", "tipo-agrupacion", ["rio"], N("Escola de samba"),
      N("Agrupación comunitaria que compite en el desfile con un tema, una canción y miles de integrantes.", "Community association that competes in the parade with a theme, a song and thousands of members.", "Gemeinschaftsverein, der mit Thema, Lied und Tausenden Mitgliedern im Umzug antritt."),
      {}),
    E("portela", "agrupacion", ["rio"], N("Portela"),
      N("Escola de samba de Río de Janeiro fundada en 1923, una de las más antiguas y laureadas.", "Rio de Janeiro samba school founded in 1923, one of the oldest and most decorated.", "1923 gegründete Sambaschule aus Rio de Janeiro, eine der ältesten und erfolgreichsten."),
      { rel: [["es-un", "escola-de-samba"]] }),

    /* ---------- Río de Janeiro · escolas de samba ---------- */
    E("deixa-falar", "agrupacion", ["rio"], N("Deixa Falar"),
      N("Fundada el 12 de agosto de 1928 en el barrio del Estácio, con Ismael Silva entre sus impulsores, es considerada la primera escuela de samba. Se disolvió en 1933.",
        "Founded on 12 August 1928 in the Estácio neighbourhood, with Ismael Silva among its driving forces, it is considered the first samba school. It disbanded in 1933.",
        "Am 12. August 1928 im Viertel Estácio gegründet, mit Ismael Silva als einem ihrer Initiatoren; gilt als erste Sambaschule. 1933 aufgelöst."),
      { rel: [["es-un", "escola-de-samba"]], fuentes: [F_W_DEIXA] }),
    E("mangueira", "agrupacion", ["rio"], N("Estação Primeira de Mangueira"),
      N("Escola del morro de Mangueira, fundada en 1928 con Cartola entre sus fundadores. Sus colores son el verde y el rosa, y es una de las más laureadas.",
        "School from the Mangueira hill, founded in 1928 with Cartola among its founders. Its colours are green and pink, and it is one of the most decorated.",
        "Schule vom Morro da Mangueira, 1928 gegründet, Cartola war unter den Gründern. Ihre Farben sind Grün und Rosa; sie gehört zu den erfolgreichsten."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("salgueiro", "agrupacion", ["rio"], N("Acadêmicos do Salgueiro"),
      N("Escola de Tijuca fundada en 1953, roja y blanca. En los años sesenta, con Fernando Pamplona, llevó al desfile a héroes y temas afrobrasileños.",
        "Tijuca school founded in 1953, red and white. In the 1960s, with Fernando Pamplona, it brought Afro-Brazilian heroes and themes to the parade.",
        "1953 gegründete Schule aus Tijuca, rot-weiß. In den 1960er-Jahren brachte sie mit Fernando Pamplona afrobrasilianische Helden und Themen in den Umzug."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("beija-flor", "agrupacion", ["rio"], N("Beija-Flor de Nilópolis"),
      N("Escola de Nilópolis, en la Baixada Fluminense, fundada en 1948, azul y blanca. Con el carnavalesco Joãosinho Trinta ganó su primer título en 1976 y es una de las más laureadas.",
        "School from Nilópolis, in the Baixada Fluminense, founded in 1948, blue and white. With designer Joãosinho Trinta it won its first title in 1976, and it is one of the most decorated.",
        "1948 gegründete Schule aus Nilópolis in der Baixada Fluminense, blau-weiß. Mit dem Carnavalesco Joãosinho Trinta gewann sie 1976 ihren ersten Titel; sie gehört zu den erfolgreichsten."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("imperatriz", "agrupacion", ["rio"], N("Imperatriz Leopoldinense"),
      N("Escola de Ramos fundada en 1959, verde, blanca y oro. Con la carnavalesca Rosa Magalhães vivió una larga etapa de títulos.",
        "Ramos school founded in 1959, green, white and gold. With designer Rosa Magalhães it enjoyed a long run of titles.",
        "1959 gegründete Schule aus Ramos in Grün, Weiß und Gold. Mit der Carnavalesca Rosa Magalhães erlebte sie eine lange Reihe von Titeln."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("unidos-da-tijuca", "agrupacion", ["rio"], N("Unidos da Tijuca"),
      N("Escola del morro del Borel, fundada en 1931, en amarillo oro y azul pavo real. Con Paulo Barros ganó en 2010, 2012 y 2014 con desfiles de gran efecto escénico.",
        "School from the Borel hill, founded in 1931, in gold yellow and peacock blue. With Paulo Barros it won in 2010, 2012 and 2014 with highly theatrical parades.",
        "1931 gegründete Schule vom Morro do Borel in Goldgelb und Pfauenblau. Mit Paulo Barros gewann sie 2010, 2012 und 2014 mit spektakulären Umzügen."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("mocidade", "agrupacion", ["rio"], N("Mocidade Independente de Padre Miguel"),
      N("Escola de Padre Miguel fundada en 1955, verde y blanca. Su batería, con Mestre André, hizo famosa la «paradinha», la pausa de toda la percusión.",
        "Padre Miguel school founded in 1955, green and white. Its bateria, under Mestre André, made the “paradinha” famous: the sudden stop of the whole percussion section.",
        "1955 gegründete Schule aus Padre Miguel, grün-weiß. Ihre Bateria machte unter Mestre André die „Paradinha“ berühmt, das plötzliche Innehalten der gesamten Perkussion."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("unidos-de-padre-miguel", "agrupacion", ["rio"], N("Unidos de Padre Miguel"),
      N("Escola de la Vila Vintém, en Padre Miguel, conocida como «Boi Vermelho» por el buey rojo de su símbolo.",
        "School from Vila Vintém, in Padre Miguel, known as “Boi Vermelho” after the red ox of its emblem.",
        "Schule aus der Vila Vintém in Padre Miguel, nach dem roten Ochsen ihres Wappens „Boi Vermelho“ genannt."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("grande-rio", "agrupacion", ["rio"], N("Acadêmicos do Grande Rio"),
      N("Escola de Duque de Caxias fundada en 1988, roja, verde y blanca. Ganó su primer título en 2022 con un enredo sobre Exu.",
        "Duque de Caxias school founded in 1988, red, green and white. It won its first title in 2022 with a theme about Exu.",
        "1988 gegründete Schule aus Duque de Caxias in Rot, Grün und Weiß. Ihren ersten Titel gewann sie 2022 mit einem Enredo über Exu."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("vila-isabel", "agrupacion", ["rio"], N("Unidos de Vila Isabel"),
      N("Escola del barrio de Noel Rosa, fundada en 1946, azul y blanca, ligada a Martinho da Vila. Ganó en 1988 con «Kizomba, festa da raça».",
        "School from Noel Rosa’s neighbourhood, founded in 1946, blue and white, closely tied to Martinho da Vila. It won in 1988 with “Kizomba, festa da raça”.",
        "1946 gegründete Schule aus dem Viertel Noel Rosas, blau-weiß, eng mit Martinho da Vila verbunden. Sie gewann 1988 mit „Kizomba, festa da raça“."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("imperio-serrano", "agrupacion", ["rio"], N("Império Serrano"),
      N("Escola de la Serrinha, en Madureira, fundada en 1947, verde y blanca, con raíces en el jongo. De ella salió «Aquarela Brasileira» (1964), de Silas de Oliveira.",
        "School from Serrinha, in Madureira, founded in 1947, green and white, rooted in jongo. It produced “Aquarela Brasileira” (1964) by Silas de Oliveira.",
        "1947 gegründete Schule aus der Serrinha in Madureira, grün-weiß, mit Wurzeln im Jongo. Aus ihr stammt „Aquarela Brasileira“ (1964) von Silas de Oliveira."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("viradouro", "agrupacion", ["rio"], N("Unidos do Viradouro"),
      N("Escola de Niterói fundada en 1946, roja y blanca. Fue campeona en 1997, con Joãosinho Trinta, y de nuevo en 2020 y 2024.",
        "Niterói school founded in 1946, red and white. It was champion in 1997, with Joãosinho Trinta, and again in 2020 and 2024.",
        "1946 gegründete Schule aus Niterói, rot-weiß. Meisterin 1997 mit Joãosinho Trinta und erneut 2020 und 2024."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("uniao-da-ilha", "agrupacion", ["rio"], N("União da Ilha do Governador"),
      N("Escola de la Ilha do Governador fundada en 1953, azul, roja y blanca, famosa por sambas alegres como «É hoje» (1982).",
        "School from Ilha do Governador founded in 1953, blue, red and white, famous for joyful sambas such as “É hoje” (1982).",
        "1953 gegründete Schule von der Ilha do Governador in Blau, Rot und Weiß, bekannt für fröhliche Sambas wie „É hoje“ (1982)."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("tuiuti", "agrupacion", ["rio"], N("Paraíso do Tuiuti"),
      N("Escola de São Cristóvão fundada en 1952. En 2018 fue subcampeona con «Meu Deus, meu Deus, está extinta a escravidão?», una crítica a la herencia de la esclavitud.",
        "São Cristóvão school founded in 1952. In 2018 it was runner-up with “Meu Deus, meu Deus, está extinta a escravidão?”, a critique of the legacy of slavery.",
        "1952 gegründete Schule aus São Cristóvão. 2018 wurde sie Vizemeisterin mit „Meu Deus, meu Deus, está extinta a escravidão?“, einer Kritik am Erbe der Sklaverei."),
      { rel: [["es-un", "escola-de-samba"]], fuentes: [F_W_TUIUTI] }),
    E("sao-clemente", "agrupacion", ["rio"], N("São Clemente"),
      N("Escola de Botafogo fundada en 1961, amarilla y negra, conocida por sus enredos satíricos y llenos de humor.",
        "Botafogo school founded in 1961, yellow and black, known for its satirical, humorous themes.",
        "1961 gegründete Schule aus Botafogo, gelb-schwarz, bekannt für satirische, humorvolle Enredos."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("caprichosos", "agrupacion", ["rio"], N("Caprichosos de Pilares"),
      N("Escola de Pilares fundada en 1949, azul y blanca, recordada por la irreverencia y la crítica de sus desfiles.",
        "Pilares school founded in 1949, blue and white, remembered for the irreverence and critique of its parades.",
        "1949 gegründete Schule aus Pilares, blau-weiß, bekannt für respektlose, kritische Umzüge."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("estacio-de-sa", "agrupacion", ["rio"], N("Estácio de Sá"),
      N("Escola del barrio del Estácio, cuna del samba urbano, considerada heredera de Deixa Falar. Fue campeona del Grupo Especial en 1992.",
        "School from the Estácio neighbourhood, cradle of urban samba, regarded as heir to Deixa Falar. It won the top group in 1992.",
        "Schule aus dem Viertel Estácio, Wiege des urbanen Samba, gilt als Erbin von Deixa Falar. 1992 gewann sie die höchste Liga."),
      { rel: [["es-un", "escola-de-samba"], ["deriva", "deixa-falar"]], fuentes: [F_W_ESTACIO] }),
    E("imperio-da-tijuca", "agrupacion", ["rio"], N("Império da Tijuca"),
      N("Una de las escolas más antiguas, del morro de la Formiga, en Tijuca.",
        "One of the oldest schools, from the Formiga hill in Tijuca.",
        "Eine der ältesten Schulen, vom Morro da Formiga in Tijuca."),
      { rel: [["es-un", "escola-de-samba"]] }),
    E("tradicao", "agrupacion", ["rio"], N("Tradição"),
      N("Escola de Campinho fundada en 1984 por disidentes de Portela.",
        "Campinho school founded in 1984 by dissidents from Portela.",
        "1984 von Abtrünnigen der Portela gegründete Schule aus Campinho."),
      { rel: [["es-un", "escola-de-samba"], ["deriva", "portela"]] }),
    E("porto-da-pedra", "agrupacion", ["rio"], N("Unidos do Porto da Pedra"),
      N("Escola de São Gonçalo, al otro lado de la bahía de Guanabara, conocida como «el tigre de São Gonçalo» por el animal de su símbolo.",
        "São Gonçalo school, across Guanabara Bay, known as “the tiger of São Gonçalo” after the animal in its emblem.",
        "Schule aus São Gonçalo auf der anderen Seite der Guanabara-Bucht, nach dem Tier im Wappen „Tiger von São Gonçalo“ genannt."),
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
