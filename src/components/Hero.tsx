import Image from "next/image";
import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Cómo trabajamos" },
  { href: "#proyectos", label: "Proyectos" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="px-3 pt-3 pb-0"
      style={{ minHeight: "calc(100vh - 0.75rem)" }}
    >
      <div
        className="relative w-full overflow-hidden rounded-3xl"
        style={{ height: "calc(100vh - 1.5rem)" }}
      >
        {/* Background image */}
        <Image
          src="/images/proyecto-2.jpg"
          alt="Áreas verdes profesionales LAUJICLA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Bottom fade — description legibility */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "32%",
            background: "linear-gradient(to top, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden
        />

        {/* ── Navbar: frosted glass bar floating inside panel ── */}
        <div className="absolute top-5 left-5 right-5 z-10 rounded-2xl backdrop-blur-2xl bg-white/30">
          <div className="px-6 sm:px-8 py-4 flex items-center">

            {/* Left: plain floating links */}
            <nav className="hidden md:flex items-center text-[13px] text-neutral-700 font-medium">
              {navLinks.map((l, i) => (
                <span key={l.href} className="flex items-center">
                  {i > 0 && (
                    <span className="mx-3 text-neutral-400 select-none font-normal">/</span>
                  )}
                  <a href={l.href} className="hover:text-neutral-900 transition-colors">
                    {l.label}
                  </a>
                </span>
              ))}
            </nav>

            {/* Center: logo — absolutely centered inside the bar */}
            <Link
              href="#inicio"
              className="absolute left-1/2 -translate-x-1/2 font-bold text-neutral-900 text-[1.15rem] tracking-tight"
            >
              {site.name}
            </Link>

            {/* Right: CTA with its own white pill + dark icon */}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="ml-auto hidden md:flex items-center gap-2 bg-white/90 hover:bg-white text-neutral-900 rounded-xl border border-white/60 pl-4 pr-1.5 py-1.5 text-[13px] font-medium transition-colors shadow-sm"
            >
              Cotizar ahora
              <span className="w-7 h-7 rounded-lg bg-neutral-900 text-white grid place-items-center shrink-0">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
                </svg>
              </span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden ml-auto w-9 h-9 rounded-xl bg-white/80 text-neutral-900 grid place-items-center border border-white/60"
              aria-label="Menú"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

          </div>
        </div>

        {/* ── Giant centered title — between navbar and bottom text ── */}
        <div
          className="absolute left-0 right-0 flex items-center justify-center text-center px-6"
          style={{ top: "80px", bottom: "88px" }}
        >
          <h1
            className="text-white leading-[0.92]"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 400,
              fontSize: "clamp(3rem, 9vw, 10.5rem)",
              letterSpacing: "0em",
            }}
          >
            Jardinería
            <br />
            Laujicla
          </h1>
        </div>

        {/* ── Bottom description ── */}
        <div className="absolute bottom-10 left-0 right-0 text-center px-4">
          <p
            className="text-white/90 leading-relaxed max-w-lg mx-auto"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 400,
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
            }}
          >
            Diseño, mantenimiento, fumigación y fertilización de áreas verdes
            para empresas, parques, fraccionamientos y jardines residenciales.
          </p>
        </div>

      </div>
    </section>
  );
}
