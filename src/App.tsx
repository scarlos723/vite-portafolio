import { Banner } from "./components/Banner";
import Education from "./components/Education";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";
import Seo from "./components/Seo";
import Skills from "./components/Skills";

function App() {
  return (
    <main>
      <Seo title="Mi Portafolio, desarrollador de software con mas de 10 años de experiencia" />
      {/* <Header /> */}
      <Banner />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </main>
  );
}

export default App;
