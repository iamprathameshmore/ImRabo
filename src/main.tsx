import ReactDOM from "react-dom/client"; // Use ReactDOM.createRoot for React 18
import App from "./App";
import { StrictMode } from "react";

// Create a root for the application
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Render the App wrapped in the Redux Provider
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
