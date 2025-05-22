"use client";

import AboutHeader from "./AboutHeader";
import AboutPhotos from "./AboutPhotos";
import AboutStory from "./AboutStory";
import AboutSocialLinks from "./AboutSocialLinks";
import AboutExperience from "./AboutExperience";

export default function AboutContent() {
    return (
        <div

            className="mx-auto max-w-[700px] px-8 py-3 md:px-6 mt-16"
        >
            <AboutHeader />
            <AboutPhotos />
            <AboutStory />
            <AboutSocialLinks />
            <AboutExperience />
        </div>
    );
}
