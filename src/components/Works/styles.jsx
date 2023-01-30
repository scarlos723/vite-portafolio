import styled, { css } from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Container = styled.section`
  display: grid;
  width: 100%;
  margin-top: 20px;
  gap: 50px;
  ${ResponsiveTo('md')}{
    gap:80px
  }
  ${ResponsiveTo('lg')}{
    margin-top: 80px;
    gap:100px
  }
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
      color: #899DB0;
    }
  }
  .text-img{
    display: flex;
    flex-direction: column;
    gap: 12px;
    img{
      order: 1;
      width: 100%;
      border-radius: 20px;
      box-shadow: 0px 0px 15px #899DB0;
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
    color: #899DB0;
    cursor: pointer;
    svg{
      transition: all 0.3s;
      ${props => props.show ? 'transform: rotate(90deg)' : ''}
    }
  }
  .text-hidden{
    height: 0px;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s ease;
    ${props => props.show
    ? css`
      height: 210px;
      opacity: 1;
      width: 100%;
    `
    : ''}
  }

  ${ResponsiveTo('lg')}{
    .text-img{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    img{
      order: inherit;
    }
    }
  }
`
