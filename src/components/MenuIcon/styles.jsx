import styled, { css } from 'styled-components'

export const Icon = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  gap: 4px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin: 12px 0;
  svg{
    opacity:1;
    transform: translateX(0);
    transition: all 0.5s ease-in-out;
  }
  ${props => props.open && css`
  svg{
    top: 50%;
  }
  svg:nth-child(1){
    position: absolute;
    transform: rotate(45deg);
  }
  svg:nth-child(2){
    position: absolute;
    transform: rotate(-45deg);
  }
  svg:nth-child(3){
    opacity: 0;
    position: absolute;
    transform: rotate(45deg);
  }

  `}
 
`
