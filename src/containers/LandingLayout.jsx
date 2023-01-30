import Education from '../components/Education'
import { Introduction } from '../components/Introduction'
import MenuIcon from '../components/MenuIcon'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Contact from '../components/Contact'

const LandingLayout = () => {
  return (
    <>
      <main>
        <header className='container'>
          <nav>
            <MenuIcon />
          </nav>
        </header>
        <section className="container">
          <Introduction />
        </section>
        <div className='container grid-col-2'>
          <Skills />
          <Education />
        </div>
        <div className="container">
          <Works />
        </div>
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  )
}
export default LandingLayout
