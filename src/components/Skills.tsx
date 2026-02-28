import { BsThreeDots } from "react-icons/bs";
import { DiNodejs } from "react-icons/di";
import { FaAws, FaCloud, FaCubes, FaLaptopCode } from "react-icons/fa";
import {
  SiCss3,
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

const LIST_TECHNOLOGIES = [
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F" },
  { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
  { name: "HTML5", icon: SiHtml5, color: "#E34C26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Sass", icon: SiSass, color: "#CC6699" },
  { name: "Docker", icon: SiDocker, color: "#2491E8" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Terraform", icon: SiTerraform, color: "#623CE4" },
  { name: "Solidity", icon: SiSolidity, color: "#ffffff" },
  { name: "Three.js", icon: BsThreeDots, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Node.js", icon: DiNodejs, color: "#339933" },
  { name: "Flask", icon: SiFlask, color: "#ffffff" },
  { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Cloud", icon: FaCloud, color: "#ffffff" },
  { name: "Full Stack", icon: FaLaptopCode, color: "#ffffff" },
  { name: "Infraestructura", icon: FaCubes, color: "#ffffff" },
];

export const Skills = () => {
  return (
    <section className="container mt-20">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
        <div>
          <p className="mb-6">
            Mi trayectoria comenzó creando sitios web en semanas con React y
            JavaScript, pero la necesidad real del negocio me impulsó a
            transformarme en alguien diestro en arquitecturas y servicios de la
            nube.
            <br />
            Disfruto colaborar con equipos multidisciplinarios, compartir
            conocimiento y construir soluciones que equilibren velocidad de
            entrega con robustez operativa.
            <br />
            Me mantengo en constante aprendizaje, pues me gusta siempre estar
            usando herramientas y tecnologías resientes para el desarrollo.
            Fuera del trabajo, me gusta el skateboarding, algo que ha reforzado
            mi disciplina, constancia y enfoque en superar desafíos complejos.
            Estoy abierto a conectar con profesionales que valoren la
            proactividad técnica y el crecimiento mutuo.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {LIST_TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-800 p-4 w-24 lg:w-40 rounded-lg flex flex-col items-center justify-center"
            >
              <tech.icon
                className="text-lg lg:text-4xl mb-2"
                style={{ color: tech.color }}
              />
              <span className="text-xs lg:text-sm text-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
