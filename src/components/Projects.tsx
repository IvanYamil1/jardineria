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
    <section id="proyectos" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 max-w-5xl mb-14">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 font-semibold">
              — Proyectos
            </span>
            <h2 className="mt-4 font-serif text-[2.5rem] sm:text-5xl lg:text-[3.5rem] leading-[1.02] tracking-tight text-neutral-900">
              Trabajos que hablan{" "}
              <span className="italic text-brand-700">por sí mismos</span>
            </h2>
          </div>
          <p className="text-neutral-600 max-w-sm leading-relaxed">
            Una muestra de los espacios que hemos diseñado y mantenido para
            nuestros clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group bg-[#faf5e8] rounded-3xl ring-1 ring-[#e8dcc2]/70 p-3 flex flex-col ${
                i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? "aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-[400px]" : "aspect-[4/3]"
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
                <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-[0.2em] bg-[#faf5e8]/95 backdrop-blur text-neutral-800 px-3 py-1.5 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="px-3 pt-4 pb-2 flex items-center justify-between gap-4">
                <h3
                  className={`font-serif text-neutral-900 leading-tight ${
                    i === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                  }`}
                >
                  {p.title}
                </h3>
                <svg
                  className="w-5 h-5 text-neutral-500 group-hover:text-brand-700 group-hover:translate-x-1 transition-all shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
