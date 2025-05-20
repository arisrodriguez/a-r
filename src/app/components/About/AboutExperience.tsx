"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutExperience() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }}
            className="mt-16"
        >
            <h2 className="font-medium text-xl text-gray-500 mb-8">/ Experiencia</h2>
            <p className="font-normal text-base text-gray-900">
                Me especializo en React, desarrollo web, UI/UX y diseño de productos. Siempre estoy aprendiendo cosas nuevas y buscando crecer como desarrollador. Estos son algunos de los lugares en los que he trabajado.
            </p>

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
                                    unoptimized
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
    );
}
