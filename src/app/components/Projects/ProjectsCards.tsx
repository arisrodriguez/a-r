"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFolder, FaGithub, FaArrowRight } from "react-icons/fa";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

export default function ProjectsCards() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.39, duration: 0.6, ease: "easeOut" }}
            className="mt-16">
            <h2 className="font-medium text-xl text-gray-500 mb-6">/ Proyectos</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                    {
                        title: "Stellify",
                        desc: "Stellify crea constelaciones únicas del cielo según el día y lugar en que comenzó tu historia.",
                        technologies: "React - Javascript - Tailwind CSS - API",
                        Link: "/proyectos/lecturify",
                        LinkGitHub: "https://github.com/arisrodriguez/stellify",
                        LinkDemo: "https://stellify-weld.vercel.app/",
                    },
                    {
                        title: "Hermes App",
                        desc: "Optimiza tu rendimiento calculando ritmos de carrera personalizados para entrenamientos y competencias.",
                        technologies: "React - Javascript - Tailwind CSS",
                        Link: "/proyectos/hermes",
                        LinkGitHub: "https://github.com/arisrodriguez/hermes-app",
                        LinkDemo: "https://hermes-rc.vercel.app/",
                    },
                    {
                        title: "MacroFit",
                        desc: "Calcula tus macronutrientes según tu peso y objetivo fitness para una nutrición personalizada.",
                        technologies: "React - Javascript - Tailwind CSS",
                        Link: "/proyectos/macrofit",
                        LinkGitHub: " https://github.com/arisrodriguez/macrofit",
                        LinkDemo: "https://macrofit-orcin.vercel.app/",
                    },
                    {
                        title: "Conferencias Bahá’ís de Panamá",
                        desc: "Un espacio para explorar la unidad humana y construir juntos una sociedad más espiritual y solidaria.",
                        technologies: "React - Javascript - Tailwind CSS",
                        Link: "/proyectos/conferencias",
                        LinkGitHub: "https://github.com/arisrodriguez/global-bahais-conferences-panama",
                        LinkDemo: "https://conferencias-bahai-panama.vercel.app/",
                    },

                ].map((proyecto) => (
                    <article
                        key={proyecto.title}
                        className="relative border border-neutral-900 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                        {/* Iconos arriba */}
                        <div className="flex items-center justify-between mb-8">
                            <FaFolder className="text-neutral-900 text-2xl" />
                            <div className="flex items-center gap-4">
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    href={proyecto.LinkGitHub}>
                                    <FaGithub className="text-neutral-900 text-2xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                </a>
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Demo"
                                    href={proyecto.LinkDemo}>
                                    <BsArrowUpRightSquareFill className="text-neutral-900 text-xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                </a>
                            </div>
                        </div>

                        {/* Título y descripción */}
                        <h1 className="font-bold text-xl text-neutral-900 mb-4">
                            {proyecto.title}
                        </h1>
                        <p className="font-normal text-base text-gray-500 mb-6">
                            {proyecto.desc}
                        </p>

                        {/* Tecnologías */}
                        <p className="font-normal text-sm text-gray-500 mb-8">
                            {proyecto.technologies}
                        </p>

                        {/* Botón que aparece en hover en esquina inferior derecha */}
                        <Link
                            href={proyecto.Link}
                            className="group flex gap-2 items-center bg-neutral-900 text-white rounded-lg px-2 py-1.5 mt-2 absolute bottom-4 right-4 text-xs transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 hover:shadow-md"
                        >
                            Ver más
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <FaArrowRight />
                            </span>
                        </Link>
                    </article>
                ))}
            </div>

        </motion.div>
    );
}