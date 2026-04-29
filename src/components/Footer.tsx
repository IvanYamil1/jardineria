import Image from "next/image";
import { site } from "@/lib/site";

const socials = [
  {
    label: "Facebook",
    href: site.socials.facebook,
    path: "M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.25 0-1.64.77-1.64 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z",
  },
  {
    label: "Instagram",
    href: site.socials.instagram,
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.14 0-3.51.01-4.75.07-.89.04-1.37.19-1.69.31-.42.17-.72.37-1.04.69-.32.32-.52.62-.69 1.04-.12.32-.27.8-.31 1.69C3.47 8.49 3.46 8.86 3.46 12s.01 3.51.07 4.75c.04.89.19 1.37.31 1.69.17.42.37.72.69 1.04.32.32.62.52 1.04.69.32.12.8.27 1.69.31 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.89-.04 1.37-.19 1.69-.31.42-.17.72-.37 1.04-.69.32-.32.52-.62.69-1.04.12-.32.27-.8.31-1.69.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.89-.19-1.37-.31-1.69a2.82 2.82 0 00-.69-1.04 2.82 2.82 0 00-1.04-.69c-.32-.12-.8-.27-1.69-.31-1.24-.06-1.61-.07-4.75-.07zm0 2.76a5.46 5.46 0 110 10.92 5.46 5.46 0 010-10.92zm0 1.62a3.84 3.84 0 100 7.68 3.84 3.84 0 000-7.68zm5.65-2.88a1.28 1.28 0 110 2.56 1.28 1.28 0 010-2.56z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white px-[10px] pb-[10px]">
      <div className="bg-[#040d08] rounded-[22px] lg:rounded-[28px] overflow-hidden px-8 sm:px-12 lg:px-16 pt-14 pb-8">

        <div className="grid md:grid-cols-[1.8fr_1fr_1fr] gap-10 pb-10 border-b border-white/[0.08]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3.5">
              <Image
                src="/logo.jpeg"
                alt={site.name}
                width={44}
                height={44}
                className="rounded-full ring-1 ring-white/15"
              />
              <div>
                <div className="font-heading font-extrabold text-white tracking-tight text-lg leading-none">
                  {site.name}™
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/35 mt-1">
                  {site.tagline}
                </div>
              </div>
            </div>

            <p className="mt-7 text-white/45 text-[14px] leading-relaxed max-w-xs">
              Transformamos espacios verdes en lugares que inspiran y florecen
              todo el año.
            </p>

            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.07] grid place-items-center transition-colors"
                >
                  <svg className="w-4 h-4 text-white/55" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.24em] text-white/30 font-semibold mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
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
                    className="text-white/45 hover:text-white text-[13px] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.24em] text-white/30 font-semibold mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-[13px] text-white/40">
              <li>{site.phone}</li>
              <li className="break-all">{site.email}</li>
              <li>{site.address}</li>
              <li>{site.hours}</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/25">
          <p>© {year} {site.name} Jardinería. Todos los derechos reservados.</p>
          <p className="font-heading italic text-white/35">
            Diseñado con cuidado, como cada jardín.
          </p>
        </div>

      </div>
    </footer>
  );
}
