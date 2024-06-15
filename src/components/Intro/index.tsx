import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'
import StarsBg from './stars'
import styles from './styles.module.css'
import { useParallax } from './useParallax'
const Shared = lazy(() => import('../Sphere/index'))
const Intro = () => {
  const { homeBannerRef, bannerStyles, textStyles } = useParallax()

  return (
    <>
      <motion.div
        className='absolute z-[0] top-0 min-h-[100vh] h-[100vh] w-[100vw]'
        style={{
          y: bannerStyles.y,
          backgroundColor: bannerStyles.color
        }}
      >
        <StarsBg color={textStyles.starColor}></StarsBg>
        <div className='relative  translate-y-[400px] '>
          <Suspense fallback={<h2 className='text-center'>Loading...</h2>}>
            <Shared />
          </Suspense>
        </div>

        <div className='absolute bg-gradient-to-t from-[#050505] from-10% to-transparent to-50%  w-[100dvw] h-[115%]'></div>
      </motion.div>
      <div className='relative gap-20 grid w-full'>
        <section
          ref={homeBannerRef}
          className='container grid  relative min-h-[100vh] '
        >
          <div className='mx-auto mt-20 relative'>
            <div className={styles.light}>
              <div className='' />
              <div className='' />
            </div>
            <motion.div
              className='relative grid gap-2'
              style={{
                opacity: textStyles.opacity,
                y: textStyles.y,
                color: textStyles.color
              }}
            >
              <h1 className=' text-center'>Carlos Sánchez</h1>
              <h2 className='text-xl text-center'>
                Software Developer, <br /> Infrastructure &<br /> SRE
              </h2>
            </motion.div>
            <div className='flex w-full mt-10 md:mt-20 justify-center gap-10'>
              <motion.div
                className='rounded-md  cursor-pointer transition hover:shadow-2xl hover:shadow-white hover:scale-110'
                onClick={() => window.open('https://www.linkedin.com/in/carlos-sanchez-69b277196/')}
                style={{
                  color: textStyles.color,
                  opacity: textStyles.opacity
                  //boxShadow:textStyles.boxShadow
                }}
              >
                <SiLinkedin size={60}></SiLinkedin>
              </motion.div>
              <motion.div
                className='rounded-full p-1  cursor-pointer hover:shadow-2xl hover:shadow-white transition hover:scale-110'
                onClick={() => window.open('https://github.com/scarlos723')}
                style={{
                  color: textStyles.color,
                  opacity: textStyles.opacity
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
