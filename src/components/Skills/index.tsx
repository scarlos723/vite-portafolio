import { TECHNOLOGIES } from './list'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { useParallax } from './useParallax'
export default function Skills() {
  const [radio, setRadio] = useState(120)
  const { customStyles, titleStyles, refContainer, iconStyles } = useParallax()

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
    <section
      ref={refContainer}
      className='container relative min-h-[100vh] z-[100] py-20'
    >
      <motion.h1
        className='text-center mb-20'
        style={{
          y: titleStyles.y,
          opacity: titleStyles.opacity
        }}
      >
        Habilidades y tecnologías
      </motion.h1>
      <div className='grid gap-20  lg:grid-cols-2'>
        <section className='grid'>
          <div className='grid gap-4 rounded-lg my-auto'>
            <motion.p
              className=' backdrop-blur-md'
              style={{
                y: customStyles.y,
                opacity: customStyles.opacity
              }}
            >
              Ingeniero en electronica y telecomunicaciones con experiencia en Development and IT
              Operations (<strong>DEVOPS</strong>) y lider de proyectos <strong>FRONTEND</strong>.
            </motion.p>
            <motion.p
              className=' backdrop-blur-md'
              style={{
                y: customStyles.y,
                opacity: customStyles.opacity
              }}
            >
              Me motiva el aprendizaje constante y los retos. Me mantengo al tanto de herramientas
              modernas para la creación y despliegue de aplicaciones WEB o crear soluciones
              relacionadas.
            </motion.p>
            <motion.p
              className=' backdrop-blur-md'
              style={{
                y: customStyles.y,
                opacity: customStyles.opacity
              }}
            >
              Bienvenido a mi portafolio, aquí podrás encontrar información sobre mis habilidades,
              las tecnologías que conozco y algunos proyectos en los que he trabajado.
            </motion.p>
          </div>
        </section>
        <motion.section
          className='grid w-full'
          style={{
            x: iconStyles.x,
            opacity: iconStyles.opacity
          }}
        >
          <div className={styles['halo']}>
            {TECHNOLOGIES.map((tech, index) => (
              <motion.div
                key={index}
                className={styles['tech-item']}
                whileInView={{ ...getOrbitPosition(index) }}
                transition={{
                  delay: Math.random() * index * 0.05,
                  type: 'spring',
                  stiffness: 50,
                  damping: 5
                }}
              >
                {tech.icon}
                <div className={`backdrop-blur-md ${styles['tech-name']}`}>
                  <p className='text-white font-extrabold'>{tech.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  )
}
