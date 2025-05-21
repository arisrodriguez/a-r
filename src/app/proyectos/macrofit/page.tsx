import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";

export const metadata: Metadata = {
    title: "MacroFit | Aristides Rodríguez",
    description: "Calcula tus macronutrientes según tu peso y objetivo fitness para una nutrición personalizada.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function MacrofitPage() {
    return (
        <main className="max-w-[700px] mx-auto px-8 py-8 mt-20">
            <h1 className="text-3xl font-bold text-neutral-800">MacroFit</h1>
            <div className="space-y-4 mt-4 text-gray-600">
                <p className="">
                    MacroFit es una aplicación diseñada para ayudarte a alcanzar tus objetivos nutricionales de forma clara y precisa. Ya sea que quieras definir, mantener tu peso o ganar masa muscular, esta herramienta convierte tus metas en números concretos.
                </p>
                <p>
                    Solo necesitas ingresar tus datos básicos y seleccionar tu objetivo. MacroFit se encargará de calcular automáticamente la distribución ideal de tus macronutrientes diarios, permitiéndote:
                </p>
                <ul className="list-disc ml-6">
                    <li>Organizar mejor tus comidas, adaptándolas a tu objetivo.</li>
                    <li>Evitar errores comunes en tu alimentación.</li>
                    <li>Dar seguimiento real a tu progreso.</li>
                </ul>
                <p>
                    Con MacroFit, llevar una alimentación alineada a tu estilo de vida fitness es más fácil, accesible y sostenible para el día a día.
                </p>
            </div>

            {/* Banner del proyecto */}
            <div className="my-6">
                <Image
                    src="/images/portada-macrofit.webp"
                    alt="Banner de MacroFit"
                    width={636}
                    height={424}
                    quality={85}
                    className="rounded-lg shadow-md"
                />
            </div>

            <div className="text-gray-600 mt-4 space-y-4">
                <h2 className="text-xl font-semibold  text-neutral-900">¿Cómo nació este proyecto?</h2>
                <p>
                    MacroFit nació de mi afinidad con el estilo de vida fitness y mi interés por mantener una alimentación equilibrada. Siempre me ha motivado crear herramientas que puedan aportar valor real a los demás, y esta app surgió como una forma de unir esa filosofía con mi crecimiento como desarrollador.
                </p>
                <p>
                    Quise construir una aplicación sencilla pero funcional, que ayudara a las personas a calcular sus requerimientos diarios de macronutrientes según su objetivo: definir, mantener o aumentar masa muscular. Al mismo tiempo, me sirvió como ejercicio práctico para mejorar mis habilidades técnicas, enfocándome en crear una experiencia de usuario clara, útil y accesible.
                </p>
                <p>
                    Desarrollé MacroFit con React, Tailwind CSS, priorizando una interfaz intuitiva y resultados rápidos.
                </p>
                <p>
                    Más allá del código, este proyecto representa mi compromiso con crear soluciones digitales que tengan un impacto positivo —no solo para mí, sino también para quienes buscan herramientas simples que los acompañen en sus metas personales.
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
                    aria-label="Volver a la lista de proyectos"
                    className="flex gap-2 items-center px-4 py-2 border border-neutral-900 text-neutral-900 rounded-lg hover:bg-neutral-100 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <IoArrowBackOutline />
                    Volver atras
                </Link>

                <a
                    href="https://github.com/arisrodriguez/macrofit"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver en GitHub"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <FaGithub className="text-lg" />
                    Ver en GitHub
                </a>
                <a
                    href="https://macrofit-orcin.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver en Vercel"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <FiArrowUpRight className="text-xl" />
                    Ver en Vercel
                </a>
            </div>
        </main>
    );
}
