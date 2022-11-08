import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages Import
import Home from "./components/Home";
import Nome from "./components/Nome";
import Foto from "./components/Foto";
import Special from "./components/Special";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nome" element={<Nome />} />
          <Route path="/immagini" element={<Foto />} />
          <Route path="/special" element={<Special />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
