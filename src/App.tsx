import Education from './components/Education'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Seo from './components/Seo'
function App() {
  return (
    <>
      <Seo title='Carlos Sanchez' />
      <main className='overflow-hidden relative'>
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
