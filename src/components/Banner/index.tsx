import { motion } from "framer-motion";
import { useEffect } from "react";
import { GithubIcon, LinkedinIcon } from "../Icons";
import StarsBg from "./Stars";
import styles from "./styles.module.css";
import { useParallax } from "./useParallax";

export const Banner = () => {
  const { homeBannerRef, textStyles, backgroundStyles, sphereStyles } =
    useParallax();

  // Ocultar contenido estático después de que la animación haya comenzado
  useEffect(() => {
    const timer = setTimeout(() => {
      const staticContent = document.getElementById("static-content");
      if (staticContent) {
        staticContent.classList.add(styles.hideStaticContent);
      }
    }, 1000); // 1 segundo después de que comience la animación

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Contenido estático para LCP - se oculta cuando la animación está lista */}
      <section
        className="container h-[900px] relative z-20 lcp-content"
        id="static-content"
      >
        <div className="sticky top-20 max-w-[380px] text-center mx-auto grid gap-18 text-white">
          <div>
            <h1 className="font-extrabold mb-3 text-5xl lcp-title">
              Carlos Sánchez
            </h1>
            <p className="text-2xl font-bold text-white">
              Software Developer, Cloud Infrastructure Architect & DevOps
              Engineer
            </p>
          </div>
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://github.com/scarlos723"
              className="size-20 p-1 rounded-full hover:scale-110 transition-transform hover:shadow-md hover:shadow-gray-300"
              aria-label="Github"
            >
              <GithubIcon className="size-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-sanchez-69b277196/"
              className="size-20 p-1 rounded-sm hover:scale-110 transition-transform hover:shadow-md hover:shadow-gray-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-full" />
            </a>
          </div>
        </div>
      </section>

      {/* Tu animación parallax original - se muestra encima del contenido estático */}
      <div
        className={`${styles.fadeInUp} absolute inset-0 z-30`}
        id="animated-content"
      >
        <section ref={homeBannerRef} className="container h-[900px] relative">
          <div className="sticky top-20 max-w-[380px] text-center mx-auto grid gap-18">
            <motion.div
              style={{
                color: textStyles.color,
              }}
            >
              <h1 className="font-extrabold mb-3 text-5xl">Carlos Sánchez</h1>
              <p className="text-2xl font-bold">
                Software Developer, Cloud Infrastructure Architect & DevOps
                Engineer
              </p>
            </motion.div>
            <motion.div
              style={{
                color: textStyles.color,
              }}
              className="flex items-center justify-center gap-8"
            >
              <a
                href="https://github.com/scarlos723"
                className="size-20 p-1 rounded-full hover:scale-110 transition-transform hover:shadow-md hover:shadow-gray-300"
                aria-label="Github"
              >
                <GithubIcon className="size-full" />
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-sanchez-69b277196/"
                className="size-20 p-1 rounded-sm hover:scale-110 transition-transform hover:shadow-md hover:shadow-gray-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="size-full" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Elementos de fondo y efectos visuales */}
      <motion.div
        className="w-full h-full absolute top-0 left-0 z-[-2]"
        style={{
          backgroundColor: backgroundStyles.color,
        }}
      />
      <StarsBg color={textStyles.starColor} />

      {/* Sphere como efecto visual */}
      <div className="absolute -z-1 top-0 w-full overflow-hidden h-[1500px] lg:h-[2200px] flex items-center">
        <motion.div style={sphereStyles} className={styles.sphere} />
      </div>
    </>
  );
};
