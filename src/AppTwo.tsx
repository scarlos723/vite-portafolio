import { Banner } from "./components/Banner";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import Seo from "./components/Seo";
import { Skills } from "./components/Skills";

export const AppTwo = () => {
  return (
    <main>
      <Seo />
      <Banner />
      <Experience />
      <Skills />
      <Education />
    </main>
  );
};
