import React from "react";

interface ProjectCardProps {
  img_source: string; // Image source URL or path
  title: string; // Title of the project
  description: string; // Description of the project
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img_source,
  title,
  description,
}) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="bg-blue-500 h-48 w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
