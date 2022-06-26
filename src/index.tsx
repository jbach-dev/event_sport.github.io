import React from "react";
import ReactDOM from "react-dom/client";
import Events from "./Features/Events";
import Header from "./Features/Header";
import Global_FAQ from "./Features/Global_FAQ";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Events />
    <Global_FAQ />
  </React.StrictMode>
);
