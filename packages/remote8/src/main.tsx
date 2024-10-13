import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Remote from "./Remote.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>Running in Remote 1</div>
    <Remote defaultCount={0} />
  </StrictMode>
);
