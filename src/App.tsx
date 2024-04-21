
import Education from './components/Education'
import Intro from './components/Intro'
import Skills from './components/Skills'
//import Sphere from './components/Sphere'
import Projects from './components/Projects'
import Experience from './components/Experience'
function App() {

  return (
    <main  className='overflow-hidden relative'>
      <Intro></Intro>
      <Experience></Experience>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
    </main>
  
  )
}

export default App
