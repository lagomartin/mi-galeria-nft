import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// IMPORTANTE: Usamos la versión del SDK compatible con el resto del proyecto
import { ThirdwebProvider } from "@thirdweb-dev/react";

// Tu Client ID de Thirdweb
const clientId = "81dbf33bbc52674567a6c73dc257bf20";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="sepolia"
      clientId={clientId}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);
