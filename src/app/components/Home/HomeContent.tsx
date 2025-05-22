"use client";
import { motion } from "framer-motion";
import HomeHeader from "./HomeHeader";
import HomeProjects from "./HomeProjects";

export default function HomeContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mx-auto max-w-[700px] flex flex-col items-center justify-center gap-3 px-8 py-3 md:px-6 mt-16"
        >
            <HomeHeader />
            <HomeProjects />
        </motion.div>
    );
}
