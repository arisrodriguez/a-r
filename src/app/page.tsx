import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="mx-auto max-w-[700px] flex flex-col items-center justify-center gap-3 px-8 py-3 md:px-6 mt-20">
      {/* sección de presentación */}
      <section
        aria-labelledby="presentacion-heading"
        className="flex flex-col items-center text-center px-4"
      >
        {/* Mi Bio */}
        <h1 className="font-bold text-neutral-800 text-4xl --font-geist-sans">
          ¡Hola, soy Aristides!
        </h1>

        <p className="font-semibold text-gray-500 text-2xl --font-geist-sans mt-3">
          A veces construyo cosas.
        </p>

        <p className="font-normal text-gray-500 text-base --font-geist-sans mt-6 max-w-2xl">
          Soy desarrollador de software en Panamá y creo soluciones web con un enfoque centrado en el diseño. En mi tiempo libre, practico atletismo y disfruto mantenerme activo mientras sigo aprendiendo y creciendo en el mundo de la tecnología.
        </p>

        <p className="font-normal text-gray-500 text-base --font-geist-sans mt-2">
          Últimamente he estado trabajando con tecnologías como{" "}
          <span className="text-sky-400 font-medium">React</span>,{" "}
          <span className="text-black dark:text-white font-medium">Next.js</span>,{" "}
          <span className="text-yellow-400 font-medium">JavaScript</span> y{" "}
          <span className="text-cyan-500 font-medium">Tailwind CSS</span>.
        </p>

        {/* Botón para el correo */}
        <a
          href="mailto:izzat1029@hotmail.com"
          title=""
          aria-label="correo"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-base w-fit mx-auto flex items-center justify-center gap-2 mt-12 text-neutral-900 border border-neutral-900 rounded-lg px-6 py-4 hover:bg-neutral-900 hover:text-gray-100 transition-colors duration-300 ease-in-out"
        >
          <MdEmail className="text-2xl" />
          ¡Escríbeme!
        </a>
      </section>


      {/* sección de proyectos */}
      <section aria-labelledby="proyectos-heading" className="mt-20">
        <h2 className="font-medium text-xl text-gray-500 --font-geist-sans">/ Fijados</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <Link href="/proyectos/hermes" className="flex-1">
            <article className="h-full border border-neutral-900 rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
              <h3 className="text-lg font-semibold text-neutral-900">
                Hermes App
              </h3>
              <p className="text-sm  text-gray-500 mt-2">
                Optimiza tu rendimiento calculando ritmos de carrera personalizados para entrenamientos y competencias.
              </p>
            </article>
          </Link>

          <Link href="/proyectos/macrofit" className="flex-1">
            <article className="h-full border border-neutral-900 rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
              <h3 className="text-lg font-semibold text-neutral-900">
                MacroFit
              </h3>
              <p className="text-sm text-gray-500 mt-2">Calcula tus macronutrientes según tu peso y objetivo fitness para una nutrición personalizada.</p>
            </article>
          </Link>

          <Link href="/proyectos/conferencias-bahais-panama" className="flex-1">
            <article className="h-full border border-neutral-900 rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
              <h3 className="text-lg font-semibold text-neutral-900">Conferencias Bahá’ís de Panamá</h3>
              <p className="text-sm text-gray-500 mt-2">Un espacio para explorar la unidad humana y construir juntos una sociedad más espiritual y solidaria.</p>
            </article>
          </Link>

        </div> {/* Fin de la grid */}
      </section>
    </main>
  );
}
