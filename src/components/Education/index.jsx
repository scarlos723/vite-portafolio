import React from 'react'
import { GiBookshelf } from 'react-icons/gi'
import { HiStatusOnline } from 'react-icons/hi'
import { Card, Container } from './styles'
export default function Education () {
  return (
    <Container>
      <section>

        <Card >
          <GiBookshelf color='white' />
          <h2>Academia </h2>
          <div>
            <p><strong>Universidad del Cauca, Colombia</strong></p>
            <p>Ingeniería electrónica y telecomunicaciones</p>
            <p>2016 - 2022</p>
          </div>
        </Card>
      </section>
      <section>

        <Card>
          <HiStatusOnline color='white' />
          <h2>Cursos y Certificados</h2>
          <div>
            <p>MIT - <a href='https://courses.edx.org/certificates/8df3ffb69f1b401489fb0613b26d2b9f'>Machine Learning with Python - From Linear Models to Deep Learning</a> </p>
            <p>Harvard - <a href='https://courses.edx.org/certificates/b3cff4fa6a514ea5b6e609b526ad66eb'>Web Development with Python and JavaScript</a> </p>
            <p>Harvard - <a href='https://courses.edx.org/certificates/97150a4aec6146cba244943849213339'>Introduction to Artificial Intelligence whit Python</a> </p>
            <p>Blockchain Academy Chile - <a href="https://registrado.org/visor/?c5576b22fbb43303d5e0c7edd39ca44dd097c036">Desarrollo de contratos inteligentes con Solidity</a></p>
            <p>Platzi - <a href="https://platzi.com/p/carlossde58/">Cursos de desarrollo WEB y a fines</a> </p>
          </div>
        </Card>
      </section>
      <div className='foot'>
        <p>
          <small>(Puedes dar click en los nombres de los
            cursos para ir a los certificados) </small>
        </p>
      </div>
    </Container>
  )
}
