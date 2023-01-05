import styled from 'styled-components'
import setupImg from '@/images/setup.webp'
export const Container = styled.section`
  display: grid;
  border-radius: 20px;
  background-image: url(${setupImg});
  backdrop-filter: blur(11000px);
  background-size: cover;
  
`
export const MiniCard = styled.article`
 display: grid;
  border-radius: 20px;
  background-color: #c3cdd68a;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 #d6d6d689;
  transition: 0.3s;
  h2, h4{
    color: #04061F;
    padding: 10px 0;
  }
  h2{
    border-bottom: 0.5px solid #04061f7b;
  }
  svg{
    width: 40px;
    height: 40px;
    color: #04061F;
    path{
      stroke: #04061F;
    }
  }

  &:hover {
    //transform: scale(1.1);
    box-shadow: 0 8px 16px 0 #d6d6d689;
  }
  .grid{
    display: grid;
    margin-top: 10px;
    grid-template-columns: 1fr 2px 1fr 2px 1fr;
  }
  .front, .back, .others{
    display: grid;
    place-items: center;
    box-sizing: border-box;
    padding: 8px 4px;
    h4{
      text-align: center;
    }
    &:hover{
      transform: scale(1.05);
      border-radius:12px ;
      box-shadow: 0 8px 16px 0 #04061F;
      background-color: #ffffffb3;
    }
  }
  .separator{
    width: 1px;
    height: 100%;
    border-left: 0.5px solid #04061F;
  }
`

export const ExpandSection = styled.section`
  display: none;
`
