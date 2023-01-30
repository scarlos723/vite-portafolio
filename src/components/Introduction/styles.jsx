import styled from 'styled-components'
import { neonAnimation, sideMoveAnimation } from '../../styles/Animations'

export const Container = styled.div`
  display: grid;
  height: 380px;
  h1{
    margin: 20px 0;
    color: #ffffff;
    letter-spacing: 8px;
    span:nth-child(1){
      ${neonAnimation({ time: '3s' })}
    }
    span:nth-child(2),span:nth-child(3){
      ${neonAnimation({ time: '3s' })}
    }
   
    span:nth-child(4){
      ${neonAnimation({ time: '3s' })}
    }
    span:nth-child(5){
      ${neonAnimation({ time: '3s' })}
    }
    span:nth-child(6){
      ${neonAnimation({ time: '3s' })}
    }
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
