import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

const pillars = [
  {
    title: "Equipo certificado",
    description:
      "Técnicos capacitados en manejo seguro de productos y cuidado profesional de plantas.",
  },
  {
    title: "Atención personalizada",
    description:
      "Cada espacio es único. Diseñamos un plan adaptado a tu presupuesto y necesidades.",
  },
  {
    title: "Equipos profesionales",
    description:
      "Herramientas y maquinaria de alto rendimiento para resultados impecables.",
  },
  {
    title: "Compromiso ecológico",
    description:
      "Priorizamos soluciones orgánicas y prácticas responsables con el medio ambiente.",
  },
];

const stats = [
  { value: "+10", label: "Años" },
  { value: "+200", label: "Proyectos" },
  { value: "100%", label: "Satisfacción" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf5e8] rounded-[32px] ring-1 ring-[#e8dcc2]/70 overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 p-6 sm:p-10 lg:p-14">
            <div className="relative">
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] shadow-xl">
                <Image
                  src="/images/about.jpg"
                  alt="Equipo LAUJICLA trabajando"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="hidden sm:flex absolute -bottom-6 -right-4 lg:-right-6 bg-[#1d2b1d] text-white rounded-2xl px-6 py-5 shadow-2xl shadow-black/30 items-center gap-5">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`text-center ${
                      i > 0 ? "border-l border-white/15 pl-5" : ""
                    }`}
                  >
                    <div className="font-serif text-3xl leading-none">
                      {s.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 font-semibold">
                — Sobre nosotros
              </span>
              <h2 className="mt-4 font-serif text-[2.5rem] sm:text-5xl lg:text-[3.25rem] leading-[1.03] tracking-tight text-neutral-900">
                Más de una década{" "}
                <span className="italic text-brand-700">cultivando</span>{" "}
                espacios verdes
              </h2>
              <p className="mt-6 text-neutral-600 leading-relaxed max-w-lg">
                En LAUJICLA nos dedicamos al diseño, mantenimiento, fumigación y
                fertilización de áreas verdes. Trabajamos con empresas, parques,
                desarrollos residenciales y jardines particulares, transformando
                cada espacio en un lugar saludable, funcional y hermoso.
              </p>

              <div className="mt-9 grid sm:grid-cols-2 gap-5">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className="flex gap-3 pt-4 border-t border-neutral-900/10"
                  >
                    <svg
                      className="w-4 h-4 mt-1 text-brand-700 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-neutral-900 text-sm">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="mt-10 self-start inline-flex items-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors"
              >
                Hablemos de tu proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
