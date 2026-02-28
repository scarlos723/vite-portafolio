const ACADEMY = [
  {
    title: "Ingeniería en Electrónica y Telecomunicaciones",
    institution: "Universidad del Cauca",
    description: `Obtuve mi título de ingeniero en Electrónica y Telecomunicaciones con énfasis en Telemática en la Universidad de Antioquia. Durante mi formación académica, adquirí conocimientos sólidos en áreas como electrónica, telecomunicaciones, programación y redes. Mi enfoque se centró en el desarrollo de habilidades técnicas y prácticas que me han permitido abordar desafíos complejos en el campo de la ingeniería.`,
    dates: "2017 - 2022",
  },
  {
    title:
      "Máster Universitario en Ingeniería del Software y Sistemas Informáticos",
    institution: "Universidad Nacional de Colombia",
    description:
      "Quiero profundizar en los fundamentos de ingeniería de software y obtener una doble titulación en Inteligencia Artificial para Software y DevOps",
    dates: "2025 - en curso",
  },
];

const COMPLEMENTARY = [
  {
    title: "Complementarios: JavaScript, React, Terraform",
    institution: "Platzi",
    link_cert: "https://platzi.com/p/carlossde58/",
    dates: "2020 - 2024",
  },
  {
    title: "Desarrollador de Smart Contracts en Solidity",
    institution: "Blockchain Academy Chile",
    link_cert:
      "http://www.stamping.io/q/?50a2e772da4eefc5074c8aedbffd56e93644d882",
    dates: "2022",
  },
  {
    title: " Machine Learning con Python. De modelos lineales al Deep Learning",
    institution: "Instituto Tecnológico de Massachusetts, MITx,",
    link_cert:
      "https://courses.edx.org/certificates/8df3ffb69f1b401489fb0613b26d2b9f",
    dates: "2020",
  },
  {
    title: "Desarrollo Web con Python y JavaScript",
    institution: "Universidad de Harvard, HarvardX",
    link_cert:
      "https://courses.edx.org/certificates/97150a4aec6146cba244943849213339",
    dates: "2020",
  },
  {
    title: "Introducción a la Inteligencia Artificial con Python",
    institution: "Universidad de Harvard, HarvardX",
    dates: "2020",
    link_cert:
      "https://courses.edx.org/certificates/97150a4aec6146cba244943849213339",
  },
  {
    title: "Introducción al Framework Laravel",
    institution: "Universidad del Cauca",
    dates: "2019",
  },
];

export const Education = () => {
  return (
    <section className="container mt-20">
      <h2 className="text-4xl font-bold mb-20">Educación</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold mb-8">Academia</h3>
          <div className="flex flex-col gap-4">
            {ACADEMY.map((edu) => (
              <article key={edu.title} className="border p-4 rounded-2xl">
                <h3 className="text-2xl font-semibold">{edu.title}</h3>
                <p className="text-sm text-slate-400">{edu.institution}</p>
                <p className="text-sm text-slate-400">{edu.dates}</p>
                <p className="mt-2">{edu.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8"> Complementarios</h3>
          <div className="flex flex-col gap-4">
            {COMPLEMENTARY.map((edu) => (
              <article key={edu.title} className="border p-4 rounded-2xl">
                <h3 className="text-2xl font-semibold">{edu.title}</h3>
                <p className="text-sm text-slate-400">{edu.institution}</p>
                <p className="text-sm text-slate-400">{edu.dates}</p>
                {edu?.link_cert && (
                  <a
                    href={edu.link_cert}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Ver certificado
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
