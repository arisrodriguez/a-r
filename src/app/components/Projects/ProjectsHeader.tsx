"use client";
import { motion } from "framer-motion";

export default function ProjectsHeader() {
    return (
        <div className="mb-12">
            <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                className="font-bold text-neutral-800 text-3xl">
                Proyectos
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
                className="font-medium text-base text-gray-500">
                Mi lado creativo
            </motion.p>
        </div>
    );
}
