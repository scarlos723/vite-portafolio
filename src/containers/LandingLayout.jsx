import Education from '../components/Education'
import { Introduction } from '../components/Introduction'
import MenuIcon from '../components/MenuIcon'
import Skills from '../components/Skills'

const LandingLayout = () => {
  return (
    <main>
      <header className='container'>
        <nav>
          <MenuIcon />
        </nav>
      </header>
      <section className="container">
        <Introduction />
      </section>
      <div className='container'>
        <Skills />
        <Education />
      </div>

    </main>
  )
}
export default LandingLayout
