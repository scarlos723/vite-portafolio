// import { SiWhatsapp } from 'react-icons/si'
import { Container } from './styles'
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'

export default function Contact () {
  return (
    <Container>
      <p>
        <strong>
          Follow me on social media
        </strong>
      </p>
      <section className='social-bar'>
        <a href='https://www.linkedin.com/in/carlos-sanchez-69b277196/'>
          <AiOutlineLinkedin color='white' size={40}/>
        </a>
        <a href="https://github.com/scarlos723">
          <AiFillGithub color='white' size={40}/>
        </a>
      </section>
      <section>
        <p>Designed and developed by Carlos Sanchez</p>
      </section>
    </Container>
  )
}
