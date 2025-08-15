import { IoCloseCircleOutline } from "react-icons/io5";

export const ImageViewer = ({
  project,
  closeModal,
}: {
  project: {
    title: string;
    image: string;
  };
  closeModal: () => void;
}) => (
  <div
    className="fixed w-screen h-screen top-0 left-0 bg-black/80 backdrop-blur-sm z-100 flex items-center justify-center p-4"
    onClick={closeModal}
  >
    {/* Modal content */}
    <div className="relative max-w-7xl max-h-[90vh] w-full">
      {/* Botón de cerrar */}
      <button
        onClick={closeModal}
        className="absolute bg-black rounded-full text-white hover:text-gray-300 transition-colors duration-200 z-10 -top-4 right-0"
      >
        <IoCloseCircleOutline className="size-8"></IoCloseCircleOutline>
      </button>

      {/* Imagen */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md border border-gray-600/40">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto max-h-[80vh] object-contain"
        />

        {/* Información del proyecto en el modal */}
        <div className=" bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  </div>
);
