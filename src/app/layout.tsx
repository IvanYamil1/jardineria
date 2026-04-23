import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LAUJICLA Jardinería — Diseño, mantenimiento y cuidado de áreas verdes",
  description:
    "Empresa profesional de jardinería especializada en diseño, mantenimiento, fumigación y fertilización de áreas verdes para empresas, parques y hogares.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-800">
        {children}
      </body>
    </html>
  );
}
