"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            const isDark = savedTheme === "dark";
            setIsDarkMode(isDark);
            document.documentElement.classList.toggle("dark", isDark);
        } else {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const initialTheme = mediaQuery.matches;
            setIsDarkMode(initialTheme);
            document.documentElement.classList.toggle("dark", initialTheme);

            const handleChange = (e: MediaQueryListEvent) => {
                setIsDarkMode(e.matches);
                document.documentElement.classList.toggle("dark", e.matches);
            };

            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);

        if (newDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const pathname = usePathname();
    const navItems = [
        { name: "Inicio", href: "/" },
        { name: "Sobre mí", href: "/sobre-mi" },
        { name: "Proyectos", href: "/proyectos" },
    ];

    return (
        <header className="w-full md:mt-6 px-4 md:px-6">
            <nav className="mx-auto flex max-w-[700px] justify-between items-center gap-3 px-4 py-3 md:px-6">

                {/* Logo solo visible en desktop */}
                <Link href="/" className="hidden md:block">
                    <Image
                        src={isDarkMode ? "/images/logo-white.svg" : "/images/logo-black.svg"}
                        alt="Logo a-r"
                        width={25}
                        height={25}
                    />
                </Link>

                {/* Navegación y botón separados */}
                <div className="flex flex-1 items-center justify-between md:justify-end gap-2">

                    {/* Links de navegación */}
                    <div className="flex gap-1 md:gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-base font-normal relative rounded-lg px-3 py-1.5 transition-colors duration-300 ease-in-out
                                ${pathname === item.href
                                        ? "bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-gray-100"
                                        : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Botón Dark Mode */}
                    <button
                        className="h-8 w-8 md:ml-5 flex items-center justify-center cursor-pointer"
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? (
                            <FiMoon className="text-gray-100" />
                        ) : (
                            <FiSun className="text-gray-900" />
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
}
