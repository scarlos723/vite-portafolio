import styles from './styles.module.css'

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technology: string;
    development: string;
    scalability: string;
    url: string;
    domain: string;
    logo?: JSX.Element;
    image: string;
    tech_icons?: JSX.Element[];
  };
  index: number;
}
const ProjectCard = (props:ProjectCardProps) => {
  const { project, index } = props
  function goTo (url:string) {
    window.open(url)
  }
  return (
    <div key={index} className='min-h-[100dvh] grid py-20 box-border items-center lg:grid-cols-[2fr_1fr] lg:gap-10 lg:items-start xl:grid-cols-2 xl:gap-20'>
     
      <div>
        <h2 className='text-3xl mb-2'>
          {project.title}
        </h2> 
        <p className='text-balance'>
          {project.description}
        </p>
         
        <div className='grid grid-cols-2 my-10 gap-4 text-balance'>
          <section>
            <h3 className='text-xl mb-2'>
                Tecnologia
            </h3>
            <p>
              {project.technology}
            </p>
          </section>
          <section>
            <h3 className='text-xl mb-2'>
                Desarrollo
            </h3>
            <p>
              {project.development}
            </p>
          </section>
          <section className='col-span-2'>
            <h3 className='text-xl mb-2'>
                Escalabilidad
            </h3>
            <p>
              {project.scalability}
            </p>
          </section>
        </div>
      </div>
      <article className={styles.card} onClick={() => goTo(project.url)}>
        <div className='mb-4'>
          {project.logo}
        </div>
        <img src={project.image} alt="" />
        <section className={styles.subcard}>
          <a className='text-xl font-extrabold text-white' href={project.url} target='_blank'>
            {
              project.domain
            }
          </a>
          <div className='flex items-center justify-center gap-2 mt-4'>
            {
              project?.tech_icons?.map((icon) => (
                icon
              ))
            }
          </div>
        </section>
      </article>
      
    </div>
  )
}

export default ProjectCard