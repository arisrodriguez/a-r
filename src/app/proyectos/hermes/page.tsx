import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";

export const metadata: Metadata = {
    title: "Hermes App | Aristides Rodríguez",
    description: "Optimiza tus entrenamientos con Hermes, una calculadora de ritmos para corredores basada en datos reales.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function HermesPage() {
    return (
        <main className="max-w-[700px] mx-auto px-8 py-8 mt-16">
            <h1 className="text-3xl font-bold text-neutral-800 dark:text-gray-100">Hermes App</h1>
            <div className="space-y-4 mt-4 text-gray-600 dark:text-gray-400">
                <p className="">
                    Hermes es una aplicación diseñada para llevar tu rendimiento físico al siguiente nivel. Pensada tanto para principiantes como para atletas avanzados, Hermes te ayuda a optimizar tus entrenamientos mediante el cálculo preciso de tus zonas de entrenamiento personalizadas.
                </p>
                <p>
                    Ya sea que entrenes por frecuencia cardíaca o ritmo, solo necesitas ingresar tus datos. Hermes se encargará de generar zonas específicas que te permitirán:
                </p>
                <ul className="list-disc ml-6">
                    <li>Maximizar tu rendimiento.</li>
                    <li>Mejorar tu resistencia.</li>
                    <li>Alcanzar tus metas de forma más eficiente.</li>
                </ul>
                <p>
                    Con Hermes, cada sesión de entrenamiento está respaldada por datos personalizados que impulsan tu progreso real.
                </p>
            </div>

            <div className="my-6">
                <Image
                    src="/images/portada-hermes.webp"
                    alt="Banner de Hermes"
                    width={636}
                    height={424}
                    quality={85}
                    className="rounded-lg shadow-md"
                    sizes="(max-width: 768px) 100vw, 636px"
                    priority
                />
            </div>

            <div className="text-gray-600 mt-4 space-y-4">
                <h2 className="text-xl font-semibold  text-neutral-900 dark:text-gray-100">¿Cómo nació esta idea?</h2>
                <div className="dark:text-gray-400 space-y-4">
                    <p>
                        Hermes App nació de mi pasión por el running y del deseo de ayudar a otros corredores a mejorar su rendimiento. Anteriormente utilicé una aplicación web que me ayudaba a calcular ritmos personalizados para entrenamientos y competencias, pero cuando dejó de estar disponible, decidí crear mi propia versión.
                    </p>
                    <p>
                        A partir de mi experiencia organizando mis propios planes de entrenamiento, orientando a amigos y actuando como coach a distancia, desarrollé una herramienta simple, eficiente y pensada desde la práctica real. Quería que cualquier persona, sin conocimientos técnicos, pudiera encontrar sus ritmos ideales y optimizar sus sesiones.
                    </p>
                    <p>
                        Construí Hermes App utilizando React, Tailwind CSS y JavaScript, priorizando la velocidad, la accesibilidad y una experiencia fluida.
                    </p>
                    <p>
                        Este proyecto refleja mi capacidad para convertir una necesidad personal en una solución para otros, aplicando buenas prácticas de desarrollo web y diseño centrado en el usuario.
                    </p>
                    <p>
                        Hoy Hermes App representa mi pasión por el deporte, la tecnología y la mejora continua y es una muestra de cómo un problema personal puede transformarse en una solución digital útil para otros.
                    </p>
                </div>
            </div>

            {/* Footer del proyecto */}
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-gray-100 mt-6 mb-2">Tecnologías usadas</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>React – Biblioteca para interfaces basadas en componentes.</li>
                <li>JavaScript – Lenguaje principal para la lógica del sitio.</li>
                <li>Tailwind CSS – Framework para diseño rápido y responsive.</li>
                {/* <li>Framer Motion – Librería para animaciones fluidas y modernas en React.</li> */}
                <li>Vercel – Despliegue continuo e integración con Git.</li>
            </ul>

            {/* Sección de botones */}
            <div className="flex flex-wrap gap-4 mt-6">
                <Link
                    href="/proyectos"
                    aria-label="Volver a la lista de proyectos"
                    className="flex gap-2 items-center px-4 py-2 border border-neutral-900 text-neutral-900 dark:border-gray-100 dark:text-gray-100 dark:hover:bg-transparent rounded hover:bg-neutral-100 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <IoArrowBackOutline />
                    Volver atras
                </Link>

                <a
                    href="https://github.com/arisrodriguez/hermes-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver en GitHub"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 dark:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <FaGithub className="text-lg" />
                    Ver en GitHub
                </a>
                <a
                    href="https://hermes-rc.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver en Vercel"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounde rounded hover:bg-neutral-800 dark:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <FiArrowUpRight className="text-xl" />
                    Ver en Vercel
                </a>
            </div>
        </main>
    );
}
