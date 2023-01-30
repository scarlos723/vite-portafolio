import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  place-content: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
  border-top: 0.5px solid #ffffff;
  padding-top: 20px;
  gap: 20px;
  section{
    display: flex;
    flex-direction: column;
    gap: 12px;
    h3{
      text-align: center;
    }
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
