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
      <div className='space-y-6'>
        <h2 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8'>
          {project.title}
        </h2>
        <div className='flex flex-col gap-6'>
          <div className='group'>
            <p className='text-lg text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300'>
              {project.description}
            </p>
          </div>
          <div className='grid gap-4'>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-2'></span>
              <p className='text-gray-300 leading-relaxed'>{project.development}</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2'></span>
              <p className='text-gray-300 leading-relaxed'>{project.scalability}</p>
            </div>
          </div>
        </div>
      </div>
      <article
        className='group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md rounded-3xl p-6 border border-gray-600/40 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer'
        onClick={() => goTo(project.url)}
      >
        {/* Efecto de brillo en hover */}
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out'></div>

        <div className='relative z-10'>
          {/* Logo section */}
          <div className='mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300'>
            {project.logo}
          </div>

          {/* Image section */}
          <div className='relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </div>

          {/* Info section */}
          <section className='relative bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-purple-400/30 transition-all duration-300'>
            <a
              className='block text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300 mb-4'
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => e.stopPropagation()}
            >
              {project.domain}
            </a>

            {/* Tech icons */}
            <div className='flex items-center justify-center gap-3 flex-wrap'>
              {project?.tech_icons?.map((icon, iconIndex) => (
                <div
                  key={iconIndex}
                  className='p-2 bg-gray-800/50 rounded-lg border border-gray-600/30 group-hover:border-purple-400/30 group-hover:bg-gray-700/50 transition-all duration-300 hover:scale-110'
                >
                  {icon}
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}

export default ProjectCard
