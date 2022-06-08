import styled, { css } from 'styled-components'
import { ContainerGlobal } from '../../styles/styles'

export const Container = styled(ContainerGlobal)`
  display: grid;
  width: 90%;
  margin: 80px auto;
  gap: 32px;
  
`
export const Section = styled.section`
  display: grid;
  gap: 16px;
`
export const TextBox = styled.div`
  display: grid;
  gap: 12px;
  .text-action{
    display: flex;
    gap: 4px;
    align-items: center;
    font-weight: bold;
    color: #189AB4;
    cursor: pointer;
    svg{
      transition: all 0.3s;
      ${props => props.show ? 'transform: rotate(90deg)' : ''}
    }
  }
  .text-hidden{
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s;
    ${props => props.show
    ? css`
      height: auto;
      opacity: 1;
      width: 100%;  

    `
    : ''}
  }
`

export const VideoContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  video{
    width: 100%;
  }
`
