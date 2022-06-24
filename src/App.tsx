import React from "react";
// import './Features/App.css'
import Events from "./Features/Events";
import Header from "./Features/Header";
import FAQ from "./Features/FAQ";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Events />} />
        {/* <Route path="/events" element={<Events />} /> */}
        <Route path="/FAQ" element={<FAQ />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
  </BrowserRouter>
);

export default App;
