import type { Metadata } from "next";
import Link from "next/link";
import { FaJsSquare, FaReact, FaFolder, FaGithub } from "react-icons/fa";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const metadata: Metadata = {
    title: "Proyectos | Aristides Rodríguez",
    description: "Acerca de mi página",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function ProyectosPage() {
    return (
        <main className="mx-auto max-w-[700px] px-8 py-3 md:px-6 mt-20">
            <h1 className="font-medium text-xl text-gray-500 mb-8">/ Proyectos</h1>
            <p className="font-normal text-base text-gray-900">
                Estos son algunos de los proyectos en los que he trabajado con dedicación y pasión. Cada uno representa desafíos superados, aprendizaje constante 📚 y un enfoque en crear soluciones funcionales y bien diseñadas 🎯. ¡Te invito a explorarlos!
            </p>
            <p className="font-normal text-base text-gray-900 mt-2">
                Aquí hay algunas tecnologías con las que he estado trabajando:
            </p>
            <ul className="flex flex-wrap justify-center gap-4 mt-2 max-w-md">
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


            {/* Sección de Proyectos */}
            <section className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">

                <article className="group relative border border-neutral-900 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                    {/* Iconos arriba */}
                    <div className="flex items-center justify-between mb-8">
                        <FaFolder className="text-neutral-900 text-2xl" />
                        <div className="flex items-center gap-4">
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="#">
                                <FaGithub className="text-neutral-900 text-2xl transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:rotate-6" />
                            </a>
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="#">
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
                    <p className="font-normal text-sm text-gray-500">
                        Next.js - Javascript - Tailwind CSS - Google Books API - Framer Motion
                    </p>

                    {/* Botón que aparece en hover en esquina inferior derecha */}
                    <a href="/proyectos/lecturify"></a>
                    <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 text-xs text-neutral-500 transition-all cursor-pointer hover:text-blue-500">
                        Ver más detalles →
                    </span>

                </article>

                <article className="group relative border border-neutral-900 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2">
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
                    <p className="font-normal text-sm text-gray-500">
                        React - Javascript - Tailwind CSS
                    </p>

                    {/* Botón que aparece en hover en esquina inferior derecha */}
                    <Link href="/proyectos/hermes" className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 text-xs text-neutral-500 transition-all cursor-pointer hover:text-blue-500">
                        Ver más detalles →
                    </Link>
                </article>

                <article className="border border-neutral-900 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2">
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
                                href="https://hermes-rc.vercel.app/">
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
                    <p className="font-normal text-sm text-gray-500">
                        React - Javascript - Tailwind CSS
                    </p>

                </article>

                <article className="border border-neutral-900 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2">
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
                    <p className="font-normal text-sm text-gray-500">
                        React - Javascript - Tailwind CSS
                    </p>

                </article>

            </section>
        </main >
    );


}