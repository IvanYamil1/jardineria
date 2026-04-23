export const site = {
  name: "LAUJICLA",
  tagline: "Jardinería profesional",
  phone: "+52 33 0000 0000",
  whatsappNumber: "523300000000",
  whatsappMessage:
    "Hola LAUJICLA, me interesa solicitar información sobre sus servicios de jardinería.",
  email: "contacto@laujicla.com",
  address: "Guadalajara, Jalisco, México",
  hours: "Lun – Sáb, 8:00 a 18:00",
  socials: {
    facebook: "#",
    instagram: "#",
  },
} as const;

export const whatsappUrl = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
