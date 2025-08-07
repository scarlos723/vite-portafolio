import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Meteors from '../Animations/Meteors'
import { TECHNOLOGIES } from './list'
import styles from './styles.module.css'
import { useParallax } from './useParallax'
export default function Skills() {
  const [radio, setRadio] = useState(120)
  const { customStyles, titleStyles, refContainer } = useParallax()

  function getOrbitPosition(index: number) {
    const angleinDegrees = (index / TECHNOLOGIES.length) * 720
    const angleInRads = (angleinDegrees * Math.PI) / 180

    const newRadio = angleinDegrees > 360 ? radio - 80 : radio
    //console.log(angleinDegrees)
    const randomValue = Math.random() * 100
    console.log(randomValue)

    const radius = randomValue + newRadio
    const x = Math.cos(angleInRads) * radius
    const y = Math.sin(angleInRads) * radius
    return { x, y }
  }
  function getWindowSize() {
    if (window.innerWidth <= 768) {
      setRadio(120)
    } else {
      setRadio(150)
    }
  }
  useEffect(() => {
    getWindowSize()
    window.addEventListener('resize', getWindowSize)
  }, [])
  return (
    <div className='overflow-hidden grid max-w-screen'>
      <div className='absolute overflow-hidden container min-h-[400px]'>
        {' '}
        <Meteors></Meteors>
      </div>
      <section
        ref={refContainer}
        className='container relative min-h-[100vh] z-[100] py-20'
      >
        <motion.h1
          className='text-center mb-20 text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'
          style={{
            y: titleStyles.y,
            opacity: titleStyles.opacity
          }}
        >
          Habilidades y tecnologías
        </motion.h1>
        <div className='grid gap-20 lg:grid-cols-2 items-center'>
          <section className='grid'>
            <div className='group relative overflow-hidden bg-gradient-to-br from-purple-900/70 to-gray-900/80 backdrop-blur-md rounded-3xl p-8 border border-gray-600/40 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20'>
              {/* Efecto de brillo en hover */}
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out'></div>

              <div className='relative z-10 grid gap-6 rounded-lg my-auto'>
                <motion.p
                  className='text-lg leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-300'
                  style={{
                    y: customStyles.y,
                    opacity: customStyles.opacity
                  }}
                >
                  Ingeniero en{' '}
                  <span className='text-blue-400 font-semibold'>
                    electrónica y telecomunicaciones
                  </span>{' '}
                  con experiencia como{' '}
                  <span className='bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-bold'>
                    DEVOPS
                  </span>{' '}
                  (Development and IT Operations) y líder de proyectos{' '}
                  <span className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold'>
                    FRONTEND
                  </span>
                  .
                </motion.p>
                <motion.p
                  className='text-lg leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-300'
                  style={{
                    y: customStyles.y,
                    opacity: customStyles.opacity
                  }}
                >
                  Me motiva el{' '}
                  <span className='text-yellow-400 font-semibold'>aprendizaje constante</span> y los
                  retos. Me mantengo al tanto de herramientas modernas para la creación y despliegue
                  de aplicaciones web o crear soluciones relacionadas.
                </motion.p>
                <motion.p
                  className='text-lg leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-300'
                  style={{
                    y: customStyles.y,
                    opacity: customStyles.opacity
                  }}
                >
                  Bienvenido a mi portafolio, aquí podrás encontrar información sobre mis{' '}
                  <span className='text-cyan-400 font-semibold'>habilidades</span>, las{' '}
                  <span className='text-emerald-400 font-semibold'>tecnologías</span> que conozco y
                  algunos <span className='text-orange-400 font-semibold'>proyectos</span> en los
                  que he trabajado.
                </motion.p>
              </div>
            </div>
          </section>
          <motion.section className='grid w-full place-items-center'>
            <div className='relative'>
              {/* Fondo decorativo */}
              <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 rounded-full blur-3xl'></div>

              <div className={styles['halo']}>
                {TECHNOLOGIES.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={`${styles['tech-item']} group/tech`}
                    whileInView={{ ...getOrbitPosition(index) }}
                    transition={{
                      delay: Math.random() * index * 0.05,
                      type: 'spring',
                      stiffness: 50,
                      damping: 5
                    }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className='relative z-10 size-8'>{tech.icon}</div>
                    <div
                      className={`${styles['tech-name']} group-hover/tech:opacity-100 bg-gradient-to-r from-gray-800/90 to-black/90 backdrop-blur-md border border-gray-600/50 group-hover/tech:border-purple-400/50 transition-all duration-300`}
                    >
                      <p className='text-white font-bold text-sm whitespace-nowrap'>{tech.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Indicador central */}
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full border border-purple-400/30 flex items-center justify-center'>
                <div className='w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse'></div>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  )
}
