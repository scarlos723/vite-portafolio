const Education = () => {
  return (
    <section className='py-10'>
      <h1 className='text-center mb-10'>Formacion</h1>
      <div className='container relative grid gap-10 md:grid-cols-2 items-center'>
        <div>
          <section>
            <article>
              <h4>Academia</h4>
              <div>
                <p>
                  <strong>Universidad del Cauca, Colombia</strong>
                </p>
                <p>Ingeniería electrónica y telecomunicaciones</p>
                <p>2016 - 2022</p>
              </div>
            </article>
          </section>
        </div>
        <div>
          <h2>Cursos Complementarios</h2>
          <ul>
            <li>
              <p>
                MIT -{' '}
                <a
                  className='underline text-blue-500'
                  target='_blank'
                  href='https://courses.edx.org/certificates/8df3ffb69f1b401489fb0613b26d2b9f'
                  rel='noreferrer'
                >
                  Machine Learning with Python - From Linear Models to Deep Learning{' '}
                </a>
              </p>
            </li>
            <li>
              <p>
                Harvard -{' '}
                <a
                  className='underline text-blue-500'
                  target='_blank'
                  href='https://courses.edx.org/certificates/b3cff4fa6a514ea5b6e609b526ad66eb'
                  rel='noreferrer'
                >
                  Web Development with Python and JavaScript{' '}
                </a>
              </p>
            </li>
            <li>
              <p>
                Harvard -{' '}
                <a
                  className='underline text-blue-500'
                  target='_blank'
                  href='https://courses.edx.org/certificates/97150a4aec6146cba244943849213339'
                  rel='noreferrer'
                >
                  Introduction to Artificial Intelligence whit Python{' '}
                </a>
              </p>
            </li>
            <li>
              <p>
                Blockchain Academy Chile -{' '}
                <a
                  className='underline text-blue-500'
                  target='_blank'
                  href='https://registrado.org/visor/?c5576b22fbb43303d5e0c7edd39ca44dd097c036'
                  rel='noreferrer'
                >
                  Desarrollo de contratos inteligentes con Solidity{' '}
                </a>
              </p>
            </li>
            <li>
              <p>
                Platzi -{' '}
                <a
                  className='underline text-blue-500'
                  target='_blank'
                  href='https://platzi.com/p/carlossde58/'
                  rel='noreferrer'
                >
                  Cursos de desarrollo WEB y relacionados{' '}
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education
