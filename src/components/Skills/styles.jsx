import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
import { shadowAnimation } from '../../styles/Animations'
import { ContainerGlobal } from '../../styles/styles'

export const Container = styled(ContainerGlobal)`
  width: 90%;
  margin: 20px auto;
`
export const Grid = styled.div`
  width: 100%;
  ${ResponsiveTo('md')}{
  
  }
`
export const Card = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  h3{
    margin: 20px 0;
    
    box-shadow: 0px 8px 20px -8px #05445E;
    border-radius: 2px;
    ${shadowAnimation({ time: '2s', type: 'ease' })}
  }
  ${ResponsiveTo('md')}{
    h3{
      font-size: 1.2rem;
    }
  } 
  
`
export const Title = styled.h2`
  margin: 20px 0;
`
export const Box = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  //border: 1px solid #75E6DA;
  box-shadow: 0px 0px 15px #05445E;
  box-sizing: border-box;
  border-radius: 18px;
  padding: 20px 4px;
  gap: 12px;
  //box-shadow: 0px -10px 20px -6px #05445E;
  
  h5{
    font-family: 'Monument Extended';
    color:  #75E6DA;
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 105%;
    text-align: center;
    margin: 12px 0;
  }
  p{
    text-align: center;
    font-size: 0.5rem;
    line-height: 105%;
  }
  ${ResponsiveTo('md')}{
    display: grid;
    place-content: initial;
    place-items: initial;
    grid-template-columns: 1fr 1fr;
    section:nth-child(3){
      grid-column: 2 span;
    }
    h5{
      font-size: 1rem;
    }
  }

`

export const Ul = styled.ul`
  display: grid;
  width: 100%;
  gap: 12px;
  color: white;
  li{
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.7rem;
    width: 100%;
    height: 10.97px;
    svg{
      width: 12px;
      height: 12px;
    }
  }
  ${ResponsiveTo('md')}{
    li{
      justify-content: center;
      
      font-size: 0.9rem;
      svg{
      width: 16px;
      height: 16px;
    }
    }
}
  
`
