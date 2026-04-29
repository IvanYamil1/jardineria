import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

const stats = [
  { value: "+10", label: "Años" },
  { value: "+200", label: "Proyectos" },
  { value: "100%", label: "Satisfacción" },
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
    description: "Priorizamos soluciones orgánicas y prácticas responsables con el medio ambiente.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white px-[10px] pb-[10px]">
      <div className="relative overflow-hidden rounded-[22px] lg:rounded-[28px] bg-[#040d08]">

        {/* Subtle radial glows */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 90% 0%, #2a7a2a 0, transparent 55%), radial-gradient(ellipse at 5% 100%, #1c4f1c 0, transparent 50%)",
          }}
          aria-hidden
        />

        <div className="relative grid lg:grid-cols-2">

          {/* Image side */}
          <div className="relative min-h-[360px] lg:min-h-[680px]">
            <Image
              src="/images/about.jpg"
              alt="Equipo LAUJICLA trabajando"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Blend edge towards content on desktop */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#040d08]/85 hidden lg:block" />
            {/* Bottom fade on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040d08]/80 via-[#040d08]/20 to-transparent lg:hidden" />
          </div>

          {/* Content side */}
          <div className="px-8 sm:px-12 lg:px-14 py-14 lg:py-20 flex flex-col justify-center">

            <div className="flex items-center gap-3 mb-6">
              <span className="block w-9 h-px bg-white/30" />
              <span className="text-white/45 text-[10px] tracking-[0.30em] uppercase font-medium">
                Sobre nosotros
              </span>
            </div>

            <h2 className="font-heading font-bold text-white text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.05] tracking-tight">
              Más de una década
              <br />
              <span className="text-white/40">cultivando espacios</span>
            </h2>

            <p className="mt-6 text-white/50 leading-relaxed text-[14px] max-w-md">
              En LAUJICLA nos dedicamos al diseño, mantenimiento, fumigación y
              fertilización de áreas verdes. Trabajamos con empresas, parques,
              desarrollos residenciales y jardines particulares, transformando cada
              espacio en un lugar saludable, funcional y hermoso.
            </p>

            {/* Stats */}
            <div className="mt-10 flex gap-8 pb-10 border-b border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-heading font-bold text-white text-[2rem]">{s.value}</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-[0.22em] mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Pillars */}
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
              {pillars.map((p) => (
                <div key={p.title}>
                  <h3 className="font-heading font-semibold text-white text-[13px]">{p.title}</h3>
                  <p className="mt-1.5 text-white/40 text-[12px] leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-10 self-start inline-flex items-center justify-center rounded-full bg-white hover:bg-neutral-100 active:scale-[0.98] text-[#060c1a] px-8 py-[13px] text-[11px] font-bold tracking-[0.14em] uppercase transition-all"
            >
              Hablemos de tu proyecto
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
