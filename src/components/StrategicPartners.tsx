import React from 'react';
import { 
  Globe2, 
  Handshake, 
  ShieldCheck, 
  MapPin
} from 'lucide-react';
import { STRATEGIC_PARTNERS } from '../data/companyData';

export const StrategicPartners: React.FC = () => {
  return (
    <section id="alianzas" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Handshake className="w-3.5 h-3.5" />
              <span>Red Global & Consorcios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
              Alianzas Estratégicas y Holdings
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              COESPSA C.I. S.A.S. mantiene convenios y alianzas de inversión con compañías de transporte, 
              constructoras de infraestructura y holdings internacionales en Colombia, Estados Unidos y Panamá.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-slate-500 font-bold uppercase tracking-wider">
            Red Multilatina y Norteamericana
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STRATEGIC_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[10px] font-bold text-blue-700 border border-blue-200">
                    {partner.badge}
                  </span>
                  <Globe2 className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>

                <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-700 transition-colors mb-1 font-heading">
                  {partner.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{partner.location}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-semibold">{partner.scope}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commercializadora Internacional Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-heading">
                Habilitación Aduanera para Operaciones Transfronterizas
              </h4>
              <p className="text-xs text-slate-200 mt-0.5">
                Facilitamos la importación temporal de maquinaria pesada y la exportación de aceros navales reciclados hacia siderúrgicas globales.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="px-4 py-2 rounded-xl bg-blue-500 text-white font-mono text-xs font-bold shadow-xs">
              Certificado C.I. DIAN Colombia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
