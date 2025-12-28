export interface AcademicFormation {
  institution: string;
  degree: string;
  location: string;
  period: string;
  status: "completed" | "in-progress";
  logo?: string;
  description?: string;
}

export interface Course {
  institution: string;
  title: string;
  url: string;
  category?: string;
}

export const academicFormations: AcademicFormation[] = [
  {
    institution: "Universidad del Cauca",
    degree: "Ingeniería electrónica y telecomunicaciones",
    location: "Popayán, Colombia",
    period: "2016 - 2022",
    status: "completed",
    description:
      "Formación en sistemas de telecomunicaciones, procesamiento de señales y enfasis en telemática y desarrollo de proyectos.",
  },
  {
    institution: "Universidad Internacional de la Rioja",
    degree: "Máster en Ingeniería de Software y Sistemas Informáticos",
    location: "Logroño, España",
    period: "2025 - Presente",
    status: "in-progress",
    description:
      "Especialización en arquitectura de software, DevOps y metodologías ágiles.",
  },
];

export const complementaryCourses: Course[] = [
  {
    institution: "MIT",
    title: "Machine Learning with Python - From Linear Models to Deep Learning",
    url: "https://courses.edx.org/certificates/8df3ffb69f1b401489fb0613b26d2b9f",
    category: "AI/ML",
  },
  {
    institution: "Harvard",
    title: "Web Development with Python and JavaScript",
    url: "https://courses.edx.org/certificates/b3cff4fa6a514ea5b6e609b526ad66eb",
    category: "Web Development",
  },
  {
    institution: "Harvard",
    title: "Introduction to Artificial Intelligence with Python",
    url: "https://courses.edx.org/certificates/97150a4aec6146cba244943849213339",
    category: "AI/ML",
  },
  {
    institution: "Blockchain Academy Chile",
    title: "Desarrollo de contratos inteligentes con Solidity",
    url: "https://registrado.org/visor/?c5576b22fbb43303d5e0c7edd39ca44dd097c036",
    category: "Blockchain",
  },
  {
    institution: "Platzi",
    title: "Cursos de desarrollo WEB y relacionados",
    url: "https://platzi.com/p/carlossde58/",
    category: "Web Development",
  },
];
