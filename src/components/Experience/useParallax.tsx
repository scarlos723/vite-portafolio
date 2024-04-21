
import { useScroll, useTransform } from 'framer-motion'

import { useRef } from 'react'

export const useParallax = () => {
  const refContainer = useRef(null)

  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['start start', 'end start']
  })

 
  const cardStyles = {
    y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.7], [0, 150, 250, 1000]),
    opacity: useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]),
  }

  

  return {
    refContainer,
    cardStyles
  }
}
