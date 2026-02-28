import ReactGA from "react-ga4";
import { Banner } from "./components/Banner";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import Seo from "./components/Seo";
import { Skills } from "./components/Skills";
export const AppTwo = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID); // Reemplaza por tu ID real
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
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
