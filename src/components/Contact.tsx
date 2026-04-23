import { site, whatsappUrl } from "@/lib/site";

const items = [
  {
    label: "Teléfono",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Correo",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Ubicación",
    value: site.address,
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Horario",
    value: site.hours,
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5">
          <div className="bg-[#faf5e8] rounded-[32px] ring-1 ring-[#e8dcc2]/70 p-8 sm:p-10 lg:p-12 flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 font-semibold">
              — Contacto
            </span>
            <h2 className="mt-4 font-serif text-[2.25rem] sm:text-5xl lg:text-[3.25rem] leading-[1.03] tracking-tight text-neutral-900">
              ¿Listo para darle{" "}
              <span className="italic text-brand-700">vida</span>
              <br />a tu espacio?
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed max-w-md">
              Cuéntanos de tu proyecto y recibe una cotización personalizada sin
              compromiso. Atendemos empresas, fraccionamientos, parques y
              jardines particulares.
            </p>

            <ul className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-5">
              {items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    className="group flex items-start gap-3 py-3 border-t border-neutral-900/10"
                  >
                    <span className="mt-0.5 w-8 h-8 rounded-full bg-neutral-900 text-white grid place-items-center shrink-0 group-hover:bg-brand-700 transition-colors">
                      {it.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                        {it.label}
                      </div>
                      <div className="text-sm font-medium text-neutral-900 mt-0.5 truncate">
                        {it.value}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-[#1d2b1d] text-white rounded-[32px] overflow-hidden p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[420px]">
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 20%, #8acd8a 0, transparent 45%), radial-gradient(circle at 10% 85%, #58b158 0, transparent 50%)",
              }}
              aria-hidden
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-white/10 text-brand-200 text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-300 animate-pulse" />
                Respuesta en menos de 24h
              </span>
              <h3 className="mt-6 font-serif text-3xl lg:text-4xl leading-tight">
                Escríbenos por{" "}
                <span className="italic text-brand-300">WhatsApp</span>
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed max-w-sm">
                La forma más rápida de recibir tu cotización. Agenda una visita
                o pregunta por nuestros planes de mantenimiento.
              </p>
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="relative mt-8 inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white rounded-full px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors shadow-xl shadow-black/30 self-start"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M19.11 17.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.03 2C6.55 2 2.1 6.45 2.09 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.25-1.38a9.92 9.92 0 0 0 4.78 1.22h.01c5.48 0 9.93-4.45 9.93-9.93 0-2.65-1.03-5.15-2.91-7.03A9.87 9.87 0 0 0 12.03 2z" />
              </svg>
              Iniciar conversación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
