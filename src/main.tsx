import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppTwo } from "./AppTwo";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppTwo />
  </StrictMode>,
);
