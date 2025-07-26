import type { Metadata, Viewport } from "next";
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
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;

}) {
  return (
    <html lang="es" className="">

      <body className={`${geistSans.variable} antialiased  bg-white dark:bg-neutral-900 dark:text-gray-100`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
