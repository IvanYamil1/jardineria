import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1d2b1d] text-white rounded-[32px] overflow-hidden">
          <div className="px-8 sm:px-12 lg:px-14 pt-14 pb-10 grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.jpeg"
                  alt={site.name}
                  width={52}
                  height={52}
                  className="rounded-full ring-1 ring-white/20"
                />
                <div>
                  <div className="text-xl font-extrabold tracking-tight">
                    {site.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-300">
                    {site.tagline}
                  </div>
                </div>
              </div>
              <p className="mt-6 font-serif text-2xl leading-snug text-white max-w-md">
                Transformamos tus espacios verdes en lugares que{" "}
                <span className="italic text-brand-300">florecen</span>.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={site.socials.facebook}
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-500 grid place-items-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.25 0-1.64.77-1.64 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
                  </svg>
                </a>
                <a
                  href={site.socials.instagram}
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-500 grid place-items-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.14 0-3.51.01-4.75.07-.89.04-1.37.19-1.69.31-.42.17-.72.37-1.04.69-.32.32-.52.62-.69 1.04-.12.32-.27.8-.31 1.69C3.47 8.49 3.46 8.86 3.46 12s.01 3.51.07 4.75c.04.89.19 1.37.31 1.69.17.42.37.72.69 1.04.32.32.62.52 1.04.69.32.12.8.27 1.69.31 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.89-.04 1.37-.19 1.69-.31.42-.17.72-.37 1.04-.69.32-.32.52-.62.69-1.04.12-.32.27-.8.31-1.69.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.89-.19-1.37-.31-1.69a2.82 2.82 0 00-.69-1.04 2.82 2.82 0 00-1.04-.69c-.32-.12-.8-.27-1.69-.31-1.24-.06-1.61-.07-4.75-.07zm0 2.76a5.46 5.46 0 110 10.92 5.46 5.46 0 010-10.92zm0 1.62a3.84 3.84 0 100 7.68 3.84 3.84 0 000-7.68zm5.65-2.88a1.28 1.28 0 110 2.56 1.28 1.28 0 010-2.56z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-[0.24em] text-white/60 font-semibold">
                Navegación
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  ["#inicio", "Inicio"],
                  ["#servicios", "Servicios"],
                  ["#nosotros", "Nosotros"],
                  ["#proyectos", "Proyectos"],
                  ["#contacto", "Contacto"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-white/80 hover:text-brand-300 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-[0.24em] text-white/60 font-semibold">
                Contacto
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                <li>{site.phone}</li>
                <li className="break-all">{site.email}</li>
                <li>{site.address}</li>
                <li>{site.hours}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 px-8 sm:px-12 lg:px-14 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>© {year} {site.name} Jardinería. Todos los derechos reservados.</p>
            <p className="font-serif italic text-white/70">
              Diseñado con cuidado, como cada jardín.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
