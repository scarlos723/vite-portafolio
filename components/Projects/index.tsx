import ProjectCard from "./ProjectCard";
import { listProjects } from "./projects";

const Projects = () => {
  return (
    <>
      <section className="container pt-20">
        <h2 className="text-center text-3xl py-3 lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-20">
          Proyectos
        </h2>

        {/* Grid de cards compactas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {listProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              compact={true}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
