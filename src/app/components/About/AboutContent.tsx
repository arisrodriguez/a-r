"use client";
import { motion } from "framer-motion";
import AboutHeader from "./AboutHeader";
import AboutPhotos from "./AboutPhotos";
import AboutStory from "./AboutStory";
import AboutSocialLinks from "./AboutSocialLinks";
import AboutExperience from "./AboutExperience";

export default function AboutContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mx-auto max-w-[700px] px-8 py-3 md:px-6 mt-16"
        >
            <AboutHeader />
            <AboutPhotos />
            <AboutStory />
            <AboutSocialLinks />
            <AboutExperience />
        </motion.div>
    );
}
