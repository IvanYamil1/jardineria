import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

const stats = [
  { value: "+10",  label: "Años de\nexperiencia" },
  { value: "+200", label: "Proyectos\ncompletados" },
  { value: "100%", label: "Clientes\nsatisfechos" },
];

const pillars = [
  {
    title: "Equipo certificado",
    description: "Técnicos capacitados en manejo seguro de productos y cuidado profesional de plantas.",
  },
  {
    title: "Atención personalizada",
    description: "Cada espacio es único. Diseñamos un plan adaptado a tu presupuesto y necesidades.",
  },
  {
    title: "Equipos profesionales",
    description: "Herramientas y maquinaria de alto rendimiento para resultados impecables.",
  },
  {
    title: "Compromiso ecológico",
    description: "Priorizamos soluciones orgánicas y prácticas responsables con el entorno.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white px-[10px] pb-[10px]">
      <div className="relative overflow-hidden rounded-[22px] lg:rounded-[28px] bg-[#040d08]">

        {/* Background glows */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 88% 8%, #3a963a 0, transparent 50%), radial-gradient(ellipse at 8% 92%, #1c4f1c 0, transparent 46%)",
          }}
          aria-hidden
        />

        <div className="relative grid lg:grid-cols-[58%_42%]">

          {/* ── Image side ── */}
          <div className="relative min-h-[340px] lg:min-h-[700px]">
            <Image
              src="/images/about.jpg"
              alt="Equipo LAUJICLA trabajando"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />

            {/* Subtle darkening */}
            <div className="absolute inset-0 bg-[#040d08]/18" />
            {/* Right edge blend → dark content column (desktop) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#040d08] hidden lg:block" />
            {/* Bottom fade (mobile) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040d08] via-[#040d08]/25 to-transparent lg:hidden" />

            {/* Floating "Desde 2014" badge */}
            <div className="absolute top-7 left-7 z-10 flex items-center gap-2 bg-[#040d08]/55 backdrop-blur-md border border-white/12 rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5aaa5a]" />
              <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-white/65">
                Desde 2014
              </span>
            </div>
          </div>

          {/* ── Content side ── */}
          <div className="px-8 sm:px-12 lg:px-12 xl:px-16 py-14 lg:py-20 flex flex-col justify-center">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-9 h-px bg-white/25" />
              <span className="text-white/40 text-[10px] tracking-[0.30em] uppercase font-medium">
                Sobre nosotros
              </span>
            </div>

            {/* Title */}
            <h2 className="font-heading font-bold text-white text-[2.3rem] lg:text-[2.9rem] xl:text-[3.3rem] leading-[1.05] tracking-tight">
              Más de una década
              <br />
              <span className="text-white/32">cultivando espacios</span>
            </h2>

            {/* Body */}
            <p className="mt-6 text-white/46 leading-relaxed text-[13.5px] max-w-sm">
              En LAUJICLA nos dedicamos al diseño, mantenimiento, fumigación y
              fertilización de áreas verdes para empresas, parques,
              desarrollos residenciales y jardines particulares.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 border-y border-white/10 py-8">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col ${i > 0 ? "pl-3 sm:pl-5 border-l border-white/10" : ""}`}
                >
                  <span className="font-heading font-bold text-[#5aaa5a] text-[1.6rem] sm:text-[2.15rem] leading-none tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-white/36 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.16em] mt-2 leading-snug whitespace-pre-line">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
              {pillars.map((p) => (
                <div key={p.title} className="border-l-2 border-[#2a7a2a]/55 pl-3.5">
                  <h3 className="font-heading font-semibold text-white/88 text-[12.5px] leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-white/36 text-[11.5px] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-10 self-start inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-neutral-100 active:scale-[0.98] text-[#040d08] px-8 py-[13px] text-[11px] font-bold tracking-[0.16em] uppercase transition-all duration-200"
            >
              Hablemos de tu proyecto
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
