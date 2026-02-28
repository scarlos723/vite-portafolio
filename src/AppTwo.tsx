import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Banner } from "./components/Banner";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import Seo from "./components/Seo";
import { Skills } from "./components/Skills";
export const AppTwo = () => {
  useEffect(() => {
    // ✅ Solo se ejecuta una vez al montar
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    if (!measurementId) {
      console.warn("GA Measurement ID no configurado");
      return;
    }

    ReactGA.initialize(measurementId, {
      testMode: import.meta.env.DEV, // ✅ No envía datos reales en desarrollo
    });

    // ✅ Envía pageview inicial
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: document.title,
    });
  }, []); // Array vacío = solo al montar
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
