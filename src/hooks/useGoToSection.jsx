
const useGoToSection = () => {
  function goToSection (idSection) {
    try {
      const section = document.getElementById(idSection)
      // console.log(section)
      const pos = section.getBoundingClientRect()

      window.scrollTo(0, pos.y - 40)
    } catch (error) {
      console.log(error)
    }
  }
  return goToSection
}

export default useGoToSection
