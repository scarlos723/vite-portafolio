import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'
import StarsBg from './stars'
import styles from './styles.module.css'
import { useParallax } from './useParallax'

const Intro = () => {
  const { homeBannerRef, bannerStyles, textStyles, scaleUpSphere } = useParallax()

  return (
    <>
      <motion.div
        className='absolute z-[0] top-0 min-h-[100vh] h-[100vh] w-full '
        style={{
          y: bannerStyles.y,
          backgroundColor: bannerStyles.color
        }}
      >
        <StarsBg color={textStyles.starColor}></StarsBg>
        <motion.div
          style={{
            y: scaleUpSphere.y,
            scale: scaleUpSphere.scale
          }}
          className={styles.sphere}
        ></motion.div>
      </motion.div>
      <div className='gap-20 grid w-full'>
        <section
          ref={homeBannerRef}
          className='container min-h-[100vh]'
        >
          <div className='mx-auto mt-20 grid sticky top-0 z-10 '>
            <div className={styles.light}>
              <div className='' />
              <div className='' />
            </div>
            <motion.div
              style={{
                color: textStyles.color,
                opacity: textStyles.opacity
              }}
              className=' font-bold grid gap-2 pt-10 '
            >
              <h1 className='backdrop-blur-sm text-4xl lg:text-5xl text-center m-auto rounded-2xl'>
                Carlos Sánchez
              </h1>
              <h2 className='backdrop-blur-sm  text-xl  m-auto rounded-2xl text-center'>
                Software Developer, DevOps & <br /> Cloud Infrastructure Engineer
                <br />
              </h2>
            </motion.div>
            <div className='flex w-full mt-10 md:mt-20 justify-center gap-10'>
              <motion.div
                className='rounded-md  cursor-pointer transition hover:shadow-2xl hover:shadow-white hover:scale-110'
                onClick={() => window.open('https://www.linkedin.com/in/carlos-sanchez-69b277196/')}
                style={{
                  color: textStyles.color,
                  opacity: textStyles.opacity
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
