import styled, { css } from 'styled-components'
// import { ResponsiveTo } from '../../hooks/useResponsive'

export const Container = styled.section`
  display: grid;
  margin: 40px 0;
  position: relative;
`
export const LargeSection = styled.div`
  display: grid;
  position: absolute;
  padding: 20px;
  background-color: black;
  box-shadow: 1px 1px 8px 0px #ffffff76;
  top: 0;
  overflow: hidden;
  transition: all 0.5s ease;
  ul{
    display: flex;
    flex-direction: column;
    gap: 12px;
    li{
      a{
        color: white;
      }
    }
  }
  .close-btn{
    position: absolute;
    top: 8px;
    right: 8px;
  }
  ${props => props.show
    ? css`
    top: -200px;
    height: 400px;
  `
    : css`
    padding: 0;
    margin: 0;
    height: 0;
  `}

`
export const MiniCard = styled.article`
  display: grid;
  border: 0.5px solid white;
  padding: 20px;
  article{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    h4{
      margin: 0;
    }
  }
  .cursos{
    h5{
      text-align: right;
      cursor: pointer;
      text-transform: uppercase;
    }
  }
`
