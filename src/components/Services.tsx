import Image from "next/image";

const services = [
  {
    title: "Diseño de jardines",
    description:
      "Proyectamos jardines a la medida combinando estética, funcionalidad y plantas ideales para tu clima y espacio.",
    image: "/images/servicio-diseno.jpg",
    features: ["Planos y renders", "Selección de especies", "Paisajismo"],
  },
  {
    title: "Mantenimiento",
    description:
      "Poda, corte de césped, limpieza y cuidado continuo para que tus áreas verdes luzcan impecables todo el año.",
    image: "/images/servicio-mantenimiento.jpg",
    features: ["Poda y corte", "Limpieza de áreas", "Planes mensuales"],
  },
  {
    title: "Fumigación",
    description:
      "Control de plagas y enfermedades con productos seguros y efectivos, protegiendo tu jardín y a tu familia.",
    image: "/images/servicio-fumigacion.jpg",
    features: ["Plagas y hongos", "Productos certificados", "Reportes"],
  },
  {
    title: "Fertilización",
    description:
      "Nutrición específica para cada tipo de planta y césped. Raíces fuertes, hojas sanas y floraciones vibrantes.",
    image: "/images/servicio-fertilizacion.jpg",
    features: ["Análisis de suelo", "Orgánico / químico", "Calendario anual"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-white to-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-[0.2em]">
            Nuestros servicios
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
            Cuidado integral para tus <span className="text-brand-600">áreas verdes</span>
          </h2>
          <p className="mt-5 text-neutral-600 text-lg">
            Ofrecemos un servicio completo para empresas, parques, jardines residenciales y áreas comunes.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500 hover:-translate-y-1 border border-neutral-100"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white">
                  {s.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 text-sm leading-relaxed">{s.description}</p>
                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                      <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
