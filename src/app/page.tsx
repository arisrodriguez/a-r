import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="mx-auto max-w-[700px] flex flex-col items-center justify-center gap-3 px-8 py-3 md:px-6 mt-20">
      {/* sección de presentación */}
      <section
        aria-labelledby="presentacion-heading"
        className="flex flex-col items-center text-center px-4"
      >
        <h1 className="font-bold text-neutral-800 text-4xl --font-geist-sans">
          ¡Hola, soy Aristides!
        </h1>

        <p className="font-semibold text-gray-500 text-2xl --font-geist-sans mt-3">
          A veces construyo cosas.
        </p>

        <p className="font-normal text-gray-500 text-lg --font-geist-sans mt-6 max-w-2xl">
          Soy desarrollador de software en Panamá y creo soluciones web con un enfoque centrado en el diseño. En mi tiempo libre, practico atletismo y disfruto mantenerme activo mientras sigo aprendiendo y creciendo en el mundo de la tecnología.
        </p>

        <p className="font-normal text-gray-500 text-lg --font-geist-sans mt-2">
          Aquí hay algunas tecnologías con las que he estado trabajando:
        </p>

        <ul className="flex flex-wrap justify-center gap-4 mx-auto mt-2 max-w-md">
          <li className="flex items-center gap-2">
            <FaReact className="text-sky-400 w-6 h-6" />
            React
          </li>
          <li className="flex items-center gap-2">
            <RiNextjsFill className="text-black dark:text-white w-6 h-6" />
            NextJS
          </li>
          <li className="flex items-center gap-2">
            <FaJsSquare className="text-yellow-400 w-6 h-6" />
            JavaScript
          </li>
          <li className="flex items-center gap-2">
            <RiTailwindCssFill className="text-sky-300 w-6 h-6" />
            Tailwind CSS
          </li>
        </ul>

        <a
          href="mailto:izzat1029@hotmail.com"
          title="correo"
          aria-label="correo"
          className="w-fit mx-auto flex items-center justify-center gap-2 border border-neutral-900 rounded-lg px-4 py-4 hover:bg-neutral-900 hover:text-gray-100 text-base mt-12 transition-colors duration-300 ease-in-out"
        >
          <MdEmail className="text-2xl" />
          ¡Escríbeme!
        </a>
      </section>


      {/* sección de proyectos */}
      <section aria-labelledby="proyectos-heading" className="mt-20">
        <h2 className="font-medium text-2xl text-gray-500 --font-geist-sans">/ Proyectos</h2>

        <div className="flex flex-col md:flex-row  gap-6 md:gap-3 mt-6">

          <Link href="/proyectos/hermes" className="flex-1">
            <article className="h-full border rounded-lg p-4 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
              <h3 className="text-lg font-semibold text-neutral-800">
                Hermes App
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Optimiza tu rendimiento calculando ritmos de carrera personalizados para entrenamientos y competencias.
              </p>
            </article>
          </Link>

          <Link href="/proyectos/macrofit" className="flex-1">
            <article className="h-full border rounded-lg p-4 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
              <h3 className="text-lg font-semibold text-neutral-800">
                MacroFit
              </h3>
              <p className="text-sm text-gray-500 mt-2">Calcula tus macronutrientes según tu peso y objetivo fitness para una nutrición personalizada.</p>
            </article>
          </Link>

          <Link href="/proyectos/conferencias-bahais-panama" className="flex-1">
            <article className="h-full border rounded-lg p-4 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
              <h3 className="text-lg font-semibold text-neutral-800">Conferencias Bahá’ís de Panamá</h3>
              <p className="text-sm text-gray-500 mt-2">Un espacio para explorar la unidad humana y construir juntos una sociedad más espiritual y solidaria.</p>
            </article>
          </Link>

        </div>
      </section>
    </main>
  );
}
