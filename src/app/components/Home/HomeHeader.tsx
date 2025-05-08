"use client";
import { motion } from "framer-motion";
import HomeContact from "./HomeContact";

export default function HomeHeader() {
    return (
        <section
            aria-labelledby="presentacion-heading"
            className="flex flex-col items-center text-center px-4"
        >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.7, ease: "easeInOut" }}
                className="font-bold text-neutral-800 text-4xl"
                id="presentacion-heading"
            >
                ¡Hola, soy Aristides!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
                className="font-semibold text-gray-500 text-2xl mt-3"
            >
                A veces construyo cosas.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
                className="font-normal text-gray-500 text-base mt-6"
            >
                Soy desarrollador de software en Panamá, especializado en soluciones web. En mi tiempo libre, practico atletismo y me mantengo activo mientras sigo aprendiendo.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
                className="font-normal text-gray-500 text-base mt-2"
            >
                Últimamente he estado trabajando con tecnologías como{" "}
                <span className="text-neutral-900 font-medium">React</span>,{" "}
                <span className="text-neutral-900 font-medium">Next.js</span>,{" "}
                <span className="text-neutral-900 font-medium">JavaScript</span> y{" "}
                <span className="text-neutral-900 font-medium">Tailwind CSS</span>.
            </motion.p>

            <HomeContact />
        </section>
    );
}
