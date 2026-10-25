import React from 'react';

export const GA_ID = 'G-XXXXXXXXXX';
const KEY = 'cookie_consent';

const loadGA = () => {
  if (document.getElementById('ga4')) return;
  const s = document.createElement('script');
  s.id = 'ga4';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () { w.dataLayer.push(arguments); };
  w.gtag('js', new Date());
  w.gtag('config', GA_ID, { anonymize_ip: true });
};

export const CookieBanner: React.FC = () => {
  const [consent, setConsent] = React.useState<string | null>(() => localStorage.getItem(KEY));
  React.useEffect(() => { if (consent === 'accepted') loadGA(); }, [consent]);
  const choose = (v: string) => { localStorage.setItem(KEY, v); setConsent(v); };
  if (consent) return null;
  return (
    <div role="dialog" aria-label="Aviso de cookies" className="fixed bottom-0 inset-x-0 z-[60] bg-slate-950 text-slate-200 border-t border-slate-800 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-3 text-sm">
        <p className="flex-1">
          Usamos cookies propias y de analítica para mejorar su experiencia. En cumplimiento de la Ley 1581 de 2012 de protección de datos personales, puede aceptar o rechazar su uso.
        </p>
        <div className="flex gap-2 shrink-0">
          <button onClick={() => choose('rejected')} className="px-4 py-2 rounded-lg border border-slate-600 hover:bg-slate-800 font-semibold">Rechazar</button>
          <button onClick={() => choose('accepted')} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">Aceptar</button>
        </div>
      </div>
    </div>
  );
};
