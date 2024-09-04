import { useScroll, useTransform } from 'framer-motion'

import { useRef } from 'react'

export const useParallax = () => {
  const refContainer = useRef(null)

  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['start start', 'end start']
  })

  const titleStyles = {
    y: useTransform(scrollYProgress, [0, 0.2, 0.3, 0.7], [0, 300, 400, 500]),
    opacity: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.5], [1, 1, 1, 1])
  }
  const customStyles = {
    x: useTransform(scrollYProgress, [0, 0.1, 0.5], [-250, -150, 0]),
    y: useTransform(scrollYProgress, [0, 0.2, 0.7], [0, 350, 580]),
    opacity: useTransform(scrollYProgress, [0, 0.2, 0.5], [0.1, 0.5, 1])
  }
  const customStyles2 = {
    x: useTransform(scrollYProgress, [0, 0.2, 0.5], [350, 100, 0]),
    y: useTransform(scrollYProgress, [0, 0.2, 0.7], [0, 350, 580]),
    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7], [0.1, 0.5, 1])
  }

  return {
    titleStyles,
    refContainer,
    customStyles,
    customStyles2
  }
}
