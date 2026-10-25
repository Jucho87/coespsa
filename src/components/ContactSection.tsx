import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle,
  Headphones,
  RotateCcw
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ContactSubmission } from '../types';

interface ContactSectionProps {
  preselectedDivision?: ContactSubmission['targetDivision'];
  preselectedService?: ContactSubmission['serviceCategory'];
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedDivision = 'transporte',
  preselectedService = 'civil'
}) => {
  const [formData, setFormData] = React.useState({
    companyName: '',
    contactPerson: '',
    documentId: '',
    email: '',
    phone: '',
    city: 'Bogotá D.C., Colombia',
    targetDivision: preselectedDivision,
    serviceCategory: preselectedService,
    priority: 'media' as ContactSubmission['priority'],
    message: '',
    termsAccepted: true
  });

  const [submittedRadicado, setSubmittedRadicado] = React.useState<string | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const validate = (d: typeof formData): Record<string, string> => {
    const errs: Record<string, string> = {};
    if (!d.contactPerson.trim()) errs.contactPerson = 'Ingrese el nombre de contacto.';
    if (!d.email.trim()) errs.email = 'Ingrese un correo electrónico.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) errs.email = 'Correo electrónico inválido.';
    if (!d.phone.trim()) errs.phone = 'Ingrese un teléfono de contacto.';
    if (!d.message.trim()) errs.message = 'Describa su requerimiento.';
    return errs;
  };
  const errors = submitted ? validate(formData) : {};
  const fieldCls = (k: string) =>
    !submitted ? 'border-slate-300' : errors[k] ? 'border-red-500 ring-1 ring-red-200' : 'border-emerald-500';
  const fieldErr = (k: string) =>
    errors[k] ? <p id={`err-${k}`} className="mt-1 text-[11px] text-red-600 font-medium">{errors[k]}</p> : null;

  React.useEffect(() => {
    if (preselectedDivision) {
      setFormData(prev => ({ ...prev, targetDivision: preselectedDivision }));
    }
  }, [preselectedDivision]);

  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceCategory: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSubmitted(true);

    if (Object.keys(validate(formData)).length > 0 || !formData.companyName.trim() || !formData.contactPerson.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMessage('Por favor complete los campos obligatorios para radicar su requerimiento corporativo.');
      return;
    }

    setIsSubmitting(true);
    const radicadoNum = `RAD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const body = new FormData();
    body.append('radicado', radicadoNum);
    body.append('nombre', formData.contactPerson);
    body.append('empresa', formData.companyName);
    body.append('documento', formData.documentId);
    body.append('email', formData.email);
    body.append('telefono', formData.phone);
    body.append('ciudad', formData.city);
    body.append('gerencia', formData.targetDivision);
    body.append('servicio', formData.serviceCategory);
    body.append('mensaje', formData.message);

    try {
      const res = await fetch('/mail.php', { method: 'POST', body });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) throw new Error(data.error || 'send_failed');
      setSubmittedRadicado(radicadoNum);
    } catch {
      setErrorMessage(`No fue posible enviar su solicitud. Intente nuevamente o escríbanos a ${COMPANY_INFO.emailCustomerService}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmittedRadicado(null);
    setSubmitted(false);
    setFormData({
      companyName: '',
      contactPerson: '',
      documentId: '',
      email: '',
      phone: '',
      city: 'Bogotá D.C., Colombia',
      targetDivision: 'transporte',
      serviceCategory: 'civil',
      priority: 'media',
      message: '',
      termsAccepted: true
    });
  };

  return (
    <section id="contacto" className="reveal py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5" />
            <span>Atención Institucional & Cotizaciones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            Contáctenos y Radicación de Proyectos
          </h2>
          <p className="text-slate-600 text-base mt-2 max-w-2xl">
            Comuníquese directamente con nuestras 4 gerencias corporativas en Bogotá D.C. Nuestro equipo 
            técnico evalúa requerimientos de obra civil, transporte especializado y desguace naval en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Card matching reference imagen_7eed9fa6.png */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <h3 className="text-2xl font-black text-slate-950 font-heading tracking-tight">
                  COESPSA C.I. S.A.S.
                </h3>
                <p className="text-sm text-slate-500 mt-1 font-normal">
                  Company Structural Engineering Civil, Mechanical and Naval C.I. S.A.S.
                </p>
              </div>

              {/* Exact 5 Reference Cards */}
              <div className="space-y-3.5">
                {/* 1. PBX Conmutador Principal */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4 hover:border-blue-300 hover:shadow-sm transition-all">
                  <div className="text-blue-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-normal leading-tight">
                      Línea PBX Conmutador Principal
                    </span>
                    <a 
                      href="tel:5715402267" 
                      className="text-slate-950 font-black text-lg sm:text-xl tracking-tight hover:text-blue-600 transition-colors block mt-0.5"
                    >
                      (571) 540 2267
                    </a>
                  </div>
                </div>

                {/* 2. PBX Secundaria */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4 hover:border-blue-300 hover:shadow-sm transition-all">
                  <div className="text-blue-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-normal leading-tight">
                      Línea PBX Secundaria
                    </span>
                    <a 
                      href="tel:5715407200" 
                      className="text-slate-950 font-black text-lg sm:text-xl tracking-tight hover:text-blue-600 transition-colors block mt-0.5"
                    >
                      (571) 540 7200
                    </a>
                  </div>
                </div>

                {/* 3. Servicio al Cliente & Cotizaciones */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4 hover:border-sky-300 hover:shadow-sm transition-all">
                  <div className="text-sky-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-normal leading-tight">
                      Servicio al Cliente & Cotizaciones
                    </span>
                    <a 
                      href="mailto:asistente@grupocoespsa.com" 
                      className="text-blue-600 font-bold text-sm sm:text-base hover:underline block mt-0.5 break-all"
                    >
                      asistente@grupocoespsa.com
                    </a>
                  </div>
                </div>

                {/* 4. Gerencia General */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4 hover:border-amber-300 hover:shadow-sm transition-all">
                  <div className="text-amber-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-normal leading-tight">
                      Gerencia General
                    </span>
                    <a 
                      href="mailto:iltpdirector@grupocoespsa.com" 
                      className="text-slate-900 font-bold text-sm sm:text-base hover:underline block mt-0.5 break-all"
                    >
                      iltpdirector@grupocoespsa.com
                    </a>
                  </div>
                </div>

                {/* 5. Domicilio Principal */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4 hover:border-blue-300 hover:shadow-sm transition-all">
                  <div className="text-blue-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-normal leading-tight">
                      Domicilio Principal
                    </span>
                    <span className="text-slate-950 font-black text-sm sm:text-base block mt-0.5">
                      Bogotá D.C., Colombia
                    </span>
                  </div>
                </div>
              </div>

              {/* Safety badge */}
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/70 flex items-center gap-3 text-xs text-blue-900 font-medium">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>
                  Tratamiento confidencial de propuestas técnicas y cumplimiento de la Ley de Protección de Datos (Habeas Data).
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Form or Success */}
          <div className="lg:col-span-7">
            {submittedRadicado ? (
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-emerald-300 shadow-lg space-y-6 text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase text-emerald-700 block mb-1">
                    Solicitud Radicada Exitosamente
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-950 font-heading">
                    Número de Radicado: <span className="text-blue-700 font-mono">{submittedRadicado}</span>
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 max-w-lg mx-auto leading-relaxed">
                    Hemos registrado su requerimiento en el sistema de gestión corporativa de COESPSA C.I. S.A.S. 
                    La gerencia correspondiente revisará las especificaciones técnicas y se pondrá en contacto en un plazo máximo de 24 horas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Razón Social:</span>
                    <span className="text-slate-900 font-bold">{formData.companyName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Gerencia Asignada:</span>
                    <span className="text-blue-700 font-bold capitalize">{formData.targetDivision}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Correo de Confirmación:</span>
                    <span className="text-slate-900 font-semibold">{formData.email}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    onClick={handleResetForm}
                    className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Radicar Otra Consulta</span>
                  </button>
                </div>
              </div>
            ) : (
              <form 
                noValidate
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md space-y-5"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-1 font-heading">
                    Formulario Oficial de Requerimientos Corporativos
                  </h3>
                  <p className="text-xs text-slate-500">
                    Diligencie el alcance de su cotización o consulta técnica para ser enrutada al área respectiva.
                  </p>
                </div>

                {errorMessage && (
                  <div role="alert" className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2 font-medium">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Company & Person */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cf-company" className="block text-xs font-bold text-slate-700 mb-1">
                      Empresa o Razón Social <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="cf-company"
                      type="text"
                      required
                      placeholder="Ej: Consorcio Minero Andino S.A."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-contact" className="block text-xs font-bold text-slate-700 mb-1">
                      Persona de Contacto y Cargo <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="cf-contact"
                      type="text"
                      required
                      placeholder="Ej: Ing. Carlos Rivas (Dir. Operaciones)"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium ${fieldCls('contactPerson')}`}
                      aria-invalid={!!errors.contactPerson}
                      aria-describedby={errors.contactPerson ? 'err-contactPerson' : undefined}
                    />
                    {fieldErr('contactPerson')}
                  </div>
                </div>

                {/* Document & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cf-document" className="block text-xs font-bold text-slate-700 mb-1">
                      NIT / Documento de Identidad
                    </label>
                    <input
                      id="cf-document"
                      type="text"
                      placeholder="Ej: 900.123.456-7"
                      value={formData.documentId}
                      onChange={(e) => setFormData({ ...formData, documentId: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-email" className="block text-xs font-bold text-slate-700 mb-1">
                      Correo Electrónico Corporativo <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      required
                      placeholder="contacto@suempresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium ${fieldCls('email')}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                    />
                    {fieldErr('email')}
                  </div>
                </div>

                {/* Phone & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cf-phone" className="block text-xs font-bold text-slate-700 mb-1">
                      Teléfono / Móvil de Contacto <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="cf-phone"
                      type="tel"
                      required
                      placeholder="+57 310 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium ${fieldCls('phone')}`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'err-phone' : undefined}
                    />
                    {fieldErr('phone')}
                  </div>

                  <div>
                    <label htmlFor="cf-city" className="block text-xs font-bold text-slate-700 mb-1">
                      Ciudad / Departamento / País <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="cf-city"
                      type="text"
                      required
                      placeholder="Bogotá D.C., Colombia"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Routing: Division & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cf-division" className="block text-xs font-bold text-slate-700 mb-1">
                      Gerencia de Enlace Receptora <span className="text-blue-600">*</span>
                    </label>
                    <select
                      id="cf-division"
                      value={formData.targetDivision}
                      onChange={(e) => setFormData({ ...formData, targetDivision: e.target.value as ContactSubmission['targetDivision'] })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                    >
                      <option value="transporte">Gerencia Técnica y Transporte</option>
                      <option value="seguridad">Gerencia de Seguridad y Operaciones</option>
                      <option value="proyectos">Gerencia de Desarrollo de Proyectos e Inv.</option>
                      <option value="administrativa">Gerencia Administrativa y Financiera</option>
                      <option value="gerencia">Gerencia General / Dirección</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cf-service" className="block text-xs font-bold text-slate-700 mb-1">
                      Línea o Categoría del Servicio <span className="text-blue-600">*</span>
                    </label>
                    <select
                      id="cf-service"
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value as ContactSubmission['serviceCategory'] })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                    >
                      <option value="civil">Obras Civiles, Puentes y Hangares</option>
                      <option value="transporte_pesado">Transporte Pesado, Cisternas y Graneles</option>
                      <option value="naval_desguace">Desguace, Reciclaje Naval y Acero</option>
                      <option value="estudios_bim">Estudios BIM y Cálculo Estructural</option>
                      <option value="licitaciones">Licitaciones y Alianzas Internacionales</option>
                      <option value="otro">Otro Requerimiento Administrativo</option>
                    </select>
                  </div>
                </div>

                {/* Scope & Message */}
                <div>
                  <label htmlFor="cf-message" className="block text-xs font-bold text-slate-700 mb-1">
                    Descripción del Requerimiento / Alcance Técnico <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    id="cf-message"
                    required
                    rows={4}
                    placeholder="Describa el origen y destino de carga, volumen a transportar, tipo de obra civil o buque para desguace..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-xl p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium resize-y ${fieldCls('message')}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'err-message' : undefined}
                  />
                    {fieldErr('message')}
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Respuesta formal con radicado institucional en &lt; 24h</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Radicando...' : 'Radicar Solicitud Oficial'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
