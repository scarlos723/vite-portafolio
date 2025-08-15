import { Banner } from "./components/Banner";
import Education from "./components/Education";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main>
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
