"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPhotos() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.39, duration: 0.6, ease: "easeInOut" }}
            className="flex items-center justify-center gap-4 mx-auto py-18"
        >
            <Image
                src="/images/runner-mode.webp"
                width={250}
                height={268}
                alt="Runner Mode"
                className="hidden sm:block rounded-xl rotate-3 shadow-xl transition-transform duration-300 hover:scale-105"
            />
            <Image
                src="/images/formal-vibes.webp"
                width={250}
                height={268}
                alt="Formal Vibes"
                className="rounded-xl rotate-[-2deg] shadow-xl transition-transform duration-300 hover:scale-105"
            />
            <Image
                src="/images/camp-vibes.webp"
                width={250}
                height={268}
                alt="Camp Vibes"
                className="hidden md:block rounded-xl rotate-3 shadow-xl transition-transform duration-300 hover:scale-105"
            />
        </motion.div>
    );
}
