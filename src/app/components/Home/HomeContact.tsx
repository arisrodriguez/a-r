"use client";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

export default function HomeContact() {
    return (
        <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.35, ease: "easeInOut" }}
            href="mailto:izzat1029@hotmail.com"
            title="correo"
            aria-label="correo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-base w-fit mx-auto flex items-center justify-center gap-2 px-6 py-4 mt-12 text-neutral-900 border border-neutral-900 rounded-lg hover:bg-neutral-900 hover:text-gray-100 transition-colors  duration-300 ease-in-out"
        >
            <MdEmail className="text-2xl" />
            ¡Escríbeme!
        </motion.a>
    );
}
