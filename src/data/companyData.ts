import { FleetUnit, StrategicPartner, OrganigramNode } from '../types';

export const COMPANY_INFO = {
  acronym: 'COESPSA C.I. S.A.S.',
  fullName: 'COMPANY STRUCTURAL ENGINEERING CIVIL, MECHANICAL AND NAVAL C.I. S.A.S',
  legalType: 'Sociedad Comercial por Acciones Simplificada - Comercializadora Internacional',
  headquarters: 'Bogotá D.C., Colombia',
  address: 'Centro Empresarial Metropolitano, Bogotá D.C., Colombia',
  pbx1: '(571) 5402267',
  pbx2: '(571) 5407200',
  pbxFormatted: '(571) 5402267 – (571) 5407200',
  emailCustomerService: 'servicioalclientecoespsa@gmail.com',
  emailManagement: 'coespsagerencia-1963@hotmail.com',
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
    description: 'Se encarga de la Gerencia, Administración, Comercialización, Planeación y Desarrollo de los procesos inherentes a la movilización de transporte pesado.',
    departments: [
      {
        name: 'Departamento de Transporte',
        role: 'Se encarga de la Gerencia, Administración, Comercialización, Planeación y Desarrollo de los procesos inherentes a la movilización de transporte pesado.',
        focus: 'Movilización de transporte pesado.'
      },
      {
        name: 'Departamento Técnico',
        role: 'Encargada de la planeación y la logística de los diferentes proyectos.',
        focus: 'Profesionales en las áreas de Ingeniería: Civil, Mecánica y Naval además de técnicos administrativos.'
      },
      {
        name: 'Dirección de Tráfico y Control',
        role: 'Ejerce la coordinación, elaboración y logística de las diferentes rutas.',
        focus: 'Administrando el recurso técnico y humano.'
      },
      {
        name: 'Coordinación Patios y Talleres',
        role: 'Supervisa y controla los servicios de mantenimiento preventivo y correctivo que se realizan a los vehículos, verificando que se registren en el logbook de cada automotor.',
        focus: 'Asistencia técnica remota y presencial según el tipo de falla que se presente.'
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
    description: 'Evalúa las situaciones de riesgo y planifica las actuaciones destinadas a minimizar dichos peligros, con un equipo de profesionales y técnicos con gran experiencia en monitoreo y seguimiento de vehículos y sistemas de posicionamiento global.',
    departments: [
      {
        name: 'Dirección de Seguridad',
        role: 'Evalúa las situaciones de riesgo y planifica las actuaciones destinadas a minimizar dichos peligros; supervisa y propone las medidas y los sistemas de seguridad más adecuados.',
        focus: 'Coordina la colaboración de los servicios de seguridad a su cargo con las Fuerzas y Cuerpos de Seguridad.'
      },
      {
        name: 'Dirección de Operaciones',
        role: 'Se encarga del desarrollo, ejecución y mantenimiento de los proyectos.',
        focus: 'Equipo conformado por profesionales y técnicos con gran experiencia en monitoreo y seguimiento de vehículos y sistemas de posicionamiento global.'
      },
      {
        name: 'Monitoreo GPS',
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
    description: 'Es responsable en general de los proyectos desde las diferentes etapas como lo son: estudio, diseño, innovación y desarrollo y ejecución de los mismos. Por la complejidad del área cuenta con el apoyo logístico y técnico para el desarrollo de cada una de las etapas de los diferentes proyectos.',
    departments: [
      {
        name: 'Proyectos e Investigación',
        role: 'Cálculo estructural con software de elementos finitos y modelado BIM.',
        focus: 'Diseño de hangares metálicos, puentes vehiculares y cimentaciones profundas.'
      },
      {
        name: 'Dirección de Medio Ambiente',
        role: 'Licenciamiento ambiental, manejo de sustancias y remediación ecológica.',
        focus: 'Planes HSEQ para reciclaje naval de acero y tratamiento de aguas de sentina.'
      },
      {
        name: 'Coordinación Desarrollo y Sistemas',
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
        role: 'Es responsable de la planificación, ejecución e información financiera, manteniendo y mejorando la calidad de los procedimientos y protocolos en la empresa.',
        focus: 'Estrategias para asegurar un eficiente aprovechamiento de los recursos económicos, analizando los resultados operacionales y de gestión.'
      },
      {
        name: 'Dirección Recursos Humanos',
        role: 'Alinear las estrategias de la organización con la búsqueda del bienestar de todos y cada uno de los empleados.',
        focus: 'Brindar la mejor calidad de vida para ellos y sus familias.'
      },
      {
        name: 'Dirección Jurídica',
        role: 'Proporciona asesoría técnica-jurídica a las diferentes áreas de la compañía, promoviendo los principios de igualdad y respeto entre los empleados.',
        focus: 'Reglamentación acorde a los estatutos laborales de nuestro país, para que COESPSA sea un ejemplo para las empresas del sector.'
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
      '/assets/aistudio/imagen_8b182caa.png'
    ],
    summary: 'Para COESPSA la planificación del ambiente urbano y rural está basado en el desarrollo y bienestar del ser humano, no olvidando el impacto de este en el medio ambiente.',
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
      '/assets/aistudio/imagen_5e9efe17.png'
    ],
    summary: 'COESPSA ha sido pionera en el proceso de desarmar la estructura obsoleta de una embarcación y comercializarla en otras economías, a pesar de ser un proceso difícil debido a la complejidad estructural de los navíos y los muchos temas que tratan del impacto ambiental. COESPSA ha logrado ser un ejemplo en gestión ambiental a nivel mundial, conservando altos estándares de productividad.',
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
    id: 'gg',
    title: 'Gerente General',
    subtitle: 'Dirección Ejecutiva',
    department: 'Dirección Ejecutiva',
    level: 1,
    description: 'COESPSA C.I. S.A.S. está definida por una estructura formal, de carácter piramidal, que permite comunicación tanto ascendente como descendente para lograr mejores resultados.',
    functions: ['Gerencia Desarrollo Proyectos e Investigación', 'Gerencia Técnica y Transporte', 'Gerencia Seguridad y Operaciones', 'Gerencia Administrativa y Financiera']
  },
  {
    id: 'gpi',
    title: 'Gerencia Desarrollo Proyectos e Investigación',
    subtitle: 'Proyectos e Investigación',
    department: 'Ingeniería & Proyectos',
    level: 2,
    parentId: 'gg',
    description: 'Es responsable en general de los proyectos desde las diferentes etapas como lo son: estudio, diseño, innovación y desarrollo y ejecución de los mismos.',
    functions: ['Proyectos e Investigación', 'Dirección de Medio Ambiente', 'Coordinación Desarrollo y Sistemas']
  },
  {
    id: 'gt',
    title: 'Gerencia Técnica y Transporte',
    subtitle: 'Tráfico, Carga, Patios y Talleres',
    department: 'Técnica & Transporte',
    level: 2,
    parentId: 'gg',
    description: 'Encargada de la planeación y la logística de los diferentes proyectos y de los procesos inherentes a la movilización de transporte pesado.',
    functions: ['Dirección Tráfico y Carga', 'Coordinación Patios y Talleres']
  },
  {
    id: 'gso',
    title: 'Gerencia Seguridad y Operaciones',
    subtitle: 'Seguridad, Operaciones y Monitoreo GPS',
    department: 'Seguridad & Operaciones',
    level: 2,
    parentId: 'gg',
    description: 'Evalúa las situaciones de riesgo, planifica las actuaciones para minimizarlas y se encarga del desarrollo, ejecución y mantenimiento de los proyectos.',
    functions: ['Dirección de Seguridad', 'Dirección de Operaciones', 'Monitoreo GPS']
  },
  {
    id: 'gaf',
    title: 'Gerencia Administrativa y Financiera',
    subtitle: 'Financiera, Recursos Humanos y Jurídica',
    department: 'Administración & Finanzas',
    level: 2,
    parentId: 'gg',
    description: 'Planificación, ejecución e información financiera, bienestar de los empleados y asesoría técnica-jurídica a las diferentes áreas de la compañía.',
    functions: ['Dirección Financiera', 'Dirección Recursos Humanos', 'Dirección Jurídica']
  }
];
