import { css, keyframes } from 'styled-components'

const palpitating = keyframes`
  50%{
    box-shadow: 0px 0px 20px 0px #ffffff;
  }
`
export const palpitatingAnimation = ({ type = 'ease' } = {}) => {
  const time = Math.random() + 1
  return css`
  animation:  ${palpitating} ${time}s ${type} infinite;
`
}
