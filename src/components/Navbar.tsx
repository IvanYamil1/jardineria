"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

const navLeft = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proyectos", label: "Galería" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating pill — top:30px so card rounded corners show above it */}
      <header className="fixed top-[30px] inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="w-full max-w-[780px] rounded-full bg-white/82 backdrop-blur-[18px] shadow-[0_2px_24px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.8)] border border-neutral-200/60 pointer-events-auto">
          <div className="h-[52px] flex items-center justify-between px-5 gap-4">

            {/* Mobile logo */}
            <Link href="#inicio" className="lg:hidden flex items-center gap-2.5 flex-1">
              <Image src="/logo.jpeg" alt={site.name} width={28} height={28} className="rounded-full" priority />
              <span className="font-serif text-[15px] font-semibold text-neutral-900 tracking-tight">
                {site.name}<sup className="font-sans text-[8px] ml-[1px] tracking-normal opacity-40">™</sup>
              </span>
            </Link>

            {/* Desktop 3-col grid */}
            <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-6 w-full">

              {/* Left */}
              <nav className="flex items-center gap-7">
                {navLeft.map((item) => (
                  <a key={item.href} href={item.href}
                    className="text-[12.5px] text-neutral-500 hover:text-neutral-900 transition-colors">
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Center */}
              <Link href="#inicio" className="flex items-center gap-2.5 justify-center">
                <Image src="/logo.jpeg" alt={site.name} width={28} height={28} className="rounded-full" priority />
                <span className="font-serif text-[15px] font-semibold text-neutral-900 tracking-tight">
                  {site.name}<sup className="font-sans text-[8px] ml-[1px] tracking-normal opacity-40">™</sup>
                </span>
              </Link>

              {/* Right */}
              <div className="flex items-center gap-7 justify-end">
                <a href="#testimonios" className="text-[12.5px] text-neutral-500 hover:text-neutral-900 transition-colors">
                  Ver Proyectos
                </a>
                <a href={whatsappUrl()} target="_blank" rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[#16202e] hover:bg-[#243347] text-white px-5 py-2 text-[11px] font-semibold tracking-[0.10em] uppercase transition-colors whitespace-nowrap">
                  Cotizar
                </a>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setOpen((v) => !v)} aria-label="Abrir menú" className="lg:hidden text-neutral-600 p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown */}
      {open && (
        <div className="fixed top-[90px] inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
          <div className="w-full max-w-[780px] rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-neutral-200/60 pointer-events-auto">
            <div className="px-6 py-5 flex flex-col gap-4">
              {[...navLeft, { href: "#testimonios", label: "Ver Proyectos" }].map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className="text-neutral-700 hover:text-neutral-900 font-medium text-[15px] transition-colors">
                  {item.label}
                </a>
              ))}
              <a href={whatsappUrl()} target="_blank" rel="noreferrer"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-[#16202e] text-white px-6 py-3 text-xs font-semibold tracking-[0.10em] uppercase">
                Cotizar ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
