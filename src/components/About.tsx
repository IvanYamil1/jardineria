import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

const features = [
  {
    title: "Equipo certificado",
    description:
      "Nuestros técnicos están capacitados en manejo seguro de productos y cuidado profesional de plantas.",
  },
  {
    title: "Atención personalizada",
    description:
      "Cada espacio es único. Diseñamos un plan que se adapta a tu presupuesto y necesidades específicas.",
  },
  {
    title: "Equipos profesionales",
    description:
      "Herramientas y maquinaria de alto rendimiento para dejar tu jardín impecable en cada visita.",
  },
  {
    title: "Compromiso ecológico",
    description:
      "Priorizamos soluciones orgánicas y prácticas responsables con el medio ambiente.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/20 aspect-[4/5]">
              <Image
                src="/images/about.jpg"
                alt="Equipo de jardinería"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -right-4 bg-white rounded-2xl p-6 shadow-xl shadow-neutral-900/10 max-w-xs border border-brand-100">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-brand-500 grid place-items-center text-white">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697A3.42 3.42 0 001.946 8.32a3.42 3.42 0 000 3.356 3.42 3.42 0 001.946 4.697 3.42 3.42 0 003.356 0 3.42 3.42 0 004.438 0 3.42 3.42 0 003.356 0 3.42 3.42 0 004.438 0 3.42 3.42 0 001.946-4.697 3.42 3.42 0 000-3.356 3.42 3.42 0 00-1.946-4.697 3.42 3.42 0 00-3.356 0 3.42 3.42 0 00-4.438 0 3.42 3.42 0 00-3.356 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Satisfacción</div>
                  <div className="text-sm text-neutral-600">garantizada</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-200/50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-400/30 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-[0.2em]">
              Sobre nosotros
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
              Más de una década cultivando{" "}
              <span className="text-brand-600">espacios verdes</span>
            </h2>
            <p className="mt-6 text-neutral-600 text-lg leading-relaxed">
              En LAUJICLA somos una empresa dedicada al diseño, mantenimiento,
              fumigación y fertilización de áreas verdes. Trabajamos con empresas,
              parques, desarrollos residenciales y jardines particulares para
              transformar cada espacio en un lugar saludable, funcional y hermoso.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-100 grid place-items-center text-brand-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">{f.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-brand-600/20 transition-colors"
            >
              Hablemos de tu proyecto
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
