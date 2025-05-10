import ProjectCard from "./_components/project_card";

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 mt-10 items-center min-h-screen justify-center">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <div className="flex">
        <ProjectCard
          img_source="https://via.placeholder.com/150"
          title="Project 1"
          description="This is a description of Project 1."
        />
      </div>
    </main>
  );
}
