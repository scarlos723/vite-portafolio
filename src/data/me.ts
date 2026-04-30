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
export interface MeData {
  name: string;
  title: string;
  linkedin: string;
  experience: {
    title: string;
    company: string;
    description: string;
    dates: string;
    jobs: string[];
  }[];
  education: {
    type: "academia" | "complementario";
    title: string;
    institution: string;
    description?: string;
    dates: string;
    link_cert?: string;
  }[];
  skills: {
    description: {
      title: string;
      intro: string;
      enjoy: string;
      personal: string;
    };
    tecnologies: {
      name: string;
      icon: React.ComponentType<{ color?: string }>;
      color: string;
    }[];
  };
}
export const meData = {
  name: "Carlos Sanchez",
  title: `Ingeniero en Electrónica y Telecomunicaciones. DevOps | AWS
            Cloud Architect | Full Stack Developer`,
  linkedin: "https://www.linkedin.com/in/carlossanchez",
  experience: [
    {
      title: "Cloud & DevOps Engineer",
      company: "BPO2B",
      description: `Actualmente diseño y gestión de infraestructura cloud en AWS utilizando Terraform (IaC). 
    Administración de servicios como VPC, EC2 y ECS (Fargate/EC2), implementación de pipelines CI/CD y 
    gestión de seguridad con IAM, Security Hub y Parameter Store. Experiencia en migraciones tecnológicas, 
    arquitecturas de microservicios, optimización de costos y soporte a equipos de desarrollo en entornos productivos.`,

      dates: "2022 - presente",
      jobs: [
        `Diseño y administración de infraestructuras en AWS: VPC, subredes, IAM, gestión de secretos y controles de seguridad.`,
        `Aprovisionamiento con Terraform; despliegue y operación de contenedores mediante Docker.`,
        `Implementación y mantenimiento de pipelines CI/CD con GitHub Actions; gestión de secretos y repositorios.`,
        `Monitoreo, respuesta a incidentes y automatización de remediaciones (Security Hub, alertas, runbooks).`,
      ],
    },

    {
      title: "Ingeniero Frontend",
      company: "RETRI SAS",
      description: `Me encargué del desarrollo frontend y brindé soporte al proyecto principal de la aplicación web. Este proyecto está desarrollado con Vite.js y seguimos flujos de trabajo estructurados mediante GitHub. Uno de los mayores retos fue crear el sistema de dashboard de la aplicación, ya que se trataba de un proyecto muy cambiante por su naturaleza como startup.`,
      dates: "2022 - 2025",
      jobs: [
        `Lideré el desarrollo frontend de la aplicación web, utilizando Vite.js y siguiendo flujos de trabajo estructurados mediante GitHub.`,
        `Implementé una arquitectura de archivos organizada y modular para facilitar el mantenimiento y la escalabilidad del proyecto.`,
      ],
    },
    {
      title: "Desarrollador Frontend",
      company: "BPO2B",
      description: `Participé en proyectos con tecnologías como React, Next.js, Node.js, Webpack, Solidity y Vite.js. Destaco mi trabajo en Filmcoin, donde junto a mi equipo implementamos pagos con criptomonedas y desarrollé animaciones con Three.js. Mis tareas incluyeron investigación, documentación y aplicación de conocimientos, enfrentando el reto de aprender Blockchain y contratos inteligentes con Solidity y Ethereum.`,
      dates: "2021 - 2022",
      jobs: [
        `Desarrollo y mantenimiento de aplicaciones web.`,
        `Administración de proyectos utilizando GitHub, incluyendo la gestión de ramas, pull requests y resolución de conflictos.`,
      ],
    },
    {
      title: "Desarrollador Web Junior",
      company: "BPO2B",
      description: `Brindé soporte a un sitio web desarrollado con Odoo, una plataforma de comercio electrónico que requería funcionalidades avanzadas. Esta experiencia me permitió familiarizarme con dicha tecnología. Además, aprendí React.js creando páginas para distintos clientes.`,
      dates: "2021 - 2022",
      jobs: [
        `Desarrollo y mantenimiento de un sitio web en Odoo, implementando funcionalidades personalizadas para mejorar la experiencia del usuario.`,
        `Modificación de frontend mediante CSS y JavaScript para adaptar el sitio a las necesidades del cliente.`,
      ],
    },
  ],
  education: [
    {
      type: "academia",
      title: "Máster en Ingeniería de Software y Sistemas Informáticos",
      institution: "Universidad Nacional de Colombia",
      description:
        "Profundizando en fundamentos de ingeniería de software con doble titulación en Inteligencia Artificial para Software y DevOps.",
      dates: "2025 – en curso",
    },
    {
      type: "academia",
      title: "Ingeniería en Electrónica y Telecomunicaciones",
      institution: "Universidad del Cauca",
      description:
        "Obtuve mi título de ingeniero en Electrónica y Telecomunicaciones con énfasis en Telemática. Adquirí conocimientos sólidos en electrónica, telecomunicaciones, programación y redes.",
      dates: "2017 – 2022",
    },
    {
      type: "complementario",
      title: "JavaScript, React, Terraform",
      institution: "Platzi",
      link_cert: "https://platzi.com/p/carlossde58/",
      dates: "2020 – 2024",
    },
    {
      type: "complementario",
      title: "Desarrollador de Smart Contracts en Solidity",
      institution: "Blockchain Academy Chile",
      link_cert:
        "http://www.stamping.io/q/?50a2e772da4eefc5074c8aedbffd56e93644d882",
      dates: "2022",
    },
    {
      type: "complementario",
      title:
        "Machine Learning con Python — De modelos lineales al Deep Learning",
      institution: "Instituto Tecnológico de Massachusetts, MITx",
      link_cert:
        "https://courses.edx.org/certificates/8df3ffb69f1b401489fb0613b26d2b9f",
      dates: "2020",
    },
    {
      type: "complementario",
      title: "Desarrollo Web con Python y JavaScript",
      institution: "Universidad de Harvard, HarvardX",
      link_cert:
        "https://courses.edx.org/certificates/97150a4aec6146cba244943849213339",
      dates: "2020",
    },
    {
      type: "complementario",
      title: "Introducción a la Inteligencia Artificial con Python",
      institution: "Universidad de Harvard, HarvardX",
      link_cert:
        "https://courses.edx.org/certificates/97150a4aec6146cba244943849213339",
      dates: "2020",
    },
    {
      type: "complementario",
      title: "Introducción al Framework Laravel",
      institution: "Universidad del Cauca",
      dates: "2019",
    },
  ],
  skills: {
    description: {
      title: "Skills",
      intro: `Mi trayectoria comenzó creando sitios web en semanas con React y
              JavaScript, pero la necesidad real del negocio me impulsó a
              transformarme en alguien diestro en arquitecturas y servicios de
              la nube.`,
      enjoy: `Disfruto colaborar con equipos multidisciplinarios, compartir
              conocimiento y construir soluciones que equilibren velocidad de
              entrega con robustez operativa.`,
      personal: `Me mantengo en constante aprendizaje, pues me gusta siempre estar
              usando herramientas y tecnologías recientes para el desarrollo.
              Fuera del trabajo, me gusta el skateboarding, algo que ha
              reforzado mi disciplina, constancia y enfoque en superar desafíos
              complejos. Estoy abierto a conectar con profesionales que valoren
              la proactividad técnica y el crecimiento mutu`,
    },
    tecnologies: [
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
    ],
  },
};
