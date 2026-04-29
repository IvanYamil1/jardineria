"use client";

import Image from "next/image";
import { useEffect } from "react";

const projects = [
  {
    title: "Jardín residencial frente al mar",
    category: "Diseño · antes & después",
    before: { src: "/images/proyecto-antes-1.jpg",   label: "Antes",    position: "center 42%" },
    after:  { src: "/images/proyecto-despues-1.jpg", label: "Después",  position: "center 48%" },
  },
  {
    title: "Jardín con rocas naturales",
    category: "Diseño · antes & después",
    before: { src: "/images/proyecto-antes-2.jpg",   label: "Antes",   position: "center 55%" },
    after:  { src: "/images/comp2-despues-v2.jpg", label: "Después", position: "center 50%" },
  },
  {
    title: "Jardín con palmeras y muro",
    category: "Mantenimiento · antes & después",
    before: { src: "/images/comp3-antes.jpg",   label: "Antes",   position: "center 50%" },
    after:  { src: "/images/comp3-despues.jpg", label: "Después", position: "center 52%" },
  },
];

export default function Projects() {
  useEffect(() => {
    const sections   = Array.from(document.querySelectorAll<HTMLElement>(".lj-scroll-section"));
    const comparators = Array.from(document.querySelectorAll<HTMLElement>(".lj-comparator"));

    type CompData = {
      comp: HTMLElement;
      section: HTMLElement;
      wrapper: HTMLElement | null;
      pct: HTMLElement | null;
      layerCount: number;
      dots: HTMLButtonElement[];
    };

    const data: CompData[] = comparators.map((comp, i) => ({
      comp,
      section: sections[i],
      wrapper: sections[i]?.querySelector<HTMLElement>(".lj-comparator-wrapper") ?? null,
      pct: comp.querySelector<HTMLElement>(".lj-percentage"),
      layerCount: comp.querySelectorAll(".lj-image-layer").length,
      dots: [],
    }));

    // Create dot navigation
    data.forEach((d, ci) => {
      const nav = document.createElement("div");
      nav.className = "lj-stage-nav";
      for (let j = 0; j < d.layerCount; j++) {
        const btn = document.createElement("button");
        btn.className = "lj-stage-dot" + (j === 0 ? " lj-active" : "");
        btn.setAttribute("aria-label", j === 0 ? "Ver antes" : "Ver después");
        btn.dataset.stage = String(j);
        btn.dataset.ci = String(ci);
        d.dots.push(btn);
        nav.appendChild(btn);
      }
      d.comp.appendChild(nav);
    });

    function updateOffsets() {
      data.forEach(({ section, wrapper }) => {
        if (!wrapper || !section) return;
        wrapper.style.setProperty("--lj-comp-offset", section.offsetTop + "px");
      });
    }

    function scrollToStage(ci: number, stage: number) {
      const d = data[ci];
      if (!d?.section) return;
      const duration = 4 * window.innerHeight;
      const clamped = Math.max(0, Math.min(stage, d.layerCount - 1));
      const y = d.section.offsetTop + (duration / (d.layerCount - 1)) * clamped;
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(y, { duration: 1.4 });
      } else {
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    function onNavClick(e: Event) {
      const btn = (e.target as Element).closest<HTMLButtonElement>(".lj-stage-dot");
      if (!btn) return;
      scrollToStage(Number(btn.dataset.ci), Number(btn.dataset.stage));
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateOffsets, 150);
    }

    let rafId: number;
    function frame() {
      // Update percentage + active dot
      data.forEach((d) => {
        if (!d.pct || !d.comp) return;
        const v = parseFloat(getComputedStyle(d.comp).getPropertyValue("--lj-scroll-progress")) || 0;
        d.pct.textContent = Math.round(v) + "%";
        const active = Math.round((v / 100) * (d.layerCount - 1));
        d.dots.forEach((dot, i) => dot.classList.toggle("lj-active", i === active));
      });
      rafId = requestAnimationFrame(frame);
    }

    updateOffsets();
    document.addEventListener("click", onNavClick);
    window.addEventListener("resize", onResize, { passive: true });
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      document.removeEventListener("click", onNavClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="proyectos" className="bg-white">

      {/* Header card */}
      <div className="px-[10px]">
        <div className="bg-[#f5efe0] rounded-[22px] lg:rounded-[28px] px-8 sm:px-12 lg:px-16 pt-16 lg:pt-20 pb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-9 h-px bg-neutral-400/60" />
                <span className="text-neutral-500 text-[10px] tracking-[0.30em] uppercase font-medium">
                  Proyectos
                </span>
              </div>
              <h2 className="font-heading font-bold text-[2.4rem] sm:text-5xl lg:text-[3.5rem] leading-[1.04] tracking-tight text-neutral-900">
                Antes y después —
                <br />
                <span className="text-[#2a7a2a]">resultados reales</span>
              </h2>
            </div>
            <p className="text-neutral-500 max-w-[260px] leading-relaxed text-[13px]">
              Desplázate para ver la transformación completa de cada espacio,
              de principio a fin.
            </p>
          </div>
        </div>
      </div>

      {/* One scroll section per project */}
      {projects.map((p, idx) => (
        <div className="lj-scroll-section" key={idx}>
          <div className="lj-comparator-container">
            <div className="lj-comparator-wrapper">
              <div className="lj-comparator">

                <div className="lj-percentage" />

                <div className="lj-image-layers">

                  {/* BEFORE — top layer, clips away left as you scroll */}
                  <div className="lj-image-layer">
                    <Image
                      src={p.before.src}
                      alt={`${p.title} — Antes`}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      style={{ objectPosition: p.before.position }}
                      priority={idx === 0}
                    />
                    <div className="lj-layer-overlay">
                      <span className="lj-stage-label">{p.before.label}</span>
                    </div>
                  </div>

                  {/* AFTER — bottom layer, revealed underneath */}
                  <div className="lj-image-layer">
                    <Image
                      src={p.after.src}
                      alt={`${p.title} — Después`}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      style={{ objectPosition: p.after.position }}
                    />
                    <div className="lj-layer-overlay">
                      <span className="lj-stage-label">{p.after.label}</span>
                    </div>
                  </div>

                </div>

                {/* Divider line — sweeps left as before clips */}
                <div className="lj-divider-lines">
                  <div className="lj-divider-line" />
                </div>

                {/* Persistent text — always visible over both layers */}
                <div className="absolute inset-x-0 bottom-0 z-[18] pointer-events-none px-8 sm:px-12 pb-8 bg-gradient-to-t from-[#040d08]/70 via-[#040d08]/20 to-transparent">
                  <p className="font-heading font-bold text-white text-[1.8rem] sm:text-[2.6rem] lg:text-[3.2rem] leading-[1.08] tracking-tight">
                    {p.title}
                  </p>
                  <p className="mt-2 text-white/50 text-[11px] uppercase tracking-[0.22em] font-semibold">
                    {p.category}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom gap matching other sections */}
      <div className="h-[10px]" />

    </section>
  );
}
