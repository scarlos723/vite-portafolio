import styled from 'styled-components'
import { ContainerGlobal } from '../../styles/styles'

export const Container = styled(ContainerGlobal)`
  display: grid;
  place-content: center;
  width: 90%;
  height: 200px;
  margin: 20px auto;
  border-top: 1px solid #ffffff;
  padding-top: 20px;
  gap: 20px;
  section{
    display: flex;
    flex-direction: column;
    gap: 12px;
    p{
      margin: 0 auto;
      display: flex;
      text-align: center;
      align-items: center;
      gap: 4px;
      a{
        color: #75E6DA;
      }
    }
  }
`
