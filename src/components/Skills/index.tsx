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
      <div className='absolute grid w-screen min-h-40 min-w-[500px] '>
        <Meteors></Meteors>
      </div>
      <section
        ref={refContainer}
        className='container relative min-h-[100vh] z-[100] py-20'
      >
        <motion.h2
          className='text-center pb-20 text-2xl lg:text-5xl xl:pt-10 font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'
          style={{
            y: titleStyles.y,
            opacity: titleStyles.opacity
          }}
        >
          Habilidades y tecnologías
        </motion.h2>
        <div className='grid gap-20 lg:grid-cols-2 items-center'>
          <section className='grid'>
            <motion.div
              className='group relative overflow-hidden bg-gradient-to-br from-purple-900/70 to-gray-900/80 backdrop-blur-md rounded-3xl p-8 border border-gray-600/40 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20'
              style={{
                y: customStyles.y,
                opacity: customStyles.opacity
              }}
            >
              {/* Efecto de brillo en hover */}
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out'></div>

              <div className='relative z-10 grid gap-6 rounded-lg my-auto'>
                <p className='text-2xl leading-relaxed text-gray-200 group-hover:text-gray-100 transition-colors duration-300'>
                  <span className='text-white font-semibold'>
                    Ingeniero en Electrónica y Telecomunicaciones
                  </span>{' '}
                  con experiencia especializada en <strong>DevOps</strong> y liderazgo de proyectos{' '}
                  <strong>Frontend</strong>.
                </p>

                <p className='text-lg leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-300'>
                  Me apasiona el <strong>aprendizaje constante</strong> y enfrentar nuevos desafíos
                  tecnológicos. Mantengo un enfoque actualizado en herramientas modernas para el
                  desarrollo y despliegue de aplicaciones web escalables.
                </p>

                <div className='pt-4 border-t border-gray-600/30'>
                  <p className='text-lg leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-300'>
                    En este portafolio encontrarás mis <strong>habilidades técnicas</strong>, las{' '}
                    <strong>tecnologías</strong> que domino y los <strong>proyectos</strong> que
                    definen mi experiencia profesional.
                  </p>
                </div>
              </div>
            </motion.div>
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
