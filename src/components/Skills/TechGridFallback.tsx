import { motion } from "framer-motion";
import React from "react";
import type { IconType } from "react-icons";
import { FaExclamationTriangle } from "react-icons/fa";
import WebGLDiagnostic from "./WebGLDiagnostic";

interface TechGridFallbackProps {
  technologies: { icon: IconType; name: string }[];
  size?: number;
}

export const TechGridFallback: React.FC<TechGridFallbackProps> = ({
  technologies,
}) => {
  // Mostrar solo las primeras 9 tecnologías para mantener el diseño 3x3
  const displayTechs = technologies.slice(0, 9);

  return (
    <div className="size-[300px] lg:size-[600px] mt-10 lg:mt-40 flex flex-col items-center justify-center">
      {/* Mensaje informativo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 max-w-sm"
      >
        <FaExclamationTriangle className="text-yellow-400 text-2xl mx-auto mb-2" />
        <p className="text-yellow-200 text-sm">
          Vista simplificada: WebGL no disponible en este navegador
        </p>
      </motion.div>

      {/* Grid de tecnologías 3x3 */}
      <div className="grid grid-cols-3 gap-6 lg:gap-8">
        {displayTechs.map((tech, index) => {
          const IconComponent = tech.icon;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                rotateX: 10,
                transition: { duration: 0.2 },
              }}
              className="group relative hover:z-20"
            >
              {/* Contenedor del ícono con efecto 3D CSS */}
              <div className="relative w-16 h-16 lg:w-20 lg:h-20 transform-gpu transition-all duration-300 group-hover:scale-110 ">
                {/* Cara frontal */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-blue-600/80 rounded-lg shadow-lg backdrop-blur-sm border border-purple-400/30 flex items-center justify-center transform transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/30">
                  <IconComponent className="text-white text-3xl lg:text-4xl filter drop-shadow-lg" />
                </div>

                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Sombra dinámica */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
              </div>

              {/* Nombre de la tecnología */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap "
              >
                <span className="text-gray-300 text-xs lg:text-sm font-medium opacity-0  group-hover:opacity-100 transition-opacity duration-300 bg-gray-800/80 px-2 py-1 rounded backdrop-blur-sm">
                  {tech.name}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Indicador de más tecnologías si hay más de 9 */}
      {technologies.length > 9 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            +{technologies.length - 9} tecnologías adicionales
          </p>
          <div className="flex justify-center gap-2 mt-2">
            {technologies.slice(9, 15).map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"
                  title={tech.name}
                >
                  <IconComponent className="w-full h-full text-gray-400" />
                </motion.div>
              );
            })}
            {technologies.length > 15 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="w-6 h-6 flex items-center justify-center text-gray-400 text-xs font-bold"
              >
                ...
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* Componente de diagnóstico */}
      <WebGLDiagnostic />
    </div>
  );
};

export default TechGridFallback;
