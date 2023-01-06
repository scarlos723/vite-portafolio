import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'

export const Container = styled.section`
  display: grid;
  place-content: center;
`
export const LargeSection = styled.div`
  display: none;
`
export const MiniCard = styled.article`
  display: grid;
  width: 100%;
  svg{
    color: white;
    width: 20px;
    height: 20px;
    path{
      stroke: white;
    }
  }
`
