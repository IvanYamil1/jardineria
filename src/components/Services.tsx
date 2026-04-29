import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

const services = [
  {
    number: "01",
    title: "Diseño de jardines",
    subtitle: "A medida",
    description:
      "Proyectamos jardines combinando estética, funcionalidad y plantas ideales para tu clima y espacio.",
    image: "/images/servicio-diseno.jpg",
    col: "lg:col-span-7",
    height: "min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]",
    sizes: "(max-width: 1024px) 100vw, 58vw",
    priority: true,
  },
  {
    number: "02",
    title: "Mantenimiento",
    subtitle: "Continuo",
    description:
      "Poda, corte de césped, limpieza y cuidado para que tus áreas verdes luzcan impecables todo el año.",
    image: "/images/servicio-mantenimiento.jpg",
    col: "lg:col-span-5",
    height: "min-h-[340px] lg:min-h-[520px]",
    sizes: "(max-width: 1024px) 100vw, 42vw",
    priority: false,
  },
  {
    number: "03",
    title: "Fumigación",
    subtitle: "Segura",
    description:
      "Control de plagas con productos certificados, protegiendo tu jardín y a tu familia.",
    image: "/images/servicio-fumigacion.jpg",
    col: "lg:col-span-5",
    height: "min-h-[340px] lg:min-h-[460px]",
    sizes: "(max-width: 1024px) 100vw, 42vw",
    priority: false,
  },
  {
    number: "04",
    title: "Fertilización",
    subtitle: "Especializada",
    description:
      "Nutrición específica para cada planta. Raíces fuertes, hojas sanas y floraciones vibrantes.",
    image: "/images/servicio-fertilizacion.jpg",
    col: "lg:col-span-7",
    height: "min-h-[340px] lg:min-h-[460px]",
    sizes: "(max-width: 1024px) 100vw, 58vw",
    priority: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white px-[10px] pb-[10px]">
      <div className="bg-[#f5efe0] rounded-[22px] lg:rounded-[28px] overflow-hidden">

        {/* Header */}
        <div className="px-8 sm:px-12 lg:px-16 pt-16 lg:pt-20 pb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
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

          <div className="flex flex-col items-start gap-5 shrink-0">
            <p className="text-neutral-500 max-w-[260px] leading-relaxed text-[13px]">
              Desde el diseño hasta el cuidado diario — para empresas, parques,
              fraccionamientos y jardines residenciales.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#040d08] text-white text-[11px] font-bold tracking-[0.18em] uppercase px-5 py-3 rounded-full hover:bg-[#2a7a2a] transition-colors duration-300"
            >
              Solicitar cotización
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bento grid */}
        <div className="px-4 sm:px-6 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-3">
          {services.map((s) => (
            <article
              key={s.number}
              className={`${s.col} ${s.height} relative overflow-hidden rounded-[18px] group`}
            >
              {/* Image */}
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes={s.sizes}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                priority={s.priority}
              />

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020806]/92 via-[#020806]/38 to-[#020806]/08" />

              {/* Top-left number */}
              <div className="absolute top-6 left-7 z-10">
                <span className="font-heading text-[11px] font-bold tracking-[0.28em] uppercase text-white/30">
                  {s.number}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-7 lg:p-9">
                <p className="text-[10px] font-bold tracking-[0.26em] uppercase text-[#5aaa5a] mb-2.5">
                  {s.subtitle}
                </p>
                <h3 className="font-heading font-bold text-white text-[1.55rem] lg:text-[1.9rem] leading-[1.1] tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-white/52 text-[13px] leading-relaxed">
                  {s.description}
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.20em] uppercase text-white/65 hover:text-white border border-white/14 hover:border-white/40 px-4 py-2 rounded-full transition-all duration-200"
                >
                  Cotizar este servicio
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
