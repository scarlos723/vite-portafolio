import styles from './styles.module.css'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    development: string
    scalability: string
    url: string
    domain: string
    logo?: JSX.Element
    image: string
    tech_icons?: JSX.Element[]
  }
  index: number
}
const ProjectCard = (props: ProjectCardProps) => {
  const { project, index } = props
  function goTo(url: string) {
    window.open(url)
  }
  return (
    <div
      key={index}
      className='min-h-[100vh] grid py-20 box-border items-center lg:grid-cols-[2fr_1fr] lg:gap-20 lg:items-start xl:grid-cols-2 xl:gap-20'
    >
      <div>
        <h2 className='text-4xl mb-8'>{project.title}</h2>
        <div className='flex flex-col gap-4'>
          <p className='text-balance'>{project.description}</p>
          <p>{project.development}</p>
          <p>{project.scalability}</p>
        </div>
      </div>
      <article
        className={styles.card}
        onClick={() => goTo(project.url)}
      >
        <div className='mb-4'>{project.logo}</div>
        <img
          src={project.image}
          alt=''
        />
        <section className={styles.subcard}>
          <a
            className='text-xl font-extrabold text-white'
            href={project.url}
            target='_blank'
          >
            {project.domain}
          </a>
          <div className='flex items-center justify-center gap-2 mt-4'>
            {project?.tech_icons?.map((icon) => icon)}
          </div>
        </section>
      </article>
    </div>
  )
}

export default ProjectCard
