"use client";
import { motion } from "framer-motion";

export default function AboutStory() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.39, duration: 0.6, ease: "easeInOut" }}
        >
            <h2 className="font-medium text-xl text-gray-500 dark:text-neutral-400 mb-8">/ Mi historia</h2>
            <p className="font-normal text-base text-gray-900 dark:text-gray-100">
                Mi interés por la programación nació mientras estudiaba Ingeniería Electromecánica. Una materia de programación despertó una pasión que no esperaba descubrir, y fue ese momento el que me llevó a cambiarme a la Facultad de Ingeniería en Sistemas para dedicarme al desarrollo de software.
            </p>
            <p className="mt-4 font-normal text-base text-gray-900 dark:text-gray-100">
                Mi pasión por la programación comenzó mientras estudiaba la carrera de Ingeniería Electromecánica. En ese tiempo cursé una materia de programación y, para mi sorpresa, no solo me gustó mucho, sino que se me daba bastante bien. Ese descubrimiento despertó algo en mí, y fue lo que me llevó a tomar una gran decisión: cambiarme a la Facultad de Ingeniería en Sistemas.
            </p>
            <p className="mt-4 font-normal text-base text-gray-900 dark:text-gray-100">
                Más allá del trabajo, también dedico parte de mi tiempo al servicio comunitario junto a jóvenes de mi comunidad, promoviendo iniciativas basadas en la unidad, el aprendizaje y el servicio. Cuando no estoy programando, suelo estar entrenando atletismo, en el gimnasio o disfrutando de la naturaleza.
            </p>
        </motion.div>
    );
}
