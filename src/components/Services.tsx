import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

const services = [
  {
    number: "01",
    title: "Diseño de jardines",
    italic: "a medida",
    description:
      "Proyectamos jardines combinando estética, funcionalidad y plantas ideales para tu clima y espacio.",
    image: "/images/servicio-diseno.jpg",
  },
  {
    number: "02",
    title: "Mantenimiento",
    italic: "continuo",
    description:
      "Poda, corte de césped, limpieza y cuidado para que tus áreas verdes luzcan impecables todo el año.",
    image: "/images/servicio-mantenimiento.jpg",
  },
  {
    number: "03",
    title: "Fumigación",
    italic: "segura",
    description:
      "Control de plagas y enfermedades con productos certificados, protegiendo tu jardín y a tu familia.",
    image: "/images/servicio-fumigacion.jpg",
  },
  {
    number: "04",
    title: "Fertilización",
    italic: "especializada",
    description:
      "Nutrición específica para cada planta y césped. Raíces fuertes, hojas sanas y floraciones vibrantes.",
    image: "/images/servicio-fertilizacion.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 max-w-5xl">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 font-semibold">
              — Nuestros servicios
            </span>
            <h2 className="mt-4 font-serif text-[2.5rem] sm:text-5xl lg:text-[3.5rem] leading-[1.02] tracking-tight text-neutral-900">
              Cuidado <span className="italic text-brand-700">integral</span>
              <br />
              para tus áreas verdes
            </h2>
          </div>
          <p className="text-neutral-600 max-w-sm leading-relaxed">
            Un servicio completo para empresas, parques, fraccionamientos y
            jardines residenciales — desde el diseño hasta el cuidado diario.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col bg-[#faf5e8] rounded-3xl ring-1 ring-[#e8dcc2]/70 p-4 hover:ring-brand-500/30 hover:shadow-xl hover:shadow-brand-900/5 transition-all"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] bg-[#faf5e8] text-neutral-700 px-2.5 py-1 rounded-full">
                  {s.number}
                </span>
              </div>

              <div className="px-2 pt-5 pb-3 flex flex-col flex-1">
                <h3 className="font-serif text-2xl leading-tight text-neutral-900">
                  {s.title}{" "}
                  <span className="italic text-brand-700">{s.italic}</span>
                </h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed flex-1">
                  {s.description}
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-900 hover:text-brand-700 transition-colors"
                >
                  Cotizar
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
