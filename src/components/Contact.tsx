import { site, whatsappUrl } from "@/lib/site";

const items = [
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
    <section id="contacto" className="px-3 pb-3">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-3">

        {/* Left: info panel */}
        <div className="rounded-3xl bg-white ring-1 ring-neutral-100 px-10 sm:px-12 py-12 flex flex-col">
          <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-400 font-medium">
            — Contacto
          </span>
          <h2
            className="mt-4 text-[2.4rem] sm:text-5xl leading-[0.97] text-neutral-900"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
          >
            ¿Listo para darle
            <br />
            <span className="italic">vida</span> a tu espacio?
          </h2>
          <p className="mt-6 text-neutral-500 text-sm leading-relaxed max-w-md">
            Cuéntanos de tu proyecto y recibe una cotización personalizada sin compromiso.
          </p>

          <ul className="mt-10 flex-1 grid sm:grid-cols-2 gap-x-8 content-start">
            {items.map((it) => (
              <li key={it.label} className="border-t border-neutral-100 py-5">
                <a href={it.href} className="group flex flex-col gap-1 hover:text-brand-700 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-semibold">
                    {it.label}
                  </span>
                  <span className="text-sm font-medium text-neutral-900 group-hover:text-brand-700 transition-colors">
                    {it.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: dark CTA panel */}
        <div
          className="rounded-3xl p-10 sm:p-12 flex flex-col justify-between min-h-[420px] relative overflow-hidden"
          style={{ backgroundColor: "#1d2b1d" }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #8acd8a 0, transparent 55%), radial-gradient(circle at 10% 85%, #3a963a 0, transparent 50%)" }}
            aria-hidden
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-white/10 text-brand-200 text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              Respuesta en menos de 24h
            </span>
            <h3
              className="mt-6 text-3xl lg:text-4xl text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
            >
              Escríbenos por
              <br />
              <span className="italic text-brand-300">WhatsApp</span>
            </h3>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-sm">
              La forma más rápida de recibir tu cotización. Agenda una visita o pregunta por nuestros planes de mantenimiento.
            </p>
          </div>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 self-start inline-flex items-center gap-2.5 bg-white hover:bg-neutral-100 text-neutral-900 rounded-full pl-6 pr-2 py-2 text-[13px] font-medium transition-colors"
          >
            Iniciar conversación
            <span className="w-8 h-8 rounded-full bg-neutral-900 text-white grid place-items-center shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M19.11 17.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.03 2C6.55 2 2.1 6.45 2.09 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.25-1.38a9.92 9.92 0 0 0 4.78 1.22h.01c5.48 0 9.93-4.45 9.93-9.93 0-2.65-1.03-5.15-2.91-7.03A9.87 9.87 0 0 0 12.03 2z" />
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
