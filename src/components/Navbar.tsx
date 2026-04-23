"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow-sm"
          : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt={`${site.name} logo`}
            width={48}
            height={48}
            className="rounded-full ring-2 ring-brand-500/40"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold text-brand-700 tracking-wide">
              {site.name}
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-500">
              {site.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-brand-600/20 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Cotizar ahora
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className="lg:hidden p-2 rounded-md text-brand-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-neutral-100 bg-white">
          <div className="px-4 py-4 flex flex-col gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-neutral-700 hover:text-brand-600 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-full text-sm font-semibold"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Cotizar ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.11 17.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.03 2C6.55 2 2.1 6.45 2.09 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.25-1.38a9.92 9.92 0 0 0 4.78 1.22h.01c5.48 0 9.93-4.45 9.93-9.93 0-2.65-1.03-5.15-2.91-7.03A9.87 9.87 0 0 0 12.03 2z" />
    </svg>
  );
}
