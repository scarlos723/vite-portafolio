import { experienceData } from "../data/experience";

export const Experience = () => {
  return (
    <section className="container pt-20">
      <h2 className="text-4xl font-bold mb-20">Experiencia laboral</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {experienceData.map((exp) => (
          <article key={exp.title} className="border p-4 rounded-2xl">
            <h3 className="text-2xl font-semibold">
              {exp.title} - {exp.company}
            </h3>
            <p className="text-sm text-slate-400">{exp.dates}</p>
            <p className="mt-2">{exp.description}</p>
            {/* <ul>
              {exp.jobs.map((job, index) => (
                <li key={index} className="mt-1 text-sm">
                  {job}
                </li>
              ))}
            </ul> */}
          </article>
        ))}
      </div>
    </section>
  );
};
