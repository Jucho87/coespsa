import React from 'react';
import { 
  Phone, 
  ShieldCheck, 
  Menu, 
  X, 
  Send, 
  ChevronRight,
  Moon,
  Sun
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useActiveSection } from './ScrollIndicator';

interface NavbarProps {
  onNavigateTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const activeSection = useActiveSection();
  const [dark, setDark] = React.useState(() => localStorage.getItem('theme') === 'dark');

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: 'inicio' },
    { label: 'Nuestra Empresa', href: 'empresa' },
    { label: 'Gerencias', href: 'gerencias' },
    { label: 'Líneas de Ingeniería', href: 'ingenieria' },
    { label: 'Flota & Operaciones', href: 'operaciones' },
    { label: 'Organigrama', href: 'organigrama' },
    { label: 'Alianzas', href: 'alianzas' },
    { label: 'Contáctenos', href: 'contacto' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    onNavigateTo(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md py-2.5' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3.5'
    }`}>
      {/* Top corporate info bar */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-6 pb-2 mb-1 border-b border-slate-100 text-xs text-slate-600 font-medium">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-blue-700 font-semibold uppercase text-[11px] tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Comercializadora Internacional C.I. S.A.S. • Registro Oficial DIAN
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600 font-normal">Sede Principal: Bogotá D.C., Colombia</span>
        </div>
        <div className="flex items-center gap-5">
          <a 
            href={`tel:${COMPANY_INFO.pbx1.replace(/[^0-9]/g, '')}`} 
            className="flex items-center gap-1.5 text-slate-700 hover:text-blue-700 transition-colors"
          >
            <Phone className="w-3 h-3 text-blue-600" />
            <span>PBX: <strong className="font-semibold text-slate-900">{COMPANY_INFO.pbx1}</strong></span>
          </a>
          <span className="text-slate-300">|</span>
          <a 
            href={`tel:${COMPANY_INFO.pbx2.replace(/[^0-9]/g, '')}`} 
            className="flex items-center gap-1.5 text-slate-700 hover:text-blue-700 transition-colors"
          >
            <Phone className="w-3 h-3 text-blue-600" />
            <span><strong className="font-semibold text-slate-900">{COMPANY_INFO.pbx2}</strong></span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <button 
          onClick={() => handleLinkClick('inicio')}
          className="flex items-center gap-3.5 group text-left py-0.5"
        >
          <div className="h-12 sm:h-14 w-auto px-2 py-1 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center group-hover:border-blue-400 group-hover:shadow-sm transition-all">
            <picture className="contents">
              <source srcSet="/assets/aistudio/imagen_96ed2a7a.webp" type="image/webp" />
              <img width={800} height={450} 
                src="/assets/aistudio/imagen_96ed2a7a.png" 
                alt="COESPSA Engineering Company Logo" 
                className="h-full w-auto max-w-[160px] sm:max-w-[190px] object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/imagen_552f7f2d.png';
                }}
              />
            </picture>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-950 group-hover:text-blue-700 transition-colors">
                COESPSA <span className="text-blue-600 text-xs font-bold px-1.5 py-0.5 rounded bg-blue-50 border border-blue-200">C.I. S.A.S.</span>
              </span>
            </div>
            <span className="text-[10px] text-slate-500 tracking-wider uppercase font-semibold hidden sm:inline-block">
              Ingeniería Civil • Mecánica • Transporte • Naval
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              aria-current={activeSection === link.href ? 'true' : undefined}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors hover:bg-slate-100 ${
                activeSection === link.href
                  ? 'text-blue-600 font-bold border-b-2 border-blue-600 rounded-b-none'
                  : 'font-semibold text-slate-700 hover:text-blue-700'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Button: Cotizar / Contacto */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
            title={dark ? 'Modo claro' : 'Modo oscuro'}
            className="p-2 rounded-lg border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => handleLinkClick('contacto')}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide rounded-xl shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Cotizar / Contacto</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => handleLinkClick('contacto')}
            className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg sm:hidden"
          >
            Contacto
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-5 mt-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1 pb-4 border-b border-slate-200">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2.5 px-3 text-sm font-bold text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => handleLinkClick('contacto')}
              className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white font-bold text-sm rounded-xl shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Solicitar Cotización Inmediata</span>
            </button>

            <div className="text-xs text-slate-600 pt-2 flex flex-col gap-1 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-900">PBX Bogotá: {COMPANY_INFO.pbx1}</span>
              <span>Correo: {COMPANY_INFO.emailCustomerService}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
