import Image from "next/image";

const projects = [
  { src: "/images/proyecto-2.jpg",          title: "Jardín residencial premium",   category: "Diseño" },
  { src: "/images/proyecto-1.jpg",           title: "Jardín con flores de temporada", category: "Fertilización" },
  { src: "/images/servicio-mantenimiento.jpg", title: "Paisajismo comercial",          category: "Diseño" },
  { src: "/images/servicio-diseno.jpg",      title: "Área verde empresarial",        category: "Paisajismo" },
  { src: "/images/servicio-fertilizacion.jpg", title: "Vivero y propagación",         category: "Fertilización" },
  { src: "/images/proyecto-6.jpg",           title: "Parque natural",                category: "Mantenimiento" },
];

export default function Projects() {
  return (
    <section id="proyectos" className="px-3 pb-3">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 px-1 pb-6">
        <div>
          <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-400 font-medium">
            — Proyectos
          </span>
          <h2
            className="mt-4 text-[2.6rem] sm:text-5xl lg:text-[3.5rem] leading-[0.95] text-neutral-900"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
          >
            Trabajos que hablan
            <br />
            <span className="italic">por sí mismos</span>
          </h2>
        </div>
        <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
          Una muestra de los espacios que hemos diseñado y mantenido para nuestros clientes.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`group relative overflow-hidden rounded-3xl ${
              i === 0 ? "col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-square"
            }`}
          >
            <Image
              src={p.src}
              alt={p.title}
              fill
              sizes={i === 0 ? "(max-width:1024px) 100vw, 66vw" : "(max-width:768px) 50vw, 33vw"}
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-300 font-semibold">
                {p.category}
              </span>
              <h3
                className={`text-white mt-1 leading-tight ${i === 0 ? "text-2xl" : "text-lg"}`}
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
              >
                {p.title}
              </h3>
            </div>
            {/* Category pill always visible */}
            <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.18em] uppercase bg-white/90 backdrop-blur-sm text-neutral-700 px-3 py-1 rounded-full">
              {p.category}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
