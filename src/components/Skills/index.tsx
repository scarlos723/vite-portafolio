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
              <div className="relative z-10 grid gap-6 rounded-lg my-auto">
                <p className="text-2xl leading-relaxed text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                  <span className="text-white font-semibold">
                    Ingeniero en Electrónica y Telecomunicaciones
                  </span>{" "}
                  con experiencia especializada en <strong>DevOps</strong> y
                  liderazgo de proyectos <strong>Frontend</strong>.
                </p>

                <p className="text-lg leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  Me apasiona el <strong>aprendizaje constante</strong> y
                  enfrentar nuevos desafíos tecnológicos. Mantengo un enfoque
                  actualizado en herramientas modernas para el desarrollo y
                  despliegue de aplicaciones web escalables.
                </p>

                <div className="pt-4 border-t border-gray-600/30">
                  <p className="text-lg leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                    En este portafolio encontrarás mis{" "}
                    <strong>habilidades técnicas</strong>, las{" "}
                    <strong>tecnologías</strong> que domino y los{" "}
                    <strong>proyectos</strong> que definen mi experiencia
                    profesional.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={`${styles.halo} grid w-full place-items-center`}>
            <TechCube technologies={TECHNOLOGIES} />
            {/* <div className="relative">
              <div className={styles["halo"]}>
                {TECHNOLOGIES.map((tech, index) => (
                  <article
                    key={`${tech.name}-${index}`}
                    className={styles["tech-item"]}
                  >
                    <div className="relative z-10 size-9">{tech.icon}</div>
                    <div
                      className={`${styles["tech-name"]} border border-gray-600/50 group-hover/tech:border-purple-400/50 transition-all duration-300`}
                    >
                      <p className="text-white font-bold text-sm whitespace-nowrap">
                        {tech.name}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div> */}
          </section>
        </div>
      </section>
    </div>
  );
}
