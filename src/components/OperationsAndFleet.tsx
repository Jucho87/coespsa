import React from 'react';
import { 
  Truck, 
  Radio, 
  ShieldCheck, 
  MapPin, 
  Award, 
  Activity, 
  Maximize2,
  CheckCircle2
} from 'lucide-react';
import { INITIAL_FLEET_DATA, COMPANY_INFO } from '../data/companyData';

interface OperationsAndFleetProps {
  onOpenImage: (src: string, title: string, subtitle?: string) => void;
  onNavigateToContact: () => void;
}

export const OperationsAndFleet: React.FC<OperationsAndFleetProps> = ({
  onOpenImage,
  onNavigateToContact
}) => {
  return (
    <section id="operaciones" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Radio className="w-3.5 h-3.5 text-blue-600" />
              <span>Infraestructura & Operaciones en Vivo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
              Flota, Telemetría Satelital y Control Operativo
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              COESPSA C.I. S.A.S. mantiene un sistema administrativo y operativo de vanguardia con 
              monitoreo GPS 24/7, custodia policial de caravanas y parque automotor propio certificado.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => onOpenImage(
                '/assets/curated/operations_control_room.jpg',
                'Centro de Control Satelital y Telemetría 24/7',
                'Sala de monitoreo de rutas de COESPSA C.I. S.A.S.'
              )}
              className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-blue-700 border border-slate-200 rounded-xl text-xs font-bold transition-all shadow-2xs"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Ver Centro de Control Satelital</span>
            </button>
          </div>
        </div>

        {/* Highlight Banner: Sala de Control + Resguardo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Centro de Operaciones Activo • Bogotá D.C.
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-950 mb-3 font-heading">
              Custodia, Geocercas y Seguridad Integral en Carretera
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Cada despacho de carga pesada, tolva granelera o carrotanque cisterna cuenta con seguimiento satelital 
              punto a punto. A través de convenios permanentes con la Policía Nacional y fuerzas militares, se coordinan 
              escoltas viales para corredores de alta criticidad, garantizando la entrega segura y puntual de los cargamentos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-semibold block">Horas Sin Accidentes</span>
                <span className="text-xl font-bold text-blue-700">+1.2M HSEQ</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-semibold block">Disponibilidad Satelital</span>
                <span className="text-xl font-bold text-emerald-700">99.9% GPS</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-semibold block">Parque Automotor</span>
                <span className="text-xl font-bold text-slate-900">+180 Unidades</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div 
              className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200 shadow-md cursor-pointer group"
              role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }} onClick={() => onOpenImage(
                '/assets/curated/operations_control_room.jpg',
                'Sala de Mando y Monitoreo Satelital 24/7',
                'Pantallas de telemetría de ruta, velocidad y sensores de seguridad'
              )}
            >
              <img loading="lazy" decoding="async" width={1400} height={933}
                src="/assets/curated/operations_control_room.jpg"
                alt="Sala de Monitoreo GPS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-semibold drop-shadow">Sala de Mando GPS & Telemetría Satelital</span>
                <span className="text-cyan-300 font-mono">Ampliar ↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Inventory Showcase Cards */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-950 font-heading">
            Inventario Representativo de Flota y Maquinaria Pesada
          </h3>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
            Mantenimiento preventivo certificado en talleres propios
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {INITIAL_FLEET_DATA.map((unit) => (
            <div 
              key={unit.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {unit.code}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    unit.status === 'En Ruta' 
                      ? 'bg-blue-50 text-blue-800 border border-blue-200'
                      : unit.status === 'En Operación Minera'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : unit.status === 'En Patio / Disponible'
                      ? 'bg-sky-50 text-sky-800 border border-sky-200'
                      : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}>
                    {unit.status}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-950 mt-1">{unit.type}</h4>
                <p className="text-xs text-slate-500 mb-3">{unit.brand}</p>

                <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Corredor:</span>
                    <span className="font-semibold text-slate-800">{unit.origin} → {unit.destination}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Capacidad:</span>
                    <span className="font-semibold text-blue-700">{unit.loadCapacity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">División:</span>
                    <span className="text-slate-700 font-medium">{unit.assignedDivision}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Inspección HSEQ Vigente</span>
                </span>
                <span className="font-mono text-slate-400">{unit.id}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-slate-950 font-heading">
              ¿Requiere transporte especializado o movilización de maquinaria?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Disponemos de camabajas de 80 a 120 toneladas, tolvas graneleras y tanques cisterna certificados.
            </p>
          </div>

          <button
            onClick={onNavigateToContact}
            className="shrink-0 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
          >
            Cotizar Transporte Inmediato
          </button>
        </div>
      </div>
    </section>
  );
};
