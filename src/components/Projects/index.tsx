import { listProjects } from './projects'
import ProjectCard from './ProjectCard'
import { useParallax } from './useParallax'
import { motion } from 'framer-motion'
const Projects = () => {
  const { iconStyles, titleStyles, refContainer, customStyles } = useParallax()
  return (
    <section
      ref={refContainer}
      className='container min-h-[200vh] pt-20'
    >
      <motion.h1
        style={{
          x: titleStyles.x,
          opacity: titleStyles.opacity
        }}
        className='text-center'
      >
        Proyectos
      </motion.h1>
      {listProjects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          index={index}
        ></ProjectCard>
      ))}
    </section>
  )
}

export default Projects
