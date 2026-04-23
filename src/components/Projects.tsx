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
    <section id="proyectos" className="py-24 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-[0.2em]">
            Proyectos
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
            Trabajos que hablan <span className="text-brand-600">por sí mismos</span>
          </h2>
          <p className="mt-5 text-neutral-600 text-lg">
            Una muestra de los espacios que hemos diseñado y mantenido para nuestros clientes.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 ${
                i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes={i === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"}
                className="object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block text-xs uppercase tracking-[0.2em] text-brand-300 font-semibold">
                  {p.category}
                </span>
                <h3 className={`mt-2 font-bold ${i === 0 ? "text-3xl" : "text-xl"}`}>
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
