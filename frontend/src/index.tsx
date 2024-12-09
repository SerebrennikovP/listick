import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);