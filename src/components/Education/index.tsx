import { HiOutlineAcademicCap } from 'react-icons/hi'
import { RiPresentationLine } from 'react-icons/ri'
const item_list = [
  {
    title: '',
    description: 'MIT - Machine Learning with Python - From Linear Models to Deep Learning',
    url: 'https://courses.edx.org/certificates/8df3ffb69f1b401489fb0613b26d2b9f'
  },
  {
    title: '',
    description: 'Harvard - Web Development with Python and JavaScript',
    url: 'https://courses.edx.org/certificates/b3cff4fa6a514ea5b6e609b526ad66eb'
  },
  {
    title: '',
    description: 'Harvard - Introduction to Artificial Intelligence whit Python',
    url: 'https://courses.edx.org/certificates/97150a4aec6146cba244943849213339'
  },
  {
    title: '',
    description: 'Blockchain Academy Chile - Desarrollo de contratos inteligentes con Solidity',
    url: 'https://registrado.org/visor/?c5576b22fbb43303d5e0c7edd39ca44dd097c036'
  },
  {
    title: '',
    description: 'Platzi - Cursos de desarrollo WEB y relacionados',
    url: 'https://platzi.com/p/carlossde58/'
  }
]

const Education = () => {
  return (
    <div className='overflow-x-hidden w-full'>
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h1 className='text-center mb-20 text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
            Formación
          </h1>
          <div className='grid gap-10 lg:gap-20 md:grid-cols-2 items-start max-w-7xl mx-auto'>
            <div className='w-full'>
              <section className='group relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-gray-600/40 hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 max-w-full'>
                {/* Efecto de brillo en hover */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out'></div>

                <article className='relative z-10 grid gap-8'>
                  <div className='flex gap-4 items-center'>
                    <h3 className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                      Academia
                    </h3>
                    <div className='p-3 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-all duration-300'>
                      <HiOutlineAcademicCap
                        color='#60A5FA'
                        size={32}
                      />
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div className='group/item'>
                      <p className='text-xl font-bold text-white group-hover/item:text-blue-200 transition-colors duration-300'>
                        Universidad del Cauca, Colombia
                      </p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <span className='flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mt-2'></span>
                      <p className='text-gray-300 text-lg group-hover:text-gray-100 transition-colors duration-300'>
                        Ingeniería electrónica y telecomunicaciones
                      </p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <span className='px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30'>
                        2016 - 2022
                      </span>
                    </div>
                  </div>
                </article>
              </section>
            </div>
            <div className='w-full'>
              <section className='group relative overflow-hidden bg-gradient-to-br from-purple-900/80 to-black/90 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-gray-600/40 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20 max-w-full'>
                {/* Efecto de brillo en hover */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out'></div>

                <div className='relative z-10 space-y-8'>
                  <div className='flex items-center gap-4'>
                    <h3 className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                      Cursos Complementarios
                    </h3>
                    <div className='p-3 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-all duration-300'>
                      <RiPresentationLine
                        color='#A855F7'
                        size={32}
                      />
                    </div>
                  </div>

                  <div className='space-y-4'>
                    {item_list.map((item, index) => (
                      <div
                        key={index}
                        className='group/item'
                      >
                        <a
                          href={item.url}
                          target='_blank'
                          rel='noreferrer'
                          className='block p-4 bg-gray-800/40 hover:bg-gray-700/60 rounded-xl border border-gray-700/50 hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10 w-full overflow-hidden'
                        >
                          <div className='flex items-start gap-3'>
                            <span className='flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-200'></span>
                            <p className='text-gray-300 leading-relaxed group-hover/item:text-gray-100 transition-colors duration-300 text-sm lg:text-base break-words hyphens-auto'>
                              {item.description}
                            </p>
                          </div>
                          <div className='mt-2 flex justify-end'>
                            <span className='text-xs text-purple-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300'>
                              Ver certificado →
                            </span>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
