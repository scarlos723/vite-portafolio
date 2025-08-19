import { useState } from "react";
import { ImageViewer } from "./ImageViewer";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    development: string;
    scalability: string;
    url: string;
    domain: string;
    logo?: React.ReactNode;
    image: string;
    tech_icons?: { icon: React.ReactNode; name: string }[];
  };
  index: number;
  compact?: boolean;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project, index } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal(e: React.MouseEvent) {
    e.stopPropagation();
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && <ImageViewer project={project} closeModal={closeModal} />}
      <article
        key={index}
        className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md rounded-2xl p-4 border border-gray-600/40 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 cursor-pointer max-w-sm mx-auto"
      >
        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

        <div className="relative z-10">
          {/* Logo section más pequeño */}
          <div className="mb-3 h-10 max-h-10 flex justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="scale-75">{project.logo}</div>
          </div>

          {/* Image section más pequeña */}
          <div
            className="relative overflow-hidden rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 cursor-zoom-in"
            onClick={openModal}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Icono de zoom */}
            <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>

          {/* Descripción directa sin título */}
          <div className="mb-4">
            <p className="text-sm text-gray-300 text-pretty leading-relaxed group-hover:text-gray-100 transition-colors duration-300  ">
              {project.description}
            </p>
          </div>

          {/* Info section más compacta */}
          <section className="relative bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 group-hover:border-purple-400/30 transition-all duration-300">
            {/* Título de tecnologías */}
            <h3 className="text-xs font-semibold text-gray-400 text-center mb-2">
              Tecnologías Usadas
            </h3>

            {/* Tech icons más pequeños */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {project?.tech_icons?.map((tech, iconIndex) => (
                <div
                  key={iconIndex}
                  className="group/tech relative p-1.5 bg-gray-800/50 rounded-md border border-gray-600/30 hover:border-purple-400/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                  title={tech.name}
                >
                  <div className="scale-75">{tech.icon}</div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 pointer-events-none">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
