import { site, whatsappUrl } from "@/lib/site";

const items = [
  {
    label: "Teléfono",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Correo",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Ubicación",
    value: site.address,
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Horario",
    value: site.hours,
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,white_0,transparent_40%),radial-gradient(circle_at_80%_70%,white_0,transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block text-brand-200 font-semibold text-sm uppercase tracking-[0.2em]">
              Contacto
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
              ¿Listo para darle vida a tu espacio?
            </h2>
            <p className="mt-5 text-white/80 text-lg leading-relaxed">
              Contáctanos por WhatsApp y recibe una cotización personalizada
              sin compromiso. Estamos listos para ayudarte.
            </p>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-white hover:bg-brand-50 text-brand-700 px-8 py-4 rounded-full font-bold shadow-2xl shadow-brand-900/40 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.11 17.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.03 2C6.55 2 2.1 6.45 2.09 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.25-1.38a9.92 9.92 0 0 0 4.78 1.22h.01c5.48 0 9.93-4.45 9.93-9.93 0-2.65-1.03-5.15-2.91-7.03A9.87 9.87 0 0 0 12.03 2z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-white text-xl font-bold mb-6">Información de contacto</h3>
            <ul className="space-y-5">
              {items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    className="group flex items-start gap-4 text-white hover:text-brand-200 transition-colors"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/15 grid place-items-center group-hover:bg-white/25 transition-colors">
                      {it.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand-200">
                        {it.label}
                      </div>
                      <div className="font-semibold mt-0.5">{it.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
