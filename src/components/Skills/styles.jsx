import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  padding: 20px 0;
`
export const MiniCard = styled.article`
 display: grid;
  border-radius: 20px;
  background-color: #C3CDD6;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  h2{
    color: #899DB0;
  }
  svg{
    width: 40px;
    height: 40px;
  }
`

export const ExpandSection = styled.section`
  display: none;
`
