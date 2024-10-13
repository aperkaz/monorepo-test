import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import AppIframes from "./AppIframes.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <AppIframes />
  </StrictMode>
);
