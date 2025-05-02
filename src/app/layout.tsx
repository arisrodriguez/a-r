import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aristides Rodríguez",
  description: "Aristides Rodríguez es un desarrollador de software panameño especializado en Front-end y diseño UI/UX. Conoce su portafolio, proyectos web, experiencia profesional y enfoque en soluciones tecnológicas con impacto.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${geistSans.variable} antialiased`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
