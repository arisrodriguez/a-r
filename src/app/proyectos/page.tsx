import type { Metadata } from "next";
import ProjectsContent from "../components/ProjectsContent";

export const metadata: Metadata = {
    title: "Proyectos | Aristides Rodríguez",
    description: "Acerca de mi página",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function ProyectosPage() {
    return (
        <ProjectsContent />
    );
}