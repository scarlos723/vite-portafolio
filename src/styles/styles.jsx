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
