import React from "react";

export const OriginalCard = (props: {
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
  isModalOpen: boolean;
  openModal: (e: React.MouseEvent) => void;
  closeModal: () => void;
  index: number;
}) => {
  const { project, index, isModalOpen, openModal, closeModal } = props;
  return (
    <>
      <div
        key={index}
        className="min-h-[100vh] grid py-20 box-border items-center lg:grid-cols-[2fr_1fr] lg:gap-20 lg:items-start xl:grid-cols-2 xl:gap-20"
      >
        <div className="space-y-6">
          <h2 className="text-5xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8">
            {project.title}
          </h2>
          <div className="flex flex-col gap-6">
            <div className="group">
              <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {project.description}
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-2"></span>
                <p className="text-gray-300 leading-relaxed">
                  {project.development}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2"></span>
                <p className="text-gray-300 leading-relaxed">
                  {project.scalability}
                </p>
              </div>
            </div>
          </div>
        </div>
        <article className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md rounded-3xl p-6 border border-gray-600/40 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer">
          {/* Efecto de brillo en hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

          <div className="relative z-10">
            {/* Logo section */}
            <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
              {project.logo}
            </div>

            {/* Image section */}
            <div
              className="relative aspect-video min-h-[300px] overflow-hidden rounded-2xl mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 cursor-zoom-in"
              onClick={openModal}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Icono de zoom */}
              <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-6 h-6 text-white"
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

            {/* Info section */}
            <section className="relative bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-purple-400/30 transition-all duration-300">
              {/* Título de tecnologías */}
              <h4 className="text-sm font-semibold text-gray-400 text-center mb-4">
                Tecnologías Usadas
              </h4>

              {/* Tech icons */}
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {project?.tech_icons?.map((tech, iconIndex) => (
                  <div
                    key={iconIndex}
                    className="group/tech relative p-2 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:border-purple-400/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                    title={tech.name}
                  >
                    {tech.icon}
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 pointer-events-none">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Modal content */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Imagen */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md border border-gray-600/40">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Información del proyecto en el modal */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                >
                  {project.domain}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
