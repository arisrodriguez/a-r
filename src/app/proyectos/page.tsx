import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Proyectos | Aristides Rodríguez",
    description: "Acerca de mi página",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function AcercadePage() {
    return <h1>Proyectos</h1>
}