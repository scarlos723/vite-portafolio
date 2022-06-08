import styled from 'styled-components'
import { typingAnimation } from '../../styles/Animations'
import { ContainerGlobal } from '../../styles/styles'

export const Container = styled(ContainerGlobal)`
  display: grid;
  place-content: center;
  width: 90%;
  height: 100vh;
  margin:  auto;

`
export const AnimationText = styled.span`
  display: block;
  margin: 0 auto;
  white-space: nowrap;
  border-right:  4px solid white;
  width: 6ch;
  overflow: hidden;
  ${typingAnimation({ timeType: '1s', ch: 6 })}
`
export const TextBox = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 80px ;
`
