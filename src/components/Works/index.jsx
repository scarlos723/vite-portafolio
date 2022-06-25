import React from 'react'
import { Container, Section, TextBox } from './styles'
import { BiRightArrow } from 'react-icons/bi'
import filmcoinImg from '../../assets/images/filmcoinWebsite.png'
import tfttImg from '../../assets/images/tfttWebsite.png'
import retriImg from '../../assets/images/retriWebsite.png'
export default function Works () {
  const [showFilmcoin, setShowFilmcoin] = React.useState(false)
  const [showTFTT, setShowTFTT] = React.useState(false)
  const [showRequi, setShowRequi] = React.useState(false)
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
              <p onClick={() => setShowFilmcoin(!showFilmcoin)} className='text-action'>Leer mas <BiRightArrow color='#189AB4'/> </p>
              <div className='text-hidden'>
                <p>
                  Ha sido un gran reto, ya que la página la empece a desarrollar junto a un
                  grupo de colegas y ha sufrido varios
                  cambios de diseño y funcionalidad a lo largo del tiempo. A futuro la página estaría
                  integrada con funcionalidades de WEB 3.0 y por lo cual tendré la oportunidad de brindar el soporte en desarrollo
                </p>
                <p>
                  Gracias a este proyecto pude investigar, aprender y aplicar conocimientos sobre tecnologías de backend
                  como Express, librerías de renderizado en 3D como Three Js y las pasarelas de pago anteriormente mencionadas.
                  También me pude certificar como desarrollador de contratos inteligentes con Solidity y conocer un poco más
                  sobre la WEB 3.0
                </p>
              </div>
            </div>
            <img src={filmcoinImg} alt="" />
          </section>

          <p>Puedes echar un vistazo al sitio WEB desde <a href="https://thefilmcoin.io/">aquí</a></p>
        </TextBox>

      </Section>

      <Section>

        <h3 style={{ textAlign: 'right' }}>TALES FROM THE TRAP</h3>
        <TextBox show={showTFTT}>
          <section className='text-img'>
            <img src={tfttImg} alt="" />
            <div>

              <p>
                Prácticamente los retos afrontados aquí son más a la parte de dar los estilos requeridos
                por el equipo de diseño.
              </p>
              <p onClick={() => setShowTFTT(!showTFTT)} className='text-action'>Leer mas <BiRightArrow color='#189AB4'/> </p>
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
            <p>Puedes ver el sitio web desde <a href="https://talesfromthetrap.com/">aquí</a></p>
          </section>

        </TextBox>
      </Section>

      <Section>

        <h3>Web App (Retri)</h3>
        <TextBox show={showRequi}>
          <section className='text-img'>

            <div>
              <p>
              Requi es un producto que apenas se está creando y actualmente se encuentra en fase de desarrollo.
              El website en fase de desarrollo contiene la información de lo que será un Web App que va a
              revolucionar el alquiler de maquinaria pesada.
              </p>
              <p onClick={() => setShowRequi(!showRequi)} className='text-action'>Leer mas <BiRightArrow color='#189AB4'/> </p>
              <div className='text-hidden'>
                <p>
                En este proyecto he tenido la oportunidad de trabajar de manera individual en el Frontend, es por esto que hice uso
                de tecnologías como Next y Tailwind para poder agilizar un poco los tiempos de entrega.
                </p>
              </div>
            </div>
            <img src={retriImg} alt="" />
          </section>

        </TextBox>

      </Section>

    </Container>
  )
}
