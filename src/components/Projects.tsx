import Image from "next/image";

const projects = [
  {
    src: "/images/proyecto-1.jpg",
    title: "Jardín residencial premium",
    category: "Diseño",
  },
  {
    src: "/images/proyecto-2.jpg",
    title: "Poda de setos corporativos",
    category: "Mantenimiento",
  },
  {
    src: "/images/proyecto-3.jpg",
    title: "Área verde empresarial",
    category: "Diseño",
  },
  {
    src: "/images/proyecto-4.jpg",
    title: "Jardín con flores de temporada",
    category: "Fertilización",
  },
  {
    src: "/images/proyecto-5.jpg",
    title: "Paisajismo comercial",
    category: "Paisajismo",
  },
  {
    src: "/images/proyecto-6.jpg",
    title: "Parque público",
    category: "Mantenimiento",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="bg-white px-[10px] pb-[10px]">
      <div className="bg-[#f5efe0] rounded-[22px] lg:rounded-[28px] overflow-hidden px-6 sm:px-10 lg:px-14 pt-16 lg:pt-20 pb-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-9 h-px bg-neutral-400/60" />
              <span className="text-neutral-500 text-[10px] tracking-[0.30em] uppercase font-medium">
                Proyectos
              </span>
            </div>
            <h2 className="font-heading font-bold text-[2.4rem] sm:text-5xl lg:text-[3.5rem] leading-[1.04] tracking-tight text-neutral-900">
              Trabajos que
              <br />
              <span className="text-[#2a7a2a]">hablan solos</span>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-[260px] leading-relaxed text-[13px]">
            Una muestra de los espacios que hemos diseñado y mantenido para
            nuestros clientes.
          </p>
        </div>

        {/* Grid — featured first item */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-[16px] bg-neutral-300 ${
                i === 0
                  ? "col-span-2 lg:col-span-2 lg:row-span-2"
                  : ""
              }`}
            >
              <div
                className={`relative w-full ${
                  i === 0
                    ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[480px]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes={
                    i === 0
                      ? "(max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Category badge */}
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.18em] bg-white/90 backdrop-blur-sm text-neutral-700 px-2.5 py-1 rounded-full">
                  {p.category}
                </span>

                {/* Title on hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3
                    className={`font-heading font-bold text-white leading-tight ${
                      i === 0 ? "text-xl lg:text-2xl" : "text-base"
                    }`}
                  >
                    {p.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
