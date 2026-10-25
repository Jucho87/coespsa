import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Truck, 
  Anchor, 
  HardHat, 
  Radio, 
  Award,
  ChevronRight,
  Maximize2,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenImage: (src: string, title: string, subtitle?: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenImage,
  onNavigateTo
}) => {
  return (
    <section id="inicio" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200">
      {/* Subtle geometric pattern */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold tracking-wide shadow-xs">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Comercializadora Internacional (C.I.) Registrada en Colombia</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Radio className="w-3.5 h-3.5 text-emerald-600" />
            <span>Monitoreo Satelital GPS & Telemetría en Ruta 24/7</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Presentation */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-2">
              Company Structural Engineering Civil, Mechanical and Naval
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-6 font-heading">
              COESPSA <span className="text-blue-600">C.I. S.A.S.</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 mt-2">
                Ingeniería Estructural, Transporte Pesado y Desguace Naval
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              Organización de alta ingeniería y logística especializada con sede principal en Bogotá D.C. 
              Líderes en obras de <strong>infraestructura civil</strong>, transporte intermodal de <strong>carga pesada e hidrocarburos</strong>, 
              y pioneros en Colombia en el <strong>desmantelamiento y reciclaje ecológico de buques</strong> bajo rigurosos estándares HSEQ.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => onNavigateTo('contacto')}
                className="flex items-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
              >
                <span>Solicitar Cotización de Proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateTo('gerencias')}
                className="flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 shadow-xs hover:border-slate-400 transition-all"
              >
                <span>Conocer las 4 Gerencias</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => onNavigateTo('operaciones')}
                className="flex items-center gap-2 px-4 py-3.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wide rounded-xl border border-blue-200 transition-all"
              >
                <span>Ver Flota & Operaciones</span>
              </button>
            </div>

            {/* 3 Engineering Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200">
              <div 
                role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }} onClick={() => onNavigateTo('ingenieria')}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md cursor-pointer transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700">Ingeniería Civil</h4>
                  <p className="text-[11px] text-slate-500">Puentes & Hangares</p>
                </div>
              </div>

              <div 
                role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }} onClick={() => onNavigateTo('ingenieria')}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md cursor-pointer transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700">Mecánica & Flota</h4>
                  <p className="text-[11px] text-slate-500">Cisternas & Camabajas</p>
                </div>
              </div>

              <div 
                role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }} onClick={() => onNavigateTo('ingenieria')}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md cursor-pointer transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700">Ingeniería Naval</h4>
                  <p className="text-[11px] text-slate-500">Desguace & Reciclaje</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white p-3.5 border border-slate-200 shadow-xl">
              {/* Badge on Card */}
              <div className="absolute top-6 left-6 z-10 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-blue-900 flex items-center gap-1.5 shadow-sm">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Flota y Operaciones Propias</span>
              </div>

              <button
                onClick={() => onOpenImage(
                  '/assets/aistudio/imagen_3404f9cd.png', 
                  'Flota Oficial de Transporte y Cisternas COESPSA C.I. S.A.S.', 
                  'Tractocamiones Freightliner y unidades cisterna en patios operativos'
                )}
                className="absolute top-6 right-6 z-10 p-2 rounded-lg bg-white/90 hover:bg-white text-slate-700 border border-slate-200 shadow-sm transition-colors"
                title="Ampliar imagen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Main Photo (Authentic company fleet photo) */}
              <div 
                className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 cursor-pointer group border border-slate-200"
                role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }} onClick={() => onOpenImage(
                  '/assets/aistudio/imagen_3404f9cd.png', 
                  'Flota Oficial de Transporte y Cisternas COESPSA', 
                  'Parque automotor propio, tractocamiones Freightliner y cisternas de carga pesada'
                )}
              >
                <img width={765} height={1024}
                  src="/assets/aistudio/imagen_3404f9cd.png"
                  alt="Flota de Transporte Pesado COESPSA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold drop-shadow">Flota de Tractocamiones y Cisternas Propias</span>
                  <span className="text-cyan-300 font-mono">Ampliar ↗</span>
                </div>
              </div>

              {/* 3 Mini Thumbnails: Civil, Transporte, Naval */}
              <div className="grid grid-cols-3 gap-2.5 mt-2.5">
                <div 
                  role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }} onClick={() => onOpenImage('/assets/aistudio/imagen_8b182caa.png', 'Ingeniería Civil - Obras Viales, Hangares y Excavación')}
                  className="relative rounded-lg overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer border border-slate-200 hover:border-blue-500 transition-colors group shadow-xs"
                >
                  <img width={1024} height={572} 
                    src="/assets/aistudio/imagen_8b182caa.png" 
                    alt="Ingeniería Civil" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                  <span className="absolute bottom-1 left-1.5 text-[10px] font-bold text-white bg-slate-900/80 px-1.5 py-0.2 rounded">Civil</span>
                </div>

                <div 
                  role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }} onClick={() => onOpenImage('/assets/aistudio/imagen_3404f9cd.png', 'Gerencia Técnica y Transporte - Flota de Cisternas')}
                  className="relative rounded-lg overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer border border-slate-200 hover:border-blue-500 transition-colors group shadow-xs"
                >
                  <img width={765} height={1024} 
                    src="/assets/aistudio/imagen_3404f9cd.png" 
                    alt="Flota de Transporte" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                  <span className="absolute bottom-1 left-1.5 text-[10px] font-bold text-white bg-slate-900/80 px-1.5 py-0.2 rounded">Transporte</span>
                </div>

                <div 
                  role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }} onClick={() => onOpenImage('/assets/aistudio/imagen_5e9efe17.png', 'Ingeniería Naval - Desguace, Astillero y Reciclaje de Acero')}
                  className="relative rounded-lg overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer border border-slate-200 hover:border-blue-500 transition-colors group shadow-xs"
                >
                  <img width={782} height={1024} 
                    src="/assets/aistudio/imagen_5e9efe17.png" 
                    alt="Ingeniería Naval" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                  <span className="absolute bottom-1 left-1.5 text-[10px] font-bold text-white bg-slate-900/80 px-1.5 py-0.2 rounded">Naval</span>
                </div>
              </div>

              {/* Bottom Details */}
              <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <p className="text-slate-500 font-medium">Sede Principal:</p>
                  <p className="text-slate-900 font-bold">{COMPANY_INFO.headquarters}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-500 font-medium">Conmutador PBX:</p>
                  <a href={`tel:${COMPANY_INFO.pbx1.replace(/[^0-9]/g, '')}`} className="text-blue-600 font-bold hover:underline">
                    {COMPANY_INFO.pbx1}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Metrics Ribbon (Clean Light Style) */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l border-slate-200 pl-4 first:border-l-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 font-heading">
                {stat.value}
              </span>
              <span className="text-xs text-slate-600 font-semibold mt-1 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
