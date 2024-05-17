import { listProjects } from './projects'
import ProjectCard from './ProjectCard'
import { useParallax } from './useParallax'
import { motion } from 'framer-motion'
const Projects = () => {
  const { titleStyles, refContainer, customStyles, customStyles2 } = useParallax()
  return (
    <section
      ref={refContainer}
      className='container min-h-[200vh] pt-20'
    >
      <motion.h1
        style={{
          y: titleStyles.y,
          opacity: titleStyles.opacity
        }}
        className='text-center'
      >
        Proyectos
      </motion.h1>
      {listProjects.map((project, index) => (
        <motion.div
          key={index}
          style={{
            y: index === 0 ? customStyles.y : customStyles2.y,
            opacity: index === 0 ? customStyles.opacity : customStyles2.opacity
          }}
        >
          <ProjectCard
            project={project}
            index={index}
          ></ProjectCard>
        </motion.div>
      ))}
    </section>
  )
}

export default Projects
