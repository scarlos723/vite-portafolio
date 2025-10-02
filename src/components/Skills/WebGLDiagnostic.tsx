import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaInfoCircle } from "react-icons/fa";
import { detectWebGL } from "../../utils/webglDetection";

export const WebGLDiagnostic: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const webglInfo = detectWebGL();

  return (
    <div className="mt-4 max-w-md mx-auto">
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors mx-auto"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FaInfoCircle />
        <span>Información técnica</span>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 text-xs text-gray-300 space-y-2"
          >
            <div className="grid grid-cols-2 gap-2">
              <span className="text-gray-400">WebGL 1.0:</span>
              <span
                className={webglInfo.webgl ? "text-green-400" : "text-red-400"}
              >
                {webglInfo.webgl ? "✓ Disponible" : "✗ No disponible"}
              </span>

              <span className="text-gray-400">WebGL 2.0:</span>
              <span
                className={
                  webglInfo.webgl2 ? "text-green-400" : "text-yellow-400"
                }
              >
                {webglInfo.webgl2 ? "✓ Disponible" : "○ No disponible"}
              </span>
            </div>

            {webglInfo.renderer && (
              <div>
                <span className="text-gray-400">Renderer: </span>
                <span className="break-all">{webglInfo.renderer}</span>
              </div>
            )}

            {webglInfo.vendor && (
              <div>
                <span className="text-gray-400">Vendor: </span>
                <span>{webglInfo.vendor}</span>
              </div>
            )}

            {webglInfo.error && (
              <div className="text-red-400">
                <span className="text-gray-400">Error: </span>
                <span className="break-all">{webglInfo.error}</span>
              </div>
            )}

            <div className="pt-2 border-t border-gray-700/50 text-gray-500">
              Para habilitar WebGL, intenta:
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Actualizar tu navegador</li>
                <li>Habilitar aceleración de hardware</li>
                <li>Reiniciar el navegador</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WebGLDiagnostic;
