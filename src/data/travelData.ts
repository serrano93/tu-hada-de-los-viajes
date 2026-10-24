export interface OrientativeStage {
  stageLabel: string;
  title: string;
  highlights: string;
}

export interface TravelDestination {
  id: string;
  name: string;
  regionTag: 'Europa' | 'Asia' | 'América' | 'Marruecos';
  durationBadge: string;
  coordinates: string;
  lat: number;
  lng: number;
  bestSeason: string;
  avgTemp: string;
  imageUrl: string;
  imageAlt: string;
  atmosphereTags: string[];
  summary: string;
  expandedDescription: string;
  modalities?: {
    title: string;
    duration: string;
    detail: string;
  }[];
  whatWeInclude: string[];
  orientativeRoute: OrientativeStage[];
  flexibilityNote: string;
}

export const TRAVEL_DESTINATIONS: TravelDestination[] = [
  {
    id: 'brujas',
    name: 'Brujas',
    regionTag: 'Europa',
    durationBadge: '3 días orientativos (ampliable)',
    coordinates: '51.20° N, 3.22° E',
    lat: 51.2,
    lng: 3.22,
    bestSeason: 'Todo el año (Primavera, Otoño y época navideña especiales)',
    avgTemp: '6°C — 21°C',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Rozenhoedkaai_%28canal%29_and_Belfry_of_Bruges%2C_Bruges%2C_Belgium_%28Ank_Kumar%2C_Infosys_Limited%29_01.jpg/1280px-Rozenhoedkaai_%28canal%29_and_Belfry_of_Bruges%2C_Bruges%2C_Belgium_%28Ank_Kumar%2C_Infosys_Limited%29_01.jpg',
    imageAlt: 'Canales de Brujas reflejando las casas medievales de ladrillo escalonado y el campanario',
    atmosphereTags: ['Lago del Amor', 'Canales & Puentes', 'Cerveza Artesanal', 'Chocolate Belga'],
    summary:
      'La magia intacta de una joya medieval: canales serenos, fachadas de ladrillo escalonado, tabernas históricas y maestros chocolateros.',
    expandedDescription:
      'Brujas es una ciudad para recorrer sin prisas y dejarse envolver por su atmósfera de cuento. El viaje permite pasear junto al famoso Lago del Amor (Minnewater) y su tranquilo beguinaje, cruzar decenas de puentes de piedra centenarios sobre los canales, admirar la arquitectura gótica y medieval de sus plazas históricas, degustar algunas de las mejores cervezas artesanales del mundo en tabernas con siglos de tradición y probar el auténtico chocolate y los bombones belgas en obradores seleccionados.',
    whatWeInclude: [
      'Ruta a pie estructurada por barrios históricos, canales tranquilos y miradores fotográficos.',
      'Selección de tabernas históricas de cerveza belga, chocolaterías artesanales y restaurantes con encanto.',
      'Propuesta de alojamientos boutique dentro del casco histórico según vuestro presupuesto.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Etapa 01 · Corazón Medieval y Canales',
        title: 'Plazas históricas, campanario Belfort y paseo navegando por los canales',
        highlights:
          'Toma de contacto con la arquitectura flamenca del centro histórico, los muelles más fotogénicos como Rozenhoedkaai y primeras degustaciones gastronómicas.',
      },
      {
        stageLabel: 'Etapa 02 · El Lago del Amor y Tradición Artesana',
        title: 'Minnewater, Beguinaje, molinos históricos y cultura cervecera',
        highlights:
          'Recorrido por los jardines del Lago del Amor, el barrio de Santa Ana, visita a una fábrica de cerveza tradicional y ruta de obradores de bombones.',
      },
      {
        stageLabel: 'Etapa 03 · Rincones Secretos o Extensión a Medida',
        title: 'Museos de pintura primitiva, mercados locales o ampliación de días',
        highlights:
          'Jornada adaptable a vuestros gustos culturales o ampliable con más días si deseáis combinar Brujas con otras ciudades cercanas.',
      },
    ],
    flexibilityNote:
      'Ejemplo orientativo de 3 días. Se adapta por completo si queréis una escapada más corta o ampliar la ruta a más días.',
  },
  {
    id: 'marruecos',
    name: 'Marruecos',
    regionTag: 'Marruecos',
    durationBadge: 'Escapada 3 días o Ruta 7+ días',
    coordinates: '31.62° N, 7.98° W',
    lat: 31.62,
    lng: -7.98,
    bestSeason: 'Todo el año (Primavera y Otoño especialmente agradables)',
    avgTemp: '16°C — 29°C',
    imageUrl:
      'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Arquitectura tradicional marroquí con mosaicos, arcos y tonos cálidos',
    atmosphereTags: ['Marrakech', 'Desierto bajo Estrellas', 'Pueblos Pesqueros', 'Riads con Encanto'],
    summary:
      'Dos formas de vivirlo a tu medida: una escapada intensa a Marrakech o una gran ruta combinando desierto, costa atlántica y medinas.',
    expandedDescription:
      'Marruecos ofrece un contraste sensorial único a muy pocas horas de vuelo. Diseñamos el viaje según el tiempo y el estilo que busquéis: desde una escapada vibrante centrada en Marrakech hasta un recorrido completo que atraviesa el país para dormir bajo el cielo estrellado del desierto, pasear por pueblos pesqueros bañados por el Atlántico y descubrir la hospitalidad marroquí en riads llenos de encanto.',
    modalities: [
      {
        title: 'Opción 1 · Escapada a Marrakech',
        duration: '~3 días (Fin de semana / Escapada)',
        detail:
          'Centrada en vivir la intensidad de Marrakech: su medina histórica, palacios, jardines botánicos, zocos de artesanía, gastronomía en azoteas y hammams tradicionales.',
      },
      {
        title: 'Opción 2 · Ruta Completa por Marruecos',
        duration: '7 días o más (según quiera el viajero)',
        detail:
          'Una inmersión total que combina Marrakech, dormir bajo las estrellas en el desierto, recorrer pueblos pesqueros junto al Atlántico como Essaouira, kasbahs históricas y medinas llenas de vida.',
      },
    ],
    whatWeInclude: [
      'Selección de riads auténticos y bien ubicados, calibrados según el presupuesto y estilo que queráis.',
      'Planificación clara de etapas, traslados y tiempos reales en carretera.',
      'Recomendaciones gastronómicas, terrazas, zocos por gremios y opciones de experiencias en destino.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Bloque 01 · Marrakech y su Medina',
        title: 'Palacios históricos, jardines, zocos artesanos y plazas llenas de vida',
        highlights:
          'Descubrimiento pausado de la Ciudad Roja combinando cultura, arquitectura andalusí-bereber y gastronomía local.',
      },
      {
        stageLabel: 'Bloque 02 · Rumbo al Desierto (En rutas de 7+ días)',
        title: 'Paso por el Atlas, kasbahs de adobe y noche bajo las estrellas en las dunas',
        highlights:
          'Paisajes de valles, gargantas naturales y la experiencia inolvidable de contemplar el atardecer y el cielo nocturno en el desierto.',
      },
      {
        stageLabel: 'Bloque 03 · Brisa Atlántica o Ciudades Imperiales',
        title: 'Pueblos pesqueros costeros o extensión hacia el norte',
        highlights:
          'Cierre relajado junto al océano disfrutando de pescado fresco y medinas blancas junto al mar, o ampliación hacia otras regiones.',
      },
    ],
    flexibilityNote:
      'Los servicios concretos en destino (tipo de transporte, alojamientos y actividades) se configuran 100% a medida según vuestro presupuesto al hablar con nosotros.',
  },
  {
    id: 'costarica',
    name: 'Costa Rica',
    regionTag: 'América',
    durationBadge: '12 a 20 días orientativos',
    coordinates: '10.46° N, 84.70° W',
    lat: 10.46,
    lng: -84.7,
    bestSeason: 'Todo el año (combinando vertiente Pacífico y Caribe según el mes)',
    avgTemp: '22°C — 30°C',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Arenal_volcano_%2870785p%29.jpg/1280px-Arenal_volcano_%2870785p%29.jpg',
    imageAlt: 'Volcán Arenal y selva tropical exuberante en Costa Rica',
    atmosphereTags: ['Parques Nacionales', 'Volcanes & Cascadas', 'Fauna en Libertad', 'Caribe & Pacífico'],
    summary:
      'Pura Vida en estado puro: parques nacionales, volcanes imponentes, cascadas en la selva, playas vírgenes y fauna exótica en libertad.',
    expandedDescription:
      'Costa Rica es un santuario natural incomparable para quienes buscan naturaleza en mayúsculas. El viaje recorre sus impresionantes parques nacionales, su biodiversidad única en el planeta, cascadas escondidas entre la vegetación tropical, volcanes imponentes con aguas termales, playas de ensueño bañadas tanto por el mar Caribe como por el océano Pacífico, y la emoción constante de observar en libertad perezosos, tucanes, monos, ranas tropicales y animales exóticos que no se pueden ver en ningún otro lugar del mundo.',
    whatWeInclude: [
      'Diseño de ruta optimizado según la época del año para aprovechar el mejor clima entre el Pacífico, las tierras altas y el Caribe.',
      'Selección de alojamientos integrados en la naturaleza y hoteles de playa adaptados a vuestro presupuesto.',
      'Planificación de etapas, parques nacionales imprescindibles y alternativas según el ritmo que busquéis.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Etapa 01 · Volcanes, Aguas Termales y Cataratas',
        title: 'Región volcánica, senderos de lava, puentes colgantes y cascadas',
        highlights:
          'Inmersión en paisajes volcánicos rodeados de selva primaria, pozas naturales y aguas termales.',
      },
      {
        stageLabel: 'Etapa 02 · Bosques Nubosos y Biodiversidad',
        title: 'Reservas biológicas y observación de fauna salvaje en su hábitat',
        highlights:
          'Recorridos entre vegetación exuberante donde habitan perezosos, tucanes, colibríes y cientos de especies tropicales.',
      },
      {
        stageLabel: 'Etapa 03 · Costas del Pacífico o del Caribe',
        title: 'Parques nacionales costeros donde la selva se funde con el mar',
        highlights:
          'Días de desconexión, playas de arena blanca o volcánica, arrecifes de coral y atardeceres frente al océano.',
      },
    ],
    flexibilityNote:
      'Duración orientativa de 12 a 20 días. También se puede combinar fácilmente con Panamá.',
  },
  {
    id: 'china',
    name: 'China',
    regionTag: 'Asia',
    durationBadge: '12 a 20 días orientativos',
    coordinates: '39.90° N, 116.40° E',
    lat: 39.9,
    lng: 116.4,
    bestSeason: 'Primavera (Marzo-Mayo) y Otoño (Septiembre-Noviembre)',
    avgTemp: '14°C — 26°C',
    imageUrl:
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'La Gran Muralla China recorriendo las cumbres montañosas',
    atmosphereTags: ['China Milenaria', 'Gran Muralla', 'Paisajes de ensueño', 'Metrópolis Futuristas'],
    summary:
      'El contraste fascinante entre miles de años de historia imperial, templos ancestrales, naturaleza sobrecogedora y ciudades del futuro.',
    expandedDescription:
      'Descubrir la China milenaria es adentrarse en una de las civilizaciones más ricas y sorprendentes de la Tierra. Un viaje donde conviven palacios imperiales, templos ancestrales, maravillas del mundo como la Gran Muralla o el Ejército de Terracota, paisajes naturales de montañas kársticas y arrozales que parecen de otro planeta, y metrópolis futuristas vibrantes. Todo ello organizado con claridad para que disfrutéis de su inmensa cultura y gastronomía con total tranquilidad.',
    whatWeInclude: [
      'Asesoramiento práctico sobre pagos digitales, conectividad y logística ferroviaria de alta velocidad.',
      'Ruta equilibrada combinando capitales históricas, paisajes naturales y grandes ciudades modernas.',
      'Recomendaciones de alojamientos, gastronomía regional y gestión de accesos a los monumentos clave.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Etapa 01 · El Legado Imperial del Norte',
        title: 'Pekín, la Ciudad Prohibida, templos históricos y la Gran Muralla',
        highlights:
          'Recorrido por los grandes símbolos de las dinastías imperiales, barrios tradicionales de hutongs y la majestuosidad de la Muralla.',
      },
      {
        stageLabel: 'Etapa 02 · Corazón Histórico y Paisajes Naturales',
        title: 'Xi’an, guerreros milenarios y montañas kársticas o parques naturales',
        highlights:
          'Conexión en tren de alta velocidad hacia el origen de la Ruta de la Seda y los paisajes de ríos y cumbres de película en el sur.',
      },
      {
        stageLabel: 'Etapa 03 · Pueblos de Agua y Vanguardia en Shanghái',
        title: 'Jardines clásicos, canales tradicionales y el skyline más moderno de Asia',
        highlights:
          'Contraste final entre la serenidad de las antiguas villas de agua y la energía cosmopolita de Shanghái.',
      },
    ],
    flexibilityNote:
      'Ruta orientativa de 12 a 20 días. Adaptamos las regiones (Yunnan, Zhangjiajie, Chengdu o Hong Kong) según vuestras preferencias.',
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    regionTag: 'Asia',
    durationBadge: '12 a 18 días orientativos',
    coordinates: '20.91° N, 107.18° E',
    lat: 20.91,
    lng: 107.18,
    bestSeason: 'Todo el año adaptando las zonas de norte, centro y sur',
    avgTemp: '22°C — 31°C',
    imageUrl:
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Embarcación tradicional entre las formaciones kársticas de la Bahía de Ha Long en Vietnam',
    atmosphereTags: ['Bahía de Ha Long', 'Para Todo Viajero', 'Arrozales & Templos', 'Hoi An & Gastronomía'],
    summary:
      'Un destino extraordinario para todo tipo de viajeros: crucero por la emblemática Bahía de Ha Long, arrozales, ciudades de farolillos y una gastronomía inolvidable.',
    expandedDescription:
      'Vietnam es un destino fascinante e ideal para todo tipo de viajeros —ya viajéis en pareja, con amigos, en familia o en un gran viaje personal—. Nuestra propuesta combina la experiencia imprescindible de navegar en crucero por la emblemática Bahía de Ha Long, el gran clásico que conocemos de primera mano y donde apostamos sobre seguro, con la energía de Hanoi, los paisajes de valles y arrozales del norte, la historia imperial de Hue, el encanto de las calles iluminadas por farolillos en Hoi An y el dinamismo del sur.',
    whatWeInclude: [
      'Selección cuidada del crucero en la Bahía de Ha Long y alojamientos con encanto en cada etapa según vuestro presupuesto.',
      'Coordinación fluida de conexiones internas de norte a sur para aprovechar al máximo vuestros días.',
      'Recomendaciones de gastronomía vietnamita, mercados, sastrerías en Hoi An y visitas culturales.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Etapa 01 · El Norte: Hanoi, Paisajes Rurales y Bahía de Ha Long',
        title: 'Casco histórico de Hanoi, valles de arrozales, Ninh Binh y crucero en Ha Long',
        highlights:
          'Templos milenarios, cultura del café vietnamita, paisajes kársticos entre arrozales y noche a bordo navegando por la Bahía de Ha Long.',
      },
      {
        stageLabel: 'Etapa 02 · El Centro: Ciudad Imperial de Hue y Hoi An',
        title: 'Ciudadelas históricas, farolillos de seda, playas y alta gastronomía local',
        highlights:
          'Paseos por el casco antiguo de Hoi An, talleres artesanales, gastronomía regional y días de relax junto al mar.',
      },
      {
        stageLabel: 'Etapa 03 · El Sur Vibrante y el Delta del Mekong (Opcional)',
        title: 'Ho Chi Minh y la vida fluvial de los canales del Mekong',
        highlights:
          'Cierre descubriendo el contraste urbano del sur y la riqueza tropical de las islas y mercados del Delta.',
      },
    ],
    flexibilityNote:
      'Ejemplo orientativo de 12 a 18 días. Configurable tanto para rutas de norte a centro como para recorrer el país completo de norte a sur.',
  },
  {
    id: 'panama',
    name: 'Panamá',
    regionTag: 'América',
    durationBadge: '10 a 15 días (o combinado)',
    coordinates: '8.98° N, 79.51° W',
    lat: 8.98,
    lng: -79.51,
    bestSeason: 'Diciembre a Abril (época seca) y excelente todo el año en combinación',
    avgTemp: '24°C — 31°C',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Skyline_of_Panama_City_01.jpg/1280px-Skyline_of_Panama_City_01.jpg',
    imageAlt: 'Skyline frente al océano y costa de Ciudad de Panamá',
    atmosphereTags: ['Casco Antiguo', 'Canal de Panamá', 'Bocas del Toro', 'Islas San Blas'],
    summary:
      'El punto de encuentro entre dos océanos: historia colonial en el Casco Antiguo, la maravilla del Canal, selvas tropicales y archipiélagos cristalinos.',
    expandedDescription:
      'Panamá sorprende por su contraste fascinante entre la vanguardia de su capital frente al océano y el encanto colonial del Casco Antiguo, la impresionante obra de ingeniería del Canal de Panamá, tierras altas cafetaleras rodeadas de selva tropical y archipiélagos paradisíacos de aguas turquesas como Bocas del Toro o las islas vírgenes de San Blas (Guna Yala). Es maravilloso tanto como destino único como combinado con Costa Rica.',
    whatWeInclude: [
      'Ruta equilibrada entre cultura urbana, naturaleza tropical y descanso en islas del Caribe o del Pacífico.',
      'Selección de hoteles con encanto en el Casco Antiguo y alojamientos junto al mar según vuestro presupuesto.',
      'Planificación de conexiones internas y recomendaciones gastronómicas.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Etapa 01 · Ciudad de Panamá y el Canal',
        title: 'Casco Antiguo colonial, esclusas del Canal y biodiversidad metropolitana',
        highlights:
          'Plazas coloniales restauradas, terrazas frente al Pacífico y visita a la historia y funcionamiento del Canal de Panamá.',
      },
      {
        stageLabel: 'Etapa 02 · Tierras Altas y Naturaleza Tropical',
        title: 'Bosques nubosos, volcanes y plantaciones de café de especialidad',
        highlights:
          'Clima primaveral de montaña en zonas como Boquete o el Valle de Antón, senderos naturales y cascadas.',
      },
      {
        stageLabel: 'Etapa 03 · Paraísos Insulares del Caribe',
        title: 'Archipiélago de Bocas del Toro o las islas coralinas de San Blas',
        highlights:
          'Días de desconexión entre playas de arena blanca, estrellas de mar, arrecifes y aguas cristalinas.',
      },
    ],
    flexibilityNote:
      'Orientativo de 10 a 15 días en exclusiva, o de 4 a 7 días si lo combináis como cierre de una ruta por Costa Rica.',
  },
  {
    id: 'nuevayork',
    name: 'Nueva York',
    regionTag: 'América',
    durationBadge: '5 a 8 días orientativos',
    coordinates: '40.71° N, 74.00° W',
    lat: 40.71,
    lng: -74.0,
    bestSeason: 'Primavera, Otoño, Navidad y escapadas urbanas todo el año',
    avgTemp: '4°C — 27°C',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lower_Manhattan_from_BBP_%2802018p%29.jpg/1280px-Lower_Manhattan_from_BBP_%2802018p%29.jpg',
    imageAlt: 'Skyline de Manhattan al atardecer visto desde Brooklyn',
    atmosphereTags: ['Manhattan & Brooklyn', 'Miradores & Central Park', 'Broadway & Museos', 'Ruta por Barrios'],
    summary:
      'La energía inigualable de la ciudad que nunca duerme: barrios icónicos, miradores de vértigo, musicales en Broadway y rincones de película a tu ritmo.',
    expandedDescription:
      'Nueva York es un viaje que se vive como una película en cada esquina. Diseñamos vuestra estancia agrupando inteligentemente las zonas para que disfrutéis sin agotaros: desde pasear por Central Park, cruzar el puente de Brooklyn y subir a sus miradores más espectaculares, hasta recorrer barrios con personalidad propia como SoHo, Greenwich Village, DUMBO o Harlem, disfrutar de un gran musical en Broadway, visitar museos de talla mundial y saborear su inabarcable escena gastronómica.',
    whatWeInclude: [
      'Itinerario organizado por barrios contiguos para aprovechar cada jornada sin perder tiempo en el metro.',
      'Asesoramiento sobre pases turísticos (solo si realmente compensan para lo que queréis ver) y reserva de miradores.',
      'Selección de hoteles bien comunicados y mapa de cafeterías, rooftops, mercados y restaurantes.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Bloque 01 · El Corazón de Manhattan y Grandes Iconos',
        title: 'Midtown, Quinta Avenida, Central Park, miradores y luces de Broadway',
        highlights:
          'Arquitectura art déco, pulmón verde de Manhattan, bibliotecas históricas y la magia de los teatros.',
      },
      {
        stageLabel: 'Bloque 02 · Barrios con Alma y Sur de la Isla',
        title: 'SoHo, West Village, High Line, Chelsea Market y Distrito Financiero',
        highlights:
          'Calles arboladas de brownstones, galerías, parques elevados y vistas a la Estatua de la Libertad.',
      },
      {
        stageLabel: 'Bloque 03 · Brooklyn, Puentes y Contraste Cultural',
        title: 'DUMBO, Brooklyn Heights, Williamsburg y miradores frente al skyline',
        highlights:
          'Mercados gastronómicos, arte urbano, parques junto al East River y las mejores panorámicas de Manhattan.',
      },
    ],
    flexibilityNote:
      'Ejemplo orientativo de 5 a 8 días. Adaptable tanto si es vuestra primera vez en Nueva York como si ya la conocéis y buscáis nuevos barrios.',
  },
  {
    id: 'madeira',
    name: 'Madeira',
    regionTag: 'Europa',
    durationBadge: '5 a 8 días orientativos',
    coordinates: '32.76° N, 16.95° W',
    lat: 32.76,
    lng: -16.95,
    bestSeason: 'Todo el año (conocida como la isla de la eterna primavera)',
    avgTemp: '17°C — 25°C',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CGI_-_Cliff_and_Atlantic_Ocean_from_Miradouro_do_Cabo_Gir%C3%A3o%2C_Madeira%2C_2023.jpg/1280px-CGI_-_Cliff_and_Atlantic_Ocean_from_Miradouro_do_Cabo_Gir%C3%A3o%2C_Madeira%2C_2023.jpg',
    imageAlt: 'Acantilados verdes sobre el océano Atlántico en la isla de Madeira',
    atmosphereTags: ['Eterna Primavera', 'Levadas & Laurisilva', 'Piscinas Volcánicas', 'Miradores sobre Nubes'],
    summary:
      'Un jardín flotante en el Atlántico: acantilados dramáticos, senderos de levadas entre bosques milenarios, piscinas volcánicas y gastronomía atlántica.',
    expandedDescription:
      'Madeira enamora por su naturaleza desbordante y su clima suave durante todo el año. Un destino perfecto para combinar carreteras panorámicas entre acantilados vertiginosos sobre el océano, rutas accesibles o activas por sus famosas levadas entre bosques de laurisilva declarados Patrimonio de la Humanidad, baños en piscinas naturales de roca volcánica, cumbres por encima de un mar de nubes, jardines botánicos en Funchal y una gastronomía marinera excelente.',
    whatWeInclude: [
      'Planificación de rutas diarias por sectores de la isla (Norte, Este, Oeste y Cumbres) según vuestro ritmo.',
      'Selección de quintas tradicionales, hoteles con vistas al Atlántico o alojamientos en Funchal.',
      'Recomendaciones de miradores, piscinas naturales, mercados de frutas exóticas y restaurantes locales.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Etapa 01 · Funchal, Jardines Históricos y Costa Sur',
        title: 'Casco antiguo, mercado dos Lavradores, Monte y acantilados de Cabo Girão',
        highlights:
          'Arquitectura tradicional portuguesa, jardines subtropicales, bodegas históricas y atardeceres sobre el mar.',
      },
      {
        stageLabel: 'Etapa 02 · Cumbres por Encima de las Nubes y Bosques de Laurisilva',
        title: 'Picos centrales, senderos de levadas, cascadas y bosque milenario de Fanal',
        highlights:
          'Paisajes de montaña inolvidables y paseos suaves junto a los canales de agua tradicionales.',
      },
      {
        stageLabel: 'Etapa 03 · Costa Norte Salvaje y Piscinas Volcánicas',
        title: 'Porto Moniz, Seixal, Santana y la península volcánica de São Lourenço',
        highlights:
          'Pueblos costeros entre montañas verdes, playas de arena negra y piscinas naturales de agua cristalina.',
      },
    ],
    flexibilityNote:
      'Duración orientativa de 5 a 8 días. Adaptamos el nivel de los paseos y miradores para que disfrutéis tanto si buscáis relax escénico como senderismo.',
  },
  {
    id: 'francia',
    name: 'Francia',
    regionTag: 'Europa',
    durationBadge: 'Escapadas 3-4 días o Rutas 7-14 días',
    coordinates: '48.85° N, 2.35° E',
    lat: 48.85,
    lng: 2.35,
    bestSeason: 'Todo el año según la región elegida',
    avgTemp: '8°C — 25°C',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Eiffel_Tower_as_seen_from_the_Pont_Mirabeau%2C_22_April_2014.jpg/1280px-Eiffel_Tower_as_seen_from_the_Pont_Mirabeau%2C_22_April_2014.jpg',
    imageAlt: 'Vista del río Sena y la Torre Eiffel en París, Francia',
    atmosphereTags: ['París & Bistrós', 'Castillos & Pueblos', 'Viñedos & Gastronomía', 'Costa & Alpes'],
    summary:
      'Del arte y los bistrós de París a rutas por castillos históricos, pueblos medievales, viñedos legendarios y paisajes de ensueño.',
    expandedDescription:
      'Francia ofrece infinitos viajes dentro de un mismo país. Podemos diseñar desde una escapada inolvidable a París descubriendo sus barrios bohemios, museos, pasajes cubiertos y bistrós clásicos, hasta rutas a medida por el Valle del Loira y sus castillos renacentistas, los pueblos de cuento de Alsacia, los campos y mercados de la Provenza, la elegancia de la Costa Azul, los acantilados de Normandía y el Mont-Saint-Michel o la ruta del vino en Burdeos.',
    whatWeInclude: [
      'Diseño de escapadas urbanas o rutas regionales en tren o coche totalmente adaptadas a vuestros días.',
      'Selección de hoteles boutique, châteaux o casas con encanto y recomendaciones de bistrós y pastelerías.',
      'Itinerario cultural y gastronómico equilibrado según vuestros intereses.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Opción Escapada (3–4 Días) · París con Encanto',
        title: 'Barrios históricos, grandes museos, paseos junto al Sena y gastronomía francesa',
        highlights:
          'Le Marais, Saint-Germain-des-Prés, Montmartre, iconos monumentales y mesas seleccionadas lejos de las zonas masificadas.',
      },
      {
        stageLabel: 'Opción Ruta Regional (7–14 Días) · Castillos, Pueblos y Viñedos',
        title: 'Recorrido por Alsacia, Valle del Loira, Provenza, Normandía o Bretaña',
        highlights:
          'Pueblos históricos, mercados gastronómicos, bodegas tradicionales y patrimonio monumental.',
      },
    ],
    flexibilityNote:
      'Totalmente adaptable: desde un fin de semana largo en París o Alsacia hasta una gran ruta de una o dos semanas.',
  },
  {
    id: 'italia',
    name: 'Italia',
    regionTag: 'Europa',
    durationBadge: 'Escapadas 3-4 días o Rutas 7-15 días',
    coordinates: '41.90° N, 12.49° E',
    lat: 41.9,
    lng: 12.49,
    bestSeason: 'Todo el año (Primavera y Otoño ideales para arte y costa)',
    avgTemp: '11°C — 28°C',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sunset_trough_the_arches_of_the_Colosseum%2C_Rome.jpg/1280px-Sunset_trough_the_arches_of_the_Colosseum%2C_Rome.jpg',
    imageAlt: 'El Coliseo de Roma iluminado por la luz cálida del atardecer en Italia',
    atmosphereTags: ['Roma, Florencia & Venecia', 'Toscana & Pueblos', 'Costa Italiana', 'Trattorias Auténticas'],
    summary:
      'Un museo al aire libre donde historia, arte y gastronomía se celebran en cada plaza: ciudades eternas, colinas toscanas y costas mediterráneas.',
    expandedDescription:
      'Viajar a Italia es enamorarse del arte de vivir. Diseñamos tanto escapadas de pocos días a ciudades eternas como Roma, Florencia, Venecia, Milán o Nápoles, como grandes rutas recorriendo los cipreses y pueblos medievales de la Toscana, los acantilados de la Costa Amalfitana o Cinque Terre, los lagos del norte, los trulli de Puglia o la riqueza histórica y volcánica de Sicilia, priorizando siempre trattorias auténticas y alojamientos con carácter.',
    whatWeInclude: [
      'Organización inteligente de visitas culturales, entradas a monumentos clave y conexiones en tren o ruta en coche.',
      'Selección de hoteles con encanto, agriturismos en el campo o alojamientos históricos en el centro.',
      'Mapa gastronómico de trattorias tradicionales, heladerías artesanales y enotecas.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Opción Escapada (3–4 Días) · Ciudades de Arte Eterno',
        title: 'Roma, Florencia o Venecia disfrutadas con calma y buena mesa',
        highlights:
          'Plazas monumentales, barrios como Trastevere o Oltrarno, obras maestras del Renacimiento y aperitivos italianos.',
      },
      {
        stageLabel: 'Opción Ruta Completa (7–15 Días) · Toscana, Costa o Sur de Italia',
        title: 'Combinado de grandes joyas culturales, pueblos medievales y paisaje mediterráneo',
        highlights:
          'Rutas escénicas entre colinas de viñedos, pueblos colgados frente al mar y gastronomía regional.',
      },
    ],
    flexibilityNote:
      'Cada región italiana es un universo propio; adaptamos los días y paradas exactamente a vuestro ritmo.',
  },
  {
    id: 'espana',
    name: 'España',
    regionTag: 'Europa',
    durationBadge: 'Fin de semana 3 días o Rutas 7-14 días',
    coordinates: '37.38° N, 5.98° W',
    lat: 37.38,
    lng: -5.98,
    bestSeason: 'Todo el año gracias a su diversidad climática',
    avgTemp: '12°C — 28°C',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Seville%2C_Plaza_de_Espa%C3%B1a_%2838625005691%29_%28edited%29.jpg/1280px-Seville%2C_Plaza_de_Espa%C3%B1a_%2838625005691%29_%28edited%29.jpg',
    imageAlt: 'Arquitectura monumental de la Plaza de España en Sevilla',
    atmosphereTags: ['Patrimonio Histórico', 'Rutas Gastronómicas', 'Pueblos con Encanto', 'Costas & Islas'],
    summary:
      'Redescubrir nuestra tierra con mirada de autor: ciudades patrimoniales, rutas gastronómicas de norte a sur, pueblos blancos y costas turquesas.',
    expandedDescription:
      'No hace falta cruzar medio mundo para vivir un viaje extraordinario cuando la ruta está cuidada al detalle. Diseñamos desde escapadas de fin de semana hasta rutas de una o dos semanas por España: el legado monumental de Andalucía y sus pueblos blancos, la España Verde de costa, acantilados y alta gastronomía en el norte (Galicia, Asturias, Cantabria y País Vasco), rutas de vino y arquitectura en el interior, o calas y caminos históricos en Baleares y Canarias.',
    whatWeInclude: [
      'Itinerarios pensados al detalle descubriendo rincones auténticos más allá de lo evidente.',
      'Selección de hoteles boutique, paradores históricos, casas rurales con encanto y mesas gastronómicas.',
      'Rutas adaptadas tanto para escapadas cortas de desconexión como para vacaciones completas.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Opción Escapada (2–4 Días) · Ciudad, Cultura y Gastronomía',
        title: 'Fines de semana con encanto cultural, bodegas o desconexión en la naturaleza',
        highlights:
          'Recorridos patrimoniales, mercados de abastos, barras de tapeo selectas y descanso en hoteles especiales.',
      },
      {
        stageLabel: 'Opción Ruta (7–14 Días) · Norte Verde, Sur Monumental o Islas',
        title: 'Recorrido por etapas combinando costa, pueblos históricos y parques naturales',
        highlights:
          'Carreteras escénicas, playas salvajes o calas mediterráneas y la mejor gastronomía local en cada parada.',
      },
    ],
    flexibilityNote:
      'Ideal tanto para regalar una escapada especial de 3 días como para organizar vuestras vacaciones de verano o puentes.',
  },
  {
    id: 'portugal',
    name: 'Portugal',
    regionTag: 'Europa',
    durationBadge: 'Escapadas 3-4 días o Rutas 7-12 días',
    coordinates: '41.14° N, 8.61° W',
    lat: 41.14,
    lng: -8.61,
    bestSeason: 'Todo el año (Primavera, Verano y Otoño magníficos)',
    avgTemp: '12°C — 26°C',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Douro_river_in_Porto_%286%29.jpg/1280px-Douro_river_in_Porto_%286%29.jpg',
    imageAlt: 'Ribera del río Duero y puente histórico en Oporto, Portugal',
    atmosphereTags: ['Lisboa & Oporto', 'Palacios de Sintra', 'Valle del Duero', 'Costa Atlántica'],
    summary:
      'La luz atlántica de Lisboa y el encanto ribereño de Oporto, palacios entre bosques, pueblos amurallados y una gastronomía inolvidable.',
    expandedDescription:
      'Portugal conquista por su cercanía, su luz melancólica y su autenticidad. Diseñamos escapadas a medida a Lisboa y los palacios románticos de Sintra, o a Oporto y los viñedos en terrazas del Valle del Duero, así como rutas completas de norte a sur descubriendo pueblos históricos como Óbidos, Coimbra o Évora, la tranquilidad del Alentejo y los acantilados dorados y playas del Algarve.',
    whatWeInclude: [
      'Rutas a pie por miradores, barrios históricos de azulejos y tranvías en Lisboa y Oporto.',
      'Selección de alojamientos con encanto, quintas en el Duero o refugios junto al Atlántico.',
      'Recomendaciones de tascas tradicionales, casas de fado auténticas, bodegas y pastelerías históricas.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Etapa 01 · Oporto y el Valle del Duero',
        title: 'Ribeira del Duero, puentes históricos, bodegas y paisajes de viñedos',
        highlights:
          'Paseos junto al río, librerías y fachadas de azulejos, catas de vino y miradores inolvidables.',
      },
      {
        stageLabel: 'Etapa 02 · Centro Histórico, Sintra y Lisboa',
        title: 'Pueblos medievales, bosques y palacios de Sintra y las siete colinas de Lisboa',
        highlights:
          'Barrios de Alfama, Chiado y Belém, pasteles de nata recién horneados y atardeceres sobre el Tajo.',
      },
      {
        stageLabel: 'Etapa 03 · Alentejo o Costa del Algarve (En rutas de 7+ días)',
        title: 'Pueblos blancos del interior y acantilados sobre el océano',
        highlights:
          'Playas atlánticas, gastronomía marinera y ritmo pausado en el sur de Portugal.',
      },
    ],
    flexibilityNote:
      'Perfecto tanto para una escapada de 3 o 4 días a Lisboa u Oporto como para una ruta en coche o tren de 7 a 12 días.',
  },
  {
    id: 'alemania',
    name: 'Alemania',
    regionTag: 'Europa',
    durationBadge: 'Escapadas 3-4 días o Rutas 7-12 días',
    coordinates: '47.55° N, 10.74° E',
    lat: 47.55,
    lng: 10.74,
    bestSeason: 'Primavera a Otoño y época de Mercados de Adviento en Diciembre',
    avgTemp: '5°C — 23°C',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Neuschwanstein_Castle_2024.jpg/1280px-Neuschwanstein_Castle_2024.jpg',
    imageAlt: 'Castillo de Neuschwanstein rodeado de bosques y montañas en Baviera, Alemania',
    atmosphereTags: ['Castillos de Cuento', 'Selva Negra & Baviera', 'Pueblos con Entramado', 'Cultura & Mercados'],
    summary:
      'Castillos de cuento de hadas, bosques profundos en la Selva Negra, pueblos medievales de entramado de madera y ciudades llenas de historia.',
    expandedDescription:
      'Alemania combina como pocos destinos la naturaleza de bosques y lagos alpinos con un patrimonio histórico y cultural fascinante. Podemos organizar desde escapadas urbanas a Berlín o Múnich hasta rutas inolvidables por la Ruta Romántica y los castillos de Baviera (como Neuschwanstein), los pueblos de entramado de madera de cuento como Rothenburg ob der Tauber, los paisajes y relojes tradicionales de la Selva Negra, el Valle del Rin o rutas especiales por sus mercados tradicionales en invierno.',
    whatWeInclude: [
      'Planificación de etapas muy cómoda tanto en tren como en ruta por carretera (Autobahn y carreteras escénicas).',
      'Selección de hoteles con encanto bávaro, alojamientos en pueblos históricos o en capitales culturales.',
      'Guía de castillos, miradores naturales, cervecerías históricas (Biergärten) y gastronomía regional.',
    ],
    orientativeRoute: [
      {
        stageLabel: 'Etapa 01 · Múnich y los Castillos de Baviera',
        title: 'Patrimonio bávaro, lagos prealpinos y el castillo de Neuschwanstein',
        highlights:
          'Plazas históricas, jardines ingleses, palacios reales y paisajes alpinos de postal.',
      },
      {
        stageLabel: 'Etapa 02 · La Ruta Romántica y Pueblos Medievales',
        title: 'Villas amuralladas y casas de entramado de madera llenas de encanto',
        highlights:
          'Paseos por cascos históricos medievales intactos como Rothenburg ob der Tauber o Dinkelsbühl.',
      },
      {
        stageLabel: 'Etapa 03 · Selva Negra o Berlín Vanguardista',
        title: 'Bosques de abetos, cascadas y pueblos termales o la gran historia del siglo XX',
        highlights:
          'Extensión adaptable hacia la naturaleza de la Selva Negra o hacia la intensidad cultural de Berlín.',
      },
    ],
    flexibilityNote:
      'Adaptable a escapadas de 3-4 días o rutas completas de 7 a 12 días por Baviera, Selva Negra o ciudades imperiales.',
  },
];

export const SERVICE_ESSENCE_PILLARS = [
  {
    step: '01',
    tag: 'FLEXIBILIDAD TOTAL',
    title: 'Escucha y Diseño 100% a Tu Medida',
    description:
      'No vendemos paquetes cerrados ni imponemos servicios rígidos. Hablamos directamente contigo para entender vuestros días, gustos y presupuesto, decidiendo juntos qué ritmo y qué nivel de servicios queréis incluir en cada etapa.',
  },
  {
    step: '02',
    tag: 'CURADURÍA ARTESANAL',
    title: 'Alojamientos con Encanto y Logística Clara',
    description:
      'Seleccionamos hoteles boutique, riads, cabañas o alojamientos especiales acordes a vuestro presupuesto, y trazamos todas las conexiones de vuelos, trenes o rutas para que no perdáis horas en traslados mal calculados.',
  },
  {
    step: '03',
    tag: 'HOJA DE RUTA INTERACTIVA',
    title: 'Tu Itinerario Día a Día, Mapa y Alternativas',
    description:
      'Recibes tu ruta detallada con visitas recomendadas, mapa gastronómico y de rincones especiales, consejos prácticos para el destino y alternativas flexibles por si un día cambia el clima o preferís tomarlo con más calma.',
  },
  {
    step: '04',
    tag: 'ACOMPAÑAMIENTO REAL',
    title: 'Tú Eliges Hasta Dónde Delegar',
    description:
      'Desde revisar un itinerario que ya tenéis empezado hasta diseñar el viaje completo con enlaces listos para reservar o acompañaros en una videollamada extra para dejar todas las reservas cerradas juntos.',
  },
];

export const TRAVELER_PROFILES = [
  {
    id: 'pareja-profesional',
    badge: 'PERFIL 01 · TIEMPO DE CALIDAD',
    title: 'La Pareja Profesional Consolidada',
    subtitle: 'Sin tiempo que perder frente a 40 pestañas abiertas',
    quote:
      '«Tenéis 15 días de vacaciones al año y cero ganas de pasar el domingo discutiendo frente a un Excel de horarios de trenes y reseñas contradictorias.»',
    painPoints: [
      'Sabéis viajar por libre, pero vuestro trabajo no os deja 45 horas libres para investigar visados, conexiones o qué barrio es realmente tranquilo.',
      'No queréis meter vuestras vacaciones en un autobús con 40 desconocidos siguiendo un banderín.',
      'Buscáis hoteles con alma, buena gastronomía local y la tranquilidad de que cada enlace logístico encaja al milímetro.',
    ],
    idealDestinations: 'China, Vietnam, Nueva York, Italia, Madeira o Brujas',
  },
  {
    id: 'luna-de-miel',
    badge: 'PERFIL 02 · VIAJE DE NOVIOS DE AUTOR',
    title: 'Lunas de Miel "Anti-Catálogo"',
    subtitle: 'Románticas, irrepetibles y 100% vuestras',
    quote:
      '«Queréis un viaje de novios irrepetible a Vietnam, Costa Rica o combinados de autor, huyendo de los paquetes clónicos de agencia y los hoteles impersonales.»',
    painPoints: [
      'Organizar una boda ya consume bastante energía como para jugársela con la logística de vuestro gran viaje.',
      'Queréis combinar aventura auténtica por la mañana y un refugio boutique extraordinario con vistas a los arrozales, el mar o la selva por la tarde.',
      'Valoráis la transparencia: que vuestro presupuesto se adapte exactamente a las experiencias y alojamientos con encanto que vosotros elijáis.',
    ],
    idealDestinations: 'Costa Rica & Panamá, Vietnam, China, Italia o Francia',
  },
  {
    id: 'familia-exploradora',
    badge: 'PERFIL 03 · AVENTURA CON RED DE SEGURIDAD',
    title: 'La Familia Activa Exploradora',
    subtitle: 'El mundo real organizado a vuestro ritmo',
    quote:
      '«Queréis enseñar el mundo a vuestros hijos en Marruecos, Asia, América o Europa con toda la emoción de ir a vuestro aire, pero con cada traslado y detalle logístico bien atado.»',
    painPoints: [
      'Viajar en familia exige calcular muy bien las distancias, elegir restaurantes de total confianza y tener siempre alternativas si un día hay cansancio.',
      'Adaptamos las visitas y actividades para que tanto adultos como niños o adolescentes disfruten de cada etapa sin agobios.',
      'Alojamientos familiares o habitaciones amplias seleccionadas según vuestro presupuesto y necesidades.',
    ],
    idealDestinations: 'Costa Rica, Marruecos, Nueva York, Alemania, Portugal o España',
  },
];

export const SERVICE_LADDER = [
  {
    id: 'nivel-1',
    level: 'NIVEL 01',
    tag: 'REVISIÓN ESTRATÉGICA',
    title: 'Auditoría Express de Ruta',
    subtitle: 'Tu borrador a examen con una organizadora profesional',
    priceReference: 'Sesión 60 min + Informe de Optimización',
    description:
      'Para quienes ya han empezado a montar su propio itinerario pero quieren asegurarse de que los tiempos son realistas, optimizar el orden de las etapas y resolver todas sus dudas sobre el destino.',
    deliverables: [
      'Análisis previo de tu ruta actual antes de conectarnos.',
      'Videollamada intensiva de 60 minutos uno a uno con Andrea.',
      'Detección de cuellos de botella logísticos, ajuste de tiempos de traslado y optimización del orden de visitas.',
      'Documento resumen con mis recomendaciones directas y sugerencias de mejora.',
    ],
    ctaLabel: 'Solicitar Auditoría Express',
    highlighted: false,
  },
  {
    id: 'nivel-2',
    level: 'NIVEL 02 · EL SERVICIO ESTRELLA',
    tag: 'MÁS SOLICITADO · 100% A MEDIDA',
    title: 'Diseño de Ruta Artesanal (Travel Planner)',
    subtitle: 'Tu viaje diseñado desde cero a tu medida',
    priceReference: 'Presupuesto cerrado según duración y destino',
    description:
      'Transformo vuestras ideas en un itinerario personalizado al detalle. Diseño toda la ruta según vuestros días y presupuesto, selecciono las mejores opciones de vuelos, alojamientos con encanto y actividades, y os entrego todos los enlaces directos listos para reservar.',
    deliverables: [
      'Videollamada inicial para conocer vuestros gustos, ritmo de viaje y presupuesto.',
      'Diseño completo de vuestro itinerario día a día con alternativas flexibles según el clima o vuestra energía.',
      'Selección curada de vuelos, transportes, alojamientos y experiencias con enlaces directos para reservar fácilmente.',
      'Mapa interactivo personalizado con restaurantes recomendados, miradores y consejos prácticos de destino.',
    ],
    ctaLabel: 'Diseñar mi Ruta a Medida',
    highlighted: true,
  },
  {
    id: 'nivel-3',
    level: 'NIVEL 03',
    tag: 'ACOMPAÑAMIENTO EN RESERVAS & GESTIÓN',
    title: 'Viaje Llave en Mano & Concierge VIP',
    subtitle: 'Videollamada extra para dejar todo reservado juntos o gestión vía agencia colaboradora',
    priceReference: 'Diseño Completo + Acompañamiento de Reservas',
    description:
      'Para quienes quieren la máxima comodidad al cerrar su viaje. Incluye todo el diseño a medida y añade una videollamada extra de 15 minutos donde dejamos todas las reservas listas junto a ti (o gestión integral a través de agencia paraguas colaboradora en caso de que requieras factura única de paquete cerrado).',
    deliverables: [
      'Todo lo incluido en el Nivel 2 (Diseño de Ruta Artesanal a medida y Mapa interactivo).',
      'Videollamada extra de 15 minutos dedicada exclusivamente a realizar y dejar listas todas las reservas junto al cliente paso a paso.',
      'Opción de emisión y gestión integral a través de agencia paraguas colaboradora si el viajero necesita factura única de paquete cerrado.',
      'Soporte directo por WhatsApp con Andrea durante el viaje para resolver dudas o reajustes en ruta.',
    ],
    ctaLabel: 'Consultar Modalidad Llave en Mano',
    highlighted: false,
  },
  {
    id: 'nivel-4',
    level: 'NIVEL 04 · EDICIÓN LIMITADA',
    tag: '1 O 2 VECES AL AÑO · GRUPOS REDUCIDOS',
    title: 'Expediciones de Autor con Andrea',
    subtitle: 'Viaja presencialmente conmigo en grupos reducidos (8-12 viajeros)',
    priceReference: 'Plazas por Lista de Espera Prioritaria',
    description:
      'Una o dos veces al año organizo y acompaño presencialmente en destino a un grupo reducido de entre 8 y 12 viajeros afines. Sin prisas, alojándonos en hoteles con encanto seleccionados y compartiendo la experiencia de principio a fin.',
    deliverables: [
      'Próximas ediciones previstas en destinos seleccionados como Brujas, Marruecos o rutas europeas con encanto.',
      'Acompañamiento presencial de Andrea durante todo el recorrido.',
      'Itinerario de autor diseñado para disfrutar en grupo reducido con total comodidad.',
      'Prioridad de plaza por orden de inscripción en la Lista de Espera.',
    ],
    ctaLabel: 'Unirme a la Lista de Espera',
    highlighted: false,
    isWaitlist: true,
  },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: '¿Los itinerarios y días que aparecen en la web son cerrados?',
    answer:
      'En absoluto. Todos los destinos y duraciones que ves en la web son ejemplos orientativos para inspirarte. Cada viaje parte de una hoja en blanco y se adapta al 100% a los días que tengáis disponibles, a vuestros gustos personales y al presupuesto que queráis destinar.',
    codeNote: '100% FLEXIBLE · DISEÑADO A MEDIDA PARA CADA VIAJERO',
  },
  {
    id: 'faq-2',
    question: '¿Cómo se deciden los hoteles, transportes y actividades en destino?',
    answer:
      'En nuestra conversación inicial definimos qué estilo de viaje buscáis y cuál es vuestro presupuesto. En función de lo que queráis, selecciono los alojamientos, el tipo de transporte y las experiencias que mejor encajan con vosotros. Nunca imponemos proveedores ni servicios rígidos: el viaje se construye a vuestra medida.',
    codeNote: 'PERSONALIZACIÓN REAL SEGÚN TU PRESUPUESTO Y ESTILO',
  },
  {
    id: 'faq-3',
    question: '¿Cómo funcionan las reservas en el Nivel 2 y en el Nivel 3?',
    answer:
      'En el Nivel 2 (Diseño de Ruta a Medida) te entrego toda la ruta junto con los enlaces directos de cada vuelo, alojamiento y actividad para que puedas reservarlos cómodamente a tu ritmo. Si eliges el Nivel 3 (Llave en Mano), incluimos una videollamada extra de 15 minutos en la que dejamos todas las reservas hechas juntos, o bien lo gestionamos a través de nuestra agencia paraguas colaboradora si necesitas factura única de paquete cerrado.',
    codeNote: 'ENLACES DIRECTOS O ACOMPAÑAMIENTO PASO A PASO',
  },
  {
    id: 'faq-4',
    question: '¿Con cuánta antelación es recomendable empezar a organizar el viaje?',
    answer:
      'Para grandes viajes de larga distancia como China, Vietnam, Costa Rica, Panamá o Nueva York, lo ideal es contactarme entre 3 y 8 meses antes para tener mayor disponibilidad en alojamientos con encanto y mejores tarifas aéreas. Para escapadas y rutas por Brujas, Marruecos, Madeira, Francia, Italia, España, Portugal o Alemania, entre 1 y 3 meses antes es perfecto. Y si viajas muy pronto, siempre podemos verlo con una Auditoría Express.',
    codeNote: 'ATENCIÓN PERSONALIZADA · CONSULTA DISPONIBILIDAD',
  },
];
