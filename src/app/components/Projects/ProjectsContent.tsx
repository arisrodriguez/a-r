"use client";
import { motion } from "framer-motion";
import ProjectsHeader from './ProjectsHeader';
import ProjectsDescription from './ProjectsDescription';
import ProjectsCards from './ProjectsCards';

export default function ProjectsContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mx-auto max-w-[700px] px-8 py-3 md:px-6 mt-16"
        >
            <ProjectsHeader />
            <ProjectsDescription />
            <ProjectsCards />
        </motion.div>
    );
}