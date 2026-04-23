import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

const stats = [
  { value: "+10", label: "Años de experiencia" },
  { value: "+200", label: "Proyectos completados" },
  { value: "100%", label: "Clientes satisfechos" },
];

export default function About() {
  return (
    <section id="nosotros" className="px-3 pb-3">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-3 min-h-[600px]">
        {/* Left: dark panel with text */}
        <div
          className="rounded-3xl p-10 lg:p-14 flex flex-col justify-between"
          style={{ backgroundColor: "#1d2b1d" }}
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-brand-300 font-medium">
              — Nosotros
            </span>
            <h2
              className="mt-5 text-[2.4rem] sm:text-5xl lg:text-[3rem] leading-[0.97] text-white"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
            >
              Más de una década
              <br />
              <span className="italic text-brand-300">cultivando</span>
              <br />
              espacios verdes
            </h2>
            <p className="mt-8 text-white/70 leading-relaxed max-w-md text-sm">
              En LAUJICLA nos dedicamos al diseño, mantenimiento, fumigación y
              fertilización de áreas verdes. Trabajamos con empresas, parques,
              fraccionamientos y jardines particulares — transformando cada espacio
              en un lugar saludable y hermoso.
            </p>
          </div>

          <div>
            <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl text-white"
                    style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 bg-white hover:bg-neutral-100 text-neutral-900 rounded-full pl-6 pr-2 py-2 text-[13px] font-medium transition-colors"
            >
              Hablemos de tu proyecto
              <span className="w-8 h-8 rounded-full bg-neutral-900 text-white grid place-items-center shrink-0">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Right: full image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[420px]">
          <Image
            src="/images/servicio-mantenimiento.jpg"
            alt="Jardín diseñado por LAUJICLA"
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
