"use client";
import { motion } from "framer-motion";

export default function AboutHeader() {
    return (
        <>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.13, duration: 0.6, ease: "easeInOut" }}
                className="font-bold text-neutral-800 dark:text-gray-100 text-3xl"
            >
                Sobre mí
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26, duration: 0.6, ease: "easeInOut" }}
                className="font-medium text-base text-gray-500 dark:text-neutral-400"
            >
                Un poco de mi vida
            </motion.p>
        </>
    );
}
