import React from 'react'
import { SiWhatsapp } from 'react-icons/si'
import { Container } from './styles'

export default function Contact () {
  return (
    <Container>
      <section>
        <h2>Quieres saludarme?</h2>
        <p>Puedes escribirmme - <a href="mailto:elcorreoquequieres@correo.com">carlossde58@gmail.com</a></p>
        <p> <SiWhatsapp /> Whatsapp - 3205105983</p>
      </section>
      <section>
        <p>Designed and developed by Carlos Sanchez</p>
      </section>

    </Container>
  )
}
