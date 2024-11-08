import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Card } from "../components/Card/Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Card />
  </StrictMode>
);
