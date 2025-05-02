import type { Metadata } from "next";
import AboutContent from "../components/AboutContent";

export const metadata: Metadata = {
    title: "Sobre mí | Aristides Rodríguez",
    description: "Conoce a Aristides Rodríguez, desarrollador de software panameño, apasionado por el Front-end, el diseño UX/UI y el impacto social. Descubre su historia, valores y lo que lo inspira a crear con propósito.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function SobremiPage() {
    return (
        <AboutContent />
    );
}