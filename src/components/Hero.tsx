import Image from "next/image";
import { site, whatsappUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-[#f1ebdd] pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-[#faf5e8] ring-1 ring-[#e8dcc2]/70">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 px-6 sm:px-10 lg:px-14 pt-14 pb-12">
            <div className="flex flex-col justify-center max-w-xl">
              <h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-[3.75rem] leading-[1.02] tracking-tight text-neutral-900">
                Transformamos tus{" "}
                <span className="italic text-brand-700">áreas verdes</span>{" "}
                en espacios que florecen
              </h1>

              <p className="mt-6 text-neutral-600 leading-relaxed max-w-md">
                Diseño, mantenimiento, fumigación y fertilización profesional
                para empresas, parques, fraccionamientos y jardines
                residenciales. Resultados garantizados.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-6">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors"
                >
                  Solicitar cotización
                </a>
                <div className="text-xs leading-snug text-neutral-600 max-w-[170px]">
                  Hemos cuidado más de 200 espacios verdes como el tuyo
                </div>
              </div>

              <div className="mt-12 flex items-center gap-5">
                <div className="flex -space-x-3">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-brand-600/40 bg-transparent"
                      aria-hidden
                    />
                  ))}
                </div>
                <svg
                  className="w-14 h-10 text-neutral-500"
                  viewBox="0 0 60 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M2 32 C 14 28, 22 8, 40 14" />
                  <path d="M33 7 L 40 14 L 34 22" />
                </svg>
              </div>
            </div>

            <div className="relative min-h-[440px] lg:min-h-[500px]">
              <div className="absolute inset-0 rounded-[24px] overflow-hidden shadow-xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Jardín profesional mantenido por LAUJICLA"
                  fill
                  priority
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute top-5 right-5 lg:top-6 lg:right-6 bg-[#1d2b1d] text-white rounded-2xl px-5 py-4 shadow-2xl shadow-black/30 flex items-start gap-3 max-w-[260px]">
                <div className="w-11 h-11 rounded-full bg-brand-400 ring-2 ring-brand-200/50 flex items-center justify-center font-bold text-brand-900 shrink-0">
                  {site.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-sm leading-tight">
                    Asesor {site.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/50 mt-0.5">
                    Atención inmediata
                  </div>
                  <div className="mt-2.5 flex flex-col gap-1 text-[11px] text-white/80">
                    <span className="flex items-center gap-1.5">
                      <MailIcon className="w-3 h-3 text-brand-300" />
                      <span className="truncate">{site.email}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <PhoneIcon className="w-3 h-3 text-brand-300" />
                      {site.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1d2b1d] text-white/90 px-6 sm:px-10 lg:px-14 py-6 flex flex-wrap items-center justify-around gap-x-10 gap-y-3">
            <span className="font-serif text-lg">Empresas</span>
            <span className="font-serif italic text-lg">Residencial</span>
            <span className="uppercase text-sm tracking-[0.25em] font-semibold">
              Parques
            </span>
            <span className="font-serif text-lg">Áreas Comunes</span>
            <span className="font-serif italic text-lg">Fraccionamientos</span>
            <span className="uppercase text-sm tracking-[0.25em] font-semibold">
              Escuelas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92V21a1 1 0 0 1-1.09 1 19 19 0 0 1-8.28-3.05 18.72 18.72 0 0 1-6-6A19 19 0 0 1 3.58 4.09 1 1 0 0 1 4.57 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L8.2 11.2a16 16 0 0 0 6.6 6.6l2.45-2.18a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
    </svg>
  );
}
