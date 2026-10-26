import React from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  HardHat,
  Truck,
  Anchor,
  Radio
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer text-white text-xs">
      {/* Top Banner */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 sm:h-14 w-auto px-2.5 py-1 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-700">
              <picture className="contents">
                <source srcSet="/assets/aistudio/imagen_96ed2a7a.webp" type="image/webp" />
                <img width={800} height={450} loading="lazy" decoding="async" 
                  src="/assets/aistudio/imagen_96ed2a7a.png" 
                  alt="COESPSA Engineering Company Logo" 
                  className="h-full w-auto max-w-[170px] object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/imagen_552f7f2d.png';
                  }}
                />
              </picture>
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-wide font-heading">
                COESPSA C.I. S.A.S.
              </span>
              <p className="text-[11px] text-slate-400">
                Company Structural Engineering Civil, Mechanical and Naval C.I. S.A.S.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Identity & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Gobernanza Corporativa
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs">
              Sociedad por Acciones Simplificada legalmente constituida en Colombia con habilitación especial de Comercializadora Internacional (C.I.) ante la DIAN y homologación del Ministerio de Transporte.
            </p>
            <div className="pt-2 text-[11px] text-blue-400 space-y-1">
              <span className="block">• Certificación HSEQ en Operaciones</span>
              <span className="block">• Enlace Activo con Policía y Ejército</span>
              <span className="block">• Protocolos del Convenio de Hong Kong</span>
            </div>
          </div>

          {/* Col 2: Líneas de Ingeniería */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Líneas de Ingeniería
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigateTo('ingenieria')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <HardHat className="w-3.5 h-3.5 text-blue-400" />
                  <span>Ingeniería Civil: Puentes & Hangares</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTo('ingenieria')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Truck className="w-3.5 h-3.5 text-sky-400" />
                  <span>Transporte Pesado & Cisternas</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTo('ingenieria')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Anchor className="w-3.5 h-3.5 text-teal-400" />
                  <span>Desguace & Reciclaje Naval</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTo('operaciones')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Radio className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Monitoreo Satelital GPS 24/7</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Gerencias */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Gerencias Estratégicas
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigateTo('gerencias')}
                  className="hover:text-white transition-colors"
                >
                  Gerencia Técnica y Transporte
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTo('gerencias')}
                  className="hover:text-white transition-colors"
                >
                  Gerencia de Seguridad y Operaciones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTo('gerencias')}
                  className="hover:text-white transition-colors"
                >
                  Gerencia Desarrollo Proyectos e Inv.
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTo('gerencias')}
                  className="hover:text-white transition-colors"
                >
                  Gerencia Administrativa y Financiera
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTo('organigrama')}
                  className="hover:text-blue-400 transition-colors font-semibold"
                >
                  Organigrama Piramidal Oficial →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto Oficial */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Contacto Principal Bogotá
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>PBX: <strong className="text-white">{COMPANY_INFO.pbxFormatted}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emailCustomerService}`} className="hover:underline text-blue-400 break-all">
                  {COMPANY_INFO.emailCustomerService}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emailManagement}`} className="hover:underline text-slate-300 break-all">
                  {COMPANY_INFO.emailManagement}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headquarters}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <iframe
            title="Ubicación COESPSA"
            src="https://maps.google.com/maps?q=Bogot%C3%A1,Colombia&z=13&output=embed"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl opacity-80"
          />
        </div>

        {/* Legal Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.fullName}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Comercializadora Internacional C.I.</span>
            <span>Seguridad & Telemetría Satelital</span>
            <span>HSEQ Normativa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
