import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

export default function Hero() {
  return (
    /* White page background with padding — creates the visible white gap around the card */
    <section id="inicio" className="min-h-screen bg-white p-[10px] lg:p-[14px]">

      {/* Rounded hero card — exactly like the Caladan reference */}
      <div className="relative overflow-hidden rounded-[22px] lg:rounded-[28px] shadow-[0_8px_48px_rgba(0,0,0,0.22)] min-h-[calc(100vh-28px)] lg:min-h-[calc(100vh-28px)] flex flex-col">

        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0 bg-[#0d1f12]">
          <Image
            src="/images/hero-v2.jpg"
            alt="Jardín profesional LAUJICLA"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%]"
          />
          {/* Base dark wash */}
          <div className="absolute inset-0 bg-[#040d08]/15" />
          {/* Gradient from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040d08]/75 via-[#040d08]/15 to-transparent" />
          {/* Gradient from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040d08]/40 via-[#040d08]/5 to-transparent" />
        </div>

        {/* Spacer — pushes text + form to bottom */}
        <div className="flex-1" />

        {/* Hero text — bottom left */}
        <div className="relative z-10 px-8 sm:px-12 lg:px-16 pb-8">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-9 h-px bg-white/32" />
            <span className="text-white/42 text-[10px] tracking-[0.30em] uppercase font-medium">
              Jardinería profesional
            </span>
          </div>

          {/* Headline — DM Sans, igual que la referencia Caladan */}
          <h1 className="font-heading leading-[1.05] tracking-tight text-white">
            <span className="block text-[2rem] sm:text-5xl lg:text-[4rem] xl:text-[5rem] font-bold">
              Transforma tus
            </span>
            <span className="block text-[2rem] sm:text-5xl lg:text-[4rem] xl:text-[5rem] font-bold text-white/55 mt-1">
              Áreas Verdes
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-white/48 text-[14px] leading-relaxed max-w-[280px]">
            Diseño y mantenimiento profesional para espacios que inspiran todo el año.
          </p>
        </div>

        {/* Inquiry bar — floating card with gap from edges (like Caladan) */}
        <div className="relative z-10 px-5 sm:px-7 pb-5 sm:pb-7">
          <div className="bg-[#08101e]/55 backdrop-blur-xl border border-white/10 rounded-[18px] px-6 sm:px-8 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-5 items-end">

              {/* Nombre */}
              <div className="flex flex-col gap-2">
                <label className="text-white/38 text-[9px] uppercase tracking-[0.24em] font-semibold">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  placeholder="Juan García"
                  className="w-full bg-white/7 border border-white/11 rounded-[9px] text-white placeholder-white/25 px-4 py-3 text-[13px] outline-none focus:border-white/32 focus:bg-white/11 transition-all"
                />
              </div>

              {/* Tipo de servicio */}
              <div className="flex flex-col gap-2">
                <label className="text-white/38 text-[9px] uppercase tracking-[0.24em] font-semibold">
                  Tipo de servicio *
                </label>
                <input
                  type="text"
                  placeholder="Diseño de jardín"
                  className="w-full bg-white/7 border border-white/11 rounded-[9px] text-white placeholder-white/25 px-4 py-3 text-[13px] outline-none focus:border-white/32 focus:bg-white/11 transition-all"
                />
              </div>

              {/* Fecha */}
              <div className="flex flex-col gap-2">
                <label className="text-white/38 text-[9px] uppercase tracking-[0.24em] font-semibold">
                  Fecha preferida *
                </label>
                <input
                  type="date"
                  className="w-full bg-white/7 border border-white/11 rounded-[9px] text-white/48 px-4 py-3 text-[13px] outline-none focus:border-white/32 focus:bg-white/11 transition-all [color-scheme:dark]"
                />
              </div>

              {/* CTA */}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white hover:bg-neutral-100 active:scale-[0.98] text-[#060c1a] px-8 py-[13px] text-[11px] font-bold tracking-[0.14em] uppercase transition-all whitespace-nowrap"
              >
                Enviar consulta
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
