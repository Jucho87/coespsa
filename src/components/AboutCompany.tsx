import React from 'react';
import { 
  Target, 
  Compass, 
  ShieldCheck, 
  Award, 
  FileCheck, 
  CheckCircle2, 
  Building2,
  HardHat,
  Leaf
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutCompanyProps {
  onOpenImage: (src: string, title: string, subtitle?: string) => void;
}

export const AboutCompany: React.FC<AboutCompanyProps> = ({ onOpenImage }) => {
  const [activeTab, setActiveTab] = React.useState<'mision_vision' | 'hseq' | 'legal'>('mision_vision');

  return (
    <section id="empresa" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Identidad & Solidez Corporativa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
              Nuestra Organización
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              COESPSA C.I. S.A.S. integra ingeniería civil estructural, transporte intermodal de carga pesada y 
              tecnologías pioneras de desguace y reciclaje naval con proyección internacional.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 p-1.5 bg-slate-100 border border-slate-200 rounded-xl">
            <button
              onClick={() => setActiveTab('mision_vision')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'mision_vision'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Misión & Visión
            </button>
            <button
              onClick={() => setActiveTab('hseq')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'hseq'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Política HSEQ
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'legal'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Marco Legal & C.I.
            </button>
          </div>
        </div>

        {/* Tab 1: Misión & Visión */}
        {activeTab === 'mision_vision' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            {/* Mission Card */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-slate-200 shadow-md relative overflow-hidden group hover:border-blue-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-3 font-heading">
                Nuestra Misión
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
                Brindar soluciones integrales de alta ingeniería en los sectores de <strong>Ingeniería Civil</strong>, 
                <strong>Transporte de Carga Pesada y Carga Especializada</strong>, e <strong>Ingeniería Naval</strong> con 
                énfasis en el desguace y reciclaje sostenible de buques, garantizando la máxima confiabilidad operativa, 
                cumplimiento riguroso de normativas y el resguardo del entorno socioambiental.
              </p>
              <div className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Seguridad integral respaldada por convenios con fuerzas armadas y policía</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Respuesta técnica especializada para megaproyectos de infraestructura</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Monitoreo satelital 24/7 y telemetría de ruta en tiempo real</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-gradient-to-br from-white to-sky-50/50 border border-slate-200 shadow-md relative overflow-hidden group hover:border-sky-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-3 font-heading">
                Nuestra Visión
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
                Consolidarnos como la empresa líder en Colombia y referente de primer orden en el ámbito 
                panamericano en <strong>ingeniería estructural integrada</strong>, <strong>logística de carga pesada</strong> e 
                <strong>industria de desmantelamiento naval sostenible</strong>, distinguiéndonos por la excelencia técnica, 
                la innovación continua y sólidas alianzas de inversión internacional.
              </p>
              <div className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Expansión de la red de comercialización internacional hacia EE.UU. y Panamá</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Liderazgo en desguace naval bajo el marco del Convenio de Hong Kong</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Flota moderna y sostenible con reducción calculada de huella de carbono</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: HSEQ */}
        {activeTab === 'hseq' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 font-heading">Gestión Ambiental</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Planes de manejo ambiental aprobados para obras civiles y desmantelamiento naval. Tratamiento riguroso de hidrocarburos de sentinas, descontaminación de tanques y reciclaje certificado del 98% del acero estructural de buques.
              </p>
              <span className="mt-auto text-xs font-mono text-emerald-700 font-bold">Principios ISO 14001</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col hover:border-blue-400 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <HardHat className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 font-heading">Seguridad y Salud (HSEQ)</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Cultura de Cero Accidentes. Dotación de equipos certificados para oxicorte en altura y espacios confinados. Evaluación diaria de fatiga en operadores de tractomulas y supervisión médica en frentes de obra.
              </p>
              <span className="mt-auto text-xs font-mono text-blue-700 font-bold">Guías ISO 45001 / OHSAS</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col hover:border-amber-400 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 font-heading">Calidad y Trazabilidad</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Protocolos estrictos de calibración de balanzas en patios, ensayos destructivos y no destructivos de soldadura, y auditorías técnicas continuas a tanques cisterna y trailers de carga pesada.
              </p>
              <span className="mt-auto text-xs font-mono text-amber-700 font-bold">Aseguramiento ISO 9001</span>
            </div>
          </div>
        )}

        {/* Tab 3: Legal & C.I. */}
        {activeTab === 'legal' && (
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-md animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold mb-4">
                  <FileCheck className="w-4 h-4 text-blue-600" />
                  <span>Estatuto de Comercializadora Internacional</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-3 font-heading">
                  Compañía Constituida Bajo Leyes de la República de Colombia
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  <strong>COESPSA C.I. S.A.S.</strong> cuenta con personería jurídica vigente, registro mercantil activo y 
                  habilitación especial como <strong>Comercializadora Internacional (C.I.)</strong>, lo que faculta a la 
                  empresa para la emisión de Certificados al Proveedor (CP), exención de IVA en compras destinadas a la 
                  exportación y canalización de insumos siderúrgicos, maquinaria pesada y activos navales transfronterizos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-slate-500 block mb-1 font-semibold">Razón Social Completa:</span>
                    <span className="font-bold text-slate-900">{COMPANY_INFO.fullName}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-slate-500 block mb-1 font-semibold">Domicilio Principal:</span>
                    <span className="font-bold text-slate-900">{COMPANY_INFO.headquarters}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-slate-500 block mb-1 font-semibold">Régimen Jurídico:</span>
                    <span className="font-bold text-slate-900">Sociedad por Acciones Simplificada (S.A.S.)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-slate-500 block mb-1 font-semibold">Control & Vigilancia:</span>
                    <span className="font-bold text-slate-900">SuperTransporte & DIAN Colombia</span>
                  </div>
                </div>
              </div>

              {/* Corporate Infrastructure & Headquarters Showcase */}
              <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3 text-xs text-slate-600">
                  <span className="font-bold text-slate-800">Infraestructura, Hangares & Patios Industriales</span>
                  <button 
                    onClick={() => onOpenImage('/assets/aistudio/imagen_8b182caa.png', 'Infraestructura, Hangares y Obras Civiles COESPSA C.I. S.A.S.', 'Estructuras de hangares industriales, vías de acceso y movimiento masivo de tierras')}
                    className="text-blue-600 hover:text-blue-700 font-bold"
                  >
                    Ver en alta resolución ↗
                  </button>
                </div>
                <div 
                  className="rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 cursor-pointer group"
                  role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }} onClick={() => onOpenImage('/assets/aistudio/imagen_8b182caa.png', 'Infraestructura, Hangares y Obras Civiles COESPSA C.I. S.A.S.', 'Estructuras de hangares industriales, vías de acceso y movimiento masivo de tierras')}
                >
                  <img loading="lazy" decoding="async" width={1024} height={572}
                    src="/assets/aistudio/imagen_8b182caa.png"
                    alt="Infraestructura Industrial y Obras COESPSA"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-[11px] text-slate-500 text-center mt-3">
                  Infraestructura civil propia: hangares estructurales, adecuación vial y frentes de excavación pesada en Bogotá D.C. y regiones.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
