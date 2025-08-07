import Education from './components/Education'
import Experience from './components/Experience'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Seo from './components/Seo'
import Skills from './components/Skills'
function App() {
  return (
    <>
      <Seo title='Carlos Sanchez' />
      <main className=''>
        <Intro />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>
    </>
  )
}

export default App
