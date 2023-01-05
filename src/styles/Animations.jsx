import { css, keyframes } from 'styled-components'

const typingKeyframes = keyframes`
from{
  width: 0;
}
to{
  width: 8ch;
}
`
const blinkKeyframes = keyframes`
  50%{
    border-color: transparent;
  }
`
const neonKeyframes = () => {
  let cssString = ''
  const basePx = 3
  for (let i = 0; i <= 10; i++) {
    const randNumber = Math.random()
    const base = basePx * randNumber
    cssString += `${i * 10}%{
      text-shadow: 
        0 0 ${base}px #93A8ED,
        0 0 ${base * 2}px #93A8ED,
        0 0 ${base * 3}px #93A8ED,
        0 0 ${base * 4}px #93A8ED,
        0 0 ${base * 5}px #93A8ED,
        0 0 ${base * 6}px #93A8ED,
        0 0 ${base * 7}px #93A8ED;
      }
      `
  }
  console.log(cssString)
  return keyframes`${cssString}`
}

const sideMoveKeyframes = keyframes`
from{
  opacity: 0;
  transform: translateX(-150%);
}
to{
  opacity: 1;
  transform: translateX(0%);
}
`

export const typingAnimation = ({ timeType = '1s', ch = 4 } = {}) => css`
  animation:  ${typingKeyframes} ${timeType} steps(${ch}) ,
    ${blinkKeyframes} .5s infinite step-end alternate;
`

const shadowKeyframes = keyframes`
  50%{
    box-shadow: 0px 2px 5px -8px #05445E;
  }
`

export const shadowAnimation = ({ time = '1s', type = 'ease' } = {}) => css`
  animation:  ${shadowKeyframes} ${time} ${type} infinite;
`

export const neonAnimation = ({ time = '1s', type = 'ease-in-out' } = {}) => css`
  animation:  ${neonKeyframes()} ${time} ${type} infinite alternate;
`

export const sideMoveAnimation = ({ time = '1s', type = 'ease-in-out', delay = '0s' } = {}) => css`
  animation:  ${sideMoveKeyframes} ${time} ${type} ;
  animation-delay: ${delay};
  animation-fill-mode: forwards;
`
