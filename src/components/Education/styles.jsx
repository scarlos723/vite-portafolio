import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
import { ContainerGlobal } from '../../styles/styles'

export const Container = styled(ContainerGlobal)`
  width: 90%;
  height: 90vh;
  display: grid;
  place-content: center;
  margin: 20px auto;
  .foot{
    p{
      text-align: center;
    }
  }
`
export const Card = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 40px;
  div{
    display: grid;
    gap: 8px;
    p{
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
  a{
    color: #75E6DA;
  }
  svg{
    margin: 0 auto;
  }
  ${ResponsiveTo('md')}
  {
    svg{
      width: 80px;
      height: 80px;
    }
  }
`
