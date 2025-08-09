import ProjectCard from './ProjectCard'
import { listProjects } from './projects'
const Projects = () => {
  return (
    <section className='container pt-20'>
      <h2 className='text-center text-2xl py-3 lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-20'>
        Proyectos
      </h2>
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
