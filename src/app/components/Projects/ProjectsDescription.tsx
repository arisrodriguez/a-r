import { motion } from "framer-motion";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function ProjectsDescription() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.39, duration: 0.6, ease: "easeInOut" }}
            className="space-y-4 mt-8">
            <p className="font-normal text-base text-gray-900 dark:text-gray-100">
                Estos son algunos de los proyectos en los que he invertido tiempo y esfuerzo. Cada uno refleja desafíos superados, aprendizaje constante <span role="img" aria-label="libro">📚</span> y mi compromiso con soluciones funcionales y bien diseñadas <span role="img" aria-label="objetivo">🎯</span>. ¡Te invito a explorarlos!
            </p>

            <p className="font-normal text-base text-gray-900 dark:text-gray-100 mt-2">
                A continuación, te comparto algunas de las tecnologías que he estado utilizando en estos proyectos:
            </p>

            <ul className="flex flex-wrap justify-center gap-4 mt-2 max-w-md text-neutral-800 dark:text-neutral-200" role="list" aria-label="Lista de tecnologías utilizadas"
            >
                <li className="flex items-center gap-2">
                    <FaReact className="text-sky-400 w-6 h-6" />
                    React
                </li>
                <li className="flex items-center gap-2">
                    <RiNextjsFill className="text-neutral-900 dark:text-gray-100 w-6 h-6" />
                    Next.js
                </li>
                <li className="flex items-center gap-2">
                    <FaJsSquare className="text-yellow-400 w-6 h-6" />
                    JavaScript
                </li>
                <li className="flex items-center gap-2">
                    <RiTailwindCssFill className="text-sky-300 w-6 h-6" />
                    Tailwind CSS
                </li>
            </ul>
        </motion.div>
    );
}
