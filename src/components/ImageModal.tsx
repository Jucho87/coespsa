import React from 'react';
import { X, ZoomIn, ZoomOut, Download, ExternalLink, Sparkles } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  subtitle?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  subtitle
}) => {
  const [zoom, setZoom] = React.useState(1);

  React.useEffect(() => {
    if (!isOpen) return;
    setZoom(1);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, imageSrc, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div 
        className="relative max-w-6xl w-full max-h-[94vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/90 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">{title}</h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-bold text-emerald-300">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  Alta Definición HD
                </span>
              </div>
              {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.25))}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              title="Reducir zoom"
            >
              <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <span className="text-xs font-mono text-slate-400 px-1">{Math.round(zoom * 100)}%</span>
            <button
              onClick={() => setZoom((prev) => Math.min(3, prev + 0.25))}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              title="Aumentar zoom"
            >
              <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              title="Abrir en pestaña nueva"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href={imageSrc}
              download
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              title="Descargar archivo en alta resolución"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              autoFocus
              className="p-2 text-slate-300 hover:text-white hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors ml-2"
              title="Cerrar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="relative flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950 min-h-[380px]">
          <div 
            className="transition-transform duration-200 ease-out origin-center max-w-full"
            style={{ transform: `scale(${zoom})` }}
          >
            <img
              src={imageSrc}
              alt={title}
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl border border-slate-800"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>COESPSA C.I. S.A.S. • Archivo Técnico Remasterizado</span>
          <span>Doble clic o use los botones de zoom (+/-) para inspeccionar detalles</span>
        </div>
      </div>
    </div>
  );
};
