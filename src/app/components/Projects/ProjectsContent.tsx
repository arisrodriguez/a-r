"use client";

import ProjectsHeader from './ProjectsHeader';
import ProjectsDescription from './ProjectsDescription';
import ProjectsCards from './ProjectsCards';

export default function ProjectsContent() {
    return (
        <div
            className="mx-auto max-w-[700px] px-8 py-3 md:px-6 mt-16"
        >
            <ProjectsHeader />
            <ProjectsDescription />
            <ProjectsCards />
        </div>
    );
}