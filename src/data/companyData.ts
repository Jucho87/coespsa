import { FleetUnit, StrategicPartner, OrganigramNode } from '../types';

export const COMPANY_INFO = {
  acronym: 'COESPSA C.I. S.A.S.',
  fullName: 'Company Structural Engineering Civil, Mechanical and Naval C.I. S.A.S.',
  legalType: 'Sociedad Comercial por Acciones Simplificada - Comercializadora Internacional',
  headquarters: 'Bogotá D.C., Colombia',
  address: 'Centro Empresarial Metropolitano, Bogotá D.C., Colombia',
  pbx1: '(571) 540 2267',
  pbx2: '(571) 540 7200',
  pbxFormatted: '+57 (1) 540 2267 / 540 7200',
  emailCustomerService: 'asistente@grupocoespsa.com',
  emailManagement: 'iltpdirector@grupocoespsa.com',
  motto: 'Excelencia estructural, logística integral y sostenibilidad panamericana',
  stats: [
    { label: 'Años de Experiencia y Solidez', value: '+25' },
    { label: 'Toneladas Movilizadas Anuales', value: '450K+' },
    { label: 'Unidades de Flota y Maquinaria', value: '180+' },
    { label: 'Horas Hombre Sin Accidentes (HSEQ)', value: '1.2M+' },
    { label: 'Disponibilidad Operativa Satelital', value: '99.9%' },
  ]
};

export const DIVISIONS = [
  {
    id: 'transporte',
    name: 'Gerencia Técnica y Transporte',
    shortName: 'Técnica & Transporte',
    leadTitle: 'Dirección de Flota, Mantenimiento y Logística de Carga Pesada',
    image: '/assets/aistudio/imagen_3404f9cd.png',
    description: 'Gestión integral del parque automotor pesado, unidades cisterna para líquidos e hidrocarburos, tolvas graneleras, camabajas para maquinaria y mantenimiento mecánico predictivo continuo.',
    departments: [
      {
        name: 'Departamento de Transporte',
        role: 'Programación de despachos y asignación de tractomulas, tolvas y camabajas.',
        focus: 'Gestión logística intermodal en corredores nacionales e internacionales.'
      },
      {
        name: 'Departamento Técnico',
        role: 'Ingeniería mecánica aplicada, peritaje técnico de estructuras vehiculares.',
        focus: 'Mantenimiento preventivo, predictivo y correctivo con banco de pruebas.'
      },
      {
        name: 'Dirección de Tráfico y Control',
        role: 'Monitoreo de tiempos de recorrido, puntos de control en ruta y pesaje.',
        focus: 'Cumplimiento de normatividad vial del Ministerio de Transporte.'
      },
      {
        name: 'Patios y Talleres Especializados',
        role: 'Infraestructura propia con fosas de engrase, tornos y bancos de soldadura.',
        focus: 'Alistamiento 24/7 y diagnóstico computarizado de tren motriz.'
      }
    ],
    features: [
      'Flota propia de tractocamiones con cisterna para transporte de hidrocarburos y químicos',
      'Camabajas de cuello de cisne y modulares hidráulicos para maquinaria de gran peso',
      'Tolvas graneleras herméticas de alta capacidad volumétrica',
      'Plan de mantenimiento con hoja de vida digital para cada vehículo'
    ]
  },
  {
    id: 'seguridad',
    name: 'Gerencia de Seguridad y Operaciones',
    shortName: 'Seguridad & Operaciones',
    leadTitle: 'Seguridad Integral, Resguardo en Ruta y Monitoreo Satelital 24/7',
    image: '/assets/curated/operations_control_room.jpg',
    description: 'Custodia integral de la carga, acompañamiento coordinado con autoridades policiales y militares, protocolos de gestión del riesgo y centro de control con geocercas satelitales en tiempo real.',
    departments: [
      {
        name: 'Dirección de Seguridad',
        role: 'Coordinación con la Policía Nacional, Ejército y redes de apoyo vial.',
        focus: 'Planes de seguridad física para caravanas en corredores de alta criticidad.'
      },
      {
        name: 'Dirección de Operaciones',
        role: 'Ejecución táctica de planes de viaje, pernocte seguro y paradas autorizadas.',
        focus: 'Planes de contingencia ante bloqueos viales, clima o imprevistos técnicos.'
      },
      {
        name: 'Centro de Monitoreo GPS y Telemetría',
        role: 'Control satelital permanente con sensores de puerta, combustible y velocidad.',
        focus: 'Activación de botón de pánico, apagado remoto de motor y geocercas dinámicas.'
      }
    ],
    features: [
      'Sala de mando 24/7 con pantallas multipantalla de telemetría de ruta',
      'Convenios de cooperación y enlace permanente con cuerpos de seguridad del Estado',
      'Inspección previa antinarcóticos y verificación de precintos satelitales',
      'Pólizas de seguro de carga integral a todo riesgo con cobertura ampliada'
    ]
  },
  {
    id: 'proyectos',
    name: 'Gerencia de Desarrollo de Proyectos e Investigación',
    shortName: 'Proyectos & I+D',
    leadTitle: 'Estudios de Ingeniería, Innovación Tecnológica y Gestión Ambiental HSEQ',
    image: '/assets/aistudio/imagen_8b182caa.png',
    description: 'Desarrollo de proyectos estructurales complejos, cálculo de puentes, hangares, movimiento masivo de tierras y planes de manejo ambiental para obras civiles y desmantelamiento industrial.',
    departments: [
      {
        name: 'Estudio, Diseño e Innovación',
        role: 'Cálculo estructural con software de elementos finitos y modelado BIM.',
        focus: 'Diseño de hangares metálicos, puentes vehiculares y cimentaciones profundas.'
      },
      {
        name: 'Dirección de Medio Ambiente',
        role: 'Licenciamiento ambiental, manejo de sustancias y remediación ecológica.',
        focus: 'Planes HSEQ para reciclaje naval de acero y tratamiento de aguas de sentina.'
      },
      {
        name: 'Desarrollo y Sistemas',
        role: 'Automatización de procesos administrativos, telemetría y software interno.',
        focus: 'Plataforma administrativa digital de trazabilidad operativa.'
      }
    ],
    features: [
      'Estudios de mecánica de suelos, batimetría y topografía de precisión',
      'Planes de gestión ambiental aprobados por autoridades del sector',
      'I+D aplicado a técnicas de corte en frío y oxicorte seguro en desguace naval',
      'Supervisión técnica de obras conforme al Código de Construcciones Sismo Resistentes'
    ]
  },
  {
    id: 'administrativa',
    name: 'Gerencia Administrativa y Financiera',
    shortName: 'Administración & Finanzas',
    leadTitle: 'Gobernanza Corporativa, Jurídica, Talento Humano y Comercio Exterior C.I.',
    image: '/assets/curated/operations_telemetry.jpg',
    description: 'Soporte estratégico a toda la operación empresarial: administración de contratos, licitaciones públicas, comercio exterior como Comercializadora Internacional (C.I.), nómina y control financiero.',
    departments: [
      {
        name: 'Dirección Financiera',
        role: 'Planeación presupuestal, tesorería corporativa y líneas de crédito.',
        focus: 'Gestión cambiaria para alianzas internacionales en EE.UU., Panamá y Europa.'
      },
      {
        name: 'Dirección de Recursos Humanos',
        role: 'Capacitación HSEQ continua, selección de operadores certificados.',
        focus: 'Bienestar del personal operativo, descansos reglamentarios y salud ocupacional.'
      },
      {
        name: 'Dirección Jurídica',
        role: 'Asesoría en contratos de transporte, licitaciones de obra civil y normatividad marítima.',
        focus: 'Blindaje contractual y cumplimiento ante Superintendencia de Puertos y Transporte.'
      }
    ],
    features: [
      'Registro oficial como Comercializadora Internacional (C.I.) ante la DIAN',
      'Cumplimiento estricto de estándares SAGRILAFT y ética corporativa',
      'Estructura financiera sólida con capacidad de apalancamiento para megaproyectos',
      'Auditorías contables y tributarias periódicas con Revisoría Fiscal independiente'
    ]
  }
];

export const ENGINEERING_LINES = [
  {
    id: 'civil',
    title: 'Ingeniería Civil e Infraestructura',
    subtitle: 'Megaproyectos de Transporte, Hangares y Movimiento de Tierras',
    heroImage: '/assets/aistudio/imagen_8b182caa.png',
    secondaryImages: [
      '/assets/aistudio/imagen_8b182caa.png',
      '/assets/curated/civil_hangar.jpg',
      '/assets/curated/civil_excavator.jpg'
    ],
    summary: 'Construcción de viaductos, puentes vehiculares de acero y concreto, naves industriales tipo hangar, bodegas logísticas y explanaciones masivas con maquinaria pesada de última generación.',
    capabilities: [
      'Puentes atirantados y vigas postensadas de gran luz para pasos cordilleranos',
      'Hangares aeroportuarios e industriales con estructuras metálicas de alta resistencia',
      'Movimiento masivo de tierras, conformación de terraplenes y obras de contención',
      'Topografía satelital RTK y control volumétrico con drones y software CAD/GIS'
    ],
    machineryUsed: ['Retroexcavadoras CAT 349D', 'Motoniveladoras CAT 140M', 'Dumpers articulados Volvo', 'Rodillos compactadores vibratorios Dynapac']
  },
  {
    id: 'mecanica',
    title: 'Ingeniería Mecánica & Transporte Pesado',
    subtitle: 'Flota Especializada, Cisternas, Graneles y Maquinaria Pesada',
    heroImage: '/assets/aistudio/imagen_3404f9cd.png',
    secondaryImages: [
      '/assets/aistudio/imagen_3404f9cd.png',
      '/assets/curated/transport_fleet.jpg',
      '/assets/curated/transport_tanker.jpg'
    ],
    summary: 'Soluciones intermodales para el transporte terrestre de carga extra-dimensionada y extrapesada, hidrocarburos, químicos certificados, minerales a granel y traslados de frentes de minería.',
    capabilities: [
      'Cisternas de acero inoxidable y al carbón con recubrimiento para hidrocarburos y ácidos',
      'Tolvas volteo de gran cubicaje para graneles secos, clínker, carbón y agregados',
      'Camabajas de cuello de cisne desmontable y modulares hidráulicos hasta 120 toneladas',
      'Taller central con banco de pruebas hidrostáticas para tanques cisterna'
    ],
    machineryUsed: ['Tractocamiones Kenworth T800 / T680', 'Camabajas Rogers & Trail King', 'Tanques cisterna Romarco certificadas', 'Tornos y fresadoras de precisión']
  },
  {
    id: 'naval',
    title: 'Ingeniería Naval & Desguace Sostenible',
    subtitle: 'Desmantelamiento de Embarcaciones, Reciclaje de Acero y Reparaciones',
    heroImage: '/assets/aistudio/imagen_5e9efe17.png',
    secondaryImages: [
      '/assets/aistudio/imagen_5e9efe17.png',
      '/assets/curated/naval_cutting.jpg',
      '/assets/curated/naval_shipyard.jpg'
    ],
    summary: 'Pioneros en Colombia en la técnica de reciclaje ecológico y desguace controlado de embarcaciones mayores (remolcadores, barcazas, buques de carga), cumpliendo los lineamientos del Convenio de Hong Kong para el reciclaje seguro y ambientalmente racional de buques.',
    capabilities: [
      'Desmantelamiento estructural con oxicorte técnico, corte con plasma y cizallas hidráulicas',
      'Recuperación, clasificación y valorización de aceros navales de alta graduación',
      'Gestión integral de residuos peligrosos (extracción segura de hidrocarburos, sentinas y asbesto)',
      'Peritajes de integridad de casco, reparaciones navales a flote y varadas programadas'
    ],
    machineryUsed: ['Grúas celosía sobre orugas de alto tonelaje', 'Equipos de oxicorte de alta pureza', 'Plantas de aspiración y decantación de sentinas', 'Laboratorio móvil de pruebas no destructivas']
  }
];

export const STRATEGIC_PARTNERS: StrategicPartner[] = [
  {
    id: 'p1',
    name: 'Transportes GY',
    location: 'Colombia - Cobertura Nacional',
    scope: 'Logística Terrestre y Alianza de Transporte Masivo',
    badge: 'Aliado Operativo Clave',
    description: 'Sinergia operativa en corredores de carga pesada nacional, compartiendo flota vehicular y centros de acopio estratégicos en puertos y centros de consumo.'
  },
  {
    id: 'p2',
    name: 'EPSA Internacional S.A.',
    location: 'Bogotá / Cali / Puertos',
    scope: 'Infraestructura y Megaproyectos de Energía',
    badge: 'Alianza Infraestructura',
    description: 'Colaboración en proyectos de tendido de redes de energía, plataformas de subestaciones y obras civiles complementarias de gran escala.'
  },
  {
    id: 'p3',
    name: 'Nirk Magnate Holding Corp.',
    location: 'Miami, Florida - USA',
    scope: 'Inversión de Capital y Comercio Exterior',
    badge: 'Socio Internacional EE.UU.',
    description: 'Apalancamiento financiero internacional, adquisición de maquinaria pesada en subastas norteamericanas y estructuración de negocios bilaterales C.I.'
  },
  {
    id: 'p4',
    name: 'Gares Investment Holding Corp.',
    location: 'Panamá - Miami',
    scope: 'Inversiones Portuarias y Negocios Marítimos',
    badge: 'Alianza Marítima & Holding',
    description: 'Enlace estratégico para contratos de desguace y corretaje naval en aguas del Caribe, canal de Panamá y puertos de la cuenca atlántica.'
  },
  {
    id: 'p5',
    name: 'Pegusa Inc.',
    location: 'New York, USA',
    scope: 'Desarrollo de Tecnología & Comercio Internacional',
    badge: 'Holding Corporativo',
    description: 'Socio en investigación de nuevos materiales estructurales, aleaciones metálicas y consultoría técnica de ingeniería avanzada.'
  },
  {
    id: 'p6',
    name: 'Murcia y Murcia Construcciones',
    location: 'Colombia',
    scope: 'Obras Civiles y Urbanismo',
    badge: 'Consorcio Civil',
    description: 'Ejecución coordinada en licitaciones de viaductos, pavimentaciones masivas y estructuras de concreto reforzado en la región andina.'
  },
  {
    id: 'p7',
    name: 'SIGSA Southwestern International Group S.A.',
    location: 'Panamá - Colombia',
    scope: 'Comercialización Internacional y Materias Primas',
    badge: 'Comercio Exterior C.I.',
    description: 'Canalización de exportaciones de chatarra naval reciclada, acero procesado y minerales a mercados siderúrgicos internacionales.'
  },
  {
    id: 'p8',
    name: 'Tradeco Group',
    location: 'América Latina',
    scope: 'Ingeniería de Puentes y Megaconstrucciones',
    badge: 'Consorcio Internacional',
    description: 'Experiencia técnica acumulada en grandes obras de infraestructura de transporte, túneles viales y cimentaciones complejas.'
  }
];

export const INITIAL_FLEET_DATA: FleetUnit[] = [
  {
    id: 'FL-801',
    code: 'CP-T800-01',
    type: 'Tractocamión Cisterna',
    brand: 'Kenworth T800',
    status: 'En Ruta',
    origin: 'Barrancabermeja',
    destination: 'Bogotá CEM',
    currentLocation: 'Ruta del Sol - Km 182 (Vel: 64 km/h)',
    telemetryGps: 'Señal Óptima / Temp Motor 88°C / Geocerca OK',
    loadCapacity: '10,500 Galones (Derivados)',
    assignedDivision: 'Gerencia Técnica y Transporte'
  },
  {
    id: 'FL-802',
    code: 'CP-T800-02',
    type: 'Tractocamión Cisterna',
    brand: 'International ProStar',
    status: 'En Ruta',
    origin: 'Cartagena (Mamonal)',
    destination: 'Medellín',
    currentLocation: 'Caucasia - Antioquia (Vel: 52 km/h)',
    telemetryGps: 'Señal Óptima / Escolta Policial Asignada',
    loadCapacity: '9,800 Galones (Químicos Industriales)',
    assignedDivision: 'Gerencia Técnica y Transporte'
  },
  {
    id: 'FL-803',
    code: 'CP-CB-05',
    type: 'Camabaja Cuello de Cisne',
    brand: 'Kenworth W900 + Trailer Trail King',
    status: 'En Operación Minera',
    origin: 'Bogotá Patios',
    destination: 'Mina Cerrejón / La Guajira',
    currentLocation: 'Frente de Cantera Norte',
    telemetryGps: 'Estacionario con Sensor de Peso Activo',
    loadCapacity: '85 Toneladas (CAT 349D a bordo)',
    assignedDivision: 'Gerencia Técnica y Transporte'
  },
  {
    id: 'FL-804',
    code: 'CP-TOL-12',
    type: 'Tolva Granelera',
    brand: 'Freightliner Coronado',
    status: 'En Patio / Disponible',
    origin: 'Bogotá Patios Sur',
    destination: 'Pendiente Asignación',
    currentLocation: 'Patio Principal Fontibón',
    telemetryGps: 'Alistamiento HSEQ Completo / Tanque Lleno',
    loadCapacity: '35 Metros Cúbicos (Granel Seco)',
    assignedDivision: 'Gerencia Técnica y Transporte'
  },
  {
    id: 'FL-805',
    code: 'CP-CAT-349',
    type: 'Retroexcavadora Oruga',
    brand: 'Caterpillar 349D2 L',
    status: 'En Operación Minera',
    origin: 'Obra Viaducto Cordillera',
    destination: 'Frente de Talud Km 14',
    currentLocation: 'Sector Puente La Esperanza',
    telemetryGps: 'Horómetro: 4,120 hrs / Presión Hidráulica Normal',
    loadCapacity: 'Balde 3.2 m³ / Alcance 12.1m',
    assignedDivision: 'Gerencia Proyectos e Infraestructura'
  },
  {
    id: 'FL-806',
    code: 'CP-VOL-A40',
    type: 'Dumper Minero',
    brand: 'Volvo A40G Articulado',
    status: 'En Mantenimiento HSEQ',
    origin: 'Taller Central Fontibón',
    destination: 'Banco de Calibración',
    currentLocation: 'Fosa 03 Taller Mecánico',
    telemetryGps: 'Cambio de Filtros y Revisión Transmisión',
    loadCapacity: '39 Toneladas Métricas',
    assignedDivision: 'Departamento Técnico'
  }
];

export const ORGANIGRAM_NODES: OrganigramNode[] = [
  {
    id: 'aga',
    title: 'Asamblea General de Accionistas',
    subtitle: 'Máximo Órgano de Dirección Corporativa',
    department: 'Gobernanza',
    level: 1,
    description: 'Máxima autoridad societaria encargada de definir el direccionamiento estratégico, aprobar estados financieros y designar la Junta Directiva.',
    functions: ['Aprobación de balances anuales', 'Estrategia de expansión y fusiones', 'Nombramiento de revisoría fiscal']
  },
  {
    id: 'jd',
    title: 'Junta Directiva',
    subtitle: 'Estrategia, Inversiones y Gobierno Corporativo',
    department: 'Gobernanza',
    level: 2,
    parentId: 'aga',
    description: 'Órgano colegiado que supervisa la ejecución presupuestal, alianzas internacionales con holdings y políticas de expansión.',
    functions: ['Evaluación de proyectos de alta envergadura', 'Aprobación de inversiones en maquinaria', 'Control de gestión corporativa']
  },
  {
    id: 'gg',
    title: 'Gerencia General',
    subtitle: 'Representación Legal y Dirección Ejecutiva',
    department: 'Dirección Ejecutiva',
    level: 2,
    parentId: 'jd',
    description: 'Responsable de la dirección operativa, administrativa y comercial de COESPSA C.I. S.A.S. a nivel nacional e internacional.',
    functions: ['Representación legal y firma de convenios', 'Articulación de las 4 gerencias principales', 'Relaciones institucionales de alto nivel']
  },
  {
    id: 'rf',
    title: 'Revisoría Fiscal & Asesoría Jurídica Externa',
    subtitle: 'Auditoría Independiente y Control Estatutario',
    department: 'Control & Cumplimiento',
    level: 3,
    parentId: 'gg',
    description: 'Vigila el estricto cumplimiento legal, tributario, aduanero y societario conforme a las leyes colombianas e internacionales.',
    functions: ['Auditoría tributaria y estados financieros', 'Supervisión de operaciones de comercio exterior (C.I.)', 'Blindaje legal de licitaciones']
  },
  {
    id: 'gt',
    title: 'Gerencia Técnica y Transporte',
    subtitle: 'Dirección de Flota, Talleres y Logística',
    department: 'Operaciones de Transporte',
    level: 3,
    parentId: 'gg',
    description: 'Supervisa el parque automotor pesado, tolvas, cisternas, camabajas y talleres de mantenimiento preventivo y correctivo.',
    functions: ['Programación de flota y despachos', 'Mantenimiento mecánico y peritaje', 'Control de pesaje y cumplimiento vial']
  },
  {
    id: 'gso',
    title: 'Gerencia de Seguridad y Operaciones',
    subtitle: 'Custodia, Operaciones de Ruta y Telemetría GPS 24/7',
    department: 'Seguridad Integral',
    level: 3,
    parentId: 'gg',
    description: 'Asegura la custodia de las cargas, enlace con fuerzas armadas, escoltas viales y monitoreo satelital en tiempo real.',
    functions: ['Coordinación con Policía de Carreteras y Ejército', 'Monitoreo de telemetría y geocercas satelitales', 'Gestión de riesgos en carretera y planes de emergencia']
  },
  {
    id: 'gpi',
    title: 'Gerencia de Desarrollo de Proyectos e Inv.',
    subtitle: 'Estudio, Diseño Estructural, BIM y Medio Ambiente',
    department: 'Ingeniería & Proyectos',
    level: 3,
    parentId: 'gg',
    description: 'Lidera los cálculos estructurales para puentes y hangares, planes de manejo ambiental y la línea de desguace y reciclaje naval.',
    functions: ['Diseño estructural de puentes y hangares', 'Planes de contingencia y sostenibilidad HSEQ', 'Ingeniería aplicada al desguace naval de buques']
  },
  {
    id: 'gaf',
    title: 'Gerencia Administrativa y Financiera',
    subtitle: 'Tesorería, Talento Humano y Asesoría Jurídica',
    department: 'Administración Central',
    level: 3,
    parentId: 'gg',
    description: 'Gestiona los recursos de capital, facturación de comercio exterior, nómina de personal y asesoría contractual de licitaciones.',
    functions: ['Tesorería corporativa y comercio exterior C.I.', 'Selección y capacitación de operadores pesados', 'Gestión documental y contractual']
  }
];
