import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
export const Banner = () => {
  const scrollY = useMotionValue(0);
  const color = useTransform(
    scrollY,
    [0, 240],
    ["#0a0e12", "#ffffff"], // de oscuro a claro
  );
  const scaleSphere = useTransform(scrollY, [0, 240], [3, 100]);
  const bgColor = useTransform(
    scrollY,
    [0, 240],
    ["#dcfeef", "#000000"], // de claro a oscuro
  );
  function setSarstPoint() {
    const container = document.getElementById("stars-container");
    const numberOfStars = 100;
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.color = "#dcfeef";
      star.style.position = "absolute";
      star.style.width = "1px";
      star.style.height = "1px";
      star.appendChild(document.createTextNode(".")); // Necesario para que el div tenga contenido
      star.style.transform = `translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px)`;
      container?.appendChild(star);
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);
  useEffect(() => {
    setSarstPoint();
  }, []);
  return (
    <motion.div
      style={{ background: bgColor }}
      className="relative bg-white grid "
    >
      <MidSphereRadialGradient scaleSphere={scaleSphere} />
      <div
        id="stars-container"
        className="absolute z-1 overflow-hidden grid h-dvh w-full"
      />
      <section className="h-dvh">
        <motion.div
          style={{ color }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center z-2 mt-24 lg:mt-0 xl:mt-50 sticky top-20 mx-auto px-4"
        >
          <h1 className="text-4xl  xl:text-6xl  font-bold"> Carlos Sanchez</h1>
          <p className="transition mt-1 text-xl xl:text-2xl ">
            Ingeniero en Electrónica y Telecomunicaciones <br /> DevOps | AWS
            Cloud Architect | Full Stack Developer
          </p>
          <a
            className="flex items-center transition justify-center mt-4 xl:mt-10 cursor-pointer hover:scale-125"
            href="#"
          >
            <AiOutlineLinkedin size={40} />
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
};

import type { MotionValue } from "motion";

const MidSphereRadialGradient = ({
  scaleSphere,
}: {
  scaleSphere: MotionValue<number>;
}) => {
  return (
    <div className="absolute z-0 grid h-dvh w-full overflow-hidden">
      <motion.div
        className="absolute rounded-full bottom-[-400px] left-1/2 transform -translate-x-1/2"
        style={{
          scale: scaleSphere,
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle at center, black 20%, #1d4ddc 40%, #0abaff 58%, transparent 70%)",
          boxShadow:
            "0 0 50px 10px rgba(34, 88, 253, 0.5), 0 0 120px 40px rgba(7, 248, 228, 0.3)",
        }}
      />
    </div>
  );
};
