
import { Container, Section, TextBox } from './styles'
import { BiRightArrow } from 'react-icons/bi'
import filmcoinImg from '../../assets/images/thefilmcoinWebsite.webp'
import tfttImg from '../../assets/images/tfttWebsite.webp'
import retriImg from '../../assets/images/retriWebsite.webp'
import darkhorseImg from '../../assets/images/darkhorseWebsite.webp'
import { useState } from 'react'
export default function Works () {
  const [showFilmcoin, setShowFilmcoin] = useState(false)
  const [showTFTT, setShowTFTT] = useState(false)
  const [showRequi, setShowRequi] = useState(false)
  const [showDark, setShowDark] = useState(false)
  function goTo (url) {
    window.open(url)
  }
  return (
    <Container>
      <h2>Trabajos realizados</h2>
      <Section>
        <h3>FilmCoin</h3>
        <TextBox show={showFilmcoin}>
          <section className='text-img'>
            <div>
              <p>
              Actualmente es un proyecto de página WEB usado para
              brindar información acerca de la nueva cryptocurrency FilmCoin (FLIKS),
              también cuenta una sección para hacer compras la cual ha sido configurada
              con distintas pasarelas de pagos como Stripe, Paypal y Coinpayments.
              </p>
              <p onClick={() => setShowFilmcoin(!showFilmcoin)} className='text-action'>Leer mas <BiRightArrow color='#899DB0'/> </p>
              <div className='text-hidden'>
                <p>
                  Ha sido un gran reto, ya que la página la empece a desarrollar
                  junto a un grupo de colegas y ha sufrido varios cambios de diseño
                  y funcionalidad a lo largo del tiempo. A futuro la
                  página estaría integrada con funcionalidades de WEB 3.0 y
                  por lo cual tendré la oportunidad de brindar el
                  soporte en desarrollo
                </p>
                <p>
                  Gracias a este proyecto aprender y aplicar conocimientos sobre tecnologías de backend
                  como Express, librerías de renderizado en 3D como Three Js y las pasarelas de pago anteriormente mencionadas.
                  También me pude certificar como desarrollador de contratos inteligentes con Solidity y conocer un poco más
                  sobre la WEB 3.0
                </p>
              </div>
            </div>
            <img onClick={() => goTo('https://thefilmcoin.io/')} src={filmcoinImg} alt="" />
          </section>

          <p>Puedes echar un vistazo al sitio WEB desde <a target='_blank' href="https://thefilmcoin.io/" rel="noreferrer">aquí</a></p>
        </TextBox>

      </Section>

      <Section>

        <h3 style={{ textAlign: 'right' }}>TALES FROM THE TRAP</h3>
        <TextBox show={showTFTT}>
          <section className='text-img'>
            <img onClick={() => goTo('https://talesfromthetrap.com/')} src={tfttImg} alt="" />
            <div>

              <p>
                Prácticamente los retos afrontados aquí son más a la parte de dar los estilos requeridos
                por el equipo de diseño.
              </p>
              <p onClick={() => setShowTFTT(!showTFTT)} className='text-action'>Leer mas <BiRightArrow color='#899DB0'/> </p>
              <div className='text-hidden'>
                <p>
                  Esta página la desarrollé junto a una colega de mi equipo de trabajo y
                  para un futuro se piensa crear un Marketplace para la compra de NTFs,
                  ya que se ecuentra asociada con el proyecto de Filmcoin.
                </p>
                <p>
                  Este Website es usado para promocionar una película urbana de Reino Unido, una página
                  que también ha sido compleja en su lógica, ya que contaba con otros diseños
                  y funcionalidades que fueron necesario cambiarlos.
                </p>
              </div>

            </div>
            <p>Puedes ver el sitio web desde <a target='_blank' href="https://talesfromthetrap.com/" rel="noreferrer">aquí</a></p>
          </section>

        </TextBox>
      </Section>

      <Section>
        <h3>Retri Web App</h3>
        <TextBox show={showRequi}>
          <section className='text-img'>
            <div>
              <p>
              Retri es un producto emergente actualmente
               en producción y es usado para el alquiler
               de maquinaria pesada en Colombia.
              </p>
              <p onClick={() => setShowRequi(!showRequi)} className='text-action'>Leer mas <BiRightArrow color='#899DB0'/> </p>
              <div className='text-hidden'>
                <p>
                En este proyecto he tenido bastantes retos, ya que al ser una startup,
                hay muchos cambios en la lógica y estructura del negocio. Empezamos
                con tecnologías como Next y Tailwind para poder agilizar un poco
                los tiempos de entrega. Pero luego migramos todo el proyecto a
                ViteJs con Tailwind CSS y Styled Components para el estilado
                </p>
              </div>
            </div>
            <img onClick={() => goTo('https://www.retri.app/')} src={retriImg} alt="" />
            <p>Puedes echar un vistazo al sitio WEB desde <a target='_blank' href="https://www.retri.app/" rel="noreferrer">aquí</a></p>
          </section>

        </TextBox>
      </Section>

      <Section>
        <h3 style={{ textAlign: 'right' }}>Darkhorse</h3>
        <TextBox show={showDark}>
          <section className='text-img'>
            <img onClick={() => goTo('https://www.darkhorsefilms.io/')} src={darkhorseImg} alt="" />
            <div>
              <p>
              Darkhorse es un estudio que trabaja con contenido digital,
              el cual se impulsa por medio de blockchain.
              Está fuertemente relacionado con Tales From The Trap y The Filmcoin.
              </p>
              <p onClick={() => setShowDark(!showDark)} className='text-action'>Leer mas <BiRightArrow color='#899DB0'/> </p>
              <div className='text-hidden'>
                <p>
                Este proyecto lo empece de manera individual usando tecnologias como ViteJS y un combinado para los estilos como Tailwind CSS y Styled components. Gracias a este proyecto pude implementar una solución con CI/CD haciendo uso de AWS ECS y contenedores de Docker para el despliegue del Frontend
                </p>
              </div>
            </div>
            <p>Puedes echar un vistazo al sitio WEB desde <a target='_blank' href="https://www.darkhorsefilms.io/" rel="noreferrer">aquí</a></p>
          </section>
        </TextBox>
      </Section>

    </Container>
  )
}
