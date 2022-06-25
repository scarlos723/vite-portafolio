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
  p{
    a{
      color: #189AB4;
    }
  }
  .text-img{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    img{
      width: 100%;
      border-radius: 20px;
      box-shadow: 0px 0px 15px #189AB4;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover{
        transform: scale(1.05);
      }
    }
  }
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
