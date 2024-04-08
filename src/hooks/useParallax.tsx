
import { useScroll, useTransform } from 'framer-motion'

import { useRef } from 'react'

export const useParallax = () => {
  const homeBannerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: homeBannerRef,
    offset: ['start start', 'end start']
  })

 
  const textStyles = {
    color:  useTransform(scrollYProgress, [0, 0.1], ['#000000', '#ffffff']),
    y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.7], [0, 150, 250, 1000]),
    opacity: useTransform(scrollYProgress, [0, 0.5, 0.7], [1, 1, 0]),
    opacityIcon: useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 0, 0]),
    starColor: useTransform(scrollYProgress, [0,0.2], ['rgba(221, 208, 255, 0)','#ffffff']),
    //boxShadow: useTransform(scrollYProgress, [0, 0.1], ['0px 0px 0px 0px #00000', '0px 0px 20px 20px #ffff'])
  }
  const bannerStyles =  {
    y: useTransform(scrollYProgress, [0, 1], [0, 0]),
    color:  useTransform(scrollYProgress, [0, 0.1], ['#d0beffd2', '#000000'])

  }
  

  return {
    homeBannerRef,
    bannerStyles,
    textStyles
  }
}
