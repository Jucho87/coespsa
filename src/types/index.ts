export interface ContactSubmission {
  id: string;
  timestamp: string;
  companyName: string;
  contactPerson: string;
  documentId: string;
  email: string;
  phone: string;
  city: string;
  targetDivision: 'transporte' | 'seguridad' | 'proyectos' | 'administrativa' | 'gerencia';
  serviceCategory: 'civil' | 'transporte_pesado' | 'naval_desguace' | 'estudios_bim' | 'licitaciones' | 'otro';
  message: string;
  status: 'nuevo' | 'en_revision' | 'gestionado';
  priority: 'baja' | 'media' | 'alta' | 'urgente';
}

export interface FleetUnit {
  id: string;
  code: string;
  type: 'Tractocamión Cisterna' | 'Tolva Granelera' | 'Camabaja Cuello de Cisne' | 'Retroexcavadora Oruga' | 'Dumper Minero' | 'Grúa Telescópica';
  brand: string;
  status: 'En Ruta' | 'En Patio / Disponible' | 'En Mantenimiento HSEQ' | 'En Operación Minera';
  origin: string;
  destination: string;
  currentLocation: string;
  telemetryGps: string;
  loadCapacity: string;
  assignedDivision: string;
}

export interface StrategicPartner {
  id: string;
  name: string;
  location: string;
  scope: string;
  badge: string;
  description: string;
}

export interface OrganigramNode {
  id: string;
  title: string;
  subtitle?: string;
  department: string;
  level: 1 | 2 | 3 | 4;
  description: string;
  functions: string[];
  parentId?: string;
}
