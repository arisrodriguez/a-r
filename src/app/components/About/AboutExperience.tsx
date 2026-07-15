"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const experience = [
    {
        id: 1,
        title: "Analista de Procesos",
        company: "Acerta Seguros",
        period: "2025 -",
        logo: "/images/logo-acerta.webp",
        link: "https://acertaseguros.com/",
    },
    {
        id: 2,
        title: "Desarrollador Web",
        company: "Freelance",
        period: "2023 - 2025",
        logo: "/images/logo-mi-web.webp",
        link: "https://a-r-dev.vercel.app/",
    },
];

export default function AboutExperience() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.39, duration: 0.6, ease: "easeInOut" }}
            className="mt-16"
        >
            <h2 className="font-medium text-xl text-gray-500 dark:text-neutral-400 mb-8">/ Experiencia</h2>
            <p className="font-normal text-base text-gray-900 dark:text-gray-100">
                Me especializo en React, desarrollo web, UX/UI y diseño de productos. Siempre estoy aprendiendo cosas nuevas y buscando crecer como desarrollador. Estos son algunos de los lugares en los que he trabajado.
            </p>

            <div className="mt-8">
                {experience.map((experience) => (
                    <ul
                        key={experience.id}
                        className="flex flex-col gap-6">
                        <li className="mb-4">
                            <a className="flex w-full sm:w-3/4 items-start justify-between gap-4" href={experience.link} target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center gap-4 min-w-0 flex-1">
                                    <Image
                                        src={experience.logo}
                                        alt="Logo de la compañia"
                                        width={60}
                                        height={60}
                                        quality={100}
                                        unoptimized
                                        className="rounded-full border border-gray-300 shadow-md"
                                    />
                                    <div className="flex flex-col gap-px min-w-0">
                                        <p className="text-neutral-900 dark:text-gray-100 text-base">{experience.title}</p>
                                        <p className="text-gray-500 dark:text-neutral-400 text-base">{experience.company}</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 min-w-[90px] text-right pt-1">
                                    <p className="text-gray-500 dark:text-neutral-400 text-base">{experience.period}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                ))}
            </div>
        </motion.div>
    );
}
