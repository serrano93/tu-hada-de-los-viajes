export interface HeroSavingsDestination {
  id: string;
  name: string;
  regionCode: string;
  coordinates: string;
  lat: number;
  lng: number;
  hoursSaved: number;
  tabsClosed: number;
  mainObstacle: string;
  andreaSolution: string;
  microMetric: string;
}

export interface AudioPill {
  id: string;
  code: string;
  location: string;
  coordinates: string;
  duration: string;
  durationSeconds: number;
  title: string;
  contextBadge: string;
  transcript: string[];
  secretReveal: string;
}

export interface ComparisonRow {
  aspect: string;
  agency: {
    verdict: string;
    detail: string;
  };
  influencer: {
    verdict: string;
    detail: string;
  };
  andrea: {
    verdict: string;
    detail: string;
  };
}

export interface SurvivalKitCard {
  id: string;
  region: string;
  code: string;
  badge: string;
  title: string;
  frictionPoint: string;
  solutions: string[];
  planBHighlight: string;
}

export interface TravelUniverse {
  id: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  coordinates: string;
  lat: number;
  lng: number;
  bestSeason: string;
  recommendedDays: string;
  avgTemp: string;
  imageUrl: string;
  imageAlt: string;
  atmosphereTags: string[];
  fatalMistake: string;
  andreaMagicTouch: string;
  signatureMoment: string;
  hoursSaved: string;
}

export interface LookbookItineraryDemo {
  id: 'vietnam' | 'china';
  countryName: string;
  routeTitle: string;
  routeCode: string;
  duration: string;
  season: string;
  coordinates: string;
  compass: {
    summary: string;
    stops: { dayRange: string; city: string; vibe: string; coords: string }[];
    energyCurve: { day: string; label: string; energy: number; note: string }[];
    discarded: { place: string; reason: string }[];
  };
  vaultChecklist: {
    id: string;
    window: '60 DÍAS ANTES' | '30 DÍAS ANTES' | '48H ANTES DE VOLAR';
    task: string;
    andreaNote: string;
    defaultChecked: boolean;
  }[];
  dailyLog: {
    dayNumber: number;
    dayTitle: string;
    location: string;
    coordinates: string;
    temp: string;
    audioPillCode: string;
    planA: {
      time: string;
      period: 'MAÑANA' | 'MEDIODÍA' | 'TARDE' | 'NOCHE';
      title: string;
      description: string;
      logisticsCode: string;
    }[];
    planB: {
      weatherTrigger: string;
      andreaMessage: string;
      schedule: {
        time: string;
        period: 'MAÑANA' | 'MEDIODÍA' | 'TARDE' | 'NOCHE';
        title: string;
        description: string;
        logisticsCode: string;
      }[];
    };
  }[];
  stays: {
    id: string;
    name: string;
    location: string;
    category: string;
    pricePerNight: string;
    whyChosen: string;
    exactRoomToAsk: string;
    directBookingUrl: string;
    coordinates: string;
  }[];
  radarPins: {
    id: string;
    category: 'cafe' | 'food' | 'viewpoint' | 'utility';
    categoryLabel: string;
    name: string;
    city: string;
    coordinates: string;
    xPercent: number;
    yPercent: number;
    whySpecial: string;
    whatToOrderOrDo: string;
  }[];
  budget: {
    currency: string;
    perPersonDirectTotal: number;
    traditionalAgencyTotal: number;
    designFeeNote: string;
    items: {
      category: string;
      code: string;
      directCost: number;
      agencyCost: number;
      detail: string;
    }[];
  };
}

export const HERO_SAVINGS_DESTINATIONS: HeroSavingsDestination[] = [
  {
    id: 'china',
    name: 'China',
    regionCode: 'PEK · XIA · SHA',
    coordinates: '39.90° N, 116.40° E',
    lat: 39.9,
    lng: 116.4,
    hoursSaved: 48,
    tabsClosed: 140,
    mainObstacle: 'Gran Cortafuegos digital, pagos exclusivamente por QR (Alipay/WeChat) y apertura de billetes de tren bala a 14 días vista.',
    andreaSolution: 'Sales de España con Alipay y WeChat verificados con tu tarjeta europea, eSIM con túnel VPN activo y tus trenes de alta velocidad emitidos sin colas en estación.',
    microMetric: '0% bloqueo digital · 100% pagos QR operativos',
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    regionCode: 'HAN · LHA · DAD',
    coordinates: '21.02° N, 105.83° E',
    lat: 21.02,
    lng: 105.83,
    hoursSaved: 42,
    tabsClosed: 115,
    mainObstacle: 'Cruceros masificados en Ha Long, distancias engañosas en carretera y sobrecargos en traslados internos.',
    andreaSolution: 'Navegamos por los canales silenciosos de Lan Ha en junco boutique de 10 camarotes, conectamos norte y centro con vuelos y trenes precisos, y llevas mi mapa de mesas locales impecables.',
    microMetric: 'Lan Ha vs Ha Long: -85% barcos alrededor',
  },
  {
    id: 'nordicos',
    name: 'Nórdicos',
    regionCode: 'LOF · TOS · BGO',
    coordinates: '68.23° N, 14.56° E',
    lat: 68.23,
    lng: 14.56,
    hoursSaved: 36,
    tabsClosed: 92,
    mainObstacle: 'Meteorología cambiante en el Ártico, ferris con horarios estacionales y rutas de fiordos imposibles de cubrir en un día.',
    andreaSolution: 'Rorbuer tradicionales sobre el agua orientados al arco auroral, matriz de ferris sincronizada y un Plan B meteorológico diario listo en tu móvil.',
    microMetric: '2 planes diarios (Cielo despejado / Ventisca)',
  },
  {
    id: 'costarica',
    name: 'Costa Rica & Panamá',
    regionCode: 'SJO · MVV · BOC',
    coordinates: '9.74° N, 83.75° W',
    lat: 9.74,
    lng: -83.75,
    hoursSaved: 38,
    tabsClosed: 98,
    mainObstacle: 'Microclimas tropicales opuestos entre Caribe y Pacífico, pistas 4x4 y ecolodges que se agotan meses antes.',
    andreaSolution: 'Ruta calibrada según el régimen real de lluvias de tu mes, ecolodges inmersos en reserva privada (donde ves fauna desde tu terraza al amanecer) y cruce fluido al Caribe panameño.',
    microMetric: 'Ahorro de 9h en traslados de tierra innecesarios',
  },
  {
    id: 'marruecos',
    name: 'Marruecos',
    regionCode: 'RAK · DADES · ERG',
    coordinates: '31.62° N, 7.98° W',
    lat: 31.62,
    lng: -7.98,
    hoursSaved: 34,
    tabsClosed: 85,
    mainObstacle: 'Falsos guías en las medinas, riads que en fotos parecen palacios pero están en callejones ruidosos, y jornadas eternas de coche.',
    andreaSolution: 'Riads verificados personalmente por mí, conductor privado de mi absoluta confianza durante toda la ruta al Atlas y desierto, y códigos culturales para pasear por la medina con serenidad.',
    microMetric: 'Conductor privado verificado + Riads con patio silencioso',
  },
  {
    id: 'brujas',
    name: 'Brujas & Flandes',
    regionCode: 'BRU · GENT · ANT',
    coordinates: '51.20° N, 3.22° E',
    lat: 51.2,
    lng: 3.22,
    hoursSaved: 28,
    tabsClosed: 64,
    mainObstacle: 'El efecto "parque temático" entre las 10:30h y las 16:30h cuando desembarcan los cruceros y excursiones de autobús.',
    andreaSolution: 'Cronograma inverso de guía oficial: canales ocultos de Santa Ana, beguinajes en hora dorada y mis píldoras de audio narrándote la historia del Siglo de Oro flamenco mientras paseas.',
    microMetric: 'Cero colas · Narrativa histórica en tu oído',
  },
];

export const AUDIO_PILLS: AudioPill[] = [
  {
    id: 'brujas-01',
    code: 'PISTA 01 · BRUJAS [51.20°N, 3.22°E]',
    location: 'Brujas · Canal Dijver & Barrio de Santa Ana',
    coordinates: '51.2089° N, 3.2242° E',
    duration: '02:15',
    durationSeconds: 135,
    title: 'Por qué no debes entrar al Markt a las 11:00h y el callejón secreto detrás del canal Dijver',
    contextBadge: 'SE ACTIVA POR GPS A LAS 09:45H JUNTO AL PUENTE BONIFACIUS',
    transcript: [
      '«Buenos días, viajeros. Si miráis vuestro reloj son las diez menos cuarto: justo ahora están aparcando cuarenta autobuses junto a la estación. Por eso nosotros no vamos hacia el Markt todavía.»',
      '«Girad a vuestra derecha por la pequeña arcada de piedra de Groeninge. Fijaos en el escudo tallado sobre el dintel: era el antiguo gremio de los curtidores del siglo XV. Aquí apenas oiréis vuestros pasos sobre el adoquín.»',
      '«Seguid mi voz hacia el barrio de Sint-Anna. Os he reservado mesa a las 12:30h en una taberna histórica de tres mesas donde no admiten grupos; volveremos al Markt a las 18:15h, cuando las fachadas escalonadas se tiñen de ámbar y la plaza vuelve a pertenecer a quienes duermen en Brujas.»',
    ],
    secretReveal: 'Coordenada desbloqueada en tu mapa privado: Pasaje Huidenvettersplein → Hof Arents → Iglesia de Jerusalén.',
  },
  {
    id: 'vietnam-02',
    code: 'PISTA 02 · BAHÍA DE LAN HA [20.72°N, 107.04°E]',
    location: 'Vietnam · Archipiélago de Cat Ba & Lan Ha',
    coordinates: '20.7251° N, 107.0485° E',
    duration: '01:50',
    durationSeconds: 110,
    title: 'La verdad sobre los cruceros de Ha Long y cómo despertar en silencio entre montañas kársticas',
    contextBadge: 'PARA ESCUCHAR EN EL TRASLADO PRIVADO HANOI → ISLA DE CAT BA',
    transcript: [
      '«Seguro que habéis visto fotos idílicas de la Bahía de Ha Long... lo que el encuadre recorta son los trescientos barcos en fila india siguiendo la misma concesión marítima de dos horas.»',
      '«Hoy embarcamos desde el extremo sur de Cat Ba hacia la Bahía de Lan Ha. Geológicamente es exactamente la misma formación kárstica milenaria, pero administrativamente pertenece a Hai Phong y el 90% de los operadores masivos no tienen licencia aquí.»',
      '«Mañana a las 06:30h, subid a cubierta con una taza de café vietnamita antes del desayuno. Cuando el junco apague motores frente a la laguna de Ba Trai Dao, solo escucharéis el eco de las águilas pescadoras sobre el agua esmeralda.»',
    ],
    secretReveal: 'Camarote asignado en proa superior (Cubierta 2, babor) para evitar el ruido del generador nocturno.',
  },
  {
    id: 'china-03',
    code: 'PISTA 03 · PEKÍN [39.91°N, 116.39°E]',
    location: 'Pekín · Ciudad Prohibida & Pabellones del Oeste',
    coordinates: '39.9163° N, 116.3972° E',
    duration: '02:30',
    durationSeconds: 150,
    title: 'Cómo cruzar los patios laterales de la Ciudad Prohibida donde nunca llegan los grupos con bandera',
    contextBadge: 'SE ESCUCHA TRAS PASAR EL CONTROL DE PASAPORTE EN PUERTA MERIDIANA (WU MEN)',
    transcript: [
      '«Acabáis de cruzar la Puerta Meridiana. El 95% de los visitantes va a caminar en línea recta por el eje central imperial norte-sur y saldrá agotado en noventa minutos pensando que todo el palacio está lleno de gente.»',
      '«Nosotros vamos a hacer exactamente lo que hacían los eruditos de la corte Ming: en cuanto veáis los leones de bronce del Salón de la Suprema Armonía, tomad la puerta lateral izquierda hacia el Palacio de la Compasión Tranquila (Cining Gong).»',
      '«Aquí los muros bermellón están completamente en calma, los cipreses tienen quinientos años y podréis observar la cerámica vidriada imperial a un metro de distancia sin un solo megáfono alrededor.»',
    ],
    secretReveal: 'Salida estratégica por Puerta Shenwu + ruta a pie hacia el hutong de Wudaoying en lugar de esperar 45 min un taxi.',
  },
];

export const HONESTY_COMPARISON: ComparisonRow[] = [
  {
    aspect: 'Cómo se diseña cada día de ruta',
    agency: {
      verdict: 'Plantilla Copiar-Pegar de Mayorista',
      detail: 'El mismo PDF que venden a 400 clientes al año. Visitas en las horas punta de más calor y masificación porque dependen de autobuses compartidos.',
    },
    influencer: {
      verdict: 'Recopilación de "Spots de Foto" inconexos',
      detail: 'Listas de "10 sitios imprescindibles" que en el mapa real están a 3 horas de atasco entre sí. Cero criterio logístico ni contexto histórico.',
    },
    andrea: {
      verdict: 'Ingeniería de Tiempos + Mirada de Guía Oficial',
      detail: 'Diseño tu jornada según la luz, la apertura real de monumentos, los flujos de cruceros y vuestra curva de energía, con Plan B si llueve.',
    },
  },
  {
    aspect: 'Transparencia en Hoteles y Presupuesto',
    agency: {
      verdict: 'Sobreprecio Oculto del 20% al 35%',
      detail: 'El presupuesto "gratis" se cobra inflando el paquete cerrado. Te alojan en hoteles grandes de las afueras porque les dan mayor margen comercial.',
    },
    influencer: {
      verdict: 'Enlaces de Afiliado Masivos o Canjes',
      detail: 'Recomiendan donde les han invitado gratis o lo primero que sale en buscadores genéricos, sin avisar de habitaciones interiores o ruidos.',
    },
    andrea: {
      verdict: 'Precio Real Directo · Cero Comisiones Ocultas',
      detail: 'Cobro únicamente mis honorarios de diseño. Tú reservas directamente cada riad, ecolodge o junco a su tarifa oficial y te indico qué habitación exacta pedir.',
    },
  },
  {
    aspect: 'Qué ocurre cuando estás en destino',
    agency: {
      verdict: 'Rigidez Total y Paradas Comerciales',
      detail: 'Te llevan a fábricas de alfombras, jade o perlas "oficiales" para cobrar comisión mientras pierdes dos horas de tu tarde libre.',
    },
    influencer: {
      verdict: 'Soledad ante las Barreras Reales',
      detail: 'Cuando llegas a Pekín y tu tarjeta no pasa, o cae un diluvio en Costa Rica, el post del blog no te explica cómo resolverlo en 5 minutos.',
    },
    andrea: {
      verdict: 'Tu Hada en el Bolsillo (Audio + Bóveda + Plan B)',
      detail: 'Llevas mis píldoras de audio para entender lo que ves, Alipay/eSIM configurados antes de despegar, mapa gastronómico seguro y alternativa climática lista.',
    },
  },
];

export const SURVIVAL_KIT_CARDS: SurvivalKitCard[] = [
  {
    id: 'kit-china',
    region: 'CHINA SIN BARRERAS',
    code: 'PROTOCOLO DIGITAL · ALIPAY / WECHAT / 12306',
    badge: 'Fricción Digital = 0%',
    title: 'Configuración paso a paso antes de subir al avión',
    frictionPoint: 'En China el efectivo casi no tiene cambio y las tarjetas Visa/Mastercard físicas no pasan en comercios ni taxis.',
    solutions: [
      'Tutorial guiado 30 días antes para vincular tus tarjetas europeas a Alipay y WeChat Pay superando el límite de 200 RMB.',
      'eSIM con enrutamiento en Hong Kong/Singapur (VPN transparente integrada): WhatsApp, Google Maps e Instagram funcionan desde el minuto 1 al aterrizar.',
      'Emisión anticipada de tus billetes de tren bala (G-Trains) en el sistema oficial ferroviario con pasaporte vinculado (sin canjear papel en taquilla).',
      'Tarjetas bilingües en caracteres mandarines para alergias alimentarias, direcciones de hoteles y estaciones.',
    ],
    planBHighlight: 'Plan B incluido: Alternativas cubiertas en hutongs y museos imperiales ante días de lluvia o calima en Pekín y Shanghái.',
  },
  {
    id: 'kit-marruecos-vietnam',
    region: 'MARRUECOS & VIETNAM',
    code: 'LOGÍSTICA VERIFICADA · CERO TRAMPAS TURÍSTICAS',
    badge: 'Seguridad & Calma',
    title: 'Conductores privados de confianza, riads reales y finanzas claras',
    frictionPoint: 'En Marruecos y Vietnam la diferencia entre un viaje mágico y uno agotador está en quién te espera al salir de la estación o dónde duermes.',
    solutions: [
      'Marruecos: Conductores privados oficiales con los que trabajo personalmente desde hace años y riads dentro de la medina a menos de 3 minutos a pie de un punto de acceso en taxi.',
      'Vietnam: Listado exacto de cajeros sin comisión local (TPBank / VPBank) que ahorran entre 80€ y 140€ por viaje en tasas bancarias.',
      'Filtro gastronómico de higiene verificada: dónde comer el mejor Bun Cha de Hanoi o un tajín casero en el Atlas con total tranquilidad estomacal.',
      'Sastrerías éticas en Hoi An y cooperativas bereberes reales (nunca bazares de autobús con comisión).',
    ],
    planBHighlight: 'Plan B incluido: Cambio automático de ruta si hay viento en la bahía o tormenta monzónica en el centro de Vietnam.',
  },
  {
    id: 'kit-clima',
    region: 'NÓRDICOS, BRUJAS & COSTA RICA',
    code: 'INGENIERÍA METEOROLÓGICA · PLAN B DIARIO',
    badge: 'Clima Inteligente',
    title: 'Doble escenario diario para que la lluvia o la nieve sumen magia',
    frictionPoint: 'Un itinerario rígido se desmorona el primer día que llueve en el bosque nuboso de Monteverde o se cierra un puerto en Lofoten.',
    solutions: [
      'En Países Nórdicos: Radar de nubosidad en vivo para cazar auroras boreales + rutas escénicas alternativas por túneles subacuáticos si un ferri cancela por oleaje.',
      'En Costa Rica y Panamá: Secuencia geográfica Pacífico → Tierras Altas → Caribe diseñada según la ventana seca de tu quincena exacta y cruces 4x4 verificados.',
      'En Brujas y Flandes: Refugios históricos, salones de té medievales, microcervecerías trapenses y museos flamencos íntimos listos para activar con un toque si llueve.',
    ],
    planBHighlight: 'En tu Entregable Estrella tienes un interruptor literal: "¿Llueve o estamos cansados?" que reconfigura tu día al instante.',
  },
];

export const TRAVEL_UNIVERSES: TravelUniverse[] = [
  {
    id: 'europa',
    shortTitle: 'Brujas & Nórdicos',
    title: 'Europa con Alma: Brujas, Flandes y Países Nórdicos',
    subtitle: 'Canales medievales al amanecer, fiordos en silencio y auroras boreales desde cabañas sobre el mar.',
    coordinates: '51.20° N, 3.22° E · 68.23° N, 14.56° E',
    lat: 59.7,
    lng: 8.9,
    bestSeason: 'Abr-Oct (Flandes) · Sep-Mar (Auroras) · Jun-Ago (Sol Medianoche)',
    recommendedDays: '5 a 12 días',
    avgTemp: '2°C — 19°C',
    imageUrl: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Fiordos escénicos y cabañas tradicionales sobre el agua en el norte de Europa',
    atmosphereTags: ['Patrimonio Vivo', 'Auroras sin Autobuses', 'Rutas Escénicas', 'Audio-Guía de Autor'],
    fatalMistake: 'Visitar Brujas en excursión de 4 horas al mediodía rodeado de masas, o intentar recorrer Noruega cambiando de hotel cada noche sin calcular los horarios reales de los ferris árticos.',
    andreaMagicTouch: 'Dormir en el corazón silencioso de Brujas para recorrer sus beguinajes a las 08:30h con mis píldoras de audio en el oído, o instalar tu base en un rorbu histórico de Lofoten con sauna privada sobre el fiordo.',
    signatureMoment: 'Cruzar el puente de San Bonifacio al anochecer con la neblina subiendo del canal mientras te cuento la historia secreta de los mercaderes de Brujas.',
    hoursSaved: '+36H AHORRADAS',
  },
  {
    id: 'marruecos',
    shortTitle: 'Marruecos',
    title: 'Marruecos Auténtico y Seguro: De las Medinas al Erg',
    subtitle: 'Patios de azahar en calma, kasbahs de adobe en el Alto Atlas y campamentos íntimos bajo las estrellas del Sáhara.',
    coordinates: '31.62° N, 7.98° W',
    lat: 31.62,
    lng: -7.98,
    bestSeason: 'Octubre a Mayo (Primavera y Otoño ideales)',
    recommendedDays: '7 a 12 días',
    avgTemp: '18°C — 28°C',
    imageUrl: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Patio arquitectónico marroquí de tonos tierra y luz cálida',
    atmosphereTags: ['Riads con Alma', 'Conductor Privado', 'Desierto sin Masas', 'Artesanía Real'],
    fatalMistake: 'Reservar un riad precioso en fotos pero ubicado en un callejón oscuro a 20 minutos de la parada de coche, o hacer el trayecto Marrakech-Merzouga del tirón pasando 11 horas encerrado en una furgoneta.',
    andreaMagicTouch: 'Conductor privado de mi total confianza que os acompaña a vuestro ritmo, paradas en valles bereberes fuera de ruta como Skoura o Tamnougalt, y campamento en dunas donde las jaimas están separadas para garantizar silencio absoluto.',
    signatureMoment: 'Cenar en la azotea privada de vuestro riad escuchando la llamada al rezo al atardecer tras una tarde en un hammam tradicional de barrio.',
    hoursSaved: '+34H AHORRADAS',
  },
  {
    id: 'costarica',
    shortTitle: 'Costa Rica & Panamá',
    title: 'Naturaleza Salvaje: Costa Rica y el Caribe de Panamá',
    subtitle: 'Bosques nubosos donde despiertas entre tucanes, volcanes activos, aguas termales en la selva y cayos cristalinos.',
    coordinates: '9.74° N, 83.75° W',
    lat: 9.74,
    lng: -83.75,
    bestSeason: 'Diciembre a Abril (Pacífico) · Septiembre y Octubre (Caribe)',
    recommendedDays: '12 a 18 días',
    avgTemp: '24°C — 30°C',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Bosque nuboso tropical y naturaleza exuberante en Costa Rica',
    atmosphereTags: ['Ecolodges Boutique', 'Logística 4x4 Precisa', 'Fauna en Libertad', 'Combinado Panamá'],
    fatalMistake: 'Alquilar el coche equivocado, conducir de noche con niebla tropical por carreteras de montaña o reservar resorts grandes de cemento donde tienes que hacer cola para ver un perezoso.',
    andreaMagicTouch: 'Selecciono ecolodges con reserva biológica propia (donde los monos y quetzales están en tu propio jardín al amanecer), guías naturalistas privados con telescopio Swarovski y cierre en un bungalow sobre el agua en Bocas del Toro.',
    signatureMoment: 'Bañarte en un río termal volcánico rodeado de selva primaria a las cinco de la tarde cuando ya se han marchado todas las excursiones.',
    hoursSaved: '+38H AHORRADAS',
  },
  {
    id: 'china',
    shortTitle: 'China',
    title: 'China Sin Barreras Digitales: Imperio, Karst y Futuro',
    subtitle: 'De la Gran Muralla en tramos solitarios y los guerreros de Xi’an a los ríos de bambú de Yangshuo y el skyline de Shanghái.',
    coordinates: '39.90° N, 116.40° E',
    lat: 39.9,
    lng: 116.4,
    bestSeason: 'Abril-Mayo y Septiembre-Noviembre',
    recommendedDays: '13 a 20 días',
    avgTemp: '14°C — 25°C',
    imageUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Gran Muralla China serpenteando entre montañas al amanecer',
    atmosphereTags: ['Bóveda Digital Alipay', 'Trenes Bala 350km/h', 'Cultura Milenaria', 'Cero Estrés Idioma'],
    fatalMistake: 'Ir a China sin haber configurado la identidad digital antes de volar, coincidir con festivos nacionales chinos o visitar el tramo masificado de Badaling en la Gran Muralla.',
    andreaMagicTouch: 'Llegas con tu ecosistema digital 100% operativo, tus entradas nominativas a la Ciudad Prohibida reservadas al segundo exacto en que se abren en Pekín, y caminamos por un tramo restaurado de la Muralla donde estaréis prácticamente solos.',
    signatureMoment: 'Descender en balsa de bambú tradicional por el río Yulong al amanecer mientras los picos kársticos de Yangshuo se reflejan como un grabado en tinta.',
    hoursSaved: '+48H AHORRADAS',
  },
  {
    id: 'vietnam',
    shortTitle: 'Vietnam',
    title: 'Vietnam de Norte a Sur: Montañas de Arroz y Farolillos',
    subtitle: 'El caos poético de Hanoi, valles étnicos en Pu Luong o Ha Giang, navegación íntima en Lan Ha y la elegancia de Hoi An.',
    coordinates: '21.02° N, 105.83° E',
    lat: 21.02,
    lng: 105.83,
    bestSeason: 'Febrero a Mayo y Octubre a Diciembre (Ruta adaptada por latitud)',
    recommendedDays: '14 a 18 días',
    avgTemp: '22°C — 31°C',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Bahía kárstica y embarcación tradicional en Vietnam al amanecer',
    atmosphereTags: ['Junco Boutique Lan Ha', 'Gastronomía Segura', 'Arrozales sin Masas', 'Ideal Luna de Miel'],
    fatalMistake: 'Querer abarcar 9 ciudades en 12 días pasando el viaje en autobuses cama incómodos, caer en los cruceros fiesta de Ha Long o ir a Sapa en fin de semana.',
    andreaMagicTouch: 'Sustituimos las zonas saturadas por lodges con piscina infinita frente a las terrazas de arroz de Pu Luong, navegamos por Lan Ha en barco boutique y te doy mi mapa curado de cafés de especialidad y restaurantes familiares.',
    signatureMoment: 'Despertar frente a las terrazas de arroz envueltas en bruma matinal y recorrer en bicicleta los puentes de bambú del valle con un guía local.',
    hoursSaved: '+42H AHORRADAS',
  },
];

export const LOOKBOOK_DEMOS: Record<'vietnam' | 'china', LookbookItineraryDemo> = {
  vietnam: {
    id: 'vietnam',
    countryName: 'Vietnam de Autor',
    routeTitle: 'Ruta 15 Días · El Hilo de Seda y Esmeralda',
    routeCode: 'EXP-VNM-15D · NORTE & CENTRO',
    duration: '15 Días / 14 Noches',
    season: 'Primavera / Otoño · Clima Calibrado',
    coordinates: '21.02° N, 105.83° E → 15.88° N, 108.33° E',
    compass: {
      summary: 'Un trazado orgánico pensado para saborear Vietnam sin hacer las maletas cada 24 horas: 4 bases con encanto, traslados privados puerta a puerta y equilibrio perfecto entre cultura viva, naturaleza kárstica y descanso boutique.',
      stops: [
        { dayRange: 'Días 01–04', city: 'Hanoi (Barrio Francés & Lagos)', vibe: 'Cultura & Café de Especialidad', coords: '21.02°N 105.85°E' },
        { dayRange: 'Días 05–07', city: 'Reserva Natural de Pu Luong', vibe: 'Terrazas de Arroz & Ecolodge', coords: '20.45°N 105.18°E' },
        { dayRange: 'Días 08–10', city: 'Tam Coc (Ninh Binh) & Bahía de Lan Ha', vibe: 'Ríos Kársticos & Junco Boutique', coords: '20.72°N 107.04°E' },
        { dayRange: 'Días 11–15', city: 'Hue Imperial & Hoi An (Playa An Bang)', vibe: 'Farolillos, Sastrería & Relax Mar', coords: '15.88°N 108.33°E' },
      ],
      energyCurve: [
        { day: 'D1-D2', label: 'Aterrizaje Suave', energy: 45, note: 'Ritmo lento para absorber el jet-lag con masaje tradicional vietnamita.' },
        { day: 'D3-D4', label: 'Inmersión Hanoi', energy: 70, note: 'Callejones secretos al amanecer + gastronomía guiada.' },
        { day: 'D5-D7', label: 'Trekking Suave Pu Luong', energy: 80, note: 'Caminatas por aldeas Thai y tardes de piscina frente al valle.' },
        { day: 'D8-D10', label: 'Crucero Silencioso', energy: 55, note: 'Kayak en lagunas ocultas de Lan Ha y lectura en cubierta.' },
        { day: 'D11-D15', label: 'Calma en Hoi An', energy: 40, note: 'Bicicleta entre arrozales, sastrería a medida y mar.' },
      ],
      discarded: [
        {
          place: 'Bahía de Ha Long (Ruta Turística Estándar)',
          reason: 'Descartada por saturación de hasta 400 barcos diarios en el mismo canal. La sustituimos por la concesión sur de Lan Ha desde Cat Ba.',
        },
        {
          place: 'Sapa en tren nocturno de fin de semana',
          reason: 'El centro urbano de Sapa sufre un exceso de construcción de hormigón. Elegimos Pu Luong: a solo 4h en coche privado, 100% auténtico y sin aglomeraciones.',
        },
      ],
    },
    vaultChecklist: [
      {
        id: 'vnm-c1',
        window: '60 DÍAS ANTES',
        task: 'Tramitar e-Visa oficial de Vietnam (Portal gubernamental único)',
        andreaNote: 'Incluyo mi guía visual con capturas para rellenar el formulario oficial (25 USD) evitando webs intermediarias que cobran 95€.',
        defaultChecked: true,
      },
      {
        id: 'vnm-c2',
        window: '60 DÍAS ANTES',
        task: 'Bloquear el camarote de proa en el junco boutique de 10 suites en Lan Ha',
        andreaNote: 'Enlace directo con tarifa preferencial sin prepago total hasta 14 días antes.',
        defaultChecked: true,
      },
      {
        id: 'vnm-c3',
        window: '30 DÍAS ANTES',
        task: 'Instalar app Grab y vincular tarjeta sin comisiones de divisa (Revolut / N26)',
        andreaNote: 'Así conocéis el precio exacto de cada trayecto urbano en Hanoi y Da Nang sin negociar nunca con taxistas.',
        defaultChecked: false,
      },
      {
        id: 'vnm-c4',
        window: '48H ANTES DE VOLAR',
        task: 'Descargar mapa offline de Andrea + Píldoras de Audio y activar eSIM Viettel',
        andreaNote: 'Cobertura 4G/5G real incluso en los valles de montaña de Pu Luong y en mitad de la bahía.',
        defaultChecked: false,
      },
    ],
    dailyLog: [
      {
        dayNumber: 4,
        dayTitle: 'Día 04 · El Hanoi que despierta a las 06:30h y los patios coloniales',
        location: 'Hanoi · Distrito Hoan Kiem & Truc Bach',
        coordinates: '21.0285° N, 105.8542° E',
        temp: '25°C · Brisa matinal',
        audioPillCode: 'AUDIO #04 · HANOI SECRETO (03:10)',
        planA: [
          {
            time: '07:30h',
            period: 'MAÑANA',
            title: 'Templo de la Literatura en apertura + Callejón de los Calígrafos',
            description: 'Entramos justo cuando abren los portones de madera antes de que lleguen los grupos escolares. Os guío con mi audio por los cinco patios confucianos.',
            logisticsCode: 'GRAB 8 MIN · ENTRADA 30.000 VND',
          },
          {
            time: '12:15h',
            period: 'MEDIODÍA',
            title: 'Almuerzo de Bun Cha en casa familiar del Barrio Francés',
            description: 'Nada de franquicias turísticas: una terraza interior de arquitectura art déco donde preparan el cerdo caramelizado al carbón con hierbas frescas impecables.',
            logisticsCode: 'RESERVA CONFIRMADA · MESA EN PATIO',
          },
          {
            time: '16:00h',
            period: 'TARDE',
            title: 'Paseo por la isla de Truc Bach y taller de café de huevo (Ca Phe Trung)',
            description: 'Caminamos junto al lago donde apenas hay turistas y subimos por una librería escondida a probar el café de huevo original de la familia Nguyen.',
            logisticsCode: 'A PIE 14 MIN · PIN #12 DEL MAPA',
          },
          {
            time: '20:00h',
            period: 'NOCHE',
            title: 'Cena vietnamita contemporánea en villa restaurada de 1920',
            description: 'Velada tranquila a la luz de las velas con cocina de mercado del norte de Vietnam.',
            logisticsCode: 'A 6 MIN A PIE DE VUESTRO HOTEL',
          },
        ],
        planB: {
          weatherTrigger: '🌧️ PLAN B ACTIVADO: Aguacero tropical en Hanoi o mañana de descanso lento',
          andreaMessage: '«Si hoy amanece diluviando en Hanoi o preferís dormir hasta tarde, no caminamos bajo el agua: activamos la ruta de salones históricos, cerámica y bienestar.»',
          schedule: [
            {
              time: '09:30h',
              period: 'MAÑANA',
              title: 'Desayuno largo + Museo de Bellas Artes en edificio colonial cubierto',
              description: 'Salas de laca vietnamita y pintura en seda con vistas a los jardines bajo la lluvia, completamente resguardados y sin aglomeraciones.',
              logisticsCode: 'TRASLADO PUERTA A PUERTA EN GRAB CUBIERTO',
            },
            {
              time: '12:45h',
              period: 'MEDIODÍA',
              title: 'Pho Bo reconfortante en salón interior del Barrio Francés',
              description: 'Caldo aromático de 12 horas con canela y anís estrellado en una casa colonial climatizada.',
              logisticsCode: 'MESA INTERIOR RESERVADA · PIN #18',
            },
            {
              time: '15:30h',
              period: 'TARDE',
              title: 'Ritual de Spa Herbal de 120 minutos + Ceremonia de Té de Loto de West Lake',
              description: 'Tarde en un santuario silencioso de medicina tradicional vietnamita (con descuento directo para mis viajeros) seguida de cata privada de té.',
              logisticsCode: 'RESERVA FLEXIBLE POR WHATSAPP · CÓDIGO HADA',
            },
            {
              time: '20:00h',
              period: 'NOCHE',
              title: 'Jazz en vivo en club íntimo fundado por el saxofonista Quyen Van Minh',
              description: 'Cerramos el día de lluvia en butacas de terciopelo escuchando jazz fusión con instrumentos tradicionales vietnamitas.',
              logisticsCode: 'A 400M DEL HOTEL · ENTRADA INCLUIDA',
            },
          ],
        },
      },
    ],
    stays: [
      {
        id: 'stay-vnm-1',
        name: 'Capella / Boutique Opera Quarter Residence',
        location: 'Hanoi · Barrio Francés (Hoan Kiem Sur)',
        category: 'Boutique Heritage · 4★ Sup / 5★',
        pricePerNight: '165 € / noche (Desayuno a la carta incl.)',
        whyChosen: 'Ubicado en una calle arbolada junto a la Ópera: a 6 minutos a pie del casco antiguo pero aislado del ruido de cláxones nocturnos.',
        exactRoomToAsk: 'Pedir planta 4 o 5 con balcón hacia el patio interior de frangipanis (Habitaciones 402 a 406).',
        directBookingUrl: 'Reserva directa a tarifa oficial del hotel (0% recargo)',
        coordinates: '21.0245° N, 105.8576° E',
      },
      {
        id: 'stay-vnm-2',
        name: 'Retreat en las Nubes de Pu Luong',
        location: 'Reserva Natural de Pu Luong',
        category: 'Ecolodge de Autor · Bungalows sobre el Valle',
        pricePerNight: '140 € / noche (Media pensión gourmet)',
        whyChosen: 'Dos piscinas infinitas colgadas sobre el anfiteatro de arrozales y caminos directos desde la puerta hacia las aldeas con ruedas hidráulicas de bambú.',
        exactRoomToAsk: 'Valley View Deluxe Bungalow #03 o #04 (los más privados en el extremo oriental).',
        directBookingUrl: 'Enlace directo con upgrade prioritario para clientes de Andrea',
        coordinates: '20.4512° N, 105.1840° E',
      },
      {
        id: 'stay-vnm-3',
        name: 'Junco Tradicional de Madera (10 Camarotes)',
        location: 'Bahía de Lan Ha & Archipiélago Cat Ba',
        category: 'Crucero Boutique Íntimo',
        pricePerNight: '320 € / suite (Pensión completa + Kayak + Ruta ciclista en Viet Hai)',
        whyChosen: 'Barco de madera noble con velas color ocre y solo 20 pasajeros máximo, que se adentra en calas donde los megacruceros de acero no pueden entrar.',
        exactRoomToAsk: 'Suite Orchid en cubierta superior (evita vibración de motor y tiene terraza privada).',
        directBookingUrl: 'Tarifa directa armador verificada',
        coordinates: '20.7251° N, 107.0485° E',
      },
    ],
    radarPins: [
      {
        id: 'pin-v1',
        category: 'cafe',
        categoryLabel: 'Café de Especialidad',
        name: 'Tranquil Books & Coffee (Patio Oculto)',
        city: 'Hanoi',
        coordinates: '21.0268° N, 105.8459° E',
        xPercent: 28,
        yPercent: 32,
        whySpecial: 'Escondido al final de un pasaje residencial: paredes de libros, piano antiguo y granos Arábica de Da Lat tostados en micro-lotes.',
        whatToOrderOrDo: 'Pide el Cold Brew con infusión de cáscara de naranja o su Egg Coffee cremoso sin exceso de azúcar.',
      },
      {
        id: 'pin-v2',
        category: 'food',
        categoryLabel: 'Comida Local Segura',
        name: 'Tam Vi (Casa de Madera Michelin Bib Gourmand)',
        city: 'Hanoi',
        coordinates: '21.0312° N, 105.8410° E',
        xPercent: 52,
        yPercent: 24,
        whySpecial: 'Recetas caseras del norte de Vietnam servidas en vajilla antigua en una casa de té de dos plantas con estándares de higiene impecables.',
        whatToOrderOrDo: 'Rollitos de caracol con hierbas imperiales, cerdo braseado con huevos de codorniz y sopa de cangrejo con espinaca de agua.',
      },
      {
        id: 'pin-v3',
        category: 'viewpoint',
        categoryLabel: 'Mirador sin Autobuses',
        name: 'Pico Nguom Ngao / Terraza Alta de Don Village',
        city: 'Pu Luong / Ninh Binh',
        coordinates: '20.4590° N, 105.1920° E',
        xPercent: 68,
        yPercent: 58,
        whySpecial: 'Mientras 500 personas hacen cola en la cueva Mua a las 11:00h, este sendero lateral regala una panorámica de 360º sobre el río serpenteante en soledad.',
        whatToOrderOrDo: 'Llegar a las 16:45h para ver cómo los rayos de sol atraviesan los mogotes de piedra caliza.',
      },
      {
        id: 'pin-v4',
        category: 'utility',
        categoryLabel: 'Cajero 0% Comisión & Sastrería',
        name: 'Cajero TPBank Hoan Kiem + Sastrería Yaly Couture Privada',
        city: 'Hanoi / Hoi An',
        coordinates: '15.8794° N, 108.3280° E',
        xPercent: 42,
        yPercent: 74,
        whySpecial: 'Cajero verificado que permite retirar hasta 5.000.000 VND con 0 VND de comisión local + contacto de mi maestra sastre en Hoi An (lino y seda natural).',
        whatToOrderOrDo: 'Hacer la primera toma de medidas la primera mañana en Hoi An para tener dos pruebas tranquilas.',
      },
    ],
    budget: {
      currency: '€',
      perPersonDirectTotal: 2490,
      traditionalAgencyTotal: 3480,
      designFeeNote: 'Ahorro medio de 990 € por persona frente a un paquete equivalente en agencia tradicional (incluso sumando los honorarios de diseño de Andrea).',
      items: [
        {
          category: 'Vuelos Internacionales + 2 Vuelos Internos (Vietnam Airlines)',
          code: 'PARTIDA 01 · AÉREO',
          directCost: 920,
          agencyCost: 1210,
          detail: 'Tarifa directa aerolínea con maleta facturada y horarios óptimos (sin escalas de 9h).',
        },
        {
          category: '14 Noches en Hoteles Boutique, Ecolodge y Junco en Lan Ha',
          code: 'PARTIDA 02 · REFUGIOS',
          directCost: 980,
          agencyCost: 1490,
          detail: 'Coste por persona en habitación doble superior reservando directo al alojamiento.',
        },
        {
          category: 'Coches Privados Puerta a Puerta, Tren Expreso y Experiencias',
          code: 'PARTIDA 03 · LOGÍSTICA',
          directCost: 380,
          agencyCost: 560,
          detail: 'Conductores privados verificados Hanoi-Pu Luong-Ninh Binh-Lan Ha y entradas.',
        },
        {
          category: 'Gastronomía Local Curada y Cafés de Especialidad (15 días)',
          code: 'PARTIDA 04 · MESA',
          directCost: 210,
          agencyCost: 220,
          detail: 'Estimación real comiendo de maravilla en los restaurantes de mi mapa privado.',
        },
      ],
    },
  },
  china: {
    id: 'china',
    countryName: 'China Desbloqueada',
    routeTitle: 'Ruta 15 Días · Dinastías, Montañas de Tinta y Vanguardia',
    routeCode: 'EXP-CHN-15D · PEK · XIA · YSH · SHA',
    duration: '15 Días / 14 Noches',
    season: 'Primavera / Otoño · Alta Velocidad',
    coordinates: '39.90° N, 116.40° E → 31.23° N, 121.47° E',
    compass: {
      summary: 'La ruta definitiva para descubrir China por libre con la seguridad de quien domina sus códigos digitales: trenes bala a 350 km/h, la Gran Muralla sin multitudes, casas patio históricas y paisajes kársticos de ensueño.',
      stops: [
        { dayRange: 'Días 01–04', city: 'Pekín (Hutongs & Gran Muralla)', vibe: 'Historia Imperial & Tramo Secreto', coords: '39.90°N 116.40°E' },
        { dayRange: 'Días 05–07', city: 'Xi’an & Pingyao Medieval', vibe: 'Ruta de la Seda & Murallas Ming', coords: '34.34°N 108.94°E' },
        { dayRange: 'Días 08–11', city: 'Yangshuo (Río Yulong) & Guilin', vibe: 'Montañas Kársticos & Bambú', coords: '24.77°N 110.49°E' },
        { dayRange: 'Días 12–15', city: 'Shanghái & Pueblos de Agua (Tongli)', vibe: 'Concesión Francesa & Futuro', coords: '31.23°N 121.47°E' },
      ],
      energyCurve: [
        { day: 'D1-D2', label: 'Pekín Imperial', energy: 65, note: 'Ciudad Prohibida por patios laterales y paseo suave por hutongs.' },
        { day: 'D3-D4', label: 'Gran Muralla en Calma', energy: 85, note: 'Tramo escénico de Mutianyu/Jinshanling con subida en telesilla y bajada a pie.' },
        { day: 'D5-D7', label: 'Tren Bala a Xi’an', energy: 60, note: 'Viaje comodísimo en primera clase (4h15) y muralla en bici al atardecer.' },
        { day: 'D8-D11', label: 'Paz en el Río Yulong', energy: 45, note: 'Desconexión en hotel boutique entre picos de piedra caliza y campos de té.' },
        { day: 'D12-D15', label: 'Shanghái Cosmopolita', energy: 70, note: 'Arquitectura Art Déco, jardines clásicos de Suzhou/Tongli y terrazas frente al Bund.' },
      ],
      discarded: [
        {
          place: 'Tramo de Badaling en la Gran Muralla',
          reason: 'Es el punto al que van todos los tours masivos: colas de 2 horas y sensación de atasco humano. Vamos a un sector rodeado de bosque con 90% menos visitantes.',
        },
        {
          place: 'Crucero turístico grande por el Río Li',
          reason: 'Barcos ruidosos en caravana. Lo sustituimos por una balsa de bambú impulsada a pértiga (sin motor) en su afluente virgen, el río Yulong.',
        },
      ],
    },
    vaultChecklist: [
      {
        id: 'chn-c1',
        window: '60 DÍAS ANTES',
        task: 'Verificar exención de visado (30 días para pasaporte español) y validez > 6 meses',
        andreaNote: 'Revisamos juntos vuestros pasaportes y preparamos las cartas de invitación de hoteles en caracteres chinos.',
        defaultChecked: true,
      },
      {
        id: 'chn-c2',
        window: '30 DÍAS ANTES',
        task: 'Configurar y verificar pasaporte en Alipay + WeChat Pay con tarjeta europea',
        andreaNote: 'Hacemos una prueba real de pago de 1 yuan conmigo antes de volar para confirmar que vuestro banco no bloquea la pasarela.',
        defaultChecked: true,
      },
      {
        id: 'chn-c3',
        window: '30 DÍAS ANTES',
        task: 'Programar pre-reserva automática de Trenes Bala y entrada nominal a Ciudad Prohibida',
        andreaNote: 'Las entradas a la Ciudad Prohibida se agotan en minutos a los 7 días de abrirse; mi sistema las deja bloqueadas con vuestros pasaportes.',
        defaultChecked: false,
      },
      {
        id: 'chn-c4',
        window: '48H ANTES DE VOLAR',
        task: 'Activar eSIM con VPN transparente + App Amap/ Apple Maps en China y DiDi integrado',
        andreaNote: 'En China Google Maps tiene desfase de coordenadas (GCJ-02); lleváis mi cartografía calibrada al metro exacto.',
        defaultChecked: false,
      },
    ],
    dailyLog: [
      {
        dayNumber: 2,
        dayTitle: 'Día 02 · Los Patios Ocultos de la Ciudad Prohibida y Hutongs al Atardecer',
        location: 'Pekín · Eje Imperial & Colina del Carbón (Jingshan)',
        coordinates: '39.9163° N, 116.3972° E',
        temp: '21°C · Cielo despejado de otoño',
        audioPillCode: 'AUDIO #03 · CIUDAD PROHIBIDA (02:30)',
        planA: [
          {
            time: '08:15h',
            period: 'MAÑANA',
            title: 'Acceso prioritario por Puerta Donghuamen y Galería del Tesoro',
            description: 'Evitamos la cola kilométrica de la plaza de Tiananmen entrando por el paseo arbolado lateral del foso oriental hasta la Puerta Meridiana.',
            logisticsCode: 'PASAPORTE FÍSICO · SIN ENTRADA EN PAPEL',
          },
          {
            time: '13:00h',
            period: 'MEDIODÍA',
            title: 'Pato Laqueado de Pekín en horno de madera de azufaifo',
            description: 'Mesa reservada en un restaurante histórico donde el chef trincha el pato crujiente frente a vosotros, lejos de los comedores turísticos.',
            logisticsCode: 'RESERVA WECHAT CONFIRMADA · PIN #04',
          },
          {
            time: '16:15h',
            period: 'TARDE',
            title: 'Mirador de Jingshan en hora dorada + Ruta a pie por los Hutongs de Shichahai',
            description: 'Subimos al pabellón imperial justo cuando el sol ilumina los 9.999 tejados dorados de la Ciudad Prohibida y bajamos hacia los callejones tradicionales.',
            logisticsCode: 'ENTRADA QR ALIPAY · PÍLDORA DE AUDIO #05',
          },
          {
            time: '19:45h',
            period: 'NOCHE',
            title: 'Cena en casa-patio (Siheyuan) con farolillos rojos en Wudaoying',
            description: 'Cocina imperial contemporánea en un patio silencioso frecuentado por artistas y arquitectos locales.',
            logisticsCode: 'DIDI INTEGRADO EN ALIPAY · 12 MIN',
          },
        ],
        planB: {
          weatherTrigger: '🌧️ PLAN B ACTIVADO: Lluvia o viento frío en Pekín / Día de ritmo pausado',
          andreaMessage: '«Si hoy el cielo de Pekín está cubierto o preferís evitar grandes caminatas al aire libre, cambiamos la colina y los largos recorridos exteriores por joyas imperiales bajo techo.»',
          schedule: [
            {
              time: '09:15h',
              period: 'MAÑANA',
              title: 'Pabellones interiores de Relojes Imperiales y Cerámica Ming',
              description: 'Recorrido concentrado por las galerías climatizadas del palacio donde se guarda la colección de autómatas del emperador Qianlong.',
              logisticsCode: 'RUTA CUBIERTA · CERO EXPOSICIÓN A LA LLUVIA',
            },
            {
              time: '12:45h',
              period: 'MEDIODÍA',
              title: 'Hot Pot tradicional pekinés en caldero de bronce (Donglaishun)',
              description: 'El mejor antídoto para un día fresco: caldo aromático hirviendo en mesa privada con cortes finísimos y salsa de sésamo.',
              logisticsCode: 'A 5 MIN EN COCHE PRIVADO DIDI PREMIER',
            },
            {
              time: '15:30h',
              period: 'TARDE',
              title: 'Ceremonia privada de Té Oolong y Pu’er en Casa de Té de Qianmen',
              description: 'Una maestra del té os enseña el ritual Gongfu Cha mientras escucháis el sonido del guzheng tradicional en un salón de madera.',
              logisticsCode: 'RESERVA DIRECTA · PIN #09 DEL MAPA',
            },
            {
              time: '19:30h',
              period: 'NOCHE',
              title: 'Acrobacia clásica o coctelería de autor con vistas a la Ciudad Prohibida',
              description: 'Velada resguardada viendo el palacio iluminado desde una terraza acristalada junto al foso imperial.',
              logisticsCode: 'MESA JUNTO A VENTANAL RESERVADA',
            },
          ],
        },
      },
    ],
    stays: [
      {
        id: 'stay-chn-1',
        name: 'Siheyuan Boutique Courtyard Hotel',
        location: 'Pekín · Hutong Histórico de Dongcheng',
        category: 'Casa Patio Imperial Restaurada · 4★ Sup',
        pricePerNight: '185 € / noche (Desayuno oriental y occidental)',
        whyChosen: 'Dormir en una auténtica residencia de dinastía Qing con suelo radiante, vigas pintadas a mano y jardín de bambú en absoluto silencio.',
        exactRoomToAsk: 'Courtyard Suite Sur (orientación tradicional Feng Shui con luz toda la mañana).',
        directBookingUrl: 'Reserva directa garantizada para extranjeros',
        coordinates: '39.9342° N, 116.4120° E',
      },
      {
        id: 'stay-chn-2',
        name: 'Yulong River Karst Mountain Retreat',
        location: 'Yangshuo · Valle del Río Yulong',
        category: 'Boutique Design Lodge · 5★',
        pricePerNight: '170 € / noche (Desayuno + Bicicletas incluidas)',
        whyChosen: 'Rodeado por completo de montañas kársticas lejos del bullicio de West Street; sales caminando del jardín directamente al embarcadero de bambú.',
        exactRoomToAsk: 'Panoramic Karst Room en planta 3 (ventanal de suelo a techo hacia los picos).',
        directBookingUrl: 'Tarifa directa sin intermediarios',
        coordinates: '24.7821° N, 110.4512° E',
      },
      {
        id: 'stay-chn-3',
        name: 'Villa Art Déco en la Antigua Concesión Francesa',
        location: 'Shanghái · Xuhui / Jing’an',
        category: 'Heritage Boutique · 5★',
        pricePerNight: '210 € / noche',
        whyChosen: 'Calles tranquilas cubiertas de plátanos de sombra, cafés de autor y boutiques de diseño, a solo 3 paradas de metro del Bund.',
        exactRoomToAsk: 'Heritage King con terraza hacia el jardín histórico.',
        directBookingUrl: 'Enlace directo verificado',
        coordinates: '31.2185° N, 121.4510° E',
      },
    ],
    radarPins: [
      {
        id: 'pin-c1',
        category: 'cafe',
        categoryLabel: 'Café & Té en Hutong',
        name: 'Metal Hands Coffee (Hutong Wudaoying)',
        city: 'Pekín',
        coordinates: '39.9462° N, 116.4138° E',
        xPercent: 32,
        yPercent: 28,
        whySpecial: 'Arquitectura minimalista integrada bajo los tejados grises tradicionales junto al Templo de los Lamas.',
        whatToOrderOrDo: 'Su Dirty Coffee con leche fría artesanal o el latte con toque de flor de osmanto.',
      },
      {
        id: 'pin-c2',
        category: 'food',
        categoryLabel: 'Comida Local Segura',
        name: 'Siji Minfu (Vista al Foso de la Ciudad Prohibida)',
        city: 'Pekín',
        coordinates: '39.9158° N, 116.4041° E',
        xPercent: 58,
        yPercent: 38,
        whySpecial: 'El pato laqueado favorito de los locales en Pekín. Te enseño cómo sacar el turno digital por WeChat 90 minutos antes mientras terminas tu visita para no hacer ni 5 minutos de cola.',
        whatToOrderOrDo: 'Medio pato laqueado imperial + berenjenas crujientes al estilo pekinés.',
      },
      {
        id: 'pin-c3',
        category: 'viewpoint',
        categoryLabel: 'Mirador sin Autobuses',
        name: 'Puente Fuli (Siglo XV) sobre el Río Yulong',
        city: 'Yangshuo',
        coordinates: '24.8120° N, 110.4230° E',
        xPercent: 45,
        yPercent: 68,
        whySpecial: 'Un arco perfecto de piedra cubierto de hiedra que forma un círculo exacto con su reflejo en el agua esmeralda, fuera de la ruta de los grupos.',
        whatToOrderOrDo: 'Llegar en bici eléctrica a las 08:00h cuando la niebla matinal acaricia el río.',
      },
      {
        id: 'pin-c4',
        category: 'utility',
        categoryLabel: 'Acceso Tren Bala & Farmacia',
        name: 'Acceso VIP Estación Beijing South + Glosario Médico Mandarín',
        city: 'Pekín / Shanghái',
        coordinates: '39.8651° N, 116.3789° E',
        xPercent: 72,
        yPercent: 62,
        whySpecial: 'Indicación exacta de qué control de seguridad usar con pasaporte extranjero (carril manual con lector óptico) y tarjetas médicas en chino.',
        whatToOrderOrDo: 'Llegar 40 minutos antes de la salida del tren G (no hace falta más con mi guía de puertas).',
      },
    ],
    budget: {
      currency: '€',
      perPersonDirectTotal: 2740,
      traditionalAgencyTotal: 3950,
      designFeeNote: 'Ahorro medio de 1.210 € por persona frente a circuitos organizados de categoría equivalente, viajando en privado y sin paradas comerciales obligatorias.',
      items: [
        {
          category: 'Vuelos Directos Madrid/Barcelona — Pekín y Regreso desde Shanghái',
          code: 'PARTIDA 01 · AÉREO MULTIDESTINO',
          directCost: 890,
          agencyCost: 1240,
          detail: 'Billetes open-jaw (entras por Pekín y sales por Shanghái sin perder un día volviendo atrás).',
        },
        {
          category: '14 Noches en Casas Patio, Lodge Kárstico y Boutique en Shanghái',
          code: 'PARTIDA 02 · REFUGIOS',
          directCost: 1120,
          agencyCost: 1750,
          detail: 'Tarifa real directa en hoteles boutique con encanto (no torres de negocios en el quinto anillo).',
        },
        {
          category: '4 Trenes Bala de Alta Velocidad + Traslados Privados y Entradas',
          code: 'PARTIDA 03 · ALTA VELOCIDAD',
          directCost: 470,
          agencyCost: 680,
          detail: 'Incluye coche privado a la Gran Muralla, balsas en Yangshuo y todas las entradas imperiales.',
        },
        {
          category: 'Gastronomía Imperial, Dim Sum y Cafés (15 días)',
          code: 'PARTIDA 04 · MESA',
          directCost: 260,
          agencyCost: 280,
          detail: 'Comer en China en restaurantes excelentes pagando con Alipay tiene una relación calidad-precio extraordinaria.',
        },
      ],
    },
  },
};

export const TRAVELER_PROFILES = [
  {
    id: 'pareja-profesional',
    badge: 'PERFIL 01 · TIEMPO DE CALIDAD',
    title: 'La Pareja Profesional Consolidada',
    subtitle: 'Sin tiempo que perder frente a 40 pestañas abiertas',
    quote: '«Tenéis 15 días de vacaciones al año y cero ganas de pasar el domingo discutiendo frente a un Excel de horarios de trenes y reseñas contradictorias.»',
    painPoints: [
      'Sabéis viajar por libre, pero vuestro trabajo no os deja 45 horas libres para investigar visados, ferris o qué barrio es realmente tranquilo.',
      'No queréis meter vuestras vacaciones en un autobús con 40 desconocidos siguiendo un banderín.',
      'Buscáis hoteles con alma, buena gastronomía local y la tranquilidad de que cada enlace logístico encaja al milímetro.',
    ],
    idealDestinations: 'China, Vietnam, Países Nórdicos o Brujas & Flandes',
  },
  {
    id: 'luna-de-miel',
    badge: 'PERFIL 02 · VIAJE DE NOVIOS DE AUTOR',
    title: 'Lunas de Miel "Anti-Catálogo"',
    subtitle: 'Románticas, irrepetibles y 100% vuestras',
    quote: '«Queréis un viaje de novios irrepetible a Vietnam, Costa Rica o combinados de autor, huyendo de los paquetes clónicos de agencia y los hoteles impersonales.»',
    painPoints: [
      'Organizar una boda ya consume bastante energía como para jugársela con la logística de vuestro gran viaje.',
      'Queréis combinar aventura auténtica por la mañana y un refugio boutique extraordinario con piscina frente a los arrozales o la selva por la tarde.',
      'Valoráis la transparencia: que vuestro presupuesto vaya íntegro a experiencias memorables y suites con encanto, no a comisiones de intermediarios.',
    ],
    idealDestinations: 'Vietnam + Playa, Costa Rica & Bocas del Toro (Panamá), China Imperial',
  },
  {
    id: 'familia-exploradora',
    badge: 'PERFIL 03 · AVENTURA CON RED DE SEGURIDAD',
    title: 'La Familia Activa Exploradora',
    subtitle: 'El mundo real explicado a vuestro ritmo',
    quote: '«Queréis enseñar el mundo a vuestros hijos en Marruecos, Asia o los Nórdicos con toda la emoción de ir a vuestro aire, pero con cada traslado y detalle médico/logístico atado.»',
    painPoints: [
      'Viajar en familia exige calcular muy bien las horas de coche, elegir restaurantes de higiene impecable y tener siempre un Plan B si un día hay cansancio.',
      'Mis píldoras de audio convierten templos, castillos y medinas en historias apasionantes que enganchan tanto a adultos como a adolescentes.',
      'Conductores privados de total confianza y habitaciones familiares o conectadas verificadas una a una.',
    ],
    idealDestinations: 'Marruecos Privado, Costa Rica Natural, Brujas & Flandes, Vietnam',
  },
];

export const SERVICE_LADDER = [
  {
    id: 'nivel-1',
    level: 'NIVEL 01',
    tag: 'REVISIÓN ESTRATÉGICA',
    title: 'Auditoría Express de Ruta',
    subtitle: 'Tu borrador a examen con una guía profesional',
    priceReference: 'Sesión 60 min + Informe de Correcciones',
    description: 'Para quienes ya han montado su propio itinerario pero sienten la duda de si los tiempos son realistas, si se están dejando lo mejor o si algún hotel/crucero es una trampa turística.',
    deliverables: [
      'Análisis previo de tu ruta actual antes de conectarnos.',
      'Videollamada intensiva de 60 minutos uno a uno con Andrea.',
      'Detección de cuellos de botella logísticos, etapas imposibles y optimización del orden de visitas.',
      'Documento resumen con mis recomendaciones directas y correcciones clave.',
    ],
    ctaLabel: 'Solicitar Auditoría Express',
    highlighted: false,
  },
  {
    id: 'nivel-2',
    level: 'NIVEL 02 · EL SERVICIO ESTRELLA',
    tag: 'MÁS SOLICITADO · 100% A MEDIDA',
    title: 'Diseño de Ruta Artesanal (Travel Planner)',
    subtitle: 'Tu viaje diseñado desde cero + Entregable Estrella de 6 Módulos',
    priceReference: 'Presupuesto cerrado según duración (Sin sobreprecios en reservas)',
    description: 'Transformo vuestras ideas en una obra de relojería viajera. Yo diseño toda la estrategia, selecciono los mejores vuelos, refugios con alma y experiencias, y vosotros reserváis en 15 minutos con enlaces directos a precio real de proveedor.',
    deliverables: [
      'Videollamada inicial de diagnóstico y calibración de estilo.',
      'Entregable Estrella Interactivo completo (los 6 Módulos en tu móvil y en PDF editorial).',
      'Selección curada de vuelos, trenes, coches privados y alojamientos boutique con enlaces directos de reserva en 1 clic.',
      'Bóveda de Fricción Cero (Alipay, WeChat, eSIM, visados) + Plan B meteorológico diario.',
      'Mapa privado geolocalizado + Píldoras de Audio exclusivas de Andrea para escuchar en destino.',
    ],
    ctaLabel: 'Diseñar mi Ruta a Medida',
    highlighted: true,
  },
  {
    id: 'nivel-3',
    level: 'NIVEL 03',
    tag: 'DELEGACIÓN ABSOLUTA',
    title: 'Viaje Llave en Mano & Concierge VIP',
    subtitle: 'Solo tenéis que hacer la maleta; yo me ocupo de cada reserva',
    priceReference: 'Gestión Integral + Soporte en Vivo en Destino',
    description: 'Diseñado para parejas y familias sin un minuto libre que desean toda la autenticidad del diseño de autor de Andrea, delegando absolutamente la ejecución de reservas, pagos a receptivos locales y coordinación en ruta.',
    deliverables: [
      'Todo lo incluido en el Nivel 2 (Diseño Artesanal + Entregable de 6 Módulos + Audios).',
      'Gestión integral de todas las reservas de alojamientos, transporte privado, guías locales y restaurantes.',
      'Coordinación directa con mis receptivos de confianza en Marruecos, Asia, América o Europa.',
      'Línea directa de WhatsApp con Andrea durante los días del viaje para reajustes en tiempo real.',
    ],
    ctaLabel: 'Consultar Modalidad Llave en Mano',
    highlighted: false,
  },
  {
    id: 'nivel-4',
    level: 'NIVEL 04 · EDICIÓN LIMITADA',
    tag: '1 O 2 VECES AL AÑO · 8 A 12 VIAJEROS',
    title: 'Expediciones de Autor Guiadas por Andrea',
    subtitle: 'Viaja presencialmente conmigo en grupos ultra-reducidos',
    priceReference: 'Plazas por Lista de Espera Prioritaria',
    description: 'Dos veces al año cierro mi estudio para guiar personalmente en destino a un grupo íntimo de entre 8 y 12 viajeros afines. Sin prisas, durmiendo en hoteles boutique seleccionados y viviendo la historia y la naturaleza en primera persona.',
    deliverables: [
      'Próximas ediciones previstas: "Brujas y el Siglo de Oro de Flandes en Otoño" y "Lofoten: Auroras Boreales y Fiordos Árticos".',
      'Acompañamiento presencial 24/7 por Andrea como guía oficial y directora de expedición.',
      'Acceso exclusivo a talleres privados, cenas históricas y rutas fuera de catálogo.',
      'Prioridad de reserva por estricto orden en la Lista de Espera.',
    ],
    ctaLabel: 'Unirme a la Lista de Espera',
    highlighted: false,
    isWaitlist: true,
  },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: '¿Por qué pagar por el diseño de ruta si hay agencias que hacen presupuestos "gratis"?',
    answer: 'Porque en el sector turístico tradicional ningún presupuesto es gratis: su coste está camuflado dentro de un sobreprecio de entre el 20% y el 35% sobre el valor real de tus vuelos, hoteles y traslados. Además, una agencia tradicional solo te recomendará aquellos hoteles grandes con los que su mayorista tiene cupo y comisión. Al trabajar conmigo mediante honorarios de diseño claros y separados, mi lealtad es 100% hacia ti: te recomiendo el riad familiar de 6 habitaciones, el ecolodge en mitad del bosque nuboso o el junco boutique más especial, y tú lo reservas directamente a su tarifa oficial sin intermediarios. En un viaje de 15 días, mis viajeros suelen ahorrar entre 800 € y 1.200 € por persona respecto a un paquete equivalente.',
    codeNote: 'TRANSPARENCIA: 0% COMISIONES OCULTAS · AHORRO MEDIO 990€/PAX',
  },
  {
    id: 'faq-2',
    question: '¿Quién paga y reserva finalmente los vuelos, trenes y hoteles?',
    answer: 'Tú eliges el grado de autonomía que prefieres. En mi modalidad más solicitada (Nivel 2 · Diseño de Ruta a Medida), te entrego tu Bóveda de Reservas con los enlaces exactos y verificados de cada vuelo, tren y habitación recomendada: en una tarde y en 15 minutos haces clic y pagas directamente con tu tarjeta a cada proveedor, manteniendo todas las garantías y el precio real sin recargos. Si prefieres no gestionar ni una sola reserva, en la modalidad Nivel 3 (Llave en Mano) nos encargamos de dejarlo todo emitido y coordinado por ti.',
    codeNote: 'MODALIDAD FLEXIBLE · RESERVA EN 1 CLIC O LLAVE EN MANO',
  },
  {
    id: 'faq-3',
    question: '¿Qué pasa si surge un imprevisto meteorológico o un día estamos cansados en destino?',
    answer: 'Como guía turística profesional sé que los itinerarios de papel fracasan cuando aparece la lluvia o el cansancio acumulado. Por eso cada día de tu Bitácora incluye el "Plan B de Andrea": una ruta alternativa ya diseñada para ese mismo lugar en caso de lluvia tropical en Costa Rica o Vietnam, viento en los fiordos nórdicos o simplemente ganas de bajar el ritmo, con salones de té históricos, spas locales, museos íntimos y logística de transporte puerta a puerta.',
    codeNote: 'DOBLE ESCENARIO DIARIO: PLAN A (ÓPTIMO) + PLAN B (CLIMA / RELAX)',
  },
  {
    id: 'faq-4',
    question: '¿Con cuánta antelación debo contactarte para diseñar mi viaje?',
    answer: 'Para grandes viajes internacionales (China, Vietnam, Costa Rica, Panamá, Países Nórdicos o Lunas de Miel), te recomiendo escribirme entre 3 y 8 meses antes de la salida. Los alojamientos con alma que selecciono suelen tener entre 6 y 15 habitaciones en total y son los primeros en agotarse. Para escapadas por Europa (Brujas, Flandes) o Marruecos, entre 1 y 3 meses de antelación es ideal. Y si ya tienes los vuelos comprados para dentro de pocas semanas, siempre podemos hacer una Auditoría Express (Nivel 1) para blindar tu ruta.',
    codeNote: 'CUPO MENSUAL LIMITADO A 6 RUTAS ARTESANALES PARA GARANTIZAR EXCELENCIA',
  },
];
