import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'

export const ContainerGlobal = styled.div`
  width: 90%;
  ${ResponsiveTo('md')}{
    max-width: 500px;
  }
  ${ResponsiveTo('lg')}{
    max-width: 800px;
  }
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  div{
    transition: all 0.3s ease;
  }
`
