import ProjectCard from './ProjectCard'
import { listProjects } from './projects'
const Projects = () => {
  return (
    <section className='container pt-20'>
      <h1 className='text-center'>Proyectos</h1>
      {listProjects.map((project, index) => (
        <div key={index}>
          <ProjectCard
            project={project}
            index={index}
          ></ProjectCard>
        </div>
      ))}
    </section>
  )
}

export default Projects
