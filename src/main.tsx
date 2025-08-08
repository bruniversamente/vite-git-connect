import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./index.css";
import DevErrorBoundary from "./components/DevErrorBoundary";

if (import.meta.env.DEV && typeof window !== "undefined") {
  window.addEventListener("error", (e) => {
    console.error("Global error:", (e as ErrorEvent).error || (e as ErrorEvent).message);
  });
  window.addEventListener("unhandledrejection", (e) => {
    console.error("Unhandled promise rejection:", (e as PromiseRejectionEvent).reason);
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DevErrorBoundary>
      <AppRouter />
    </DevErrorBoundary>
  </React.StrictMode>
);
