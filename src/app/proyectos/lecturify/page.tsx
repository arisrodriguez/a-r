import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";

export const metadata: Metadata = {
    title: "Lecturify | Aristides Rodríguez",
    description: "Organiza tus libros por estado: por leer, leyendo o leídos. Todo en una sola aplicación.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function LecturifyPage() {
    return (
        <main className="max-w-[700px] mx-auto px-8 py-8 mt-20">
            <h1 className="text-3xl font-bold text-neutral-800">Lecturify</h1>
            <div className="space-y-4 mt-4 text-gray-600">
                <p className="">
                    Lecturify es una aplicación pensada para ayudarte a organizar tus hábitos de lectura de forma clara y eficiente. Podrás ver el total de libros que has agregado, cuántos quieres leer, cuáles estás leyendo actualmente y cuáles ya has terminado. Utiliza la API de Google Books para acceder a una amplia base de datos de títulos y facilita el registro, actualización y seguimiento de tus libros y hábitos de lectura.

                </p>
                <p>
                    Es ideal para lectores que desean mantener un registro ordenado y motivador de su progreso.
                </p>
                {/* <p>
                    Cuenta con una interfaz simple, intuitiva y responsiva, ideal para acceder desde cualquier dispositivo.
                </p> */}
                <p>
                    Actualmente, el proyecto se encuentra en fase de diseño, trabajando en la planificación visual de cada vista y funcionalidad antes de pasar al desarrollo completo.
                </p>
            </div>

            {/* Banner del proyecto */}
            <div className="my-6">
                <Image
                    src="/images/portada-lecturify.webp"
                    alt="Banner de Lecturify"
                    width={636}
                    height={424}
                    quality={100}
                    className="rounded-lg shadow-md"
                    unoptimized
                />
            </div>

            <div className="text-gray-600 mt-4 space-y-4">
                <h2 className="text-xl font-semibold  text-neutral-900">¿Porque hice este proyecto?</h2>
                <p>
                    Este proyecto nació con la intención de practicar la integración de APIs externas, especialmente con la Google Books API, y de seguir profundizando en el uso de Next.js como framework principal. También quise fortalecer mis habilidades en la implementación de operaciones CRUD completas y en la construcción de interfaces centradas en la experiencia de usuario.
                </p>
                <p>
                    Para ello, estoy utilizando Figma como herramienta principal de diseño, estructurando cada pantalla y componente con un enfoque claro y funcional.
                </p>
                <p>
                    Además, es una oportunidad para afianzar mis habilidades como desarrollador fullstack y aplicar buenas prácticas en diseño, estructura y experiencia de usuario.
                </p>
                <p>
                    Lecturify es un proyecto con doble propósito: mejorar como desarrollador y crear una herramienta útil para otras personas que desean leer más y de manera organizada.
                </p>
            </div>

            {/* Footer del proyecto */}
            <h2 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">Tecnologías usadas</h2>
            <ul className="list-disc list-inside text-gray-600">
                <li>Next.js – Framework para React con rutas automáticas y alto rendimiento.</li>
                <li>JavaScript – Lenguaje principal para la lógica del sitio.</li>
                <li>Tailwind CSS – Framework para diseño rápido y responsive.</li>
                <li>Framer Motion – Librería para animaciones fluidas y modernas en React.</li>
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
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out pointer-events-none"
                >
                    <FaGithub className="text-lg" />
                    Ver en GitHub
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out pointer-events-none"
                >
                    <FiArrowUpRight className="text-xl" />
                    Ver en Vercel
                </a>
            </div>
        </main>
    );
}
