import type { Metadata } from "next";
import { FaExternalLinkAlt, FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export const metadata: Metadata = {
    title: "Acerca de | Aristides Rodríguez",
    description: "Conoce a Aristides Rodríguez, desarrollador de software panameño, apasionado por el Front-end, el diseño UX/UI y el impacto social. Descubre su historia, valores y lo que lo inspira a crear con propósito.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function AcercadePage() {
    return (
        <main className="mx-auto max-w-[700px] px-8 py-3 md:px-6 mt-20">
            <h1 className="font-bold text-neutral-800 text-3xl --font-geist-sans">Un vistazo sobre mí</h1>

            <div className="mt-8">
                <h2 className="font-medium text-2xl text-gray-500 --font-geist-sans">/ Mi historia</h2>
                <p className="mt-2 font-normal text-base text-gray-800 --font-geist-sans">
                    ¡Hola! Soy Aristides Rodríguez, un panameño apasionado por la tecnología y la creatividad.
                    A lo largo de mi camino profesional, me he desempeñado como desarrollador de software, especializándome en el desarrollo Front-end y diseño UI/UX.
                </p>
                <p className="mt-4 font-normal text-base text-gray-800 --font-geist-sans">
                    Mi pasión por la programación comenzó mientras estudiaba la carrera de Ingeniería Electromecánica. En ese tiempo cursé una materia de programación y, para mi sorpresa, no solo me gustó mucho, sino que se me daba bastante bien. Ese descubrimiento despertó algo en mí, y fue lo que me llevó a tomar una gran decisión: cambiarme a la Facultad de Ingeniería en Sistemas.
                </p>
                <p className="mt-4 font-normal text-base text-gray-800 --font-geist-sans">
                    Pero mi vida no gira solo en torno al código. También tengo el privilegio de acompañar a un grupo de jóvenes en mi comunidad, donde juntos buscamos soluciones a los problemas del barrio a través del servicio desinteresado, la unidad y el amor a Dios.
                </p>
                <p className="mt-4 font-normal text-base text-gray-800 --font-geist-sans">
                    Cuando no estoy en mi escritorio, puedes econtrarme entrenando en el gimnasio o en la pista de atletismo, compitiendo para Titans Running Team, disfrutando de la naturaleza o disfrutando de una buena serie o película.
                </p>

            </div>

            {/* sección de redes sociales */}
            <div className="mt-18">
                <h2 className="font-medium text-2xl text-gray-500 --font-geist-sans">/ Conectar</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

                    <a
                        href="mailto:izzat1029@hotmail.com"
                        className="bg-gray-100 hover:bg-gray-200 h-12 rounded-lg flex items-center justify-between px-4 transition-colors duration-300 ease-in-out"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Correo"
                    >
                        <div className="flex items-center gap-2 text-neutral-800">
                            <MdEmail className="text-2xl" />
                            <span className="font-normal text-lg --font-geist-sans">Correo</span>
                        </div>
                        <FaExternalLinkAlt className="text-xl text-neutral-800" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/aristides-rodr%C3%ADguez/"
                        className="bg-gray-100 hover:bg-gray-200 h-12 rounded-lg flex items-center justify-between px-4 transition-colors duration-300 ease-in-out"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <div className="flex items-center gap-2 text-neutral-800">
                            <FaLinkedin className="text-2xl" />
                            <span className="font-normal text-lg --font-geist-sans">Linkedin</span>
                        </div>
                        <FaExternalLinkAlt className="text-xl text-neutral-800" />
                    </a>

                    <a
                        href="https://github.com/arisrodriguez"
                        className="bg-gray-100 hover:bg-gray-200 h-12 rounded-lg flex items-center justify-between px-4 transition-colors duration-300 ease-in-out"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <div className="flex items-center gap-2 text-neutral-800">
                            <FaGithub className="text-2xl" />
                            <span className="font-normal text-lg --font-geist-sans">GitHub</span>
                        </div>
                        <FaExternalLinkAlt className="text-xl text-neutral-800" />
                    </a>

                    <a
                        href="https://instagram.com/soyizzat/"
                        className="bg-gray-100 hover:bg-gray-200 h-12 rounded-lg flex items-center justify-between px-4 transition-colors duration-300 ease-in-out"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <div className="flex items-center gap-2 text-neutral-800">
                            <FaDiscord className="text-2xl" />
                            <span className="font-normal text-lg --font-geist-sans">Discord</span>
                        </div>
                        <FaExternalLinkAlt className="text-xl text-neutral-800" />
                    </a>

                    <a
                        href="https://instagram.com/soyizzat/"
                        className="bg-gray-100 hover:bg-gray-200 h-12 rounded-lg flex items-center justify-between px-4 transition-colors duration-300 ease-in-out"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <div className="flex items-center gap-2 text-neutral-800">
                            <FaInstagram className="text-2xl" />
                            <span className="font-normal text-lg --font-geist-sans">Instagram</span>
                        </div>
                        <FaExternalLinkAlt className="text-xl text-neutral-800" />
                    </a>

                    <a
                        href="https://instagram.com/soyizzat/"
                        className="bg-gray-100 hover:bg-gray-200 h-12 rounded-lg flex items-center justify-between px-4 transition-colors duration-300 ease-in-out"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <div className="flex items-center gap-2 text-neutral-800">
                            <RiTwitterXFill className="text-2xl" />
                            <span className="font-normal text-lg --font-geist-sans">Twitter</span>
                        </div>
                        <FaExternalLinkAlt className="text-xl text-neutral-800" />
                    </a>


                </div>
            </div>

            <div className="mt-18">
                <h2 className="font-medium text-2xl text-gray-500 --font-geist-sans">/ Experiencia</h2>

            </div>
        </main>
    );
}