"use client";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const links = [
    { href: "mailto:izzat1029@hotmail.com", icon: <MdEmail className="text-xl" />, label: "Correo" },
    { href: "https://www.linkedin.com/in/aristides-rodr%C3%ADguez/", icon: <FaLinkedin className="text-xl" />, label: "Linkedin" },
    { href: "https://github.com/arisrodriguez", icon: <FaGithub className="text-xl" />, label: "GitHub" },
    { href: "https://discord.gg/uRRk3BBPgq", icon: <FaDiscord className="text-xl" />, label: "Discord" },
    { href: "https://instagram.com/soyizzat/", icon: <FaInstagram className="text-xl" />, label: "Instagram" },
    { href: "https://x.com/soyizzat", icon: <RiTwitterXFill className="text-xl" />, label: "Twitter" },
];

export default function AboutSocialLinks() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-16"
        >
            <h2 className="font-medium text-xl text-gray-500 mb-8">/ Conectar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {links.map(({ href, icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        className="text-neutral-900 border border-neutral-900 h-12 rounded-lg flex items-center justify-between px-4 transition-all duration-300 ease-in-out hover:bg-neutral-100"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                    >
                        <div className="flex items-center gap-2">
                            {icon}
                            <span className="font-normal text-base">{label}</span>
                        </div>
                        <FiArrowUpRight className="text-xl" />
                    </a>
                ))}
            </div>
        </motion.div>
    );
}
