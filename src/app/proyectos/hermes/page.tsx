import { Metadata } from "next";

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
                <li>React / Next.js</li>
                <li>Tailwind CSS</li>
                <li>Fórmulas personalizadas para pace</li>
            </ul>

            <a
                href="https://github.com/usuario/hermes-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 transition"
            >
                Ver en GitHub
            </a>
        </main>
    );
}
