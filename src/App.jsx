
import './App.css'
import Contact from './components/Contact'
import Education from './components/Education'
import { Introduction } from './components/Introduction'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Works from './components/Works'

function App () {
  return (
    <div >
      <Navbar />
      <div id="introduction-section">
        <Introduction />
      </div>
      <div id='education-section'>
        <Education />
      </div>
      <div id='skills-section'>
        <Skills />
      </div>
      <div id='works-section'>
        <Works />
      </div>
      <div id='contact-section'>
        <Contact />
      </div>

    </div>
  )
}

export default App
