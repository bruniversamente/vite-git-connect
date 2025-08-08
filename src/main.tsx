import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
import "./index.css";
import DevErrorBoundary from "./components/DevErrorBoundary";

if (typeof window !== "undefined") {
  window.addEventListener("error", (e) => {
    console.error("Global error:", e.error || e.message);
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
