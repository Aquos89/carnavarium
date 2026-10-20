/* Carnavarium — glosario por carnaval. Clave = slug de carnavales.js.
   cat: fig (figura) · mus (música/danza) · ev (momento) · obj (objeto) · grp (agrupación) · pl (lugar)
   El término se deja en su lengua original; la definición va en {es, en, de}. */
window.CARNAVAL_GLOSARIO_CATS = {
  fig: { es: "Figura", en: "Figure", de: "Figur" },
  mus: { es: "Música y danza", en: "Music & dance", de: "Musik & Tanz" },
  ev:  { es: "Momento", en: "Event", de: "Ereignis" },
  obj: { es: "Objeto", en: "Object", de: "Objekt" },
  grp: { es: "Agrupación", en: "Group", de: "Gruppe" },
  pl:  { es: "Lugar", en: "Place", de: "Ort" }
};
function G(term, cat, es, en, de) { return { term: term, cat: cat, def: { es: es, en: en, de: de } }; }
window.CARNAVAL_GLOSARIO = {
  barranquilla: [
    G("Marimonda", "fig", "Disfraz de máscara con trompa, orejas grandes y traje de colores; se burla de la élite y es símbolo del carnaval.", "Mask costume with a trunk-like nose, large ears and a colourful suit; it mocks the elite and is a symbol of the carnival.", "Maskenkostüm mit rüsselartiger Nase, großen Ohren und buntem Anzug; verspottet die Elite und ist ein Symbol des Karnevals."),
    G("Garabato", "mus", "Danza que escenifica la lucha entre la vida y la muerte; su nombre viene del palo que llevan los bailarines.", "Dance that stages the struggle between life and death; named after the hooked stick the dancers carry.", "Tanz, der den Kampf zwischen Leben und Tod inszeniert; benannt nach dem Hakenstock der Tänzer."),
    G("Congo", "grp", "Danza de guerreros de raíz africana, con turbantes floridos y cintas; los grupos más antiguos datan del siglo XIX.", "Warrior dance of African roots, with flowered turbans and ribbons; the oldest groups date from the 19th century.", "Kriegertanz afrikanischen Ursprungs mit geblümten Turbanen und Bändern; die ältesten Gruppen stammen aus dem 19. Jahrhundert."),
    G("Lectura del Bando", "ev", "Ceremonia de apertura en la que la Reina del Carnaval lee el decreto que ordena la fiesta.", "Opening ceremony in which the Carnival Queen reads the decree that orders the city to celebrate.", "Eröffnungszeremonie, in der die Karnevalskönigin das Dekret verliest, das die Stadt zum Feiern verpflichtet."),
    G("Guacherna", "ev", "Desfile nocturno con faroles, velas y tambores, previo a los días centrales del carnaval.", "Night parade with lanterns, candles and drums, held before the main carnival days.", "Nächtlicher Umzug mit Laternen, Kerzen und Trommeln vor den Hauptkarnevalstagen."),
    G("Joselito Carnaval", "fig", "Personaje que «muere» el martes de carnaval; su entierro, llorado por viudas, cierra la fiesta.", "Character who “dies” on Carnival Tuesday; his burial, mourned by widows, closes the festivities.", "Figur, die am Karnevalsdienstag „stirbt“; ihr von Witwen beweintes Begräbnis beendet das Fest.")
  ],
  "port-of-spain": [
    G("J'ouvert", "ev", "Del francés jour ouvert: desfile al amanecer del lunes de carnaval, con barro, pintura y aceite.", "From French jour ouvert: dawn procession on Carnival Monday, with mud, paint and oil.", "Von frz. jour ouvert: Umzug im Morgengrauen des Karnevalsmontags mit Schlamm, Farbe und Öl."),
    G("Mas", "grp", "De masquerade: el disfraz y, por extensión, la banda que desfila con un tema común.", "From masquerade: the costume and, by extension, the band that parades under a common theme.", "Von masquerade: das Kostüm und im weiteren Sinn die Band, die unter einem gemeinsamen Thema zieht."),
    G("Canboulay", "ev", "Del francés cannes brûlées: procesión con antorchas que evoca la quema de la caña; origen del carnaval popular.", "From French cannes brûlées: torchlight procession recalling cane fires; root of the popular carnival.", "Von frz. cannes brûlées: Fackelumzug in Erinnerung an brennende Zuckerrohrfelder; Wurzel des Volkskarnevals."),
    G("Steelpan", "mus", "Instrumento de percusión afinado, hecho de bidones de petróleo; nació en Trinidad en las décadas de 1930 y 1940.", "Tuned percussion instrument made from oil drums; born in Trinidad in the 1930s–40s.", "Gestimmtes Schlaginstrument aus Ölfässern; entstand in Trinidad in den 1930er- und 1940er-Jahren."),
    G("Kaiso", "mus", "Nombre antiguo del calipso, canción de crónica y sátira cantada por el calypsonian.", "Older name for calypso, the song of chronicle and satire sung by the calypsonian.", "Älterer Name für Calypso, das Lied der Chronik und Satire, gesungen vom Calypsonian."),
    G("Moko Jumbie", "fig", "Figura sobre zancos de origen africano occidental, guardiana que camina por encima de la multitud.", "Stilt-walking figure of West African origin, a guardian who strides above the crowd.", "Stelzenfigur westafrikanischen Ursprungs, ein Wächter, der über der Menge schreitet.")
  ],
  "nueva-orleans": [
    G("Krewe", "grp", "Asociación que organiza un desfile o un baile de Mardi Gras; la primera fue la Mistick Krewe of Comus (1857).", "Club that organises a Mardi Gras parade or ball; the first was the Mistick Krewe of Comus (1857).", "Verein, der eine Mardi-Gras-Parade oder einen Ball ausrichtet; der erste war die Mistick Krewe of Comus (1857)."),
    G("Throws", "obj", "Collares, doblones y objetos que los jinetes de las carrozas lanzan al público.", "Beads, doubloons and trinkets thrown by float riders to the crowd.", "Ketten, Dublonen und Kleinigkeiten, die die Wagenfahrer in die Menge werfen."),
    G("King cake", "obj", "Rosca de la temporada de carnaval con un pequeño bebé escondido; quien lo encuentra paga la siguiente.", "Carnival-season ring cake with a tiny baby hidden inside; whoever finds it buys the next one.", "Ringkuchen der Karnevalszeit mit verstecktem Babyfigürchen; wer es findet, bringt den nächsten mit."),
    G("Mardi Gras Indians", "grp", "Comunidades afroamericanas que desfilan con trajes de plumas y abalorios cosidos a mano durante todo el año.", "African American communities who parade in feathered, beaded suits hand-sewn throughout the year.", "Afroamerikanische Gemeinschaften, die in ganzjährig handgenähten Feder- und Perlenkostümen ziehen."),
    G("Rex", "fig", "Rey del Carnaval desde 1872; su krewe introdujo los colores púrpura, verde y oro.", "King of Carnival since 1872; his krewe introduced the colours purple, green and gold.", "König des Karnevals seit 1872; seine Krewe führte die Farben Violett, Grün und Gold ein.")
  ],
  rio: [
    G("Escola de samba", "grp", "Agrupación comunitaria que compite en el desfile con un tema, una canción y miles de integrantes.", "Community association that competes in the parade with a theme, a song and thousands of members.", "Gemeinschaftsverein, der mit Thema, Lied und Tausenden Mitgliedern im Umzug antritt."),
    G("Samba-enredo", "mus", "Canción compuesta cada año para narrar el tema (enredo) del desfile de una escola.", "Song composed each year to narrate the theme (enredo) of a school's parade.", "Jährlich komponiertes Lied, das das Thema (enredo) des Umzugs einer Schule erzählt."),
    G("Bateria", "grp", "Sección de percusión de la escola, con surdos, caixas, tamborins y cuícas.", "The school's percussion section, with surdos, caixas, tamborins and cuícas.", "Perkussionsabteilung der Schule mit Surdos, Caixas, Tamborins und Cuícas."),
    G("Mestre-sala e porta-bandeira", "fig", "Pareja que porta y protege la bandera de la escola; su danza es evaluada por el jurado.", "Couple who carry and protect the school's flag; their dance is scored by the judges.", "Paar, das die Fahne der Schule trägt und schützt; ihr Tanz wird von der Jury bewertet."),
    G("Comissão de frente", "grp", "Grupo que abre el desfile de la escola y presenta su tema.", "Group that opens the school's parade and introduces its theme.", "Gruppe, die den Umzug der Schule eröffnet und ihr Thema vorstellt."),
    G("Sambódromo", "pl", "Pasarela de desfiles diseñada por Oscar Niemeyer e inaugurada en 1984.", "Parade avenue designed by Oscar Niemeyer and opened in 1984.", "Von Oscar Niemeyer entworfene Paradestraße, 1984 eröffnet.")
  ],
  recife: [
    G("Frevo", "mus", "Música y danza de ritmo muy rápido nacida en Recife a fines del siglo XIX; Patrimonio de la UNESCO (2012).", "Very fast music and dance born in Recife in the late 19th century; UNESCO heritage (2012).", "Sehr schnelle Musik und Tanzform, Ende des 19. Jahrhunderts in Recife entstanden; UNESCO-Erbe (2012)."),
    G("Sombrinha", "obj", "Pequeña sombrilla de colores que los passistas usan para equilibrarse al bailar frevo.", "Small colourful umbrella used by passistas for balance while dancing frevo.", "Kleiner bunter Schirm, mit dem die Passistas beim Frevo das Gleichgewicht halten."),
    G("Maracatu nação", "grp", "Cortejo de raíz afrobrasileña con rey, reina y percusión de alfaias; ligado a las coronaciones de reyes del Congo.", "Afro-Brazilian procession with king, queen and alfaia drums; linked to the crowning of Kings of Congo.", "Afrobrasilianischer Umzug mit König, Königin und Alfaia-Trommeln; verbunden mit den Krönungen der Kongokönige."),
    G("Galo da Madrugada", "grp", "Bloco que desfila el sábado de carnaval en Recife; se considera uno de los mayores del mundo.", "Bloco that parades on Carnival Saturday in Recife; regarded as one of the largest in the world.", "Bloco, der am Karnevalssamstag in Recife zieht; gilt als einer der größten der Welt."),
    G("Passista", "fig", "Bailarín de frevo, conocido por sus pasos acrobáticos.", "Frevo dancer, known for acrobatic steps.", "Frevo-Tänzer, bekannt für akrobatische Schritte.")
  ],
  salvador: [
    G("Trio elétrico", "obj", "Camión con equipo de sonido y músicos en lo alto; creado por Dodô y Osmar en 1950.", "Truck carrying a sound system and musicians on top; created by Dodô and Osmar in 1950.", "Lastwagen mit Musikanlage und Musikern auf dem Dach; 1950 von Dodô und Osmar erfunden."),
    G("Bloco afro", "grp", "Agrupación carnavalesca de afirmación negra; Ilê Aiyê (1974) fue el primero.", "Carnival group affirming Black identity; Ilê Aiyê (1974) was the first.", "Karnevalsgruppe der schwarzen Selbstbehauptung; Ilê Aiyê (1974) war die erste."),
    G("Afoxé", "grp", "Cortejo ligado al candomblé, como Filhos de Gandhy, que desfila de blanco y azul.", "Procession linked to Candomblé, such as Filhos de Gandhy, parading in white and blue.", "Mit dem Candomblé verbundener Umzug wie Filhos de Gandhy, in Weiß und Blau."),
    G("Abadá", "obj", "Camiseta que identifica a los miembros de un bloco y da acceso a su cordón.", "T-shirt identifying members of a bloco and granting access inside its rope.", "T-Shirt, das Mitglieder eines Bloco ausweist und Zugang innerhalb des Seils gewährt."),
    G("Pipoca", "fig", "«Palomitas»: el público que sigue a los tríos fuera de las cuerdas, sin pagar abadá.", "“Popcorn”: the crowd that follows the trios outside the ropes, without buying an abadá.", "„Popcorn“: das Publikum, das den Trios außerhalb der Seile folgt, ohne Abadá.")
  ],
  oruro: [
    G("Diablada", "mus", "Danza de diablos encabezada por Lucifer y el arcángel Miguel; emblema del carnaval de Oruro.", "Dance of devils led by Lucifer and the Archangel Michael; emblem of the Oruro carnival.", "Teufelstanz, angeführt von Luzifer und dem Erzengel Michael; Wahrzeichen des Karnevals von Oruro."),
    G("Morenada", "mus", "Danza de pasos lentos y trajes pesados, con matracas; se asocia a la memoria de los esclavizados.", "Slow-stepping dance in heavy costumes with rattles; associated with the memory of the enslaved.", "Tanz mit langsamen Schritten, schweren Kostümen und Ratschen; mit der Erinnerung an Versklavte verbunden."),
    G("Caporales", "mus", "Danza enérgica que representa al capataz; muy popular entre los jóvenes.", "Energetic dance portraying the overseer; very popular among young people.", "Energischer Tanz, der den Aufseher darstellt; bei Jugendlichen sehr beliebt."),
    G("Virgen del Socavón", "fig", "Patrona de los mineros; el desfile es una peregrinación hasta su santuario.", "Patroness of the miners; the parade is a pilgrimage to her sanctuary.", "Schutzpatronin der Bergleute; der Umzug ist eine Wallfahrt zu ihrem Heiligtum."),
    G("Entrada", "ev", "Gran peregrinación de conjuntos de danza que recorre la ciudad el sábado de carnaval.", "Great pilgrimage of dance groups that crosses the city on Carnival Saturday.", "Große Wallfahrt der Tanzgruppen durch die Stadt am Karnevalssamstag.")
  ],
  pasto: [
    G("Día de Negros", "ev", "5 de enero: los participantes se pintan la cara de negro; tiene raíces en el día libre concedido a los esclavizados.", "5 January: participants paint their faces black; rooted in the day off granted to enslaved people.", "5. Januar: Teilnehmende schwärzen ihr Gesicht; geht auf den freien Tag der Versklavten zurück."),
    G("Día de Blancos", "ev", "6 de enero: juego con talco blanco y desfile magno de carrozas.", "6 January: play with white talc and the grand parade of floats.", "6. Januar: Spiel mit weißem Puder und großer Wagenumzug."),
    G("Carroza", "obj", "Escultura monumental móvil de papel y madera, obra de artesanos locales.", "Monumental moving sculpture of paper and wood, made by local artisans.", "Monumentale bewegliche Skulptur aus Papier und Holz von örtlichen Kunsthandwerkern."),
    G("Familia Castañeda", "ev", "Desfile del 4 de enero que evoca la llegada de una familia campesina a la ciudad.", "Parade on 4 January recalling the arrival of a rural family in the city.", "Umzug am 4. Januar in Erinnerung an die Ankunft einer Bauernfamilie in der Stadt."),
    G("Arcoíris en el asfalto", "ev", "Desfile infantil del 2 de enero que abre el carnaval.", "Children's parade on 2 January that opens the carnival.", "Kinderumzug am 2. Januar, der den Karneval eröffnet.")
  ],
  cadiz: [
    G("Chirigota", "grp", "Agrupación de humor y crítica que canta coplas satíricas, con disfraz y tipo cómicos.", "Group of humour and critique singing satirical verses, in comic costume and character.", "Gruppe für Humor und Kritik, die satirische Strophen in komischem Kostüm singt."),
    G("Comparsa", "grp", "Agrupación de tono más serio y poético, conocida por sus pasodobles.", "Group of a more serious, poetic tone, known for its pasodobles.", "Gruppe mit ernsterem, poetischem Ton, bekannt für ihre Pasodobles."),
    G("Coro", "grp", "Agrupación numerosa con orquesta de cuerda que canta tangos sobre una batea.", "Large group with string orchestra singing tangos from a float.", "Große Gruppe mit Saitenorchester, die Tangos auf einem Wagen singt."),
    G("Cuarteto", "grp", "Pequeña agrupación de humor teatral, con parodia y diálogo.", "Small group of theatrical humour, with parody and dialogue.", "Kleine Gruppe mit theatralischem Humor, Parodie und Dialog."),
    G("Gran Teatro Falla", "pl", "Teatro donde se celebra el concurso oficial de agrupaciones (COAC).", "Theatre hosting the official group competition (COAC).", "Theater, in dem der offizielle Gruppenwettbewerb (COAC) stattfindet."),
    G("Popurrí", "mus", "Serie final de cuplés y estrofas encadenadas con que cierra una agrupación.", "Final medley of linked verses with which a group closes its performance.", "Abschließendes Medley verbundener Strophen, mit dem eine Gruppe ihren Auftritt beendet.")
  ],
  basilea: [
    G("Morgestraich", "ev", "Inicio de la Fasnacht a las 4 de la mañana del lunes, con las luces apagadas y las linternas encendidas.", "Start of Fasnacht at 4 a.m. on Monday, with city lights off and lanterns lit.", "Beginn der Fasnacht am Montag um 4 Uhr früh bei gelöschtem Licht und leuchtenden Laternen."),
    G("Clique", "grp", "Agrupación de flautistas y tamborileros que desfila con un tema (Sujet).", "Group of piccolo players and drummers that parades with a theme (Sujet).", "Gruppe von Pfeifern und Tambouren, die mit einem Sujet zieht."),
    G("Larve", "obj", "Máscara que cubre toda la cabeza; la identidad de quien la lleva queda oculta.", "Mask covering the whole head, hiding the wearer's identity.", "Maske, die den ganzen Kopf bedeckt und die Identität verbirgt."),
    G("Laterne", "obj", "Gran linterna pintada a mano con caricaturas del tema de la Clique.", "Large hand-painted lantern with caricatures on the Clique's theme.", "Große handbemalte Laterne mit Karikaturen zum Sujet der Clique."),
    G("Schnitzelbangg", "mus", "Versos satíricos cantados en dialecto basiliense, acompañados de dibujos.", "Satirical verses sung in Basel dialect, accompanied by drawings.", "Satirische Verse in Baseldeutsch, begleitet von Zeichnungen."),
    G("Waggis", "fig", "Figura de campesino alsaciano con gran nariz que lanza naranjas, flores y confeti.", "Alsatian peasant figure with a big nose who throws oranges, flowers and confetti.", "Elsässische Bauernfigur mit großer Nase, die Orangen, Blumen und Räppli wirft.")
  ],
  colonia: [
    G("Elfter im Elften", "ev", "El 11 de noviembre a las 11:11 comienza oficialmente la temporada de carnaval.", "On 11 November at 11:11 the carnival season officially begins.", "Am 11. November um 11:11 Uhr beginnt offiziell die Session."),
    G("Dreigestirn", "fig", "Trío formado por el Príncipe, el Campesino y la Doncella (tradicionalmente un hombre), que reina el carnaval.", "Trio of Prince, Peasant and Maiden (traditionally played by a man) who reign over carnival.", "Trio aus Prinz, Bauer und Jungfrau (traditionell ein Mann), das den Karneval regiert."),
    G("Weiberfastnacht", "ev", "Jueves de carnaval: las mujeres toman el ayuntamiento y cortan las corbatas de los hombres.", "Carnival Thursday: women storm the city hall and cut men's ties.", "Donnerstag vor Karneval: Frauen stürmen das Rathaus und schneiden Krawatten ab."),
    G("Rosenmontagszug", "ev", "Gran desfile del lunes de carnaval, celebrado desde 1823.", "Grand parade on Carnival Monday, held since 1823.", "Großer Umzug am Rosenmontag, seit 1823."),
    G("Kamelle", "obj", "Caramelos que se lanzan desde las carrozas al grito de «Kamelle!».", "Sweets thrown from the floats to cries of “Kamelle!”.", "Süßigkeiten, die unter „Kamelle!“-Rufen von den Wagen geworfen werden."),
    G("Alaaf", "mus", "Saludo carnavalesco de Colonia: «Kölle Alaaf!».", "Cologne's carnival cheer: “Kölle Alaaf!”.", "Kölner Karnevalsruf: „Kölle Alaaf!“.")
  ],
  venecia: [
    G("Bauta", "obj", "Máscara blanca que cubre todo el rostro y permite comer y hablar; se usaba con capa y tricornio.", "White mask covering the whole face, allowing one to eat and speak; worn with cloak and tricorn.", "Weiße Maske, die das ganze Gesicht bedeckt und Essen und Sprechen erlaubt; mit Umhang und Dreispitz getragen."),
    G("Moretta", "obj", "Máscara ovalada de terciopelo negro que se sujetaba con los dientes, por lo que obligaba al silencio.", "Oval black velvet mask held in place by biting a button, imposing silence.", "Ovale schwarze Samtmaske, die mit den Zähnen gehalten wurde und so Schweigen erzwang."),
    G("Medico della peste", "fig", "Máscara de pico largo inspirada en el atuendo de los médicos durante las epidemias de peste.", "Long-beaked mask inspired by the garb of doctors during plague epidemics.", "Maske mit langem Schnabel nach dem Gewand der Ärzte bei Pestepidemien."),
    G("Volo dell'Angelo", "ev", "Descenso desde el campanario de San Marcos hasta la plaza, que inaugura el carnaval.", "Descent from the San Marco bell tower to the square, opening the carnival.", "Abseilen vom Campanile von San Marco auf den Platz zur Eröffnung des Karnevals."),
    G("Festa delle Marie", "ev", "Desfile de doce jóvenes que evoca una antigua fiesta medieval de la ciudad.", "Parade of twelve young women recalling an old medieval city festival.", "Umzug von zwölf jungen Frauen in Erinnerung an ein mittelalterliches Stadtfest.")
  ],
  montevideo: [
    G("Murga", "grp", "Coro teatral que canta crítica social y política con humor; heredera del carnaval de Cádiz.", "Theatrical chorus singing social and political critique with humour; heir to the Cádiz carnival.", "Theaterchor, der mit Humor soziale und politische Kritik singt; Erbe des Karnevals von Cádiz."),
    G("Candombe", "mus", "Música y danza afrouruguaya de tambores chico, repique y piano; Patrimonio de la UNESCO (2009).", "Afro-Uruguayan music and dance of chico, repique and piano drums; UNESCO heritage (2009).", "Afro-uruguayische Musik und Tanz mit den Trommeln chico, repique und piano; UNESCO-Erbe (2009)."),
    G("Llamadas", "ev", "Desfile de comparsas de candombe por los barrios Sur y Palermo.", "Parade of candombe comparsas through the Sur and Palermo neighbourhoods.", "Umzug der Candombe-Comparsas durch die Viertel Sur und Palermo."),
    G("Tablado", "pl", "Escenario barrial donde actúan murgas y conjuntos durante el carnaval.", "Neighbourhood stage where murgas and groups perform during carnival.", "Bühne im Viertel, auf der Murgas und Gruppen im Karneval auftreten."),
    G("Teatro de Verano", "pl", "Anfiteatro donde se celebra el Concurso Oficial de agrupaciones.", "Amphitheatre hosting the Official Competition of groups.", "Amphitheater, in dem der offizielle Wettbewerb der Gruppen stattfindet.")
  ],
  gualeguaychu: [
    G("Corsódromo", "pl", "Pasarela de desfile del Carnaval del País, en una antigua estación de ferrocarril.", "Parade avenue of the Carnaval del País, on a former railway station site.", "Paradestrecke des Carnaval del País auf einem ehemaligen Bahnhofsgelände."),
    G("Comparsa", "grp", "Agrupación ligada a un club, que compite con carrozas, bailarines y batucada.", "Club-based group that competes with floats, dancers and batucada.", "An einen Verein gebundene Gruppe, die mit Wagen, Tänzern und Batucada antritt."),
    G("Batucada", "mus", "Sección de percusión de inspiración brasileña que marca el ritmo de la comparsa.", "Brazilian-inspired percussion section that sets the comparsa's rhythm.", "Brasilianisch inspirierte Perkussionsgruppe, die den Rhythmus der Comparsa vorgibt."),
    G("Carnaval del País", "ev", "Nombre del carnaval de Gualeguaychú, que se celebra los sábados de enero y febrero.", "Name of the Gualeguaychú carnival, held on Saturdays in January and February.", "Name des Karnevals von Gualeguaychú, samstags im Januar und Februar.")
  ],
  "buenos-aires": [
    G("Murga porteña", "grp", "Agrupación barrial de baile, canto y bombo; se diferencia de la murga uruguaya por el peso de la danza.", "Neighbourhood group of dance, song and bass drum; unlike the Uruguayan murga, dance takes centre stage.", "Viertelgruppe mit Tanz, Gesang und Basstrommel; anders als in Uruguay steht der Tanz im Vordergrund."),
    G("Bombo con platillo", "mus", "Bombo con un platillo montado encima; instrumento central de la murga porteña.", "Bass drum with a cymbal mounted on top; the central instrument of the porteño murga.", "Basstrommel mit aufgesetztem Becken; zentrales Instrument der Murga porteña."),
    G("Levita", "obj", "Saco de cola con lentejuelas y bordados, emblema del traje murguero.", "Tailcoat with sequins and embroidery, emblem of the murga costume.", "Frack mit Pailletten und Stickereien, Wahrzeichen des Murga-Kostüms."),
    G("Corso", "ev", "Desfile en una calle cortada del barrio, donde actúan las murgas.", "Parade on a closed neighbourhood street where murgas perform.", "Umzug in einer gesperrten Straße des Viertels, auf der die Murgas auftreten.")
  ],
  binche: [
    G("Gille", "fig", "Figura central del Mardi Gras de Binche, con traje de lino relleno de paja, cascabeles y zuecos.", "Central figure of the Binche Mardi Gras, in a straw-stuffed linen suit with bells and clogs.", "Zentrale Figur des Binche-Mardi-Gras, im strohgefüllten Leinenanzug mit Schellen und Holzschuhen."),
    G("Masque de cire", "obj", "Máscara de cera con lentes verdes y bigote, que los Gilles llevan la mañana del martes.", "Wax mask with green spectacles and moustache, worn by the Gilles on Tuesday morning.", "Wachsmaske mit grüner Brille und Schnurrbart, die die Gilles am Dienstagmorgen tragen."),
    G("Chapeau", "obj", "Gran sombrero de plumas de avestruz que el Gille luce por la tarde.", "Large ostrich-feather hat worn by the Gille in the afternoon.", "Großer Straußenfederhut, den der Gille am Nachmittag trägt."),
    G("Ramon", "obj", "Manojo de varas que el Gille agita para alejar los malos espíritus.", "Bundle of sticks the Gille waves to ward off evil spirits.", "Rutenbündel, mit dem der Gille böse Geister vertreibt."),
    G("Oranges", "obj", "Naranjas que los Gilles lanzan al público como signo de buena suerte.", "Oranges the Gilles throw to the crowd as a token of good luck.", "Orangen, die die Gilles als Glücksbringer in die Menge werfen.")
  ]
};
