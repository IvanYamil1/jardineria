const testimonials = [
  {
    name: "María González",
    role: "Gerente de operaciones, Corporativo Andares",
    quote:
      "El equipo de LAUJICLA transformó el área verde de nuestras oficinas. Ahora es el orgullo de todos los colaboradores. Profesionalismo y puntualidad ejemplares.",
    initials: "MG",
  },
  {
    name: "Roberto Díaz",
    role: "Administrador, Residencial Los Robles",
    quote:
      "Llevamos más de 3 años con ellos atendiendo todas las áreas comunes del fraccionamiento. Siempre cumplen, las plantas se ven sanas y los reportes son muy claros.",
    initials: "RD",
  },
  {
    name: "Claudia Fernández",
    role: "Cliente particular",
    quote:
      "Diseñaron mi jardín desde cero. Escucharon lo que yo quería y el resultado superó mis expectativas. Lo recomiendo totalmente.",
    initials: "CF",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#1d2b1d] rounded-[32px] overflow-hidden px-6 sm:px-10 lg:px-14 py-16 lg:py-20">
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 10%, #8acd8a 0, transparent 45%), radial-gradient(circle at 85% 90%, #58b158 0, transparent 45%)",
            }}
            aria-hidden
          />

          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 max-w-5xl">
            <div>
              <span className="text-[11px] uppercase tracking-[0.28em] text-brand-300 font-semibold">
                — Testimonios
              </span>
              <h2 className="mt-4 font-serif text-[2.5rem] sm:text-5xl lg:text-[3.5rem] leading-[1.02] tracking-tight text-white">
                Lo que dicen{" "}
                <span className="italic text-brand-300">quienes confían</span>
                <br />
                en nosotros
              </h2>
            </div>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Clientes corporativos, residenciales y particulares comparten su
              experiencia trabajando con LAUJICLA.
            </p>
          </div>

          <div className="relative mt-14 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col bg-[#faf5e8] rounded-3xl p-7 shadow-xl shadow-black/20"
              >
                <svg
                  className="w-8 h-8 text-brand-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M7.17 15.5C8.6 15.5 9.75 14.36 9.75 12.92c0-1.44-1.15-2.59-2.58-2.59-.14 0-.27.02-.4.04.51-2.33 2.58-4.04 5.05-4.04V4.5C8.67 4.5 5.5 7.67 5.5 11.58v1.34c0 1.43 1.17 2.58 2.67 2.58h-1zm9.17 0c1.43 0 2.58-1.14 2.58-2.58 0-1.44-1.15-2.59-2.58-2.59-.14 0-.27.02-.4.04.51-2.33 2.58-4.04 5.05-4.04V4.5c-3.15 0-6.32 3.17-6.32 7.08v1.34c0 1.43 1.17 2.58 2.67 2.58h-1z" />
                </svg>

                <blockquote className="mt-5 text-neutral-800 leading-relaxed flex-1">
                  {t.quote}
                </blockquote>

                <div className="mt-7 pt-5 border-t border-neutral-900/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-700 text-white grid place-items-center text-sm font-semibold">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <figcaption className="font-semibold text-neutral-900 text-sm">
                      {t.name}
                    </figcaption>
                    <div className="text-xs text-neutral-500 truncate">
                      {t.role}
                    </div>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
