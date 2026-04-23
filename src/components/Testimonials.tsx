const testimonials = [
  {
    name: "María González",
    role: "Gerente de operaciones, Corporativo Andares",
    quote: "El equipo de LAUJICLA transformó el área verde de nuestras oficinas. Ahora es el orgullo de todos los colaboradores. Profesionalismo y puntualidad ejemplares.",
    initials: "MG",
  },
  {
    name: "Roberto Díaz",
    role: "Administrador, Residencial Los Robles",
    quote: "Llevamos más de 3 años con ellos atendiendo todas las áreas comunes del fraccionamiento. Siempre cumplen y los reportes son muy claros.",
    initials: "RD",
  },
  {
    name: "Claudia Fernández",
    role: "Cliente particular",
    quote: "Diseñaron mi jardín desde cero. Escucharon lo que yo quería y el resultado superó mis expectativas. Lo recomiendo totalmente.",
    initials: "CF",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="px-3 pb-3">
      <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: "#1d2b1d" }}>
        {/* Header */}
        <div className="px-8 sm:px-12 pt-14 pb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-brand-300 font-medium">
              — Testimonios
            </span>
            <h2
              className="mt-4 text-[2.6rem] sm:text-5xl lg:text-[3.5rem] leading-[0.95] text-white"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
            >
              Lo que dicen
              <br />
              <span className="italic text-brand-300">quienes confían</span>
              <br />
              en nosotros
            </h2>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs lg:text-right">
            Clientes corporativos, fraccionamientos y jardines particulares comparten su experiencia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5 border-t border-white/10">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col p-8 lg:p-10" style={{ backgroundColor: "#1d2b1d" }}>
              <svg className="w-7 h-7 text-brand-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M7.17 15.5C8.6 15.5 9.75 14.36 9.75 12.92c0-1.44-1.15-2.59-2.58-2.59-.14 0-.27.02-.4.04.51-2.33 2.58-4.04 5.05-4.04V4.5C8.67 4.5 5.5 7.67 5.5 11.58v1.34c0 1.43 1.17 2.58 2.67 2.58h-1zm9.17 0c1.43 0 2.58-1.14 2.58-2.58 0-1.44-1.15-2.59-2.58-2.59-.14 0-.27.02-.4.04.51-2.33 2.58-4.04 5.05-4.04V4.5c-3.15 0-6.32 3.17-6.32 7.08v1.34c0 1.43 1.17 2.58 2.67 2.58h-1z" />
              </svg>
              <blockquote
                className="mt-5 text-white/80 leading-relaxed flex-1 text-sm"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
              >
                {t.quote}
              </blockquote>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-600 text-white grid place-items-center text-xs font-semibold shrink-0">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <figcaption className="text-white text-sm font-medium truncate">{t.name}</figcaption>
                  <div className="text-white/40 text-xs truncate">{t.role}</div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
