"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
// import { FiSun } from "react-icons/fi";

export default function Header() {
    const pathname = usePathname();
    const navItems = [
        { name: "Inicio", href: "/" },
        { name: "Sobre mí", href: "/sobre-mi" },
        { name: "Proyectos", href: "/proyectos" },
    ];

    return (
        <header className="w-full md:mt-6 px-4 md:px-6">
            <nav className="mx-auto flex max-w-[700px] justify-center md:justify-between gap-3 px-4 py-3 md:px-6">
                <Link href="/" className="hidden md:block">
                    <Image
                        src="/images/logo-black.svg"
                        alt="Logo a-r"
                        width={25}
                        height={25}
                    />
                </Link>

                <div className="flex gap-1 md:gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-base font-normal text-gray-500 relative rounded-lg px-3 py-1.5 transition-colors duration-300 ease-in-out  ${pathname === item.href
                                ? "bg-gray-200 text-gray-900"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* <div className="flex h-8 w-8 items-center justify-center">
                    <FiSun className="text-base text-gray-900" />
                </div> */}
            </nav>
        </header>
    );
}
