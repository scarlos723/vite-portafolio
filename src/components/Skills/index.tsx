import { TECHNOLOGIES } from './list'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
export default function Skills() {
  const [radio, setRadio] = useState(120)


  function getOrbitPosition(index: number) {

    const angleinDegrees = (index / TECHNOLOGIES.length) * 720
    const angleInRads =  (angleinDegrees * Math.PI) / 180
 
    const newRadio =  angleinDegrees>360 ? radio-80:radio
    //console.log(angleinDegrees)
    const randomValue = Math.random() * 100
    console.log(randomValue)
   
    const radius =  randomValue + newRadio
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
    <section className="container relative min-h-[100dvh] z-[100] py-10">
      <h1 className='text-center mb-20'>
        Habilidades
      </h1>
      <div className="grid md:grid-cols-2">
        <section className="container grid">
          <div className="grid gap-4 rounded-lg my-auto">
            <p className=" backdrop-blur-md">
              Ingeniero en electronica y telecomunicaciones con experiencia en
              Development and IT Operations (<strong>DEVOPS</strong>) y lider de
              proyectos <strong>FRONTEND</strong>.
            </p>
            <p className=" backdrop-blur-md">
              Me motiva el aprendizaje constante y los retos. Me mantengo al
              tanto de herramientas modernas para la creación y despliegue de
              aplicaciones WEB o crear soluciones relacionadas.
            </p>
            <p className=" backdrop-blur-md">
              Bienvenido a mi portafolio, aquí podrás encontrar información
              sobre mis habilidades, las tecnologías que conozco y algunos
              proyectos en los que he trabajado.
            </p>
          </div>
        </section>
        <section className="grid w-full ">
          <div
            className={styles['halo']}
          >
            {TECHNOLOGIES.map((tech, index) => (
              <motion.div
                key={index}
                className={styles['tech-item']}
                whileInView={{ ...getOrbitPosition(index) }}
                transition={{
                  delay: Math.random() * index * 0.05,
                  type: 'spring',
                  stiffness: 50,
                  damping: 5,
                }}
              >
                {tech.icon}
                <div className={`backdrop-blur-md ${styles['tech-name']}`}>
                  <p className="text-white font-extrabold">{tech.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
