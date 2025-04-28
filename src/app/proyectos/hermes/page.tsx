import { Metadata } from "next";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";

export const metadata: Metadata = {
    title: "Aristides Rodríguez | Hermes App",
    description: "Optimiza tus entrenamientos con Hermes, una calculadora de ritmos para corredores basada en datos reales.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function HermesPage() {
    return (
        <main className="max-w-[700px] mx-auto px-8 py-8">
            <h1 className="text-3xl font-bold text-neutral-800">Hermes App</h1>
            <p className="text-gray-600 mt-4">
                Hermes es una calculadora de ritmos diseñada para corredores que desean mejorar su rendimiento con entrenamientos personalizados...
            </p>

            <div className="my-6">
                <img src="/images/hermes-1.png" alt="Pantalla principal de Hermes" className="rounded-lg shadow-md" />
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-2">Tecnologías usadas</h2>
            <ul className="list-disc list-inside text-gray-600">
                <li>React</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-6">
                <Link
                    href="/proyectos"
                    className="flex gap-2 items-center px-4 py-2 border border-neutral-900 text-neutral-900 rounded hover:bg-neutral-100 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <IoArrowBackOutline />
                    Volver atras
                </Link>

                <a
                    href="https://github.com/arisrodriguez/hermes-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <FaGithub className="text-lg" />
                    Ver en GitHub
                </a>
                <a
                    href="https://hermes-rc.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <FiArrowUpRight className="text-xl" />
                    Ver en Vercel
                </a>
            </div>
        </main>
    );
}
