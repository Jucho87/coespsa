import React from 'react';

// IDs reales de las secciones en el DOM
export const SECTIONS: { id: string; label: string }[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'empresa', label: 'Nuestra Empresa' },
  { id: 'gerencias', label: 'Gerencias' },
  { id: 'ingenieria', label: 'Líneas de Ingeniería' },
  { id: 'operaciones', label: 'Flota & Operaciones' },
  { id: 'organigrama', label: 'Organigrama' },
  { id: 'alianzas', label: 'Alianzas' },
  { id: 'contacto', label: 'Contáctenos' },
];

export function useActiveSection() {
  const [active, setActive] = React.useState('inicio');
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

export function useReveal() {
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export const ScrollIndicator: React.FC = () => {
  const active = useActiveSection();
  return (
    <nav aria-label="Indicador de sección" className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          title={label}
          aria-label={label}
          aria-current={active === id ? 'true' : undefined}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          className={`w-3 h-3 rounded-full transition-all ${
            active === id ? 'bg-blue-600 scale-125' : 'bg-transparent ring-2 ring-slate-400 hover:ring-blue-500'
          }`}
        />
      ))}
    </nav>
  );
};
