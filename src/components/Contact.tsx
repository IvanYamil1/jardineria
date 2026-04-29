import { site, whatsappUrl } from "@/lib/site";

const contactItems = [
  {
    label: "Teléfono",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    label: "Correo",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Ubicación",
    value: site.address,
    href: "#",
  },
  {
    label: "Horario",
    value: site.hours,
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="bg-white px-[10px] pb-[10px]">
      <div className="grid lg:grid-cols-2 gap-3">

        {/* Left: contact info */}
        <div className="bg-[#f5efe0] rounded-[22px] lg:rounded-[28px] px-8 sm:px-12 py-14 lg:py-16 flex flex-col">

          <div className="flex items-center gap-3 mb-6">
            <span className="block w-9 h-px bg-neutral-400/60" />
            <span className="text-neutral-500 text-[10px] tracking-[0.30em] uppercase font-medium">
              Contacto
            </span>
          </div>

          <h2 className="font-heading font-bold text-[2.2rem] sm:text-[2.8rem] leading-[1.05] tracking-tight text-neutral-900">
            ¿Listo para darle
            <br />
            <span className="text-[#2a7a2a]">vida a tu espacio?</span>
          </h2>

          <p className="mt-6 text-neutral-500 leading-relaxed text-[14px] max-w-sm">
            Cuéntanos de tu proyecto y recibe una cotización personalizada sin
            compromiso. Atendemos empresas, fraccionamientos, parques y jardines
            particulares.
          </p>

          <div className="mt-10 flex-1">
            {contactItems.map((it) => (
              <a
                key={it.label}
                href={it.href}
                className="group flex items-center justify-between py-4 border-b border-neutral-300/50 last:border-0"
              >
                <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-semibold">
                  {it.label}
                </span>
                <span className="text-[13px] font-medium text-neutral-800 group-hover:text-[#2a7a2a] transition-colors">
                  {it.value}
                </span>
              </a>
            ))}
          </div>

        </div>

        {/* Right: WhatsApp dark card */}
        <div className="relative overflow-hidden rounded-[22px] lg:rounded-[28px] bg-[#040d08] flex flex-col justify-between p-8 sm:p-12 min-h-[380px] sm:min-h-[480px]">

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.14]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 85% 5%, #2a7a2a 0, transparent 55%), radial-gradient(ellipse at 5% 95%, #1c4f1c 0, transparent 50%)",
            }}
            aria-hidden
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.09] text-[#8acd8a] text-[11px] font-semibold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8acd8a] animate-pulse" />
              Respuesta en menos de 24h
            </span>

            <h3 className="mt-8 font-heading font-bold text-white text-[2rem] sm:text-[2.6rem] leading-[1.05] tracking-tight">
              Escríbenos
              <br />
              <span className="text-white/38">por WhatsApp</span>
            </h3>

            <p className="mt-5 text-white/45 text-[14px] leading-relaxed max-w-sm">
              La forma más rápida de recibir tu cotización. Agenda una visita o
              pregunta por nuestros planes de mantenimiento.
            </p>
          </div>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="relative mt-10 self-start inline-flex items-center justify-center gap-3 rounded-full bg-white hover:bg-neutral-100 active:scale-[0.98] text-[#060c1a] px-8 py-[13px] text-[11px] font-bold tracking-[0.14em] uppercase transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M19.11 17.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.03 2C6.55 2 2.1 6.45 2.09 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.25-1.38a9.92 9.92 0 004.78 1.22h.01c5.48 0 9.93-4.45 9.93-9.93 0-2.65-1.03-5.15-2.91-7.03A9.87 9.87 0 0012.03 2z" />
            </svg>
            Iniciar conversación
          </a>

        </div>
      </div>
    </section>
  );
}
