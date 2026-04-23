"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

const nav = [
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
          ? "bg-[#f1ebdd]/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt={`${site.name} logo`}
            width={44}
            height={44}
            className="rounded-full ring-1 ring-neutral-900/10"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold text-neutral-900 tracking-tight">
              {site.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              {site.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors"
        >
          Cotizar ahora
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className="lg:hidden p-2 rounded-md text-neutral-900"
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
        <div className="lg:hidden border-t border-neutral-900/10 bg-[#faf5e8]">
          <div className="px-4 py-4 flex flex-col gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-neutral-800 hover:text-neutral-950 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-5 py-3 text-xs font-semibold tracking-[0.18em] uppercase"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
