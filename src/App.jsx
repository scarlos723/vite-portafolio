import React from 'react'
import './App.css'
import Contact from './components/Contact'
import Education from './components/Education'
import { Introduction } from './components/Introduction'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Works from './components/Works'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Main } from './styles/styles'

const OPTIONS = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'repulse'
      },
      onHover: {
        enable: false,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce'
      },
      random: false,
      speed: 0.2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'starry'
    },
    size: {
      random: true,
      value: 1
    }
  },
  detectRetina: true
}
function App () {
  const particlesInit = async (main) => {
    console.log(main)
    //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //   // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }

  const refIntro = React.useRef(null)
  const refSkills = React.useRef(null)
  const refWorks = React.useRef(null)
  const refEdu = React.useRef(null)
  const refContact = React.useRef(null)
  const scrolly = 0

  // window.addEventListener('wheel', (e) => {
  //   scrolly += e.deltaY
  //   if (e.deltaY > 0) {
  //     scrolly = 0
  //   }
  //   console.log(scrolly)
  //   if (scrolly <= 0) {
  //     try {
  //       refIntro.current.style.transform = `translateY(${scrolly}px)`
  //       refSkills.current.style.transform = `translateY(${scrolly}px)`
  //       refWorks.current.style.transform = `translateY(${scrolly}px)`
  //       refEdu.current.style.transform = `translateY(${scrolly}px)`
  //       refContact.current.style.transform = `translateY(${scrolly}px)`
  //     } catch (error) {
  //       console.log('ref not found')
  //     }
  //   }
  // })
  return (
    <div >
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={OPTIONS}
        />
      </div>
      <Navbar />
      <Main>
        <div ref={refIntro} id="introduction-section">
          <Introduction />
        </div>

        <div ref={refEdu} id='education-section'>
          <Education />
        </div>
        <div ref={refSkills} id='skills-section'>
          <Skills />
        </div>
        <div ref={refWorks} id='works-section'>
          <Works />
        </div>
        <div ref={refContact} id='contact-section'>
          <Contact />
        </div>
      </Main>
    </div>
  )
}

export default App
