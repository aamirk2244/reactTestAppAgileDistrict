import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./components/shared/error_boundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
function reload() {
  console.log("hello world reloading");
}
root.render(
  <React.StrictMode>
    <ErrorBoundary onRecovery={reload}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
