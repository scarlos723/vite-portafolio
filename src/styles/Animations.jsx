import { css, keyframes } from 'styled-components'

const typingKeyframes = keyframes`
from{
  width: 0;
}
`
const blinkKeyframes = keyframes`
  50%{
    border-color: transparent;
  }
`

export const typingAnimation = ({ timeType = '1s', ch = 4 } = {}) => css`
  animation:  ${typingKeyframes} ${timeType} steps(${ch}) ,
    ${blinkKeyframes} .5s infinite step-end alternate;
`
