"use client";

import React from "react";
import ProjectCard from "./_components/project_card";
import TagFilter from "./_components/tag";
import { useProjectStore } from "../store/project-store";
import projectsData from "../../../public/data/projects.json";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  img_source?: string | null;
}

export default function Projects() {
  const selectedTag = useProjectStore((state) => state.selectedTag);
  const projects = Object.values(projectsData) as Project[];

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects;

  return (
    <div className="p-20 min-h-screen mx-auto dark:bg-black bg-gray-50">
      <h1 className="text-5xl font-bold mb-10 text-center dark:text-white text-black">
        My Projects
      </h1>
      <TagFilter allTags={allTags} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            img_source={
              project.img_source
                ? project.img_source
                : "../../../public/no-image-available-icon-vector.jpg"
            }
            title={project.title}
            description={project.description}
            tags={project.tags}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}
