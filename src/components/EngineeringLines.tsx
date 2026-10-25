import React from 'react';
import { 
  HardHat, 
  Truck, 
  Anchor, 
  CheckCircle2, 
  Wrench, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { ENGINEERING_LINES } from '../data/companyData';

interface EngineeringLinesProps {
  onOpenImage: (src: string, title: string, subtitle?: string) => void;
  onSelectServiceForContact: (service: 'civil' | 'transporte_pesado' | 'naval_desguace' | 'estudios_bim') => void;
}

export const EngineeringLines: React.FC<EngineeringLinesProps> = ({
  onOpenImage,
  onSelectServiceForContact
}) => {
  const [selectedLineId, setSelectedLineId] = React.useState<string>(ENGINEERING_LINES[0].id);

  const currentLine = ENGINEERING_LINES.find((l) => l.id === selectedLineId) || ENGINEERING_LINES[0];

  const getLineIcon = (id: string) => {
    switch (id) {
      case 'civil':
        return <HardHat className="w-5 h-5" />;
      case 'mecanica':
        return <Truck className="w-5 h-5" />;
      case 'naval':
        return <Anchor className="w-5 h-5" />;
      default:
        return <HardHat className="w-5 h-5" />;
    }
  };

  const getServiceMapping = (id: string): 'civil' | 'transporte_pesado' | 'naval_desguace' => {
    if (id === 'civil') return 'civil';
    if (id === 'mecanica') return 'transporte_pesado';
    return 'naval_desguace';
  };

  return (
    <section id="ingenieria" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Capacidades de Ejecución</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
              Líneas de Ingeniería Especializada
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              Equipamiento industrial propio de gran tonelaje, cuadrillas de especialistas certificados y 
              metodologías avanzadas de cálculo estructural, logística pesada y reciclaje naval.
            </p>
          </div>

          {/* Navigation Pill Buttons */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 p-1.5 bg-slate-100 border border-slate-200 rounded-xl">
            {ENGINEERING_LINES.map((line) => (
              <button
                key={line.id}
                onClick={() => setSelectedLineId(line.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  line.id === selectedLineId
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                {getLineIcon(line.id)}
                <span>{line.title.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Line Box */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-md p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Technical Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold text-slate-800 mb-3 shadow-2xs">
                  <span className="text-blue-600">{getLineIcon(currentLine.id)}</span>
                  <span>{currentLine.subtitle}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-3 font-heading">
                  {currentLine.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {currentLine.summary}
                </p>

                {/* Key Capabilities */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
                  Alcance y Metodología de Ejecución:
                </h4>
                <div className="space-y-2.5 mb-6">
                  {currentLine.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Machinery Used */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 mb-6 shadow-2xs">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Maquinaria y Equipos Propios Asociados:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {currentLine.machineryUsed.map((m, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectServiceForContact(getServiceMapping(currentLine.id))}
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                >
                  <span>Cotizar este Servicio</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-500 font-medium">
                  Cobertura en toda Colombia e Internacional
                </span>
              </div>
            </div>

            {/* Right Column: Visual Photo Gallery */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* Primary Hero Photo */}
              <div 
                className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200 shadow-md cursor-pointer group"
                role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }} onClick={() => onOpenImage(
                  currentLine.heroImage, 
                  currentLine.title, 
                  currentLine.subtitle
                )}
              >
                <img loading="lazy" decoding="async"
                  src={currentLine.heroImage}
                  alt={currentLine.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenImage(currentLine.heroImage, currentLine.title, currentLine.subtitle);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 hover:bg-white text-slate-700 border border-slate-200 shadow-xs transition-colors"
                  title="Ampliar imagen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold drop-shadow">Registro Técnico de Obra</span>
                  <span className="text-cyan-300 font-mono">Ampliar ↗</span>
                </div>
              </div>

              {/* Secondary Thumbnails Gallery */}
              <div className="grid grid-cols-3 gap-3">
                {currentLine.secondaryImages.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }} onClick={() => onOpenImage(
                      imgSrc, 
                      `${currentLine.title} - Registro ${idx + 1}`,
                      'Evidencia fotográfica oficial COESPSA C.I. S.A.S.'
                    )}
                    className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 hover:border-blue-500 cursor-pointer group transition-all shadow-xs"
                  >
                    <img loading="lazy" decoding="async"
                      src={imgSrc}
                      alt={`Registro fotográfico ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                    <span className="absolute bottom-1 right-1.5 text-[10px] font-bold text-white bg-slate-900/80 px-1.5 py-0.2 rounded">
                      Foto 0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* Special Naval Recycling Highlight */}
              {currentLine.id === 'naval' && (
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 flex flex-col gap-1">
                  <div className="flex items-center gap-2 font-bold text-teal-800">
                    <Anchor className="w-4 h-4" />
                    <span>Liderazgo en Desguace y Reciclaje Sostenible de Buques</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    COESPSA implementa procedimientos certificados de oxicorte técnico y recuperación de aleaciones marítimas, 
                    garantizando la recolección estricta de aguas oleosas y retiro seguro de asbesto para siderúrgicas nacionales e internacionales.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
