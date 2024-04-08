import { TECHNOLOGIES } from './list'
import {motion} from 'framer-motion'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
export default function Skills () {

  const [radio, setRadio] = useState(100)
  const [iconsSize, setIconsSize] = useState(50)
  function getOrbitPosition (index: number) {
    const angleInRads = (index / TECHNOLOGIES.length) * Math.PI * 2
    
    const center = radio - (iconsSize/2)
    const radius = Math.random() * 100 + radio
    const x = Math.cos(angleInRads) * radius + center
    const y = Math.sin(angleInRads) * radius + center
    return { x, y }
  }
  function getWindowSize () {
    if(window.innerWidth <= 768) {
      console.log('mobile')
      setRadio(100)
      setIconsSize(50)
    }else{
      console.log('desktop')
      setRadio(150)
      setIconsSize(60)
    }
  }
  useEffect (() => {
    getWindowSize()
    window.addEventListener('resize', getWindowSize )
  },[])
  return (
    <section className='container relative min-h-[100dvh]   grid'>
      
      <div className='grid md:grid-cols-2'>
        <section className='container grid'>
          <div className='grid gap-4 rounded-lg my-auto'>
            <p className=' backdrop-blur-md'>
  Ingeniero en electronica y telecomunicaciones con experiencia en Development and IT 
  Operations (<strong>DEVOPS</strong>) y lider de proyectos <strong>FRONTEND</strong>. 

            </p>
            <p className=' backdrop-blur-md'>
Me motiva el aprendizaje constante y los retos. Me mantengo al tanto de herramientas modernas para la creación y despliegue
  de aplicaciones WEB o crear soluciones relacionadas.
            </p>
            <p className=' backdrop-blur-md'>
  Bienvenido a mi portafolio,
  aquí podrás encontrar información sobre mis habilidades,
  las tecnologías que conozco y algunos proyectos en los que he trabajado.
            </p>
          </div>
        </section>
        <section className='grid w-full '>
          <div className={`${styles['halo']} ${radio>100 ? styles['halo-lg'] : styles['halo-sm']}`}>
            {
              TECHNOLOGIES.map((tech, index) => (
                <motion.div key={index} className={styles['tech-item']}
                  initial={{x:radio-iconsSize, y:radio-iconsSize } }
                  whileInView={{...getOrbitPosition(index)}}
                  transition={{delay: Math.random() * index * 0.05 , type: 'spring', stiffness: 50, damping: 5}}
                >
                  {tech.icon}
                  <div className={`backdrop-blur-md ${styles['tech-name']}`}>
                    <p className='text-white font-extrabold'>
                      {tech.name}
                    </p>
                  </div>
                </motion.div>
              ))
            }
          </div>
        
        </section>
      </div>
      

    
    </section>
  )
}
