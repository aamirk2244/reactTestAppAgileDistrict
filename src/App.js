// import logo from "./logo.svg";
import React from "react";

import "./App.css";
// import SampleOutput from "./components/SampleOutput";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import HeadNav from "./components/HeadNav";
import About from "./components/pages/About";
import ButtonExercise from "./components/pages/ButtonExercise";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   console.log("hello App.js Component");
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <HeadNav />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/button-example" element={<ButtonExercise />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
