import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";

export const metadata: Metadata = {
    title: "Conferencias | Aristides Rodríguez",
    description: "Explora las conferencias globales Bahá’ís: espacios de unidad, diálogo y acción para construir comunidades más prósperas.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function ConferenciasPage() {
    return (
        <main className="max-w-[700px] mx-auto px-8 py-8 mt-20">
            <h1 className="text-3xl font-bold text-neutral-800"> Conferencias Bahá’ís de Panamá</h1>
            <div className="space-y-4 mt-4 text-gray-600">
                <p>
                    Es un sitio web informativo diseñado para presentar las Conferencias Bahá’ís Globales realizadas en distintas regiones de Panamá. En él se puede conocer el propósito de estas conferencias, dirigidas tanto a la comunidad en general como a jóvenes, junto con las fechas, lugares y temas clave.
                </p>
                <p>
                    El sitio está optimizado para ser claro, accesible y fácil de navegar desde cualquier dispositivo. Además, incluye un botón de llamada a la acción (CTA) que redirige a un formulario en línea para facilitar la inscripción a los eventos.
                </p>
            </div>

            {/* Banner del proyecto */}
            <div className="my-6">
                <Image
                    src="/images/portada-conferencias.webp"
                    alt="Banner de Conferencias"
                    width={636}
                    height={424}
                    quality={100}
                    className="rounded-lg shadow-md"
                    unoptimized
                />
            </div>

            <div className="text-gray-600 mt-4 space-y-4">
                <h2 className="text-xl font-semibold  text-neutral-900">¿Por qué hicimos este sitio?</h2>
                <p>
                    Este proyecto nació como una colaboración voluntaria para apoyar al Consejo Regional de Oriente y Occidente de Panamá, con el fin de difundir y organizar de manera más efectiva una serie de conferencias dirigidas tanto a la comunidad en general como a jóvenes. La idea era contar con una herramienta centralizada, moderna y visualmente amigable que ayudara a comunicar el mensaje de las conferencias y facilitara el proceso de inscripción.
                </p>
                <p>
                    Desarrollar esta plataforma representó una oportunidad para poner mis habilidades técnicas al servicio de una causa con impacto social y espiritual, permitiendo que más personas accedan fácilmente a la información y puedan participar activamente en estos espacios de reflexión y unidad.
                </p>
            </div>

            {/* Footer del proyecto */}
            <h2 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">Tecnologías usadas</h2>
            <ul className="list-disc list-inside text-gray-600">
                <li>React – Biblioteca para interfaces basadas en componentes.</li>
                <li>JavaScript – Lenguaje principal para la lógica del sitio.</li>
                <li>Tailwind CSS – Framework para diseño rápido y responsive.</li>
                <li>Vercel – Despliegue continuo e integración con Git.</li>
            </ul>

            {/* Sección de botones */}
            <div className="flex flex-wrap gap-4 mt-6">
                <Link
                    href="/proyectos"
                    className="flex gap-2 items-center px-4 py-2 border border-neutral-900 text-neutral-900 rounded-lg hover:bg-neutral-100 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <IoArrowBackOutline />
                    Volver atras
                </Link>

                <a
                    href="https://github.com/arisrodriguez/global-bahais-conferences-panama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <FaGithub className="text-lg" />
                    Ver en GitHub
                </a>
                <a
                    href="https://conferencias-bahai-panama.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <FiArrowUpRight className="text-xl" />
                    Ver en Vercel
                </a>
            </div>
        </main>
    );
}
