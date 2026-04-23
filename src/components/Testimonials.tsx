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
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-[0.2em]">
            Testimonios
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
            Lo que dicen nuestros <span className="text-brand-600">clientes</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow"
            >
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-brand-200"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7.17 15.5C8.6 15.5 9.75 14.36 9.75 12.92c0-1.44-1.15-2.59-2.58-2.59-.14 0-.27.02-.4.04.51-2.33 2.58-4.04 5.05-4.04V4.5C8.67 4.5 5.5 7.67 5.5 11.58v1.34c0 1.43 1.17 2.58 2.67 2.58h-1zm9.17 0c1.43 0 2.58-1.14 2.58-2.58 0-1.44-1.15-2.59-2.58-2.59-.14 0-.27.02-.4.04.51-2.33 2.58-4.04 5.05-4.04V4.5c-3.15 0-6.32 3.17-6.32 7.08v1.34c0 1.43 1.17 2.58 2.67 2.58h-1z" />
              </svg>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-500 text-white font-bold grid place-items-center text-lg">
                  {t.initials}
                </div>
                <div>
                  <figcaption className="font-bold text-neutral-900">{t.name}</figcaption>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>

              <blockquote className="mt-5 text-neutral-700 leading-relaxed">
                “{t.quote}”
              </blockquote>

              <div className="mt-5 flex gap-1 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.098 10.1c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
