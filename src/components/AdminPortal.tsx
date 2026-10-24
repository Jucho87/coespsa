import React from 'react';
import { 
  LayoutDashboard, 
  Truck, 
  Inbox, 
  ShieldCheck, 
  FileCheck, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  RefreshCw, 
  Search, 
  Filter, 
  ChevronRight,
  Eye,
  Check,
  Building2,
  Mail,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO, INITIAL_FLEET_DATA, DIVISIONS } from '../data/companyData';
import { ContactSubmission, FleetUnit } from '../types';

interface AdminPortalProps {
  submissions: ContactSubmission[];
  onUpdateSubmissionStatus: (id: string, newStatus: ContactSubmission['status']) => void;
  onBackToPortal: () => void;
  onOpenImage: (src: string, title: string, subtitle?: string) => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  submissions,
  onUpdateSubmissionStatus,
  onBackToPortal,
  onOpenImage
}) => {
  const [adminTab, setAdminTab] = React.useState<'fleet' | 'inbox' | 'hseq' | 'directory'>('fleet');
  const [fleetList, setFleetList] = React.useState<FleetUnit[]>(INITIAL_FLEET_DATA);
  const [fleetFilter, setFleetFilter] = React.useState<string>('todos');
  const [inboxFilter, setInboxFilter] = React.useState<string>('todos');
  const [selectedSubmission, setSelectedSubmission] = React.useState<ContactSubmission | null>(
    submissions.length > 0 ? submissions[0] : null
  );

  const filteredFleet = fleetList.filter((unit) => {
    if (fleetFilter === 'todos') return true;
    return unit.status === fleetFilter;
  });

  const filteredInquiries = submissions.filter((sub) => {
    if (inboxFilter === 'todos') return true;
    return sub.targetDivision === inboxFilter;
  });

  const handleSimulateTelemetry = () => {
    // Refresh fleet telemetry with subtle random updates for realism
    setFleetList((prev) =>
      prev.map((unit) => {
        if (unit.status === 'En Ruta') {
          const newSpeed = Math.floor(45 + Math.random() * 25);
          return {
            ...unit,
            currentLocation: unit.currentLocation.replace(/\d+ km\/h/, `${newSpeed} km/h`)
          };
        }
        return unit;
      })
    );
  };

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Console Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <LayoutDashboard className="w-3.5 h-3.5" />
                Consola Administrativa Central
              </span>
              <span className="text-xs text-slate-500 font-mono">COESPSA-ADM-v2.6</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Panel de Supervisión y Operaciones Corporativas
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Control de flota satelital, gestión de requerimientos por gerencia y auditoría HSEQ.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSimulateTelemetry}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-medium text-slate-300 transition-colors"
              title="Actualizar datos de telemetría GPS"
            >
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sincronizar GPS</span>
            </button>

            <button
              onClick={onBackToPortal}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <span>Volver a Navegación Pública</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Console Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <button
            onClick={() => setAdminTab('fleet')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
              adminTab === 'fleet'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Supervisión de Flota & GPS ({fleetList.length})</span>
          </button>

          <button
            onClick={() => setAdminTab('inbox')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
              adminTab === 'inbox'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Requerimientos Entrantes ({submissions.length})</span>
            {submissions.filter(s => s.status === 'nuevo').length > 0 && (
              <span className="px-1.5 py-0.2 bg-amber-500 text-slate-950 font-bold rounded-full text-[10px]">
                {submissions.filter(s => s.status === 'nuevo').length}
              </span>
            )}
          </button>

          <button
            onClick={() => setAdminTab('hseq')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
              adminTab === 'hseq'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Métricas HSEQ & Auditoría</span>
          </button>

          <button
            onClick={() => setAdminTab('directory')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
              adminTab === 'directory'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Directorio de Gerencias</span>
          </button>
        </div>

        {/* TAB 1: FLEET & GPS TELEMETRY */}
        {adminTab === 'fleet' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* KPI Cards Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400">Unidades En Ruta</span>
                <p className="text-2xl font-extrabold text-cyan-400 mt-1">
                  {fleetList.filter(f => f.status === 'En Ruta').length}
                </p>
                <span className="text-[10px] text-slate-500 font-mono">Monitoreo satelital activo</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400">En Operación Minera/Obra</span>
                <p className="text-2xl font-extrabold text-emerald-400 mt-1">
                  {fleetList.filter(f => f.status === 'En Operación Minera').length}
                </p>
                <span className="text-[10px] text-slate-500 font-mono">Excavación & Tiro Pesado</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400">En Patio / Disponibles</span>
                <p className="text-2xl font-extrabold text-sky-400 mt-1">
                  {fleetList.filter(f => f.status === 'En Patio / Disponible').length}
                </p>
                <span className="text-[10px] text-slate-500 font-mono">Alistamiento rápido</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400">En Mantenimiento HSEQ</span>
                <p className="text-2xl font-extrabold text-amber-400 mt-1">
                  {fleetList.filter(f => f.status === 'En Mantenimiento HSEQ').length}
                </p>
                <span className="text-[10px] text-slate-500 font-mono">Talleres Fontibón</span>
              </div>
            </div>

            {/* Filter Bar & Quick Gallery Opener */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-300 font-medium">Filtrar por Estado:</span>
                <select
                  value={fleetFilter}
                  onChange={(e) => setFleetFilter(e.target.value)}
                  className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="todos">Todos los Estados</option>
                  <option value="En Ruta">En Ruta</option>
                  <option value="En Operación Minera">En Operación Minera</option>
                  <option value="En Patio / Disponible">En Patio / Disponible</option>
                  <option value="En Mantenimiento HSEQ">En Mantenimiento HSEQ</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenImage('/assets/extracted/operations_control_room.jpg', 'Sala de Control y Monitoreo GPS 24/7', 'Operación satelital COESPSA C.I. S.A.S.')}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver Centro de Control Satelital ↗</span>
                </button>
              </div>
            </div>

            {/* Fleet Table */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/80 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                    <tr>
                      <th className="px-4 py-3">Código / Unidad</th>
                      <th className="px-4 py-3">Tipo y Modelo</th>
                      <th className="px-4 py-3">Estado</th>
                      <th className="px-4 py-3">Ruta / Destino</th>
                      <th className="px-4 py-3">Ubicación & Telemetría GPS</th>
                      <th className="px-4 py-3">Capacidad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredFleet.map((unit) => (
                      <tr key={unit.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="px-4 py-3.5 font-mono font-bold text-white">
                          <span className="text-cyan-400">{unit.code}</span>
                          <span className="block text-[10px] text-slate-500">{unit.id}</span>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className="font-semibold text-slate-200">{unit.type}</span>
                          <span className="block text-slate-400 text-[11px]">{unit.brand}</span>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            unit.status === 'En Ruta' 
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                              : unit.status === 'En Operación Minera'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : unit.status === 'En Patio / Disponible'
                              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          }`}>
                            {unit.status}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-slate-300">
                          <div className="flex items-center gap-1 font-medium">
                            <span>{unit.origin}</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-cyan-300">{unit.destination}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className="text-slate-200 block font-medium">{unit.currentLocation}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{unit.telemetryGps}</span>
                        </td>
                        <td className="px-4 py-3.5 text-slate-300 font-mono">
                          {unit.loadCapacity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INBOX & CONTACT INQUIRIES */}
        {adminTab === 'inbox' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-200">
            {/* Left list */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs font-bold text-slate-300">Filtrar por Gerencia:</span>
                <select
                  value={inboxFilter}
                  onChange={(e) => setInboxFilter(e.target.value)}
                  className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200"
                >
                  <option value="todos">Todas las Gerencias</option>
                  <option value="transporte">Técnica y Transporte</option>
                  <option value="seguridad">Seguridad y Operaciones</option>
                  <option value="proyectos">Desarrollo de Proyectos</option>
                  <option value="administrativa">Administrativa y Financiera</option>
                  <option value="gerencia">Gerencia General</option>
                </select>
              </div>

              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                {filteredInquiries.length === 0 ? (
                  <div className="p-8 text-center text-slate-500 bg-slate-900/50 rounded-xl border border-slate-800">
                    No hay solicitudes registradas con este criterio.
                  </div>
                ) : (
                  filteredInquiries.map((inquiry) => {
                    const isSelected = selectedSubmission?.id === inquiry.id;
                    return (
                      <div
                        key={inquiry.id}
                        onClick={() => setSelectedSubmission(inquiry)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-slate-900 border-cyan-500 shadow-md ring-1 ring-cyan-500/30'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-mono text-cyan-400 uppercase">
                            {inquiry.targetDivision}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            inquiry.status === 'nuevo'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : inquiry.status === 'en_revision'
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}>
                            {inquiry.status}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white mb-0.5">{inquiry.companyName}</h4>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{inquiry.message}</p>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[10px] text-slate-500">
                          <span>{inquiry.contactPerson}</span>
                          <span>{inquiry.timestamp}</span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Right detail */}
            <div className="lg:col-span-7">
              {selectedSubmission ? (
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
                  <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase">
                        Radicado #{selectedSubmission.id}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        {selectedSubmission.companyName}
                      </h3>
                      <p className="text-xs text-slate-400">
                        Atención: {selectedSubmission.contactPerson} • NIT/Cédula: {selectedSubmission.documentId || 'No especificado'}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">Estado:</span>
                      <select
                        value={selectedSubmission.status}
                        onChange={(e) => onUpdateSubmissionStatus(selectedSubmission.id, e.target.value as any)}
                        className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200 font-bold"
                      >
                        <option value="nuevo">Nuevo</option>
                        <option value="en_revision">En Revisión</option>
                        <option value="gestionado">Gestionado</option>
                      </select>
                    </div>
                  </div>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Gerencia Receptora</span>
                      <span className="font-bold text-white capitalize">{selectedSubmission.targetDivision}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Servicio Solicitado</span>
                      <span className="font-bold text-cyan-300 capitalize">{selectedSubmission.serviceCategory}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Ciudad / País</span>
                      <span className="font-bold text-white">{selectedSubmission.city}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Correo de Contacto</span>
                      <a href={`mailto:${selectedSubmission.email}`} className="font-bold text-cyan-400 hover:underline break-all">
                        {selectedSubmission.email}
                      </a>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Teléfono / Celular</span>
                      <a href={`tel:${selectedSubmission.phone}`} className="font-bold text-slate-200 hover:underline">
                        {selectedSubmission.phone}
                      </a>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Prioridad Asignada</span>
                      <span className="font-bold text-amber-400 capitalize">{selectedSubmission.priority}</span>
                    </div>
                  </div>

                  {/* Message Scope */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Detalle del Requerimiento / Alcance Técnico:
                    </h4>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                      {selectedSubmission.message}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
                    <span className="text-xs text-slate-500 font-mono">
                      Registrado: {selectedSubmission.timestamp}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={`mailto:${selectedSubmission.email}?subject=COESPSA C.I. S.A.S. - Respuesta a requerimiento Radicado ${selectedSubmission.id}`}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Responder por Correo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center text-slate-500 bg-slate-900 rounded-2xl border border-slate-800">
                  Seleccione una solicitud de la lista para ver el detalle y gestionar su estado.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: HSEQ METRICS & COMPLIANCE */}
        {adminTab === 'hseq' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400 uppercase font-mono">Seguridad y Salud (HSEQ)</span>
                <h3 className="text-3xl font-extrabold text-cyan-400 mt-2">1,248,500</h3>
                <p className="text-xs text-slate-300 mt-1">Horas hombre trabajadas sin tiempo perdido por incidentes.</p>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-emerald-400">
                  <span>Auditoría Trimestral:</span>
                  <span className="font-bold">Aprobada 100%</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400 uppercase font-mono">Logística Pesada y Graneles</span>
                <h3 className="text-3xl font-extrabold text-blue-400 mt-2">114,200 MT</h3>
                <p className="text-xs text-slate-300 mt-1">Toneladas métricas de carga transportada este trimestre.</p>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-blue-400">
                  <span>Cumplimiento en Tiempos:</span>
                  <span className="font-bold">98.4%</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400 uppercase font-mono">Sostenibilidad & Reciclaje Naval</span>
                <h3 className="text-3xl font-extrabold text-teal-400 mt-2">28,400 MT</h3>
                <p className="text-xs text-slate-300 mt-1">Acero naval recuperado y reincorporado a la cadena siderúrgica.</p>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-teal-400">
                  <span>Convenio Hong Kong:</span>
                  <span className="font-bold">Certificado Activo</span>
                </div>
              </div>
            </div>

            {/* Compliance Matrix */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-4">
                Matriz de Cumplimiento Regulatorio e Institucional
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-cyan-400">Aduanas y Comercio</span>
                  <h4 className="text-sm font-bold text-white mt-1">Registro C.I. DIAN</h4>
                  <p className="text-xs text-slate-400 mt-1">Habilitación como Comercializadora Internacional al día.</p>
                  <span className="mt-3 inline-block text-[10px] text-emerald-400 font-bold">Estado: Vigente</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-cyan-400">Transporte Terrestre</span>
                  <h4 className="text-sm font-bold text-white mt-1">SuperTransporte</h4>
                  <p className="text-xs text-slate-400 mt-1">RUNT, Pólizas de Carga a Todo Riesgo y PESV homologado.</p>
                  <span className="mt-3 inline-block text-[10px] text-emerald-400 font-bold">Estado: Cumplimiento 100%</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-cyan-400">Custodia en Ruta</span>
                  <h4 className="text-sm font-bold text-white mt-1">Convenios de Seguridad</h4>
                  <p className="text-xs text-slate-400 mt-1">Enlace activo con Policía de Carreteras y batallones viales.</p>
                  <span className="mt-3 inline-block text-[10px] text-emerald-400 font-bold">Estado: Cobertura Nacional</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-cyan-400">Desguace Naval</span>
                  <h4 className="text-sm font-bold text-white mt-1">DIMAR / Convenios</h4>
                  <p className="text-xs text-slate-400 mt-1">Permisos de varada y protocolos de extracción de sentinas.</p>
                  <span className="mt-3 inline-block text-[10px] text-emerald-400 font-bold">Estado: Protocolo Ambiental OK</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DIRECTORY BY DIVISION */}
        {adminTab === 'directory' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {DIVISIONS.map((division) => (
              <div key={division.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase font-bold">
                    {division.shortName}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">PBX: (571) 540 2267</span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {division.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {division.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                  {division.departments.map((dept, i) => (
                    <div key={i} className="flex items-center justify-between text-slate-300">
                      <span className="font-medium text-slate-200">• {dept.name}</span>
                      <span className="text-slate-500 font-mono text-[11px]">Ext. 10{i + 1}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Canal Digital:</span>
                  <span className="text-cyan-400 font-mono">servicioalclientecoespsa@gmail.com</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
