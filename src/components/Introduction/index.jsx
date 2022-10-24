import React from 'react'
import { AnimationText, Container, TextBox } from './styles'

export const Introduction = () => {
  return (
    <Container>
      <div>
        <h1>
          <AnimationText>
          ¡Hola!
          </AnimationText>
          <br />
          Yo soy Carlos Sánchez.
        </h1>
        <TextBox>
          <p>
            Soy un desarrollador de páginas WEB quien actualmente trabaja como desarrollador
            Frontend en una compañía de servicios tecnológicos.
            Soy egresado de la Universidad del Cauca con título de ingeniero en electrónica y telecomunicaciones.
          </p>
          <p>
            Me motiva el aprendizaje constante y los retos, por esto trato de usar herramientas
            modernas para la creación y despliegue de aplicaciones WEB
            o proyectos relacionados.
          </p>
          <p>
            Bienvenido a mi portafolio, aquí podrás encontrar información
            sobre mis habilidades, las tecnologías que conozco y algunos
            proyectos en los que he trabajado.
          </p>
        </TextBox>

      </div>
    </Container>
  )
}
