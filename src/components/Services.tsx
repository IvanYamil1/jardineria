import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

const services = [
  {
    number: "01",
    title: "Diseño de jardines",
    subtitle: "a medida",
    description:
      "Proyectamos jardines combinando estética, funcionalidad y plantas ideales para tu clima y espacio.",
    image: "/images/servicio-diseno.jpg",
  },
  {
    number: "02",
    title: "Mantenimiento",
    subtitle: "continuo",
    description:
      "Poda, corte de césped, limpieza y cuidado para que tus áreas verdes luzcan impecables todo el año.",
    image: "/images/servicio-mantenimiento.jpg",
  },
  {
    number: "03",
    title: "Fumigación",
    subtitle: "segura",
    description:
      "Control de plagas y enfermedades con productos certificados, protegiendo tu jardín y a tu familia.",
    image: "/images/servicio-fumigacion.jpg",
  },
  {
    number: "04",
    title: "Fertilización",
    subtitle: "especializada",
    description:
      "Nutrición específica para cada planta y césped. Raíces fuertes, hojas sanas y floraciones vibrantes.",
    image: "/images/servicio-fertilizacion.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white px-[10px] pb-[10px]">
      <div className="bg-[#f5efe0] rounded-[22px] lg:rounded-[28px] overflow-hidden">

        {/* Header */}
        <div className="px-8 sm:px-12 lg:px-16 pt-16 lg:pt-20 pb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-9 h-px bg-neutral-400/60" />
              <span className="text-neutral-500 text-[10px] tracking-[0.30em] uppercase font-medium">
                Nuestros servicios
              </span>
            </div>
            <h2 className="font-heading font-bold text-[2.4rem] sm:text-5xl lg:text-[3.5rem] leading-[1.04] tracking-tight text-neutral-900">
              Cuidado integral
              <br />
              <span className="text-[#2a7a2a]">para tus áreas verdes</span>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-[260px] leading-relaxed text-[13px]">
            Desde el diseño hasta el cuidado diario — para empresas, parques,
            fraccionamientos y jardines residenciales.
          </p>
        </div>

        {/* Cards */}
        <div className="px-4 sm:px-6 pb-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((s) => (
            <article
              key={s.number}
              className="group flex flex-col bg-white rounded-[18px] overflow-hidden ring-1 ring-neutral-200/60 hover:ring-[#2a7a2a]/25 hover:shadow-xl hover:shadow-black/5 transition-all"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 font-heading text-[10px] font-bold tracking-[0.14em] uppercase bg-white/90 backdrop-blur-sm text-neutral-700 px-3 py-1 rounded-full">
                  {s.number}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-[1.05rem] text-neutral-900 leading-tight">
                  {s.title}{" "}
                  <span className="font-normal text-[#2a7a2a]">{s.subtitle}</span>
                </h3>
                <p className="mt-2.5 text-[13px] text-neutral-500 leading-relaxed flex-1">
                  {s.description}
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900 hover:text-[#2a7a2a] transition-colors"
                >
                  Cotizar
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
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
