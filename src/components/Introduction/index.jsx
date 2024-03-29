
import { useState, useEffect } from 'react'
import { Container } from './styles'
export const Introduction = () => {
  const [text, setText] = useState('')
  const [isCursorVisible, setIsCursorVisible] = useState(true)
  const textContent = '  soy Carlos Sanchez'
  let i = 0
  const speed = 100

  useEffect(() => {
    const typing = setInterval(() => {
      if (i < textContent.length - 1) {
        setText(prevText => prevText + textContent[i])
        i++
      } else {
        clearInterval(typing)
      }
    }, speed)
    return () => clearInterval(typing)
  }, [])

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setIsCursorVisible(prevState => !prevState)
    }, 400)
    return () => clearInterval(cursorBlink)
  }, [])

  const HELLO_TEXT = '¡HOLA!'
  return (
    <Container >
      <h1>
        {
          HELLO_TEXT.split('').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))
        }
      </h1>
      <h2>
        {text}
        {
          isCursorVisible && <span className='cursor'>|</span>
        }
      </h2>

      <div className='text-box'>
        <p>
        Soy ingeniero en electrónica y telecomunicaciones que actualmente
        trabaja como desarrollador <strong>DEVOPS</strong> y <strong>LEAD FRONTEND</strong>  en una compañía
        de servicios tecnológicos.
        Me motiva el aprendizaje constante y los retos. Hago
        uso de herramientas modernas para la creación y despliegue
        de aplicaciones WEB o soluciones relacionados.
        </p>
        <p>
          Bienvenido a mi portafolio,
          aquí podrás encontrar información sobre mis habilidades,
          las tecnologías que conozco y algunos proyectos en los que he trabajado.
        </p>
      </div>
    </Container>
  )
}
