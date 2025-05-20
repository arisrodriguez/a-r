"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const proyectos = [
    {
        title: "Hermes App",
        desc: "Optimiza tu rendimiento calculando ritmos de carrera personalizados para entrenamientos y competencias.",
        Link: "/proyectos/hermes",
    },
    {
        title: "MacroFit",
        desc: "Calcula tus macronutrientes según tu peso y objetivo fitness para una nutrición personalizada.",
        Link: "/proyectos/macrofit",
    },
    {
        title: "Lecturify",
        desc: "Organiza tus libros por estado: por leer, leyendo o leídos. Todo en una sola aplicación.",
        Link: "/proyectos/lecturify",
    },
];

export default function HomeProjects() {
    return (
        <section aria-labelledby="proyectos-heading" className="mt-20">
            <h2 className="font-medium text-xl text-gray-500">/ Destacados</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {proyectos.map((proyecto, i) => (
                    <motion.div
                        key={proyecto.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.1 * i, duration: 0.5, ease: "easeOut" }}
                    >
                        <Link href={proyecto.Link}>
                            <article className="h-full border border-neutral-900 rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
                                <h3 className="text-lg font-semibold text-neutral-900">{proyecto.title}</h3>
                                <p className="text-sm text-gray-500 mt-2">{proyecto.desc}</p>
                            </article>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
