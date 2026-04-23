"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Cómo trabajamos" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100 bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-7 sm:px-9 h-[60px] flex items-center">
        {/* Left: floating links */}
        <nav className="hidden lg:flex items-center text-[13px] text-neutral-600 font-medium gap-0">
          {nav.map((item, i) => (
            <span key={item.href} className="flex items-center">
              {i > 0 && (
                <span className="mx-3 text-neutral-300 select-none font-normal">/</span>
              )}
              <a href={item.href} className="hover:text-neutral-900 transition-colors">
                {item.label}
              </a>
            </span>
          ))}
        </nav>

        {/* Center: logo */}
        <Link
          href="#inicio"
          className="absolute left-1/2 -translate-x-1/2 font-bold text-neutral-900 text-[1.1rem] tracking-tight"
        >
          {site.name}
        </Link>

        {/* Right: CTA */}
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="ml-auto hidden lg:flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl pl-4 pr-1.5 py-1.5 text-[13px] font-medium transition-colors"
        >
          Cotizar ahora
          <span className="w-7 h-7 rounded-lg bg-white text-neutral-900 grid place-items-center shrink-0">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
            </svg>
          </span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className="lg:hidden ml-auto p-2 text-neutral-900"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="px-6 py-4 flex flex-col gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-neutral-700 hover:text-neutral-900 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-5 py-3 text-sm font-medium"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
