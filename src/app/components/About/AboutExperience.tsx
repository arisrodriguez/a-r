"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const experience = [
    {
        id: 1,
        title: "Process Automation Developer",
        company: "Acerta Seguros",
        period: "2025 - ",
        logo: "/images/logo-acerta.webp",
        link: "https://acertaseguros.com/",
    },
    {
        id: 2,
        title: "Front-End Developer",
        company: "Alliance DevOps - Freelance",
        period: "2023 - 2025",
        logo: "/images/AllianceDevOps.webp",
        link: "https://alliancedevops.com/",
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
            <h2 className="font-medium text-xl text-gray-500 dark:neutral-400 mb-8">/ Experiencia</h2>
            <p className="font-normal text-base text-gray-900 dark:text-gray-100">
                Me especializo en React, desarrollo web, UX/UI y diseño de productos. Siempre estoy aprendiendo cosas nuevas y buscando crecer como desarrollador. Estos son algunos de los lugares en los que he trabajado.
            </p>

            <div className="mt-8">
                {experience.map((experience) => (
                    <ul
                        key={experience.id}
                        className="flex flex-col gap-6">
                        <li className="mb-4">
                            <a className="flex justify-between w-full sm:w-3/4" href={experience.link} target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={experience.logo}
                                        alt="Logo de la compañia"
                                        width={60}
                                        height={60}
                                        quality={100}
                                        unoptimized
                                        className="rounded-full border border-gray-300 shadow-md"
                                    />
                                    <div className="flex flex-col gap-px">
                                        <p className="text-neutral-900 dark:text-gray-100 text-base">{experience.title}</p>
                                        <p className="text-gray-500 dark:gray-400 text-base">{experience.company}</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 dark:gray-400 text-base mt-1.5 pl-4">{experience.period}</p>
                            </a>
                        </li>
                    </ul>
                ))}
            </div>
        </motion.div>
    );
}
