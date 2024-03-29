// import { GiBookshelf } from 'react-icons/gi'
import { HiStatusOnline } from 'react-icons/hi'
import {
  Container,
  LargeSection,
  MiniCard
} from './styles'
import {
  MdClose
} from 'react-icons/md'
import { useState } from 'react'

export default function Education () {
  const [show, setShow] = useState(false)
  return (
    <Container>
      <MiniCard>
        <section>
          <h2>Formación</h2>
          <article>
            <h4>Academia</h4>
            <div>
              <p><strong>Universidad del Cauca, Colombia</strong></p>
              <p>Ingeniería electrónica y telecomunicaciones</p>
              <p>2016 - 2022</p>
            </div>
          </article>
        </section>
        <section className='cursos'>
          <h5 onClick={() => setShow(true)}>
            Ver cursos
          </h5>
        </section>
      </MiniCard>
      <LargeSection show={show}>
        <HiStatusOnline color='white' />
        <button className='close-btn' onClick={() => setShow(false)}><MdClose color='white'/></button>
        <ul>
          <li>
            <p> MIT - <a target="_blank" href='https://courses.edx.org/certificates/8df3ffb69f1b401489fb0613b26d2b9f' rel="noreferrer"> Machine Learning with Python - From Linear Models to Deep Learning </a> </p>
          </li>
          <li>
            <p> Harvard - <a target="_blank" href='https://courses.edx.org/certificates/b3cff4fa6a514ea5b6e609b526ad66eb' rel="noreferrer"> Web Development with Python and JavaScript </a> </p>
          </li>
          <li>
            <p> Harvard - <a target="_blank" href='https://courses.edx.org/certificates/97150a4aec6146cba244943849213339' rel="noreferrer"> Introduction to Artificial Intelligence whit Python </a> </p>
          </li>
          <li>
            <p> Blockchain Academy Chile - <a target="_blank" href="https://registrado.org/visor/?c5576b22fbb43303d5e0c7edd39ca44dd097c036" rel="noreferrer"> Desarrollo de contratos inteligentes con Solidity </a></p>
          </li>
          <li>
            <p> Platzi - <a target="_blank" href="https://platzi.com/p/carlossde58/" rel="noreferrer"> Cursos de desarrollo WEB y relacionados </a> </p>
          </li>
        </ul>
        <div className='foot'>
          <p>
            <small>(Puedes dar click en los nombres de los
            cursos para ir a los certificados) </small>
          </p>
        </div>
      </LargeSection>
    </Container>
  )
}
