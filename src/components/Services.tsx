import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

const services = [
  {
    number: "01",
    title: "Diseño de jardines",
    description: "Proyectamos jardines a la medida combinando estética, funcionalidad y plantas ideales para tu clima y espacio.",
    image: "/images/servicio-diseno.jpg",
  },
  {
    number: "02",
    title: "Mantenimiento",
    description: "Poda, corte de césped y cuidado continuo para que tus áreas verdes luzcan impecables todo el año.",
    image: "/images/servicio-mantenimiento.jpg",
  },
  {
    number: "03",
    title: "Fumigación",
    description: "Control de plagas y enfermedades con productos certificados, protegiendo tu jardín y a tu familia.",
    image: "/images/proyecto-6.jpg",
  },
  {
    number: "04",
    title: "Fertilización",
    description: "Nutrición específica para cada planta y césped. Raíces fuertes, hojas sanas y floraciones vibrantes.",
    image: "/images/servicio-fertilizacion.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-3 pb-3">
      <div className="rounded-3xl bg-white ring-1 ring-neutral-100 overflow-hidden">
        {/* Header */}
        <div className="px-8 sm:px-12 pt-14 pb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-400 font-medium">
              — Servicios
            </span>
            <h2
              className="mt-4 text-[2.6rem] sm:text-5xl lg:text-[3.5rem] leading-[0.95] text-neutral-900"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
            >
              Cuidado integral
              <br />
              <span className="italic">para tus áreas verdes</span>
            </h2>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-xs lg:text-right">
            Desde el diseño hasta el mantenimiento diario — cubrimos todo lo que tu jardín necesita para florecer.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100">
          {services.map((s) => (
            <article key={s.title} className="group bg-white flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.2em] bg-white/90 backdrop-blur-sm text-neutral-700 px-2.5 py-1 rounded-full">
                  {s.number}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3
                  className="text-xl text-neutral-900 leading-tight"
                  style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-500 leading-relaxed flex-1">
                  {s.description}
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-neutral-900 hover:text-brand-700 transition-colors"
                >
                  Cotizar
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
