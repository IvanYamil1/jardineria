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
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonios" className="bg-white px-[10px] pb-[10px]">
      <div className="relative overflow-hidden rounded-[22px] lg:rounded-[28px] bg-[#040d08]">

        {/* Background glows */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 15%, #8acd8a 0, transparent 45%), radial-gradient(circle at 90% 85%, #2a7a2a 0, transparent 45%)",
          }}
          aria-hidden
        />

        <div className="relative px-8 sm:px-12 lg:px-16 pt-16 lg:pt-20 pb-10 lg:pb-14">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-12">
            <span className="block w-9 h-px bg-white/30" />
            <span className="text-white/45 text-[10px] tracking-[0.30em] uppercase font-medium">
              Testimonios
            </span>
          </div>

          {/* Featured testimonial */}
          <div className="mb-12 lg:mb-16 max-w-4xl">
            <svg
              className="w-9 h-9 text-[#5aaa5a] mb-7"
              viewBox="0 0 32 32"
              fill="currentColor"
              aria-hidden
            >
              <path d="M4 14.4C4 9.76 7.36 5.84 12 4l1.6 2.4C10.56 7.6 8.96 9.84 8.64 12H12v8H4v-5.6zm16 0C20 9.76 23.36 5.84 28 4l1.6 2.4C26.56 7.6 24.96 9.84 24.64 12H28v8h-8v-5.6z" />
            </svg>
            <blockquote className="font-heading font-semibold text-white text-[1.55rem] sm:text-[2rem] lg:text-[2.4rem] leading-[1.25] tracking-tight">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#2a7a2a] text-white grid place-items-center text-sm font-bold shrink-0">
                {featured.initials}
              </div>
              <div>
                <div className="font-heading font-semibold text-white text-[14px]">
                  {featured.name}
                </div>
                <div className="text-white/40 text-[12px] mt-0.5">{featured.role}</div>
              </div>
            </div>
          </div>

          {/* Secondary testimonials */}
          <div className="grid md:grid-cols-2 gap-3 pt-10 border-t border-white/10">
            {rest.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col bg-white/[0.04] border border-white/[0.07] rounded-[18px] p-6 lg:p-8"
              >
                <blockquote className="text-white/55 text-[14px] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1c4f1c] text-white grid place-items-center text-xs font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <figcaption className="font-heading font-semibold text-white text-[13px]">
                      {t.name}
                    </figcaption>
                    <div className="text-white/38 text-[11px] mt-0.5">{t.role}</div>
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
