import React from 'react';
import { 
  Network, 
  ChevronRight, 
  Maximize2, 
  CheckCircle2,
  Building,
  FileText
} from 'lucide-react';
import { ORGANIGRAM_NODES } from '../data/companyData';
import { OrganigramNode } from '../types';

interface OrganigramViewerProps {
  onOpenImage: (src: string, title: string, subtitle?: string) => void;
}

export const OrganigramViewer: React.FC<OrganigramViewerProps> = ({ onOpenImage }) => {
  const [selectedNode, setSelectedNode] = React.useState<OrganigramNode>(ORGANIGRAM_NODES[2]); // Gerencia General by default

  return (
    <section id="organigrama" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Network className="w-3.5 h-3.5" />
              <span>Gobernanza & Líneas de Mando</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
              Estructura Organizacional Oficial
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              Organigrama corporativo piramidal de COESPSA C.I. S.A.S. que articula la asamblea de accionistas, 
              la junta directiva y las gerencias operativas, garantizando control y toma de decisiones ágil.
            </p>
          </div>

          {/* Status Badge */}
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Gobernanza Corporativa Activa</span>
            </span>
          </div>
        </div>

        {/* Dual Pane Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Pane: Interactive Hierarchy Representation */}
          <div className="lg:col-span-7 space-y-4">
            {/* Level 1: Asamblea General */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                  Nivel 1 • Máxima Autoridad
                </span>
                <span className="text-xs text-slate-500 font-medium">Asamblea de Socios</span>
              </div>
              <button
                onClick={() => setSelectedNode(ORGANIGRAM_NODES[0])}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                  selectedNode.id === 'aga'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${selectedNode.id === 'aga' ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700'}`}>
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Asamblea General de Accionistas</h4>
                    <p className={`text-xs ${selectedNode.id === 'aga' ? 'text-blue-100' : 'text-slate-500'}`}>
                      Direccionamiento estatutario y decisiones corporativas
                    </p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 ${selectedNode.id === 'aga' ? 'text-white' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Level 2: Junta Directiva & Gerencia General */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedNode(ORGANIGRAM_NODES[1])}
                className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  selectedNode.id === 'jd'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-600/30'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase mb-2 ${selectedNode.id === 'jd' ? 'text-blue-200' : 'text-slate-500'}`}>
                  Nivel 2 • Gobernanza
                </span>
                <h4 className="text-sm font-bold mb-1">Junta Directiva</h4>
                <p className={`text-xs ${selectedNode.id === 'jd' ? 'text-blue-100' : 'text-slate-500'}`}>
                  Supervisión estratégica y comités de inversión
                </p>
              </button>

              <button
                onClick={() => setSelectedNode(ORGANIGRAM_NODES[2])}
                className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  selectedNode.id === 'gg'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-600/30'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase mb-2 ${selectedNode.id === 'gg' ? 'text-blue-200' : 'text-blue-700'}`}>
                  Nivel 2 • Dirección Ejecutiva
                </span>
                <h4 className="text-sm font-bold mb-1">Gerencia General</h4>
                <p className={`text-xs ${selectedNode.id === 'gg' ? 'text-blue-100' : 'text-slate-500'}`}>
                  Liderazgo integral y representación legal oficial
                </p>
              </button>
            </div>

            {/* Level 3: Revisoría Fiscal & Asesoría */}
            <button
              onClick={() => setSelectedNode(ORGANIGRAM_NODES[3])}
              className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                selectedNode.id === 'rf'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${selectedNode.id === 'rf' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-700'}`}>
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold">Revisoría Fiscal & Asesoría Jurídica</h4>
                  <p className={`text-[11px] ${selectedNode.id === 'rf' ? 'text-blue-100' : 'text-slate-500'}`}>
                    Auditoría independiente, control aduanero C.I. y normativo
                  </p>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${selectedNode.id === 'rf' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'}`}>
                Control Externo
              </span>
            </button>

            {/* Level 3: The 4 Executive Gerencias */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 block">
                Gerencias Operativas y Funcionales:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ORGANIGRAM_NODES.slice(4).map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-600/30'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                      }`}
                    >
                      <h4 className={`text-xs font-bold mb-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {node.title}
                      </h4>
                      <p className={`text-[11px] ${isSelected ? 'text-blue-100' : 'text-slate-500'} line-clamp-1`}>
                        {node.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Pane: Selected Node Detail & Scanned Chart Preview */}
          <div className="lg:col-span-5 space-y-6">
            {/* Detailed Card for Selected Node */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[10px] font-bold text-blue-800 uppercase">
                  {selectedNode.department}
                </span>
                <span className="text-xs text-slate-500 font-medium">Nivel Jerárquico {selectedNode.level}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-950 mb-1 font-heading">
                {selectedNode.title}
              </h3>
              {selectedNode.subtitle && (
                <p className="text-xs text-slate-500 font-semibold mb-4">
                  {selectedNode.subtitle}
                </p>
              )}

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {selectedNode.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
                Funciones Principales y Responsabilidades:
              </h4>

              <div className="space-y-2 mb-6">
                {selectedNode.functions.map((func, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{func}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span>Línea Directa de Reporte</span>
                <span className="text-blue-700 font-bold">Protocolo HSEQ Oficial</span>
              </div>
            </div>

            {/* Executive Operations Command Center Photo */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-blue-600" />
                  Centro de Control & Mando Directivo
                </span>
                <button
                  onClick={() => onOpenImage(
                    '/assets/curated/operations_control_room.jpg',
                    'Centro de Mando y Dirección Operativa COESPSA C.I. S.A.S.',
                    'Instalaciones de monitoreo y coordinación de gerencias'
                  )}
                  className="text-blue-600 hover:text-blue-700 font-bold"
                >
                  Ver foto ↗
                </button>
              </div>

              <div 
                className="rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200 cursor-pointer group"
                onClick={() => onOpenImage(
                  '/assets/curated/operations_control_room.jpg',
                  'Centro de Mando y Dirección Operativa COESPSA C.I. S.A.S.',
                  'Instalaciones de monitoreo y coordinación de gerencias'
                )}
              >
                <img
                  src="/assets/curated/operations_control_room.jpg"
                  alt="Centro de Mando y Operaciones"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-[11px] text-slate-500 text-center mt-2.5">
                Coordinación en tiempo real entre la Dirección General, Gerencia de Transporte y Gerencia de Proyectos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
