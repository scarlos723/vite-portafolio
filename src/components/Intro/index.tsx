import styles from './styles.module.css'
import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { useParallax } from '../../hooks/useParallax'
import { SiLinkedin } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import StarsBg from './stars'
const Shared = lazy(()=>import('../Sphere/index'))
const Intro = () => {
  const {homeBannerRef, bannerStyles, textStyles} = useParallax()
  return (<>
  
    <motion.div className="absolute z-[0] top-0 h-[100vh] w-[100vw]"
      style={{
        y:bannerStyles.y,
        backgroundColor:bannerStyles.color
      }}
    >
      <StarsBg color={textStyles.starColor}></StarsBg>
      <div className='relative  translate-y-[400px] '>
        <Suspense fallback={<h2 className='text-center'>Loading...</h2>}>
          <Shared />
        </Suspense>
      </div>
    
      <div className='absolute  bg-gradient-to-b from-transparent from-50% to-black w-[100dvw] h-[100%]'>

      </div>
    </motion.div>
    <div className='relative gap-20 grid w-full'>
      <section ref={homeBannerRef} className="container grid  relative min-h-[100dvh] ">
        <div className="mx-auto mt-20 relative">
          <div className={styles.light}>
            <div className=''/>
            <div className=''/>
          </div>
          <motion.div className="relative grid gap-10"
            style={{
              opacity:textStyles.opacity,
              y:textStyles.y,
              color:textStyles.color
            }}
          >
            <h2 className="text-2xl text-center ">Carlos Sánchez</h2>
            <h1 className='text-center'>
          Frontend Developer &
           Site Reliability Engineer
            </h1>
          </motion.div>
          <div className='flex w-full mt-10 md:mt-20 justify-center gap-10'>

            <motion.div className="rounded-full p-1 cursor-pointer transition hover:scale-110"
              onClick={()=>window.open('https://www.linkedin.com/in/carlos-sanchez-69b277196/')}
              style={{
                color:textStyles.color,
                opacity:textStyles.opacityIcon,
                //boxShadow:textStyles.boxShadow
              }}
            >
              <SiLinkedin size={60}></SiLinkedin>
            </motion.div>
          
            <motion.div className="rounded-full p-1  cursor-pointer transition hover:scale-110"
              onClick={()=>window.open('https://github.com/scarlos723')}
              style={{
                color:textStyles.color,
                opacity:textStyles.opacityIcon,
                //boxShadow:textStyles.boxShadow
              }}
            >
              <FaGithub size={60}></FaGithub>
            </motion.div>

          </div>
         
        </div>
      </section>
    </div>
  </>
   
  )
}

export default Intro