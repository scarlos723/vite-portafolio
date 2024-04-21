
import { listProjects } from './projects'
import ProjectCard from './ProjectCard'



const Projects = () => {

  return (
    <section className='container'>
      <h1 className='text-center'>
        Proyectos
      </h1>
      {
        listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
          ></ProjectCard>
        ))

      }
     
    </section>
  )
}

export default Projects