import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CandidateContextProvider from "./context/candidateContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <CandidateContextProvider>
      <App />
    </CandidateContextProvider>
  // </StrictMode>
);
