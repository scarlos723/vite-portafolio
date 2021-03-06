import styled, { css } from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
import { shadowAnimation } from '../../styles/Animations'

export const NavContainer = styled.div`
  position: absolute;
  background-color: transparent;
  transition: all 0.3s;
  padding: 20px 40px;
  width: 100%;
  ${props => props.show
    ? css`
    background-color: #d4f1f4a4;
  `
    : ''}
  nav{
    svg{
      width: 100%;
      height: 40px;
    }
  }
  ${ResponsiveTo('md')}{
    nav{
      max-width: 500px;
      margin: 0 auto;
    }
    
    ${props => props.show
    ? css`
      background-color: transparent;
    `
    : ''}
  }
`
export const Ul = styled.ul`
  width: 100%;
  display: grid;
  transform: scale(0);
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s;
  li{
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #05445E;
    p{
      cursor: pointer;
    }
  }
  ${props => props.show
    ? css`
    transform: scale(1);
    opacity: 1;
  `
    : ''}

  ${ResponsiveTo('md')}{
    justify-content: center;
    box-shadow: 0px 8px 20px -8px #05445E;
    ${shadowAnimation({ time: '2s', type: 'ease' })}
    li{
      width: 200px;
      p{
        margin: 0 auto;
      }
    }

  }

  ${ResponsiveTo('lg')}{
    display: flex;
    li{
      
      p{
        font-weight: bolder;
      }
    }
  }
`
export const UpButton = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 50px;
  right: 20px;
  padding: 4px;
  cursor: pointer;
  p{
    color: #75E6DA;
    text-align: center;
    font-weight: bold;
  }
  svg{
    width: 100%;
    height: 100%;
  }
`
