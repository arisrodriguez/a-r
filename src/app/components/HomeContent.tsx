"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdEmail } from "react-icons/md";


export default function Home() {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mx-auto max-w-[700px] flex flex-col items-center justify-center gap-3 px-8 py-3 md:px-6 mt-20">
            {/* sección de presentación */}
            <section
                aria-labelledby="presentacion-heading"
                className="flex flex-col items-center text-center px-4"
            >
                {/* Mi Bio */}
                <motion.h1
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
                    className="font-bold text-neutral-800 text-4xl">
                    ¡Hola, soy Aristides!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
                    className="font-semibold text-gray-500 text-2xl mt-3">
                    A veces construyo cosas.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20, rotateX: -5 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
                    className="font-normal text-gray-500 text-base mt-6 max-w-2xl">
                    Soy desarrollador de software en Panamá y creo soluciones web con un enfoque centrado en el diseño. En mi tiempo libre, practico atletismo y disfruto mantenerme activo mientras sigo aprendiendo y creciendo en el mundo de la tecnología.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
                    className="font-normal text-gray-500 text-base mt-2">
                    Últimamente he estado trabajando con tecnologías como{" "}
                    <span className="text-neutral-900 font-medium">React</span>,{" "}
                    <span className="text-neutral-900 font-medium">Next.js</span>,{" "}
                    <span className="text-neutral-900 font-medium">JavaScript</span> y{" "}
                    <span className="text-neutral-900 font-medium">Tailwind CSS</span>.
                </motion.p>

                {/* Botón para el correo */}
                <motion.a
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
                    href="mailto:izzat1029@hotmail.com"
                    title=""
                    aria-label="correo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-base w-fit mx-auto flex items-center justify-center gap-2 px-6 py-4 mt-12 text-neutral-900 border border-neutral-900 rounded-lg hover:bg-neutral-900 hover:text-gray-100 transition-colors  duration-300 ease-in-out"
                >
                    <MdEmail className="text-2xl" />
                    ¡Escríbeme!
                </motion.a>
            </section>


            {/* sección de proyectos */}
            <section aria-labelledby="proyectos-heading" className="mt-20">
                <h2 className="font-medium text-xl text-gray-500 --font-geist-sans">/ Destacados</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {[
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
                    ].map((proyecto, i) => (
                        <motion.div
                            key={proyecto.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.1 * i, duration: 0.6, ease: "easeOut" }}
                        >
                            <Link href={proyecto.Link}>
                                <article className="h-full border border-neutral-900 rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
                                    <h3 className="text-lg font-semibold text-neutral-900">
                                        {proyecto.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {proyecto.desc}
                                    </p>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div >
    );
}    