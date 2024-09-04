import { HiOutlineAcademicCap } from 'react-icons/hi'
import { useParallax } from './useParallax'
import { motion } from 'framer-motion'
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
  const { titleStyles, refContainer, customStyles, customStyles2 } = useParallax()
  return (
    <>
      <section
        ref={refContainer}
        className='grid'
      >
        <div className='my-auto'>
          <motion.h1
            className='text-center mb-10'
            style={{ y: titleStyles.y, opacity: titleStyles.opacity }}
          >
            Formación
          </motion.h1>
          <div className='container relative grid gap-10 md:grid-cols-2 items-center'>
            <motion.div
              style={{ x: customStyles.x, opacity: customStyles.opacity, y: customStyles.y }}
            >
              <section>
                <article className='grid gap-10'>
                  <div className='flex gap-4 items-center'>
                    <h3 className='text-2xl'>Academia</h3>
                    <HiOutlineAcademicCap
                      color='white'
                      size={0}
                    />
                  </div>
                  <div>
                    <p>
                      <strong>Universidad del Cauca, Colombia</strong>
                    </p>
                    <p>Ingeniería electrónica y telecomunicaciones</p>
                    <p>2016 - 2022</p>
                  </div>
                </article>
              </section>
            </motion.div>
            <motion.div
              className='grid gap-10'
              style={{
                x: customStyles2.x,
                opacity: customStyles2.opacity,
                y: customStyles2.y
              }}
            >
              <div className='flex items-center gap-4'>
                <h3 className='text-2xl'>Cursos Complementarios</h3>
                <RiPresentationLine
                  color='white'
                  size={0}
                />
              </div>

              <ul className='grid gap-4 list-disc'>
                {item_list.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      target='_blank'
                      rel='noreferrer'
                      className='hover:underline'
                    >
                      <code>{item.description}</code>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <section className='grid min-h-[100dvh]' />
    </>
  )
}

export default Education
