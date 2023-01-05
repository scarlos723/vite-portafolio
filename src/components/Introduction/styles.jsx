import styled from 'styled-components'
import { neonAnimation, sideMoveAnimation } from '../../styles/Animations'

export const Container = styled.div`
  display: grid;
  height: 459px;
  h1{
    margin: 20px 0;
    ${neonAnimation({ time: '5s' })}
    color: #899DB0;
    letter-spacing: 8px;
  }
  h2{
    margin-bottom: 16px;
  }
  p{
    margin-bottom: 8px;
  }
  .text-box{
    opacity: 0;
    ${sideMoveAnimation({ time: '1s', delay: '2s' })}
  }

`
