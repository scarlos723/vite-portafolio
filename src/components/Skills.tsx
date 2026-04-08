import { motion } from "motion/react";
import { DiNodejs } from "react-icons/di";
import { FaAws, FaCloud, FaLaptopCode } from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { IoLogoCss3 } from "react-icons/io";
import { LuBotMessageSquare } from "react-icons/lu";
import {
  SiDocker,
  SiFlask,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSass,
  SiSolidity,
  SiSpring,
  SiTerraform,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { VscMcp } from "react-icons/vsc";

import { ParallaxText } from "./ParallaxText";

const LIST_TECHNOLOGIES = [
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F" },
  { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
  { name: "HTML5", icon: SiHtml5, color: "#E34C26" },
  { name: "CSS3", icon: IoLogoCss3, color: "#F0DB4F" },
  { name: "Sass", icon: SiSass, color: "#CC6699" },
  { name: "Docker", icon: SiDocker, color: "#2491E8" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Terraform", icon: SiTerraform, color: "#623CE4" },
  { name: "Solidity", icon: SiSolidity, color: "#ffffff" },
  { name: "Three.js", icon: TbBrandThreejs, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Node.js", icon: DiNodejs, color: "#339933" },
  { name: "Flask", icon: SiFlask, color: "#ffffff" },
  { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Cloud", icon: FaCloud, color: "#ffffff" },
  { name: "Full Stack", icon: FaLaptopCode, color: "#ffffff" },
  { name: "MCP", icon: VscMcp, color: "#01f7ff" },
  {
    name: "Artificial Intelligence",
    icon: GoCopilot,
    color: "#ff00ff",
  },
  { name: "Agents", icon: LuBotMessageSquare, color: "#623CE4" },
];

export const Skills = () => {
  const BASE_VELOCITY = 2;
  return (
    <motion.section
      className="relative h-dvh grid content-center overflow-hidden"
      initial={{ y: -200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-20 xl:mt-40 pointer-events-none">
        <ParallaxText baseVelocity={BASE_VELOCITY}>
          {LIST_TECHNOLOGIES.slice(0, 3).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={-BASE_VELOCITY}>
          {LIST_TECHNOLOGIES.slice(3, 6).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={BASE_VELOCITY}>
          {LIST_TECHNOLOGIES.slice(6, 9).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={-BASE_VELOCITY}>
          {LIST_TECHNOLOGIES.slice(9, 12).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={BASE_VELOCITY}>
          {LIST_TECHNOLOGIES.slice(12, 15).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={-BASE_VELOCITY}>
          {LIST_TECHNOLOGIES.slice(15, 18).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={BASE_VELOCITY}>
          {LIST_TECHNOLOGIES.slice(18, 21).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={-BASE_VELOCITY}>
          {LIST_TECHNOLOGIES.slice(21, 24).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
      </div>
      <div className="container">
        <article className="mx-auto  lg:w-150 xl:w-200 p-10 rounded-2xl shadow-xl shadow-blue-200/50  backdrop-blur-md bg-linear-to-r from-slate-900/50 to-slate-800/50 border border-slate-400/50 ">
          <h2 className="text-4xl xl:text-8xl font-bold mb-8">Skills</h2>
          <div className="grid gap-2 text-sm md:text-lg xl:text-xl">
            <code className="mb-6">
              Mi trayectoria comenzó creando sitios web en pocas semanas con
              React y JavaScript, pero la necesidad real del negocio me impulsó
              a convertirme en alguien diestro en arquitecturas y servicios en
              la nube.
            </code>
            <code>
              Disfruto colaborar con equipos multidisciplinarios, compartir
              conocimiento y construir soluciones que equilibren la velocidad de
              entrega con la robustez operativa.
            </code>
            <code>
              Me mantengo en aprendizaje constante; me gusta usar herramientas y
              tecnologías recientes para el desarrollo. Fuera del trabajo,
              disfruto del skateboarding, una afición que ha reforzado mi
              disciplina, constancia y capacidad para afrontar desafíos
              complejos. Estoy abierto a conectar con profesionales que valoren
              la proactividad técnica y el crecimiento mutuo.
            </code>
          </div>
        </article>
      </div>
    </motion.section>
  );
};
