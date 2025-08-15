import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "../Icons";
import StarsBg from "./Stars";
import styles from "./styles.module.css";
import { useParallax } from "./useParallax";
export const Banner = () => {
  const { homeBannerRef, textStyles, backgroundStyles, sphereStyles } =
    useParallax();

  return (
    <>
      <motion.div
        className="w-screen h-full absolute top-0 left-0 z-[-1]"
        style={{
          backgroundColor: backgroundStyles.color,
        }}
      ></motion.div>
      <StarsBg
        color={textStyles.starColor} // Pass the star color from useParallax
      />
      <section ref={homeBannerRef} className="container h-[900px] relative">
        <motion.div
          className="sticky top-20 max-w-[380px] text-center  mx-auto grid gap-18"
          style={{
            color: textStyles.color,
          }}
        >
          <div>
            <h1 className="font-extrabold mb-3 text-5xl">Carlos Sánchez</h1>
            <p className="text-2xl font-bold">
              Software Developer, DevOps & Cloud Infrastructure Engineer
            </p>
          </div>
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://github.com/scarlos723"
              className="size-20 p-1 rounded-full hover:scale-110 transition-transform hover:shadow-md hover:shadow-gray-300"
            >
              <GithubIcon className="size-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-sanchez-69b277196/"
              className="size-20 p-1 rounded-sm hover:scale-110 transition-transform hover:shadow-md hover:shadow-gray-300"
            >
              <LinkedinIcon className="size-full" />
            </a>
          </div>
        </motion.div>
      </section>
      {/* Sphere en contenedor con overflow controlado localmente */}
      <div className="absolute -z-1  top-0 w-full overflow-hidden h-[1500px] lg:h-[2200px] flex items-center">
        <motion.div style={sphereStyles} className={styles.sphere} />
      </div>
    </>
  );
};
