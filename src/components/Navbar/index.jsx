import React, { useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavContainer, Ul, UpButton } from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import useGoToSection from '../../hooks/useGoToSection.jsx'
import { BsCaretUpSquare } from 'react-icons/bs'
export default function Navbar () {
  const [showMenu, setShowMenu] = React.useState(false)
  const [showUpButton, setShowUpButton] = React.useState(false)
  const goToSection = useGoToSection()
  function goTo (id) {
    setShowMenu(false)
    goToSection(id)
  }
  useEffect(() => {
    document.addEventListener('scroll', () => {
      // console.log(window.scrollY)

      if (window.scrollY > 20) {
        setShowUpButton(true)
      } else {
        setShowUpButton(false)
      }
    })
  }, [])

  return (
    <>
      <NavContainer show = {showMenu}>
        <nav>
          <div style={!showMenu ? { display: 'none' } : { display: 'block' }}>
            <AiOutlineCloseCircle onClick={() => setShowMenu(false)} color='#05445E'/>
          </div>
          <div style={showMenu ? { display: 'none' } : { display: 'block' }}>
            <GiHamburgerMenu onClick={() => setShowMenu(true)} color='white'/>
          </div>

          <Ul show = {showMenu}>

            <li>
              <p onClick={() => goTo('education-section')}>
            Educación
              </p>
            </li>
            <li>
              <p onClick={() => goTo('skills-section')}>
            Habilidades
              </p>
            </li>
            <li>
              <p onClick={() => goTo('works-section')}>
            Trabajos
              </p>
            </li>
            <li>
              <p onClick={() => goTo('contact-section')}>
            Contactame
              </p>
            </li>
          </Ul>
        </nav>

      </NavContainer>
      <UpButton onClick={() => goTo('introduction-section')} style={ showUpButton ? { display: 'block' } : { display: 'none' }}>
        <p>Go to up</p>
        <BsCaretUpSquare color='#75E6DA'/>
      </UpButton>
    </>
  )
}
