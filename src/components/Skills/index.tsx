import { Meteors } from "../Animations/Meteors";
import { TECHNOLOGIES } from "./list";
import styles from "./styles.module.css";
import TechCube from "./TechCube";
export default function Skills() {
  // Función para verificar si dos posiciones se superponen

  return (
    <div className="grid max-w-screen mb-20 lg:mb-0">
      <div className="absolute grid max-w-screen min-h-40 ">
        <div className="max-w-screen">
          <Meteors />
        </div>
      </div>
      <section className="container  min-h-[100vh] z-[100] py-20">
        <h2 className="text-center pb-20 text-3xl lg:text-5xl xl:pt-10 font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Habilidades y tecnologías
        </h2>
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          <section className="grid">
            <div className="group relative bg-gradient-to-br from-purple-900/70 to-gray-900/80 backdrop-blur-md rounded-3xl p-8 border border-gray-600/40 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <div className="relative text-pretty z-10 grid gap-6 rounded-lg my-auto">
                <p className="text-2xl leading-relaxed text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                  Soy{" "}
                  <span className="font-bold text-purple-300">
                    Ingeniero en Electrónica y Telecomunicaciones
                  </span>{" "}
                  con especialización en{" "}
                  <strong className="text-purple-300 font-semibold">
                    DevOps/SRE
                  </strong>
                  , diseño de{" "}
                  <strong className="text-purple-300 font-semibold">
                    infraestructura cloud con AWS
                  </strong>{" "}
                  y desarrollo{" "}
                  <strong className="text-purple-300 font-semibold">
                    full-stack
                  </strong>
                  . Actualmente cursando un{" "}
                  <strong className="text-blue-300 font-semibold">
                    Máster en Ingeniería de Software
                  </strong>
                  .
                </p>

                <p className="text-lg leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  Experto en{" "}
                  <strong className="text-purple-300 font-semibold">
                    Terraform, Docker y CI/CD
                  </strong>
                  , con amplia experiencia implementando arquitecturas de{" "}
                  <em className="text-emerald-300 font-medium">
                    microservicios escalables y pipelines automatizados
                  </em>{" "}
                  que reducen tiempos de despliegue y mejoran la confiabilidad
                  de los sistemas.
                </p>

                <div className="pt-4 border-t border-gray-600/30">
                  <p className="text-lg leading-relaxed text-gray-400 group-hover:text-gray-100 transition-colors duration-300">
                    Mi stack tecnológico ha evolucionado, desde{" "}
                    <strong className="text-purple-300 font-medium">
                      frontend moderno
                    </strong>{" "}
                    hasta{" "}
                    <strong className="text-purple-300 font-medium">
                      infraestructura cloud-native
                    </strong>
                    , explora los proyectos que demuestran mi capacidad para
                    transformar ideas en soluciones reales.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={`${styles.halo} grid w-full place-items-center`}>
            <TechCube technologies={TECHNOLOGIES} />
          </section>
        </div>
      </section>
    </div>
  );
}
