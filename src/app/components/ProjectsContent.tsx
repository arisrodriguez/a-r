"use client";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { FaJsSquare, FaReact, FaFolder, FaGithub, FaArrowRight } from "react-icons/fa";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { article } from "framer-motion/client";

export default function ProjectsContent() {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mx-auto max-w-[700px] px-8 py-3 md:px-6 mt-20">
            <div className="mb-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
                    className="font-bold text-neutral-800 text-3xl">
                    Proyectos
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
                    className="font-medium text-base text-gray-500">
                    Mi lado creativo
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="space-y-4 mt-8">
                <p className="font-normal text-base text-gray-900">
                    Estos son algunos de los proyectos en los que he invertido tiempo y esfuerzo. Cada uno de ellos refleja los desafíos que he superado, el aprendizaje continuo 📚 y mi compromiso con crear soluciones funcionales y bien diseñadas 🎯. ¡Te invito a descubrirlos!
                </p>
                <p className="font-normal text-base text-gray-900 mt-2">
                    A continuación, te comparto algunas de las tecnologías que he estado utilizando en estos proyectos:
                </p>

                <ul className="flex flex-wrap justify-center gap-4 mt-2 max-w-md"
                >
                    <li className="flex items-center gap-2">
                        <FaReact className="text-sky-400 w-6 h-6" />
                        React
                    </li>
                    <li className="flex items-center gap-2">
                        <RiNextjsFill className="text-black dark:text-white w-6 h-6" />
                        NextJS
                    </li>
                    <li className="flex items-center gap-2">
                        <FaJsSquare className="text-yellow-400 w-6 h-6" />
                        JavaScript
                    </li>
                    <li className="flex items-center gap-2">
                        <RiTailwindCssFill className="text-sky-300 w-6 h-6" />
                        Tailwind CSS
                    </li>
                </ul>
            </motion.div>


            {/* Sección de Proyectos */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="mt-15">
                <h2 className="font-medium text-xl text-gray-500 mb-6">/ Proyectos</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Card del proyecto lecturify */}
                    <article className="relative border border-neutral-900 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                        {/* Iconos arriba */}
                        <div className="flex items-center justify-between mb-8">
                            <FaFolder className="text-neutral-900 text-2xl" />
                            <div className="flex items-center gap-4">
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    href="#"
                                    className=" cursor-not-allowed pointer-events-none">
                                    <FaGithub className="text-neutral-900 text-2xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                </a>
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    href="#"
                                    className=" cursor-not-allowed pointer-events-none">
                                    <BsArrowUpRightSquareFill className="text-neutral-900 text-xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                </a>
                            </div>
                        </div>

                        {/* Título y descripción */}
                        <h1 className="font-bold text-xl text-neutral-900 mb-4">
                            Lecturify
                        </h1>
                        <p className="font-normal text-base text-gray-500 mb-12">
                            Administra los libros que quieres leer, estás leyendo o ya terminaste, todo desde un solo lugar.
                        </p>

                        {/* Tecnologías */}
                        <p className="font-normal text-sm text-gray-500 mb-8">
                            Next.js - Javascript - Tailwind CSS - Google Books API - Framer Motion
                        </p>

                        {/* Botón que aparece en hover en esquina inferior derecha */}
                        <Link
                            href="/proyectos/lecturify"
                            className="group flex gap-2 items-center bg-neutral-900 text-white rounded-lg px-2 py-1.5 mt-2 absolute bottom-4 right-4 text-xs transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 hover:shadow-md"
                        >
                            Ver más
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <FaArrowRight />
                            </span>
                        </Link>
                    </article>

                    {/* Card del proyecto Hermes */}
                    <article className="relative border border-neutral-900 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                        {/* Iconos arriba */}
                        <div className="flex items-center justify-between mb-8">
                            <FaFolder className="text-neutral-900 text-2xl" />
                            <div className="flex items-center gap-4">
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/arisrodriguez/hermes-app">
                                    <FaGithub className="text-neutral-900 text-2xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                </a>
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://hermes-rc.vercel.app/">
                                    <BsArrowUpRightSquareFill className="text-neutral-900 text-xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                </a>
                            </div>
                        </div>

                        {/* Título y descripción */}
                        <h1 className="font-bold text-xl text-neutral-900 mb-4">
                            Hermes App
                        </h1>
                        <p className="font-normal text-base text-gray-500 mb-12">
                            Optimiza tu rendimiento calculando ritmos de carrera personalizados para entrenamientos y competencias.
                        </p>

                        {/* Tecnologías */}
                        <p className="font-normal text-sm text-gray-500 mb-8">
                            React - Javascript - Tailwind CSS
                        </p>

                        {/* Botón que aparece en hover en esquina inferior derecha */}
                        <Link
                            href="/proyectos/hermes"
                            className="group flex gap-2 items-center bg-neutral-900 text-white rounded-lg px-2 py-1.5 mt-2 absolute bottom-4 right-4 text-xs transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 hover:shadow-md"
                        >
                            Ver más
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <FaArrowRight />
                            </span>
                        </Link>
                    </article>

                    {/* Card del proyecto MacroFit */}
                    <article className="relative border border-neutral-900 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                        {/* Iconos arriba */}
                        <div className="flex items-center justify-between mb-8">
                            <FaFolder className="text-neutral-900 text-2xl" />
                            <div className="flex items-center gap-4">
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/arisrodriguez/macrofit">
                                    <FaGithub className="text-neutral-900 text-2xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                </a>
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://macrofit-orcin.vercel.app/">
                                    <BsArrowUpRightSquareFill className="text-neutral-900 text-xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                </a>
                            </div>
                        </div>

                        {/* Título y descripción */}
                        <h1 className="font-bold text-xl text-neutral-900 mb-4">
                            MacroFit
                        </h1>
                        <p className="font-normal text-base text-gray-500 mb-12">
                            Calcula tus macronutrientes según tu peso y objetivo fitness para una nutrición personalizada.
                        </p>

                        {/* Tecnologías */}
                        <p className="font-normal text-sm text-gray-500 mb-8">
                            React - Javascript - Tailwind CSS
                        </p>

                        {/* Botón que aparece en hover en esquina inferior derecha */}
                        <Link
                            href="/proyectos/macrofit"
                            className="group flex gap-2 items-center bg-neutral-900 text-white rounded-lg px-2 py-1.5 mt-2 absolute bottom-4 right-4 text-xs transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 hover:shadow-md"
                        >
                            Ver más
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <FaArrowRight />
                            </span>
                        </Link>
                    </article>

                    {/* Card del proyecto de Conferencias Bahá’ís de Panamá */}
                    <article className="relative border border-neutral-900 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                        {/* Iconos arriba */}
                        <div className="flex items-center justify-between mb-8">
                            <FaFolder className="text-neutral-900 text-2xl" />
                            <div className="flex items-center gap-4">
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/arisrodriguez/global-bahais-conferences-panama">
                                    <FaGithub className="text-neutral-900 text-2xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                </a>
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://conferencias-bahai-panama.vercel.app/">
                                    <BsArrowUpRightSquareFill className="text-neutral-900 text-xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                </a>
                            </div>
                        </div>

                        {/* Título y descripción */}
                        <h1 className="font-bold text-xl text-neutral-900 mb-4">
                            Conferencias Bahá’ís de Panamá
                        </h1>
                        <p className="font-normal text-base text-gray-500 mb-12">
                            Un espacio para explorar la unidad humana y construir juntos una sociedad más espiritual y solidaria.
                        </p>

                        {/* Tecnologías */}
                        <p className="font-normal text-sm text-gray-500 mb-8">
                            React - Javascript - Tailwind CSS
                        </p>

                        {/* Botón que aparece en hover en esquina inferior derecha */}
                        <Link
                            href="/proyectos/conferencias"
                            className="group flex gap-2 items-center bg-neutral-900 text-white rounded-lg px-2 py-1.5 mt-2 absolute bottom-4 right-4 text-xs transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 hover:shadow-md"
                        >
                            Ver más
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                <FaArrowRight />
                            </span>
                        </Link>
                    </article>
                </div>

                {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {[
                        {
                            title: "Lecturify",
                            desc: "Administra los libros que quieres leer, estás leyendo o ya terminaste, todo desde un solo lugar.",
                            technologies: "Next.js - Javascript - Tailwind CSS - Google Books API - Framer Motion",
                            Link: "/proyectos/lecturify",
                            LinkGitHub: "#",
                            LinkDemo: "#",
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

                    ].map((proyecto, i) => ( */}
                {/* <article
                            key={proyecto.title}
                            className="relative border border-neutral-900 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2"> */}
                {/* Iconos arriba */}
                {/* <div className="flex items-center justify-between mb-8">
                                <FaFolder className="text-neutral-900 text-2xl" />
                                <div className="flex items-center gap-4">
                                    <a target="_blank"
                                        rel="noopener noreferrer"
                                        href={proyecto.LinkGitHub}>
                                        <FaGithub className="text-neutral-900 text-2xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                    </a>
                                    <a target="_blank"
                                        rel="noopener noreferrer"
                                        href={proyecto.LinkDemo}>
                                        <BsArrowUpRightSquareFill className="text-neutral-900 text-xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                                    </a>
                                </div>
                            </div> */}

                {/* Título y descripción */}
                {/* <h1 className="font-bold text-xl text-neutral-900 mb-4">
                                {proyecto.title}
                            </h1>
                            <p className="font-normal text-base text-gray-500 mb-12">
                                {proyecto.desc}
                            </p> */}

                {/* Tecnologías */}
                {/* <p className="font-normal text-sm text-gray-500 mb-8">
                                {proyecto.technologies}
                            </p> */}

                {/* Botón que aparece en hover en esquina inferior derecha */}
                {/* <Link
                                href={proyecto.Link}
                                className="group flex gap-2 items-center bg-neutral-900 text-white rounded-lg px-2 py-1.5 mt-2 absolute bottom-4 right-4 text-xs transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 hover:shadow-md"
                            >
                                Ver más
                                <span className="transition-transform duration-200 group-hover:translate-x-1">
                                    <FaArrowRight />
                                </span> 
                            </Link>*/}
                {/* </article>
                    ))}
                </div> */}


            </motion.div>
        </motion.div >

    );
}