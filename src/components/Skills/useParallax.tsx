import { useScroll, useTransform } from 'framer-motion'

import { useRef } from 'react'

export const useParallax = () => {
  const refContainer = useRef(null)

  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['start start', 'end start']
  })

  const titleStyles = {
    y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.7], [0, -250, -350, -500]),
    opacity: useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0])
  }
  const customStyles = {
    y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.7], [0, 150, -150, -500]),
    opacity: useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0])
  }
  const iconStyles = {
    x: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.7], [0, 0, 250, 500]),
    opacity: useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0])
  }

  return {
    iconStyles,
    titleStyles,
    refContainer,
    customStyles
  }
}
