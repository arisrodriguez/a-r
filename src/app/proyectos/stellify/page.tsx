import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";

export const metadata: Metadata = {
    title: "Stellify | Aristides Rodríguez",
    description: "Stellify crea constelaciones únicas del cielo según el día y lugar en que comenzó tu historia.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function StellifyPage() {
    return (
        <main className="max-w-[700px] mx-auto px-8 py-8 mt-16">
            <h1 className="text-3xl font-bold text-neutral-800 dark:text-gray-100">Stellify</h1>
            <div className="space-y-4 mt-4 text-gray-600 dark:text-neutral-400">
                <p className="">
                    Stellify es una aplicación web que convierte momentos únicos de la vida en representaciones visuales del cielo estrellado. A través de la fecha, la hora y la ubicación geográfica de un evento importante, Stellify genera una constelación personalizada que muestra cómo se veía el cielo exactamente en ese instante.
                </p>
                <p>
                    Ya sea el día en que conociste a alguien especial, una boda, un reencuentro, un nacimiento o cualquier otra ocasión memorable, la app crea una imagen celestial que puedes guardar, descargar o compartir.
                </p>
                <p className="dark:text-gray-100"><strong>¿Cómo usar Stellify?</strong></p>
                <ul className="list-disc ml-6">
                    <li><strong>Personaliza tu momento especial:</strong> Elige la fecha y el lugar donde comenzó tu historia, y agrega un título y una breve descripción para hacerlo aún más único.</li>
                    <li><strong>Genera tu constelación:</strong> Usamos datos astronómicos reales para mostrar cómo se veía el cielo esa noche.</li>
                    <li><strong>Descarga tu constelación:</strong> Descarga tu constelación en alta calidad para compartirla o convertirla en un regalo.
                    </li>
                </ul>
            </div>

            {/* Banner del proyecto */}
            <div className="my-6">
                <Image
                    src="/images/portada-stellify.webp"
                    alt="Banner de MacroFit"
                    width={636}
                    height={424}
                    quality={85}
                    className="rounded-lg shadow-md"
                    sizes="(max-width: 768px) 100vw, 636px"
                    priority
                />
            </div>

            <div className="text-gray-600 mt-4 space-y-4">
                <h2 className="text-xl font-semibold  text-neutral-900 dark:text-gray-100">¿Cómo nació este proyecto?</h2>
                <div className="dark:text-neutral-400 space-y-4">
                    <p>
                        La idea de Stellify surgió de una necesidad muy humana: guardar los momentos importantes de una forma que trascienda lo cotidiano. En una conversación sobre lo rápido que pasa el tiempo y lo fácil que es olvidar detalles de días especiales, nació la inquietud de crear algo que permitiera conmemorar instantes únicos de forma visual y significativa. ¿Qué mejor que el cielo eterno, vasto y lleno de simbolismo para representar un recuerdo?
                    </p>
                    <p>
                        Inspirado por detalles personales y experiencias compartidas con personas cercanas, Stellify fue concebido como un regalo emocional. No solo para parejas, sino también para quienes quieren honrar un vínculo con un familiar, un amigo o incluso un momento de crecimiento personal. La meta era crear algo más que una imagen bonita: algo que conecte con el corazón y evoque un sentimiento real al verlo.
                    </p>
                    <p>
                        En esencia, Stellify es un proyecto nacido desde la empatía y el deseo de crear belleza con propósito. Es una forma de regalar memoria, nostalgia y significado. Y sobre todo, es una invitación a detenerse, mirar al cielo, y recordar por qué ese día, en ese lugar, todo cambió.
                    </p>
                </div>
            </div>

            {/* Footer del proyecto */}
            <h2 className="text-xl font-semibold text-neutral-900
            dark:text-gray-100 mt-6 mb-2">Tecnologías usadas</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-neutral-400">
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
                    className="flex gap-2 items-center px-4 py-2 border border-neutral-900 text-neutral-900
                    dark:border-gray-100 dark:text-gray-100  hover:bg-neutral-100
                    dark:hover:bg-transparent rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <IoArrowBackOutline />
                    Volver atras
                </Link>

                <a
                    href="https://github.com/arisrodriguez/stellify"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver en GitHub"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800
                    dark:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <FaGithub className="text-lg" />
                    Ver en GitHub
                </a>
                <a
                    href="https://stellify-weld.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver en Vercel"
                    className="flex gap-2 items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 
                    dark:bg-neutral-800
                    hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <FiArrowUpRight className="text-xl" />
                    Ver en Vercel
                </a>
            </div>
        </main>
    );
}
