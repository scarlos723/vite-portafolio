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


const shadowKeyframes = keyframes`
  50%{
    box-shadow: 0px 2px 5px -8px #05445E;
  }
`

export const shadowAnimation = ({ time = '1s', type = 'ease' } = {}) => css`
  animation:  ${shadowKeyframes} ${time} ${type} infinite;
`
