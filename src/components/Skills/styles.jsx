import styled, { css } from 'styled-components'
import setupImg from '@/images/art.webp'
import { palpitatingAnimation } from './animations'
import laptopImg from '@/images/art2.webp'
export const Container = styled.section`
  display: grid;
  border-radius: 20px;
  background-image: url(${setupImg});
  backdrop-filter: blur(11000px);
  background-size: cover;
  position: relative;
`
export const MiniCard = styled.article`
  display: grid;
  border-radius: 20px;
  background-color: #03447d89;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 #d6d6d689;
  transition: 0.3s;
  h2{
    color: white;
    padding: 10px 0;
    transition: all 0.5s ease-in-out;
    border-bottom: 0.5px solid #04061f7b;
  }

  
  
  &:hover {
    //transform: scale(1.1);
    box-shadow: 0 8px 16px 0 #d6d6d671;
  }
  .grid{
    display: grid;
    margin-top: 10px;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  .front{
    ${palpitatingAnimation({ type: 'ease-in-out' })}
  }
  .back{
    ${palpitatingAnimation({ type: 'ease-in-out' })}
  }
  .others{
    ${palpitatingAnimation({ type: 'ease-in-out' })}
  }
  .front, .back, .others{
    display: grid;
    place-items: center;
    box-sizing: border-box;
    padding: 8px 4px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    border-radius: 4px;
    h4{
      color: white;
      padding: 10px 0;
      transition: all 0.5s ease-in-out;
      text-align: center;
    }
    svg{
      width: 40px;
      height: 40px;
      color: white;
      path{
        stroke: white;
        transition: all 0.5s ease-in-out;
      }
    }
    &:hover{
      transform: scale(1.05);
      border-radius: 8px ;
      box-shadow: 0 8px 16px 0 #04061F;
      background-color: #ffffffb3;
      animation: none;
      h4{
        color: #04061F;
      }
      svg{
        color: #04061F;
        path{
          stroke: #04061F;
        }
      }
    }
  }
  
  .separator{
    width: 1px;
    height: 100%;
    border-left: 0.5px solid #04061F;
  }

`

export const ExpandSection = styled.section`
  position: absolute;
  box-sizing: border-box;
  padding: 12px 4px;
  padding-top: 60px;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  background: linear-gradient(0deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.7) 100%), url(${laptopImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  border-radius: 12px;
  ${props => props.showExpand
    ? css`
      width: 100%;
      height: 60vh;
    `
    : css`
    top: 20px;
    width: 100%;
    height: 0px;
    padding: 0;
  `}
  .close-btn{
    position: absolute;
    display:flex;
    top: 4px;
    right: 8px;
    border-radius: 50%;
    background: #899DB0;
    cursor: pointer;
    svg{
      width: 32px;
      height: 32px;
    }
  }
  .articles-container{
    display: grid;
    width: 100%;
  }
  article{
    display: grid;
    padding: 12px 20px;
    h4{
      color: #899DB0;
      text-align: center;
      margin: 0;
      margin-top: 20px;
    }
    ul{
      display: grid;
      gap: 4px;
      li{
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        color: #15227A;
        border-bottom: #04061F 0.5px solid;
        
        svg{
          color: #15227A ;
          path{
            fill: #15227A;
          }
        }
      }
    }
   
  }
  .tabs{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 40px;
    h3{
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease-in-out;
      color: #15227A;
      border-radius: 4px 4px 0 0;
      cursor: pointer;
    }
    .active{
      box-shadow: 0px -4px 4px 0px #04061F;
    }
  }
`
