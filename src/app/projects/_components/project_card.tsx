"use client";

import React from "react";

interface ProjectCardProps {
  img_source: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img_source,
  title,
  description,
  tags,
  github,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mt-10">
      <img src={img_source} alt={title} className="h-48 w-full object-cover" />
      <div className="px-6 py-4 rounded-b-lg shadow-lg dark:bg-gray-800 bg-gray-100 shadow-gray-800 min-h-65">
        <div className="font-bold text-xl mb-2 dark:text-white text-black">
          {title}
        </div>
        <p className="dark:text-gray-200 text-gray-900 text-md mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-[#0f1fff] text-white text-base px-4 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-blue-400 text-blue-700 text-md hover:underline"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
