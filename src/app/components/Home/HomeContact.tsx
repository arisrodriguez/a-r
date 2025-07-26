"use client";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

export default function HomeContact() {
    return (
        <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.39, duration: 0.6, ease: "easeInOut" }}
            href="mailto:aris.devx@gmail.com"
            title="correo"
            aria-label="correo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-base w-fit mx-auto flex items-center justify-center gap-2 px-6 py-4 mt-12 rounded-lg border border-neutral-900 text-neutral-900   hover:bg-neutral-800 hover:text-gray-100 dark:border-neutral-100 dark:text-neutral-100 dark:hover:border-neutral-800 transition-colors  duration-300 ease-in-out"
        >
            <MdEmail className="text-2xl" />
            ¡Escríbeme!
        </motion.a>
    );
}
