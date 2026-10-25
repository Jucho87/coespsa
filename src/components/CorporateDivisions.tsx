import React from 'react';
import { 
  Truck, 
  ShieldCheck, 
  FolderGit2, 
  Briefcase, 
  ArrowRight, 
  Check, 
  Layers,
  Maximize2
} from 'lucide-react';
import { DIVISIONS } from '../data/companyData';

interface CorporateDivisionsProps {
  onOpenImage: (src: string, title: string, subtitle?: string) => void;
  onSelectDivisionForContact: (divisionId: 'transporte' | 'seguridad' | 'proyectos' | 'administrativa' | 'gerencia') => void;
}

export const CorporateDivisions: React.FC<CorporateDivisionsProps> = ({
  onOpenImage,
  onSelectDivisionForContact
}) => {
  const [selectedDivisionId, setSelectedDivisionId] = React.useState<string>(DIVISIONS[0].id);

  const activeDivision = DIVISIONS.find((d) => d.id === selectedDivisionId) || DIVISIONS[0];

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'transporte':
        return <Truck className="w-5 h-5" />;
      case 'seguridad':
        return <ShieldCheck className="w-5 h-5" />;
      case 'proyectos':
        return <FolderGit2 className="w-5 h-5" />;
      case 'administrativa':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="gerencias" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Estructura de Mando & Dirección</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            Nuestras 4 Gerencias Estratégicas
          </h2>
          <p className="text-slate-600 text-base mt-2 max-w-2xl">
            Cada área directiva de COESPSA C.I. S.A.S. coordina departamentos especializados para asegurar 
            precisión en la ejecución técnica, resguardo logístico, cálculo de ingeniería y solidez financiera.
          </p>
        </div>

        {/* Division Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {DIVISIONS.map((division) => {
            const isSelected = division.id === selectedDivisionId;
            return (
              <button
                key={division.id}
                onClick={() => setSelectedDivisionId(division.id)}
                className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between shadow-xs ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 ring-2 ring-blue-600/30'
                    : 'bg-white border-slate-200 hover:border-blue-400 text-slate-700 hover:text-slate-950'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {getDivisionIcon(division.id)}
                  </div>
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  )}
                </div>
                <div>
                  <h3 className={`text-sm font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {division.name}
                  </h3>
                  <p className={`text-[11px] mt-1 font-medium ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                    {division.shortName}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Division Detailed Box */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8">
            {/* Left Column: Description & Departments */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
                  {getDivisionIcon(activeDivision.id)}
                  <span>{activeDivision.leadTitle}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-3 font-heading">
                  {activeDivision.name}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {activeDivision.description}
                </p>

                {/* Departments */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
                  Departamentos y Direcciones Operativas:
                </h4>

                <div className="space-y-3 mb-6">
                  {activeDivision.departments.map((dept, index) => (
                    <div 
                      key={index} 
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        <h5 className="text-sm font-bold text-slate-900">{dept.name}</h5>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 pl-7">{dept.role}</p>
                      <p className="text-[11px] text-blue-600 font-semibold mt-1 pl-7">{dept.focus}</p>
                    </div>
                  ))}
                </div>

                {/* Key Capabilities */}
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Fortalezas y Capacidades Clave:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    {activeDivision.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectDivisionForContact(activeDivision.id as any)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                >
                  <span>Contactar a esta Gerencia</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-500 font-medium">
                  Atención directa desde la sede Bogotá D.C.
                </span>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img loading="lazy" decoding="async"
                    src={activeDivision.image}
                    alt={activeDivision.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                <button
                  onClick={() => onOpenImage(
                    activeDivision.image, 
                    activeDivision.name, 
                    'Fotografía oficial extraída de los expedientes de COESPSA C.I. S.A.S.'
                  )}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 hover:bg-white text-slate-700 shadow-sm transition-colors"
                  title="Ampliar imagen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-4 right-4 text-xs text-white">
                  <span className="px-2 py-0.5 rounded bg-blue-900/90 text-[10px] font-bold block w-fit mb-1">
                    Operación Certificada
                  </span>
                  <span className="font-semibold">{activeDivision.shortName} en Terreno</span>
                </div>
              </div>

              {/* Information Card */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Conmutador Telefónico:</span>
                  <span className="font-bold text-blue-700">(571) 540 2267 Ext. Gerencial</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Canal Institucional:</span>
                  <span className="font-medium text-slate-900">servicioalclientecoespsa@gmail.com</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Estándar Operativo:</span>
                  <span className="text-emerald-700 font-bold">100% Homologado HSEQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
