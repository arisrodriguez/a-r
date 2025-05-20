"use client";
import { motion } from "framer-motion";

export default function AboutStory() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        >
            <h2 className="font-medium text-xl text-gray-500 mb-8">/ Mi historia</h2>
            <p className="font-normal text-base text-gray-900">
                ¡Hola! Soy Aristides Rodríguez, un panameño apasionado por la tecnología y la creatividad.
                A lo largo de mi camino profesional, me he desempeñado como desarrollador de software, especializándome en el desarrollo Front-end y diseño UI/UX.
            </p>
            <p className="mt-4 font-normal text-base text-gray-900">
                Mi pasión por la programación comenzó mientras estudiaba la carrera de Ingeniería Electromecánica. En ese tiempo cursé una materia de programación y, para mi sorpresa, no solo me gustó mucho, sino que se me daba bastante bien. Ese descubrimiento despertó algo en mí, y fue lo que me llevó a tomar una gran decisión: cambiarme a la Facultad de Ingeniería en Sistemas.
            </p>
            <p className="mt-4 font-normal text-base text-gray-900">
                Pero mi vida no gira solo en torno al código. También tengo el privilegio de acompañar a un grupo de jóvenes en mi comunidad, donde juntos buscamos soluciones a los problemas del barrio a través del servicio desinteresado, la unidad y el amor a Dios.
            </p>
            <p className="mt-4 font-normal text-base text-gray-900">
                Cuando no estoy en mi escritorio, puedes encontrarme entrenando en el gimnasio o en la pista de atletismo, compitiendo para Titans Running Team, disfrutando de la naturaleza o de una buena serie o película.
            </p>
        </motion.div>
    );
}
