"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export default function AboutContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mx-auto max-w-[700px] px-8 py-3 md:px-6 mt-20">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
                className="font-bold text-neutral-800 text-3xl">Sobre mí</motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
                className="font-medium text-base text-gray-500">Un poco de mi vida</motion.p>

            {/* Sección de fotos sobre mi */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="flex items-center justify-center gap-4 mx-auto py-18">
                <img
                    src="/images/runner-mode.webp"
                    alt="Runner Mode"
                    className="hidden sm:block rounded-xl rotate-3 shadow-xl transition-transform duration-300 hover:scale-105"
                />
                <img
                    src="/images/formal-vibes.webp"
                    alt="Formal Vibes"
                    className="rounded-xl rotate-[-2deg] shadow-xl transition-transform duration-300 hover:scale-105"
                />
                <img
                    src="/images/camp-vibes.webp"
                    alt="Camp Vibes"
                    className="hidden md:block rounded-xl rotate-3 shadow-xl transition-transform duration-300 hover:scale-105"
                />
            </motion.div>


            {/* Encabezado de la sección de presentación */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="font-medium text-xl text-gray-500 mb-8">/ Mi historia</h2>
                <p className="font-normal text-base text-gray-900">
                    ¡Hola! Soy Aristides Rodríguez, un panameño apasionado por la tecnología y la creatividad.
                    A lo largo de mi camino profesional, me he desempeñado como desarrollador de software, especializándome en el desarrollo Front-end y diseño UI/UX.
                </p>
                <p className="mt-4 font-normal text-base text-gray-900">
                    Mi pasión por la programación comenzó mientras estudiaba la carrera de Ingeniería Electromecánica. En ese tiempo cursé una materia de programación y, para mi sorpresa, no solo me gustó mucho, sino que se me daba bastante bien. Ese descubrimiento despertó algo en mí, y fue lo que me llevó a tomar una gran decisión: cambiarme a la Facultad de Ingeniería en Sistemas.
                </p>
                <p className="mt-4 font-normal text-base text-gray-900">
                    Pero mi vida no gira solo en torno al código. También tengo el privilegio de acompañar a un grupo de jóvenes en mi comunidad, donde juntos buscamos soluciones a los problemas del barrio a través del servicio desinteresado, la unidad y el amor a Dios.
                </p>
                <p className="mt-4 font-normal text-base text-gray-900">
                    Cuando no estoy en mi escritorio, puedes encontrarme entrenando en el gimnasio o en la pista de atletismo, compitiendo para Titans Running Team, disfrutando de la naturaleza o disfrutando de una buena serie o película.
                </p>

            </motion.div>

            {/* sección de redes sociales */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-18">
                <h2 className="font-medium text-xl text-gray-500 --font-geist-sans mb-8">/ Conectar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <a
                        href="mailto:izzat1029@hotmail.com"
                        className="text-neutral-900 border border-neutral-900 h-12 rounded-lg flex items-center justify-between px-4 transition-all duration-300 ease-in-out hover:bg-neutral-100"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Correo"
                    >
                        <div className="flex items-center gap-2">
                            <MdEmail className="text-xl" />
                            <span className="font-normal text-base --font-geist-sans">Correo</span>
                        </div>
                        <FiArrowUpRight className="text-xl" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/aristides-rodr%C3%ADguez/"
                        className="text-neutral-900 border border-neutral-900 h-12 rounded-lg flex items-center justify-between px-4 transition-all duration-300 ease-in-out hover:bg-neutral-100"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <div className="flex items-center gap-2">
                            <FaLinkedin className="text-xl" />
                            <span className="font-normal text-base --font-geist-sans">Linkedin</span>
                        </div>
                        <FiArrowUpRight className="text-xl" />
                    </a>

                    <a
                        href="https://github.com/arisrodriguez"
                        className="text-neutral-900 border border-neutral-900 h-12 rounded-lg flex items-center justify-between px-4 transition-all duration-300 ease-in-out hover:bg-neutral-100"
                    >
                        <div className="flex items-center gap-2">
                            <FaGithub className="text-xl" />
                            <span className="font-normal text-base --font-geist-sans">GitHub</span>
                        </div>
                        <FiArrowUpRight className="text-xl" />
                    </a>

                    <a
                        href="https://discord.gg/uRRk3BBPgq"
                        className="group text-neutral-900 border border-neutral-900 h-12 rounded-lg flex items-center justify-between px-4 transition-all duration-300 ease-in-out hover:bg-neutral-100"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <div className="flex items-center gap-2">
                            <FaDiscord className="text-xl" />
                            <span className="font-normal text-base --font-geist-sans">Discord</span>
                        </div>
                        <FiArrowUpRight className="text-xl" />
                    </a>

                    <a
                        href="https://instagram.com/soyizzat/"
                        className="group text-neutral-900 border border-neutral-900 h-12 rounded-lg flex items-center justify-between px-4 transition-all duration-300 ease-in-out hover:bg-neutral-100"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <div className="flex items-center gap-2">
                            <FaInstagram className="text-xl" />
                            <span className="font-normal text-base --font-geist-sans">Instagram</span>
                        </div>
                        <FiArrowUpRight className="text-xl" />
                    </a>

                    <a
                        href="https://x.com/soyizzat"
                        className="group text-neutral-900 border border-neutral-900 h-12 rounded-lg flex items-center justify-between px-4 transition-all duration-300 ease-in-out hover:bg-neutral-100"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <div className="flex items-center gap-2">
                            <RiTwitterXFill className="text-xl" />
                            <span className="font-normal text-base --font-geist-sans">Twitter</span>
                        </div>
                        <FiArrowUpRight className="text-xl" />
                    </a>


                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-18">
                <h2 className="font-medium text-xl text-gray-500 mb-8">/ Experiencia</h2>
                <p className="font-normal text-base text-gray-900">
                    Me especializo en React, desarrollo web, UI/UX y diseño de productos. Siempre estoy aprendiendo cosas nuevas y buscando crecer como desarrollador. Estos son algunos de los lugares en los que he trabajado.
                </p>
                {/* Sección de experiencia laboral */}
                <div className="mt-8">

                    <ul className="flex flex-col gap-6">
                        <li>
                            <a className="flex justify-between w-3/4" href="#">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/images/AllianceDevOps.webp"
                                        alt="Logo de Alliance DevOps"
                                        width={60}
                                        height={60}
                                        quality={100}
                                        priority
                                        className="rounded-full border border-gray-300 shadow-md"
                                    />
                                    <div className="flex flex-col gap-px">
                                        <p className="text-neutral-900 text-base">Software Developer</p>
                                        <p className="text-gray-500 text-base">Freelance</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-base mt-1.5">2023 -</p>
                            </a>
                        </li>
                        {/* <li>
                            <a className="flex justify-between w-3/4" href="#">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/images/AllianceDevOps.webp"
                                        alt="Logo de Alliance DevOps"
                                        width={60}
                                        height={60}
                                        className="object-cover rounded-full border border-gray-300 shadow-md"
                                    />
                                    <div className="flex flex-col gap-px">
                                        <p className="text-neutral-900 text-base">Software Developer</p>
                                        <p className="text-gray-500 text-base">AllSafe Cibersecurity</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-base mt-1.5">2022 - 2023</p>
                            </a>
                        </li>
                        <li>
                            <a className="flex justify-between w-3/4" href="#">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/images/AllianceDevOps.webp"
                                        alt="Logo de Alliance DevOps"
                                        width={60}
                                        height={60}
                                        className="object-cover rounded-full border border-gray-300 shadow-md"
                                    />
                                    <div className="flex flex-col gap-px">
                                        <p className="text-neutral-900 text-base">Software Developer</p>
                                        <p className="text-gray-500 text-base">Alliance DevOps</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-base mt-1.5">2021 - 2022</p>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </motion.div>
        </motion.div>

    );
}
