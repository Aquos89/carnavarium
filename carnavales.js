/* Carnavarium — fichas de carnavales. Cada texto va en {es, en, de}.
   Para enlazar un artículo o especial nuevo, añádalo a "related" del carnaval.
   Banner: imagen en images/banners/, con el lado izquierdo oscuro para el texto (banner: "images/banners/slug.png"). */
window.CARNAVAL_REGIONES = [{"color":"var(--blue)","es":"Río de la Plata","en":"Río de la Plata","de":"Río de la Plata"},{"color":"var(--coral)","es":"Gran Caribe","en":"Greater Caribbean","de":"Großkaribik"},{"color":"var(--amber)","es":"Brasil","en":"Brazil","de":"Brasilien"},{"color":"var(--purple)","es":"Andes","en":"Andes","de":"Anden"},{"color":"var(--teal)","es":"Europa mediterránea","en":"Mediterranean Europe","de":"Mittelmeer-Europa"},{"color":"var(--green)","es":"Europa central","en":"Central Europe","de":"Mitteleuropa"}];
window.CARNAVALES = [
  {
    slug: "barranquilla", color: "var(--coral)", region: { es: "Gran Caribe", en: "Greater Caribbean", de: "Großkaribik" }, banner: "images/banners/barranquilla.png",
    place: { es: "Barranquilla", en: "Barranquilla", de: "Barranquilla" },
    country: { es: "Colombia", en: "Colombia", de: "Kolumbien" },
    dates: { es: "6 — 9 feb 2027", en: "Feb 6 — 9, 2027", de: "6.–9. Feb. 2027" },
    location: { es: "Barranquilla, Atlántico, Colombia, América del Sur", en: "Barranquilla, Atlántico, Colombia, South America", de: "Barranquilla, Atlántico, Kolumbien, Südamerika" },
    origin: { es: "Siglo XIX; Batalla de Flores desde 1903", en: "19th century; Batalla de Flores since 1903", de: "19. Jahrhundert; Batalla de Flores seit 1903" },
    intro: {
      es: "El Carnaval de Barranquilla reúne durante cuatro días, antes del Miércoles de Ceniza, danzas, músicas y disfraces de raíz indígena, africana y europea. Lo abre la Lectura del Bando y lo cierra el entierro de Joselito.",
      en: "For four days before Ash Wednesday, the Barranquilla Carnival brings together dances, music and costumes of Indigenous, African and European roots. It opens with the Lectura del Bando and closes with the burial of Joselito.",
      de: "An den vier Tagen vor Aschermittwoch vereint der Karneval von Barranquilla Tänze, Musik und Kostüme indigener, afrikanischer und europäischer Herkunft. Er beginnt mit der Lectura del Bando und endet mit dem Begräbnis von Joselito."
    },
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [
        { es: "Patrimonio Cultural de la Nación, Congreso de Colombia (Ley 706 de 2001)", en: "National Cultural Heritage, Congress of Colombia (Law 706 of 2001)", de: "Nationales Kulturerbe, Kongress von Kolumbien (Gesetz 706 von 2001)" },
        { es: "Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad, UNESCO (2003)", en: "Masterpiece of the Oral and Intangible Heritage of Humanity, UNESCO (2003)", de: "Meisterwerk des mündlichen und immateriellen Erbes der Menschheit, UNESCO (2003)" },
        { es: "Lista Representativa del Patrimonio Cultural Inmaterial, UNESCO (2008)", en: "Representative List of the Intangible Cultural Heritage, UNESCO (2008)", de: "Repräsentative Liste des immateriellen Kulturerbes, UNESCO (2008)" }
      ] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: { es: "Marimondas, Garabato, Congos, Monocucos, Joselito", en: "Marimondas, Garabato, Congos, Monocucos, Joselito", de: "Marimondas, Garabato, Congos, Monocucos, Joselito" } },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: { es: "Cumbia, chandé, fandango, porro, champeta", en: "Cumbia, chandé, fandango, porro, champeta", de: "Cumbia, Chandé, Fandango, Porro, Champeta" } },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: { es: "Lectura del Bando, Guacherna, Batalla de Flores, Festival de Orquestas", en: "Lectura del Bando, Guacherna, Batalla de Flores, Orchestra Festival", de: "Lectura del Bando, Guacherna, Batalla de Flores, Orchesterfestival" } }
    ],
    related: [
      { type: { es: "Artículo", en: "Article", de: "Artikel" }, href: "ensayo-musica-carnaval.html", img: "images/musica-carnaval.jpg",
        title: { es: "La música del Carnaval de Barranquilla: patrimonio vivo", en: "The Music of the Barranquilla Carnival: A Living Heritage", de: "Die Musik des Karnevals von Barranquilla: lebendiges Erbe" },
        deck: { es: "Cumbias, papayeras, Congos de Oro, verbenas y picós.", en: "Cumbias, papayeras, Congos de Oro, verbenas and picós.", de: "Cumbias, Papayeras, Congos de Oro, Verbenas und Picós." } }
    ]
  },
  {
    slug: "venecia", color: "var(--teal)", banner: "images/banners/venecia.png", region: { es: "Europa mediterránea", en: "Mediterranean Europe", de: "Mittelmeer-Europa" },
    place: { es: "Venecia", en: "Venice", de: "Venedig" },
    country: { es: "Italia", en: "Italy", de: "Italien" },
    dates: { es: "23 ene — 9 feb 2027 (aprox.)", en: "Jan 23 — Feb 9, 2027 (approx.)", de: "23. Jan. – 9. Feb. 2027 (ca.)" },
    location: { es: "Venecia, Véneto, Italia, Europa", en: "Venice, Veneto, Italy, Europe", de: "Venedig, Venetien, Italien, Europa" },
    origin: { es: "Siglo XI–XIII; decreto del Senado en 1296", en: "11th–13th century; Senate decree of 1296", de: "11.–13. Jahrhundert; Senatsdekret von 1296" },
    intro: {
      es: "El carnaval de Venecia es célebre por sus máscaras y trajes, que durante siglos permitieron borrar por unos días las diferencias de rango social. Tras décadas de ausencia, fue relanzado en 1979.",
      en: "The Venice Carnival is famous for its masks and costumes, which for centuries allowed differences of social rank to be erased for a few days. After decades of absence, it was relaunched in 1979.",
      de: "Der Karneval von Venedig ist berühmt für seine Masken und Kostüme, mit denen über Jahrhunderte für einige Tage die Unterschiede des sozialen Rangs verwischt werden konnten. Nach Jahrzehnten der Abwesenheit wurde er 1979 wiederbelebt."
    },
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [
        { es: "Sin declaratoria oficial conocida", en: "No known official designation", de: "Keine bekannte offizielle Auszeichnung" }
      ] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: { es: "Bauta, moretta, medico della peste, colombina", en: "Bauta, moretta, medico della peste, colombina", de: "Bauta, Moretta, Medico della peste, Colombina" } },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: { es: "Conciertos y bailes de máscaras en plazas y palacios", en: "Concerts and masked balls in squares and palaces", de: "Konzerte und Maskenbälle auf Plätzen und in Palästen" } },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: { es: "Volo dell'Angelo, Festa delle Marie, concurso de la máscara más bella", en: "Volo dell'Angelo, Festa delle Marie, most beautiful mask contest", de: "Volo dell'Angelo, Festa delle Marie, Wettbewerb der schönsten Maske" } }
    ],
    related: []
  },
  {
    slug: "salvador", color: "var(--amber)", banner: "images/banners/salvador.png", region: { es: "Brasil", en: "Brazil", de: "Brasilien" },
    place: { es: "Salvador", en: "Salvador", de: "Salvador" },
    alias: { es: "Carnaval de Bahía", en: "Carnaval da Bahia", de: "Karneval von Bahia" },
    country: { es: "Brasil", en: "Brazil", de: "Brasilien" },
    dates: { es: "4 — 10 feb 2027", en: "Feb 4 — 10, 2027", de: "4.–10. Feb. 2027" },
    location: { es: "Salvador, Bahía, Brasil, América del Sur", en: "Salvador, Bahia, Brazil, South America", de: "Salvador, Bahia, Brasilien, Südamerika" },
    origin: { es: "Finales del siglo XIX; trío eléctrico desde 1950", en: "Late 19th century; trio elétrico since 1950", de: "Ende 19. Jahrhundert; Trio elétrico seit 1950" },
    intro: {
      es: "El carnaval de Salvador de Bahía se vive en la calle, detrás de los tríos eléctricos: camiones con sistemas de sonido y músicos en vivo. Los blocos afro y los afoxés lo convierten en una afirmación de la cultura afrobrasileña.",
      en: "The Salvador da Bahia carnival is lived in the street, following the trios elétricos: trucks carrying sound systems and live musicians. The blocos afro and afoxés make it an affirmation of Afro-Brazilian culture.",
      de: "Der Karneval von Salvador da Bahia findet auf der Straße statt, hinter den Trios elétricos: Lastwagen mit Soundanlagen und Live-Musikern. Die Blocos afro und Afoxés machen ihn zu einer Behauptung afrobrasilianischer Kultur."
    },
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [
        { es: "Manifestación de la cultura nacional, Brasil (Ley 15.196 de 2025)", en: "Expression of national culture, Brazil (Law 15.196 of 2025)", de: "Ausdruck der nationalen Kultur, Brasilien (Gesetz 15.196 von 2025)" },
        { es: "Trío eléctrico: Patrimonio Cultural Inmaterial de Salvador (Ley municipal 9.948 de 2026)", en: "Trio elétrico: Intangible Cultural Heritage of Salvador (Municipal Law 9.948 of 2026)", de: "Trio elétrico: Immaterielles Kulturerbe von Salvador (Gemeindegesetz 9.948 von 2026)" }
      ] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: { es: "Tríos eléctricos, blocos afro (Ilê Aiyê, Olodum), afoxés (Filhos de Gandhy)", en: "Trios elétricos, blocos afro (Ilê Aiyê, Olodum), afoxés (Filhos de Gandhy)", de: "Trios elétricos, Blocos afro (Ilê Aiyê, Olodum), Afoxés (Filhos de Gandhy)" } },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: { es: "Axé, samba-reggae, ijexá", en: "Axé, samba-reggae, ijexá", de: "Axé, Samba-Reggae, Ijexá" } },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: { es: "Circuitos Barra-Ondina y Campo Grande, salida de Ilê Aiyê", en: "Barra-Ondina and Campo Grande circuits, Ilê Aiyê's departure", de: "Routen Barra-Ondina und Campo Grande, Auszug von Ilê Aiyê" } }
    ],
    related: []
  },
  {
    slug: "basilea", color: "var(--green)", banner: "images/banners/basilea.png", region: { es: "Europa central", en: "Central Europe", de: "Mitteleuropa" },
    place: { es: "Basilea", en: "Basel", de: "Basel" },
    alias: { es: "Basler Fasnacht", en: "Basler Fasnacht", de: "Basler Fasnacht" },
    country: { es: "Suiza", en: "Switzerland", de: "Schweiz" },
    dates: { es: "15 — 17 feb 2027", en: "Feb 15 — 17, 2027", de: "15.–17. Feb. 2027" },
    location: { es: "Basilea, Basilea-Ciudad, Suiza, Europa", en: "Basel, Basel-Stadt, Switzerland, Europe", de: "Basel, Basel-Stadt, Schweiz, Europa" },
    origin: { es: "Primera mención en 1376", en: "First mentioned in 1376", de: "Erste Erwähnung 1376" },
    intro: {
      es: "La Basler Fasnacht empieza a las cuatro de la madrugada del lunes siguiente al Miércoles de Ceniza con el Morgestraich: se apagan las luces de la ciudad y las Cliquen recorren el casco antiguo con flautines, tambores y faroles.",
      en: "The Basler Fasnacht begins at four in the morning on the Monday after Ash Wednesday with the Morgestraich: the city lights go out and the Cliquen march through the old town with piccolos, drums and lanterns.",
      de: "Die Basler Fasnacht beginnt am Montag nach Aschermittwoch um vier Uhr morgens mit dem Morgestraich: Die Lichter der Stadt gehen aus, und die Cliquen ziehen mit Piccolos, Trommeln und Laternen durch die Altstadt."
    },
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [
        { es: "Lista de tradiciones vivas de Suiza (2011)", en: "List of Living Traditions in Switzerland (2011)", de: "Liste der lebendigen Traditionen der Schweiz (2011)" },
        { es: "Lista Representativa del Patrimonio Cultural Inmaterial, UNESCO (2017)", en: "Representative List of the Intangible Cultural Heritage, UNESCO (2017)", de: "Repräsentative Liste des immateriellen Kulturerbes, UNESCO (2017)" }
      ] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: { es: "Cliquen, Waggis, Larven (máscaras)", en: "Cliquen, Waggis, Larven (masks)", de: "Cliquen, Waggis, Larven" } },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: { es: "Flautines y tambores, Guggenmusik", en: "Piccolos and drums, Guggenmusik", de: "Pfeifer und Tambouren, Guggenmusik" } },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: { es: "Morgestraich, Cortège, exposición de faroles, Endstraich", en: "Morgestraich, Cortège, lantern exhibition, Endstraich", de: "Morgestraich, Cortège, Laternenausstellung, Endstraich" } }
    ],
    related: []
  },
  {
    slug: "colonia", color: "var(--green)", banner: "images/banners/colonia.png", region: { es: "Europa central", en: "Central Europe", de: "Mitteleuropa" },
    place: { es: "Colonia", en: "Cologne", de: "Köln" },
    alias: { es: "Kölner Karneval", en: "Kölner Karneval", de: "Kölner Karneval" },
    country: { es: "Alemania", en: "Germany", de: "Deutschland" },
    dates: { es: "4 — 9 feb 2027", en: "Feb 4 — 9, 2027", de: "4.–9. Feb. 2027" },
    location: { es: "Colonia, Renania del Norte-Westfalia, Alemania, Europa", en: "Cologne, North Rhine-Westphalia, Germany, Europe", de: "Köln, Nordrhein-Westfalen, Deutschland, Europa" },
    origin: { es: "Raíces medievales; forma moderna desde 1823", en: "Medieval roots; modern form since 1823", de: "Mittelalterliche Wurzeln; moderne Form seit 1823" },
    intro: {
      es: "El carnaval de Colonia abre su temporada el 11 de noviembre a las 11:11 y vive su punto culminante en los días locos, de la Weiberfastnacht al Rosenmontag, con el desfile de carrozas y el Dreigestirn: Príncipe, Campesino y Virgen.",
      en: "The Cologne Carnival opens its season on 11 November at 11:11 and peaks on the crazy days, from Weiberfastnacht to Rosenmontag, with the float parade and the Dreigestirn: Prince, Peasant and Maiden.",
      de: "Der Kölner Karneval eröffnet die Session am 11.11. um 11:11 Uhr und erreicht seinen Höhepunkt an den tollen Tagen von Weiberfastnacht bis Rosenmontag, mit dem Rosenmontagszug und dem Dreigestirn: Prinz, Bauer und Jungfrau."
    },
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [
        { es: "Inventario del patrimonio inmaterial de Renania del Norte-Westfalia (2014)", en: "North Rhine-Westphalia Intangible Heritage Inventory (2014)", de: "Landesinventar Immaterielles Kulturerbe NRW (2014)" },
        { es: "Inventario nacional del patrimonio inmaterial de Alemania, como «carnaval renano» (2014)", en: "German national inventory of intangible heritage, as “Rhineland carnival” (2014)", de: "Bundesweites Verzeichnis des immateriellen Kulturerbes, als „Rheinischer Karneval“ (2014)" }
      ] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: { es: "Dreigestirn (Príncipe, Campesino, Virgen), Funken", en: "Dreigestirn (Prince, Peasant, Maiden), Funken", de: "Dreigestirn (Prinz, Bauer, Jungfrau), Funken" } },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: { es: "Canciones en kölsch, bandas como Bläck Fööss y Brings", en: "Songs in Kölsch, bands such as Bläck Fööss and Brings", de: "Kölsche Lieder, Bands wie Bläck Fööss und Brings" } },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: { es: "11.11., Weiberfastnacht, Rosenmontagszug", en: "11.11., Weiberfastnacht, Rosenmontag parade", de: "11.11., Weiberfastnacht, Rosenmontagszug" } }
    ],
    related: []
  },
  {
    slug: "port-of-spain", color: "var(--coral)", region: { es: "Gran Caribe", en: "Greater Caribbean", de: "Großkaribik" }, banner: "images/banners/port-of-spain.png",
    place: { es: "Puerto España", en: "Port of Spain", de: "Port of Spain" },
    alias: { es: "Carnaval de Trinidad y Tobago", en: "Trinidad and Tobago Carnival", de: "Karneval von Trinidad und Tobago" },
    country: { es: "Trinidad y Tobago", en: "Trinidad & Tobago", de: "Trinidad und Tobago" },
    dates: { es: "8 — 9 feb 2027", en: "Feb 8 — 9, 2027", de: "8.–9. Feb. 2027" },
    location: { es: "Puerto España, Trinidad, Trinidad y Tobago, América (Caribe)", en: "Port of Spain, Trinidad, Trinidad & Tobago, Americas (Caribbean)", de: "Port of Spain, Trinidad, Trinidad und Tobago, Amerika (Karibik)" },
    origin: { es: "Finales del siglo XVIII; carnaval popular tras la emancipación de 1838", en: "Late 18th century; popular carnival after emancipation in 1838", de: "Ende 18. Jahrhundert; Volkskarneval nach der Emanzipation 1838" },
    intro: {
      es: "El carnaval de Trinidad y Tobago estalla con el J'ouvert al amanecer del lunes y sigue con las bandas de mas en la calle. Es la cuna del calipso, la soca y el steelpan, y sus competencias marcan toda la temporada.",
      en: "The Trinidad and Tobago carnival bursts open with J'ouvert at dawn on Monday and continues with the mas bands in the streets. It is the cradle of calypso, soca and steelpan, and its competitions shape the whole season.",
      de: "Der Karneval von Trinidad und Tobago bricht mit J'ouvert im Morgengrauen des Montags los und setzt sich mit den Mas-Bands auf den Straßen fort. Er ist die Wiege von Calypso, Soca und Steelpan, und seine Wettbewerbe prägen die ganze Saison."
    },
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [
        { es: "Steelpan, instrumento nacional de Trinidad y Tobago (1992; ley de 2024)", en: "Steelpan, national instrument of Trinidad and Tobago (1992; law of 2024)", de: "Steelpan, Nationalinstrument von Trinidad und Tobago (1992; Gesetz von 2024)" },
        { es: "Día Mundial del Steelpan, 11 de agosto, Asamblea General de la ONU (2023)", en: "World Steelpan Day, 11 August, UN General Assembly (2023)", de: "Welttag des Steelpan, 11. August, UN-Generalversammlung (2023)" }
      ] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: { es: "Moko Jumbie, Dame Lorraine, Jab Jab, Midnight Robber, Pierrot Grenade", en: "Moko Jumbie, Dame Lorraine, Jab Jab, Midnight Robber, Pierrot Grenade", de: "Moko Jumbie, Dame Lorraine, Jab Jab, Midnight Robber, Pierrot Grenade" } },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: { es: "Calipso, soca, steelpan, extempo", en: "Calypso, soca, steelpan, extempo", de: "Calypso, Soca, Steelpan, Extempo" } },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: { es: "Panorama, Dimanche Gras (Calypso Monarch), J'ouvert, desfile de las bandas de mas", en: "Panorama, Dimanche Gras (Calypso Monarch), J'ouvert, parade of the bands", de: "Panorama, Dimanche Gras (Calypso Monarch), J'ouvert, Parade der Mas-Bands" } }
    ],
    related: [
      { type: { es: "Especial", en: "Special", de: "Spezial" }, href: "especial-calypso.html", img: "images/calypso-hero.png",
        title: { es: "La ruta del calipso", en: "The Calypso Route", de: "Die Route des Calypso" },
        deck: { es: "Historia, monarcas, géneros hermanos y rutas de migración, en ocho capítulos.", en: "History, monarchs, sister genres and migration routes, in eight chapters.", de: "Geschichte, Monarchen, verwandte Genres und Migrationsrouten in acht Kapiteln." } }
    ]
  },
  {
    slug: "oruro", color: "var(--purple)", banner: "images/banners/oruro.png", region: { es: "Andes", en: "Andes", de: "Anden" },
    place: { es: "Oruro", en: "Oruro", de: "Oruro" },
    country: { es: "Bolivia", en: "Bolivia", de: "Bolivien" },
    dates: { es: "6 — 9 feb 2027", en: "Feb 6 — 9, 2027", de: "6.–9. Feb. 2027" },
    location: { es: "Oruro, Departamento de Oruro, Bolivia, América del Sur", en: "Oruro, Oruro Department, Bolivia, South America", de: "Oruro, Departamento Oruro, Bolivien, Südamerika" },
    origin: { es: "Época colonial; culto a la Virgen del Socavón desde 1789", en: "Colonial era; devotion to the Virgen del Socavón since 1789", de: "Kolonialzeit; Verehrung der Virgen del Socavón seit 1789" },
    intro: {
      es: "En el altiplano boliviano, el carnaval de Oruro une la devoción a la Virgen del Socavón con tradiciones andinas. Miles de danzarines recorren la ciudad en una peregrinación de varios kilómetros, encabezada por la Diablada.",
      en: "On the Bolivian altiplano, the Oruro Carnival combines devotion to the Virgen del Socavón with Andean traditions. Thousands of dancers cross the city in a pilgrimage several kilometres long, led by the Diablada.",
      de: "Auf dem bolivianischen Altiplano verbindet der Karneval von Oruro die Verehrung der Virgen del Socavón mit andinen Traditionen. Tausende Tänzer ziehen in einer kilometerlangen Pilgerprozession durch die Stadt, angeführt von der Diablada."
    },
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [
        { es: "Oruro, Capital del Folklore de Bolivia (D. S. 09088 de 1970; Ley 602 de 1984)", en: "Oruro, Folklore Capital of Bolivia (Supreme Decree 09088 of 1970; Law 602 of 1984)", de: "Oruro, Folklore-Hauptstadt Boliviens (Dekret 09088 von 1970; Gesetz 602 von 1984)" },
        { es: "Patrimonio Cultural, Artístico, Tradicional y Folklórico de la Nación (D. S. 23966 de 1995)", en: "Cultural, Artistic, Traditional and Folkloric Heritage of the Nation (Supreme Decree 23966 of 1995)", de: "Kulturelles, künstlerisches, traditionelles und folkloristisches Erbe der Nation (Dekret 23966 von 1995)" },
        { es: "Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad, UNESCO (2001)", en: "Masterpiece of the Oral and Intangible Heritage of Humanity, UNESCO (2001)", de: "Meisterwerk des mündlichen und immateriellen Erbes der Menschheit, UNESCO (2001)" },
        { es: "Lista Representativa del Patrimonio Cultural Inmaterial, UNESCO (2008)", en: "Representative List of the Intangible Cultural Heritage, UNESCO (2008)", de: "Repräsentative Liste des immateriellen Kulturerbes, UNESCO (2008)" }
      ] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: { es: "Diablos, China Supay, Arcángel San Miguel, morenos", en: "Devils, China Supay, Archangel Michael, morenos", de: "Teufel, China Supay, Erzengel Michael, Morenos" } },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: { es: "Bandas de bronce, morenada, diablada, caporales", en: "Brass bands, morenada, diablada, caporales", de: "Blaskapellen, Morenada, Diablada, Caporales" } },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: { es: "Entrada o peregrinación del sábado, Anata Andina", en: "Saturday Entrada (pilgrimage), Anata Andina", de: "Entrada (Pilgerzug) am Samstag, Anata Andina" } }
    ],
    related: []
  },
  {
    slug: "nueva-orleans", color: "var(--coral)", banner: "images/banners/nueva-orleans.png", region: { es: "Gran Caribe", en: "Greater Caribbean", de: "Großkaribik" },
    place: { es: "Nueva Orleans", en: "New Orleans", de: "New Orleans" },
    alias: { es: "Mardi Gras", en: "Mardi Gras", de: "Mardi Gras" },
    country: { es: "EE. UU.", en: "USA", de: "USA" },
    dates: { es: "9 feb 2027 (Mardi Gras); temporada desde el 6 ene", en: "Feb 9, 2027 (Mardi Gras); season from Jan 6", de: "9. Feb. 2027 (Mardi Gras); Saison ab 6. Jan." },
    location: { es: "Nueva Orleans, Luisiana, EE. UU., América del Norte", en: "New Orleans, Louisiana, USA, North America", de: "New Orleans, Louisiana, USA, Nordamerika" },
    origin: { es: "Primer desfile en 1837; krewes desde 1857", en: "First parade in 1837; krewes since 1857", de: "Erster Umzug 1837; Krewes seit 1857" },
    intro: {
      es: "El Mardi Gras de Nueva Orleans es una temporada de desfiles organizados por las krewes, que lanzan collares y objetos al público desde sus carrozas. Junto a ellas, los Mardi Gras Indians mantienen una tradición afroamericana de trajes bordados y cantos.",
      en: "Mardi Gras in New Orleans is a season of parades organised by the krewes, who throw beads and trinkets to the crowd from their floats. Alongside them, the Mardi Gras Indians keep alive an African American tradition of beaded suits and chants.",
      de: "Mardi Gras in New Orleans ist eine Saison von Umzügen, die von den Krewes organisiert werden; von ihren Wagen werfen sie Ketten und Kleinigkeiten in die Menge. Daneben pflegen die Mardi Gras Indians eine afroamerikanische Tradition bestickter Kostüme und Gesänge."
    },
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [
        { es: "Sin declaratoria oficial conocida", en: "No known official designation", de: "Keine bekannte offizielle Auszeichnung" }
      ] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: { es: "Krewes (Rex, Zulu, Endymion, Bacchus), Mardi Gras Indians, Baby Dolls", en: "Krewes (Rex, Zulu, Endymion, Bacchus), Mardi Gras Indians, Baby Dolls", de: "Krewes (Rex, Zulu, Endymion, Bacchus), Mardi Gras Indians, Baby Dolls" } },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: { es: "Brass bands, jazz, funk", en: "Brass bands, jazz, funk", de: "Brass Bands, Jazz, Funk" } },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: { es: "Desfiles de Zulu y Rex el martes de carnaval; colores púrpura, verde y dorado", en: "Zulu and Rex parades on Fat Tuesday; purple, green and gold", de: "Umzüge von Zulu und Rex am Fastnachtsdienstag; Lila, Grün und Gold" } }
    ],
    related: []
  },
  {
    slug: "rio", color: "var(--amber)", banner: "images/banners/rio.png", region: {"es":"Brasil","en":"Brazil","de":"Brasilien"},
    place: {"es":"Río de Janeiro","en":"Rio de Janeiro","de":"Rio de Janeiro"},
    country: {"es":"Brasil","en":"Brazil","de":"Brasilien"},
    dates: {"es":"5 — 10 feb 2027","en":"Feb 5 — 10, 2027","de":"5.–10. Feb. 2027"},
    location: {"es":"Río de Janeiro, Río de Janeiro, Brasil, América del Sur","en":"Rio de Janeiro, Rio de Janeiro, Brazil, South America","de":"Rio de Janeiro, Rio de Janeiro, Brasilien, Südamerika"},
    origin: {"es":"Entrudo colonial (siglos XVII–XIX); escuelas de samba desde 1928","en":"Colonial entrudo (17th–19th c.); samba schools since 1928","de":"Kolonialer Entrudo (17.–19. Jh.); Sambaschulen seit 1928"},
    intro: {"es":"El carnaval de Río tiene dos caras: el desfile de las escuelas de samba en el Sambódromo, una competencia de música, danza y carrozas preparada durante todo el año, y los blocos de calle, que llenan los barrios de samba y marchinhas.","en":"Rio's carnival has two faces: the samba school parade in the Sambadrome, a year-long competition of music, dance and floats, and the street blocos that fill the neighbourhoods with samba and marchinhas.","de":"Der Karneval von Rio hat zwei Gesichter: den Umzug der Sambaschulen im Sambódromo, einen das ganze Jahr vorbereiteten Wettbewerb aus Musik, Tanz und Wagen, und die Straßen-Blocos, die die Viertel mit Samba und Marchinhas füllen."},
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [{"es":"Manifestación de la cultura nacional, Brasil (ley federal de 2025)","en":"Expression of national culture, Brazil (federal law of 2025)","de":"Ausdruck der nationalen Kultur, Brasilien (Bundesgesetz von 2025)"},{"es":"Matrices del samba de Río de Janeiro (partido-alto, samba de terreiro, samba-enredo), patrimonio inmaterial de Brasil, IPHAN (2007)","en":"Matrices of Rio de Janeiro samba (partido-alto, samba de terreiro, samba-enredo), intangible heritage of Brazil, IPHAN (2007)","de":"Matrizen des Samba von Rio de Janeiro (Partido-alto, Samba de terreiro, Samba-enredo), immaterielles Kulturerbe Brasiliens, IPHAN (2007)"}] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: {"es":"Escuelas de samba, mestre-sala y porta-bandeira, batería, Rey Momo, blocos","en":"Samba schools, mestre-sala and porta-bandeira, bateria, King Momo, blocos","de":"Sambaschulen, Mestre-sala und Porta-bandeira, Bateria, König Momo, Blocos"} },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: {"es":"Samba-enredo, marchinha, samba de partido-alto","en":"Samba-enredo, marchinha, partido-alto samba","de":"Samba-enredo, Marchinha, Partido-alto"} },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: {"es":"Desfiles del Grupo Especial en el Sambódromo, Cordão da Bola Preta, desfile de las campeonas","en":"Grupo Especial parades in the Sambadrome, Cordão da Bola Preta, Champions' Parade","de":"Umzüge der Grupo Especial im Sambódromo, Cordão da Bola Preta, Parade der Siegerschulen"} }
    ],
    related: [
      { type: { es: "Dataset", en: "Dataset", de: "Datensatz" }, href: "samba-enredo-corpus.html", img: "images/banners/rio.png",
        title: { es: "Samba-Enredo Corpus (CSEC)", en: "Samba-Enredo Corpus (CSEC)", de: "Samba-Enredo Corpus (CSEC)" },
        deck: { es: "Letras, escolas, puntuaciones y barrios del Carnaval de Río como datos abiertos.", en: "Rio carnival lyrics, schools, scores and neighbourhoods as open data.", de: "Liedtexte, Escolas, Punktzahlen und Stadtteile des Karnevals von Rio als offene Daten." } }
    ]
  },
  {
    slug: "pasto", color: "var(--purple)", banner: "images/banners/pasto.png", region: {"es":"Andes","en":"Andes","de":"Anden"},
    place: {"es":"Pasto","en":"Pasto","de":"Pasto"},
    alias: { es: "Carnaval de Negros y Blancos", en: "Carnival of Blacks and Whites", de: "Karneval der Schwarzen und Weißen" },
    country: {"es":"Colombia","en":"Colombia","de":"Kolumbien"},
    dates: {"es":"2 — 7 ene 2027","en":"Jan 2 — 7, 2027","de":"2.–7. Jan. 2027"},
    location: {"es":"San Juan de Pasto, Nariño, Colombia, América del Sur","en":"San Juan de Pasto, Nariño, Colombia, South America","de":"San Juan de Pasto, Nariño, Kolumbien, Südamerika"},
    origin: {"es":"Raíces coloniales y andinas; Día de Negros documentado en el siglo XIX, Día de Blancos desde 1912","en":"Colonial and Andean roots; Day of Blacks documented in the 19th century, Day of Whites since 1912","de":"Koloniale und andine Wurzeln; Tag der Schwarzen im 19. Jh. belegt, Tag der Weißen seit 1912"},
    intro: {"es":"El Carnaval de Negros y Blancos se celebra a comienzos de enero en Pasto. Su centro son dos días de juego: el 5 de enero la gente se pinta de negro y el 6 de blanco, en un ritual de igualdad. Lo coronan carrozas monumentales hechas por artesanos locales.","en":"The Carnival of Blacks and Whites is held in early January in Pasto. At its heart are two days of play: on 5 January people paint themselves black and on the 6th white, in a ritual of equality. It culminates in monumental floats built by local artisans.","de":"Der Karneval der Schwarzen und Weißen wird Anfang Januar in Pasto gefeiert. Im Mittelpunkt stehen zwei Spieltage: Am 5. Januar bemalen sich die Menschen schwarz, am 6. weiß – ein Ritual der Gleichheit. Höhepunkt sind monumentale Wagen lokaler Kunsthandwerker."},
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [{"es":"Patrimonio Cultural de la Nación, Congreso de Colombia (Ley 706 de 2001)","en":"National Cultural Heritage, Congress of Colombia (Law 706 of 2001)","de":"Nationales Kulturerbe, Kongress von Kolumbien (Gesetz 706 von 2001)"},{"es":"Lista Representativa del Patrimonio Cultural Inmaterial, UNESCO (2009)","en":"Representative List of the Intangible Cultural Heritage, UNESCO (2009)","de":"Repräsentative Liste des immateriellen Kulturerbes, UNESCO (2009)"}] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: {"es":"Familia Castañeda, carrozas, comparsas, murgas, colectivos coreográficos","en":"Familia Castañeda, floats, comparsas, murgas, choreographic groups","de":"Familia Castañeda, Wagen, Comparsas, Murgas, Choreografiegruppen"} },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: {"es":"Bandas andinas, sanjuanito, son sureño, guaneña","en":"Andean bands, sanjuanito, son sureño, guaneña","de":"Andine Bands, Sanjuanito, Son sureño, Guaneña"} },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: {"es":"Carnavalito, Llegada de la Familia Castañeda, Día de Negros, Día de Blancos y Gran Desfile","en":"Carnavalito, Arrival of the Familia Castañeda, Day of Blacks, Day of Whites and Grand Parade","de":"Carnavalito, Ankunft der Familia Castañeda, Tag der Schwarzen, Tag der Weißen und Großer Umzug"} }
    ],
    related: []
  },
  {
    slug: "cadiz", color: "var(--teal)", banner: "images/banners/cadiz.png", region: {"es":"Europa mediterránea","en":"Mediterranean Europe","de":"Mittelmeer-Europa"},
    place: {"es":"Cádiz","en":"Cádiz","de":"Cádiz"},
    country: {"es":"España","en":"Spain","de":"Spanien"},
    dates: {"es":"4 — 14 feb 2027","en":"Feb 4 — 14, 2027","de":"4.–14. Feb. 2027"},
    location: {"es":"Cádiz, Andalucía, España, Europa","en":"Cádiz, Andalusia, Spain, Europe","de":"Cádiz, Andalusien, Spanien, Europa"},
    origin: {"es":"Primera noticia en 1591; agrupaciones desde el siglo XIX","en":"First recorded in 1591; groups since the 19th century","de":"Erste Erwähnung 1591; Gruppen seit dem 19. Jh."},
    intro: {"es":"El carnaval de Cádiz es un carnaval de la palabra: chirigotas, comparsas, coros y cuartetos cantan coplas satíricas sobre la actualidad. Su centro es el Concurso de Agrupaciones del Gran Teatro Falla, pero la fiesta desborda las calles con las ilegales.","en":"The Cádiz carnival is a carnival of the word: chirigotas, comparsas, choirs and quartets sing satirical verses about current affairs. Its centre is the groups' contest at the Gran Teatro Falla, but the festival spills into the streets with the ilegales.","de":"Der Karneval von Cádiz ist ein Karneval des Wortes: Chirigotas, Comparsas, Chöre und Quartette singen satirische Coplas über das Zeitgeschehen. Sein Zentrum ist der Wettbewerb im Gran Teatro Falla, doch das Fest ergießt sich mit den Ilegales auf die Straßen."},
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [{"es":"Fiesta de Interés Turístico Internacional (1980)","en":"Fiesta of International Tourist Interest (1980)","de":"Fest von internationalem touristischem Interesse (1980)"},{"es":"Bien de Interés Cultural, Catálogo General del Patrimonio Histórico Andaluz (2019)","en":"Asset of Cultural Interest, General Catalogue of Andalusian Historical Heritage (2019)","de":"Kulturgut, Generalkatalog des andalusischen historischen Erbes (2019)"},{"es":"Capitalidad Iberoamericana del Carnaval 2019–2020 (UCCI)","en":"Ibero-American Capital of Carnival 2019–2020 (UCCI)","de":"Iberoamerikanische Hauptstadt des Karnevals 2019–2020 (UCCI)"}] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: {"es":"Chirigotas, comparsas, coros, cuartetos, ilegales","en":"Chirigotas, comparsas, choirs, quartets, ilegales","de":"Chirigotas, Comparsas, Chöre, Quartette, Ilegales"} },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: {"es":"Pasodoble, cuplé, tango gaditano, popurrí","en":"Pasodoble, cuplé, Cádiz tango, potpourri","de":"Pasodoble, Cuplé, Tango gaditano, Potpourri"} },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: {"es":"Final del COAC en el Gran Teatro Falla, pregón, cabalgata, carruseles de coros","en":"COAC final at the Gran Teatro Falla, opening speech, parade, choir carousels","de":"COAC-Finale im Gran Teatro Falla, Pregón, Umzug, Chor-Karussells"} }
    ],
    related: []
  },
  {
    slug: "binche", color: "var(--green)", banner: "images/banners/binche.png", region: {"es":"Europa central","en":"Central Europe","de":"Mitteleuropa"},
    place: {"es":"Binche","en":"Binche","de":"Binche"},
    country: {"es":"Bélgica","en":"Belgium","de":"Belgien"},
    dates: {"es":"7 — 9 feb 2027","en":"Feb 7 — 9, 2027","de":"7.–9. Feb. 2027"},
    location: {"es":"Binche, Henao (Valonia), Bélgica, Europa","en":"Binche, Hainaut (Wallonia), Belgium, Europe","de":"Binche, Hennegau (Wallonien), Belgien, Europa"},
    origin: {"es":"Fiestas documentadas desde el siglo XIV; los Gilles aparecen en textos en 1795","en":"Festivities documented since the 14th century; the Gilles appear in texts in 1795","de":"Feste seit dem 14. Jh. belegt; die Gilles erscheinen 1795 in Texten"},
    intro: {"es":"En Binche, el Martes de Carnaval pertenece a los Gilles: cerca de mil hombres de la ciudad con máscara de cera, zuecos y campanas, que por la tarde se coronan con sombreros de plumas de avestruz y lanzan naranjas al público al son de tambores.","en":"In Binche, Shrove Tuesday belongs to the Gilles: around a thousand local men in wax masks, clogs and bells who, in the afternoon, don ostrich-feather hats and throw oranges to the crowd to the beat of drums.","de":"In Binche gehört der Fastnachtsdienstag den Gilles: rund tausend Männer der Stadt mit Wachsmaske, Holzschuhen und Glocken, die am Nachmittag Hüte aus Straußenfedern tragen und zum Klang der Trommeln Orangen in die Menge werfen."},
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [{"es":"Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad, UNESCO (2003)","en":"Masterpiece of the Oral and Intangible Heritage of Humanity, UNESCO (2003)","de":"Meisterwerk des mündlichen und immateriellen Erbes der Menschheit, UNESCO (2003)"},{"es":"Patrimonio inmaterial de la Federación Valonia-Bruselas (2004)","en":"Intangible heritage of the French Community of Belgium (2004)","de":"Immaterielles Erbe der Französischen Gemeinschaft Belgiens (2004)"},{"es":"Lista Representativa del Patrimonio Cultural Inmaterial, UNESCO (2008)","en":"Representative List of the Intangible Cultural Heritage, UNESCO (2008)","de":"Repräsentative Liste des immateriellen Kulturerbes, UNESCO (2008)"}] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: {"es":"Gilles, Paysans, Arlequins, Pierrots, Mam'selles","en":"Gilles, Paysans, Arlequins, Pierrots, Mam'selles","de":"Gilles, Paysans, Arlequins, Pierrots, Mam'selles"} },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: {"es":"Tambores y violas; airs de Gilles","en":"Drums and violas; airs de Gilles","de":"Trommeln und Violen; Airs de Gilles"} },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: {"es":"Dimanche Gras, Lundi Gras, desfile de los Gilles y baile en la Grand-Place el Martes de Carnaval","en":"Dimanche Gras, Lundi Gras, Gilles' parade and dance on the Grand-Place on Shrove Tuesday","de":"Dimanche Gras, Lundi Gras, Umzug der Gilles und Tanz auf der Grand-Place am Fastnachtsdienstag"} }
    ],
    related: []
  },
  {
    slug: "montevideo", color: "var(--blue)", banner: "images/banners/montevideo.png", region: {"es":"Río de la Plata","en":"Río de la Plata","de":"Río de la Plata"},
    place: {"es":"Montevideo","en":"Montevideo","de":"Montevideo"},
    country: {"es":"Uruguay","en":"Uruguay","de":"Uruguay"},
    dates: {"es":"21 ene — 6 feb 2027 (concurso hasta marzo)","en":"Jan 21 — Feb 6, 2027 (contest until March)","de":"21. Jan. – 6. Feb. 2027 (Wettbewerb bis März)"},
    location: {"es":"Montevideo, Montevideo, Uruguay, América del Sur","en":"Montevideo, Montevideo, Uruguay, South America","de":"Montevideo, Montevideo, Uruguay, Südamerika"},
    origin: {"es":"Carnaval colonial; candombe desde el siglo XIX; murga desde 1909","en":"Colonial carnival; candombe since the 19th century; murga since 1909","de":"Kolonialer Karneval; Candombe seit dem 19. Jh.; Murga seit 1909"},
    intro: {"es":"Considerado el carnaval más largo del mundo, el de Montevideo se vive durante más de un mes en los tablados de los barrios y en el Teatro de Verano. Sus dos almas son la murga, heredera de las agrupaciones de Cádiz, y el candombe de las comparsas afrouruguayas.","en":"Considered the longest carnival in the world, Montevideo's is lived for more than a month on neighbourhood stages and at the Teatro de Verano. Its two souls are the murga, heir to the Cádiz groups, and the candombe of the Afro-Uruguayan comparsas.","de":"Der Karneval von Montevideo gilt als längster der Welt und wird über einen Monat lang auf den Bühnen der Viertel und im Teatro de Verano gefeiert. Seine zwei Seelen sind die Murga, Erbin der Gruppen aus Cádiz, und der Candombe der afro-uruguayischen Comparsas."},
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [{"es":"El candombe y su espacio sociocultural, Lista Representativa del Patrimonio Cultural Inmaterial, UNESCO (2009)","en":"Candombe and its socio-cultural space, Representative List of the Intangible Cultural Heritage, UNESCO (2009)","de":"Der Candombe und sein soziokultureller Raum, Repräsentative Liste des immateriellen Kulturerbes, UNESCO (2009)"},{"es":"Día Nacional del Candombe, la Cultura Afrouruguaya y la Equidad Racial (Ley 18.059 de 2006)","en":"National Day of Candombe, Afro-Uruguayan Culture and Racial Equity (Law 18.059 of 2006)","de":"Nationaler Tag des Candombe, der afro-uruguayischen Kultur und der Rassengleichheit (Gesetz 18.059 von 2006)"}] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: {"es":"Murgas, comparsas de negros y lubolos, parodistas, humoristas, revistas","en":"Murgas, comparsas de negros y lubolos, parodistas, humoristas, revistas","de":"Murgas, Comparsas de negros y lubolos, Parodistas, Humoristas, Revistas"} },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: {"es":"Murga, candombe (tambores chico, repique y piano)","en":"Murga, candombe (chico, repique and piano drums)","de":"Murga, Candombe (Trommeln Chico, Repique und Piano)"} },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: {"es":"Desfile Inaugural por 18 de Julio, Desfile de Llamadas por Isla de Flores, Concurso Oficial en el Teatro de Verano, tablados","en":"Opening Parade on 18 de Julio, Llamadas Parade on Isla de Flores, Official Contest at the Teatro de Verano, tablados","de":"Eröffnungsumzug auf der 18 de Julio, Llamadas auf der Isla de Flores, Offizieller Wettbewerb im Teatro de Verano, Tablados"} }
    ],
    related: []
  },
  {
    slug: "gualeguaychu", color: "var(--blue)", banner: "images/banners/gualeguaychu.png", region: {"es":"Río de la Plata","en":"Río de la Plata","de":"Río de la Plata"},
    place: {"es":"Gualeguaychú","en":"Gualeguaychú","de":"Gualeguaychú"},
    alias: { es: "Carnaval del País", en: "Carnaval del País", de: "Carnaval del País" },
    country: {"es":"Argentina","en":"Argentina","de":"Argentinien"},
    dates: {"es":"Sábados de enero y febrero de 2027 (por confirmar)","en":"Saturdays in January and February 2027 (tbc)","de":"Samstage im Januar und Februar 2027 (noch offen)"},
    location: {"es":"Gualeguaychú, Entre Ríos, Argentina, América del Sur","en":"Gualeguaychú, Entre Ríos, Argentina, South America","de":"Gualeguaychú, Entre Ríos, Argentinien, Südamerika"},
    origin: {"es":"Corsos desde finales del siglo XIX; Carnaval del País desde 1981; corsódromo desde 1997","en":"Corsos since the late 19th century; Carnaval del País since 1981; corsódromo since 1997","de":"Corsos seit Ende des 19. Jh.; Carnaval del País seit 1981; Corsódromo seit 1997"},
    intro: {"es":"El Carnaval del País es el mayor espectáculo a cielo abierto de Argentina. Durante las noches de verano, comparsas respaldadas por clubes locales compiten en el corsódromo José Luis Gestro con carrozas, plumas, batucadas y un año entero de trabajo comunitario en talleres.","en":"The Carnaval del País is Argentina's largest open-air spectacle. On summer nights, comparsas backed by local clubs compete in the José Luis Gestro corsódromo with floats, feathers, batucadas and a full year of community work in workshops.","de":"Der Carnaval del País ist das größte Open-Air-Spektakel Argentiniens. In Sommernächten treten von lokalen Clubs getragene Comparsas im Corsódromo José Luis Gestro mit Wagen, Federn, Batucadas und einem ganzen Jahr gemeinschaftlicher Werkstattarbeit gegeneinander an."},
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [{"es":"Fiesta Provincial de Entre Ríos (Ley 8358) e interés cultural provincial (Decreto 4266/04)","en":"Provincial Festival of Entre Ríos (Law 8358) and provincial cultural interest (Decree 4266/04)","de":"Provinzfest von Entre Ríos (Gesetz 8358) und provinzielles Kulturinteresse (Dekret 4266/04)"},{"es":"Interés cultural, Cámara de Diputados de la Nación (2023)","en":"Cultural interest, Argentine Chamber of Deputies (2023)","de":"Kulturelles Interesse, Argentinische Abgeordnetenkammer (2023)"},{"es":"Fiesta Nacional, Secretaría de Turismo de la Nación (2025)","en":"National Festival, Argentine Secretariat of Tourism (2025)","de":"Nationalfest, Argentinisches Tourismussekretariat (2025)"}] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: {"es":"Comparsas Marí Marí, Papelitos, O'Bahía, Kamarr y Ará Yeví; reinas, pasistas, carrozas","en":"Comparsas Marí Marí, Papelitos, O'Bahía, Kamarr and Ará Yeví; queens, passistas, floats","de":"Comparsas Marí Marí, Papelitos, O'Bahía, Kamarr und Ará Yeví; Königinnen, Passistas, Wagen"} },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: {"es":"Batucada, samba-enredo en español","en":"Batucada, samba-enredo in Spanish","de":"Batucada, Samba-enredo auf Spanisch"} },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: {"es":"Noches de desfile en el corsódromo, coronación de la campeona, corso popular","en":"Parade nights at the corsódromo, crowning of the champion, popular corso","de":"Paradenächte im Corsódromo, Kürung der Siegerin, Volkscorso"} }
    ],
    related: []
  },
  {
    slug: "buenos-aires", color: "var(--blue)", banner: "images/banners/buenos-aires.png", region: {"es":"Río de la Plata","en":"Río de la Plata","de":"Río de la Plata"},
    place: {"es":"Buenos Aires","en":"Buenos Aires","de":"Buenos Aires"},
    alias: { es: "Carnaval porteño", en: "Carnaval porteño", de: "Carnaval porteño" },
    country: {"es":"Argentina","en":"Argentina","de":"Argentinien"},
    dates: {"es":"Fines de semana de febrero de 2027; feriados 8 y 9 feb","en":"February weekends 2027; public holidays Feb 8 and 9","de":"Wochenenden im Februar 2027; Feiertage 8. und 9. Feb."},
    location: {"es":"Ciudad Autónoma de Buenos Aires, Argentina, América del Sur","en":"Autonomous City of Buenos Aires, Argentina, South America","de":"Autonome Stadt Buenos Aires, Argentinien, Südamerika"},
    origin: {"es":"Primer corso oficial en 1869; murgas porteñas desde comienzos del siglo XX","en":"First official corso in 1869; porteño murgas since the early 20th century","de":"Erster offizieller Corso 1869; Murgas porteñas seit Anfang des 20. Jh."},
    intro: {"es":"El carnaval porteño es un carnaval de barrio: cada fin de semana de febrero, decenas de corsos gratuitos reciben a las murgas, que bailan al ritmo del bombo con platillo y cantan críticas que unen la denuncia con la risa.","en":"Buenos Aires carnival is a neighbourhood carnival: every February weekend, dozens of free corsos welcome the murgas, who dance to the bombo con platillo and sing críticas that join protest with laughter.","de":"Der Karneval von Buenos Aires ist ein Karneval der Viertel: An jedem Februarwochenende empfangen Dutzende kostenlose Corsos die Murgas, die zum Bombo con platillo tanzen und Críticas singen, die Anklage und Lachen verbinden."},
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [{"es":"Actividad de las agrupaciones de carnaval, Patrimonio Cultural de la Ciudad de Buenos Aires (Ordenanza 52.039 de 1997)","en":"Activity of carnival groups, Cultural Heritage of the City of Buenos Aires (Ordinance 52.039 of 1997)","de":"Tätigkeit der Karnevalsgruppen, Kulturerbe der Stadt Buenos Aires (Verordnung 52.039 von 1997)"},{"es":"Restitución de los feriados nacionales de carnaval (2011)","en":"Reinstatement of the national carnival holidays (2011)","de":"Wiedereinführung der nationalen Karnevalsfeiertage (2011)"}] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: {"es":"Murgas porteñas, levitas, fantasía, estandarte, Rey Momo","en":"Porteño murgas, levitas (tailcoats), fantasía, standard, King Momo","de":"Murgas porteñas, Levitas (Fräcke), Fantasía, Standarte, König Momo"} },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: {"es":"Murga porteña: bombo con platillo, redoblante y canto","en":"Porteño murga: bombo con platillo, snare drum and song","de":"Murga porteña: Bombo con platillo, Snaredrum und Gesang"} },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: {"es":"Corsos barriales (Boedo, Caballito, Mataderos), desfile de murgas por Avenida de Mayo","en":"Neighbourhood corsos (Boedo, Caballito, Mataderos), murga parade on Avenida de Mayo","de":"Corsos in den Vierteln (Boedo, Caballito, Mataderos), Murga-Umzug auf der Avenida de Mayo"} }
    ],
    related: []
  },
  {
    slug: "recife", color: "var(--amber)", banner: "images/banners/recife.png", region: {"es":"Brasil","en":"Brazil","de":"Brasilien"},
    place: {"es":"Recife","en":"Recife","de":"Recife"},
    country: {"es":"Brasil","en":"Brazil","de":"Brasilien"},
    dates: {"es":"6 — 10 feb 2027","en":"Feb 6 — 10, 2027","de":"6.–10. Feb. 2027"},
    location: {"es":"Recife, Pernambuco, Brasil, América del Sur","en":"Recife, Pernambuco, Brazil, South America","de":"Recife, Pernambuco, Brasilien, Südamerika"},
    origin: {"es":"Frevo surgido a finales del siglo XIX; Galo da Madrugada desde 1978","en":"Frevo emerged in the late 19th century; Galo da Madrugada since 1978","de":"Frevo entstand Ende des 19. Jh.; Galo da Madrugada seit 1978"},
    intro: {"es":"El carnaval de Recife, junto al de la vecina Olinda, es el carnaval del frevo: una música rápida de metales y una danza acrobática con sombrillas de colores. Se vive en la calle, sin cuerdas ni tribunas, con maracatus, caboclinhos y el bloco más grande del mundo.","en":"The carnival of Recife, together with neighbouring Olinda, is the carnival of frevo: fast brass music and an acrobatic dance with colourful umbrellas. It is lived in the street, without ropes or stands, with maracatus, caboclinhos and the world's largest bloco.","de":"Der Karneval von Recife ist zusammen mit dem des benachbarten Olinda der Karneval des Frevo: schnelle Bläsermusik und ein akrobatischer Tanz mit bunten Schirmchen. Er findet auf der Straße statt, ohne Absperrungen oder Tribünen, mit Maracatus, Caboclinhos und dem größten Bloco der Welt."},
    facts: [
      { k: { es: "Reconocimientos", en: "Recognition", de: "Anerkennungen" }, list: [{"es":"Frevo: arte del espectáculo del Carnaval de Recife, Lista Representativa del Patrimonio Cultural Inmaterial, UNESCO (2012)","en":"Frevo, performing arts of the Carnival of Recife, Representative List of the Intangible Cultural Heritage, UNESCO (2012)","de":"Frevo, darstellende Kunst des Karnevals von Recife, Repräsentative Liste des immateriellen Kulturerbes, UNESCO (2012)"},{"es":"Galo da Madrugada, el bloco de carnaval más grande del mundo según Guinness (desde 1994)","en":"Galo da Madrugada, the world's largest carnival bloco according to Guinness (since 1994)","de":"Galo da Madrugada, laut Guinness der größte Karnevals-Bloco der Welt (seit 1994)"},{"es":"Galo da Madrugada, Patrimonio Cultural Inmaterial del Estado de Pernambuco (2009)","en":"Galo da Madrugada, Intangible Cultural Heritage of the State of Pernambuco (2009)","de":"Galo da Madrugada, Immaterielles Kulturerbe des Bundesstaats Pernambuco (2009)"}] },
      { k: { es: "Figuras", en: "Figures", de: "Figuren" }, v: {"es":"Passistas de frevo con sombrinha, maracatus, caboclinhos, bonecos gigantes de Olinda","en":"Frevo passistas with sombrinha, maracatus, caboclinhos, giant puppets of Olinda","de":"Frevo-Passistas mit Sombrinha, Maracatus, Caboclinhos, Riesenpuppen von Olinda"} },
      { k: { es: "Músicas", en: "Music", de: "Musik" }, v: {"es":"Frevo de rua, frevo-canção, maracatu, caboclinho","en":"Frevo de rua, frevo-canção, maracatu, caboclinho","de":"Frevo de rua, Frevo-canção, Maracatu, Caboclinho"} },
      { k: { es: "Momentos", en: "Key events", de: "Höhepunkte" }, v: {"es":"Desfile del Galo da Madrugada el sábado, escenarios del Marco Zero, Noite dos Tambores Silenciosos","en":"Galo da Madrugada parade on Saturday, Marco Zero stages, Night of the Silent Drums","de":"Umzug des Galo da Madrugada am Samstag, Bühnen am Marco Zero, Nacht der schweigenden Trommeln"} }
    ],
    related: []
  }
];
