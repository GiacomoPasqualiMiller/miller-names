import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages Import
import Home from "./components/Home";
import Nome from "./components/Nome";
import Foto from "./components/Foto";
import Special from "./components/Special";
import Login from "./components/Login";
import Start from "./components/Start";
import Classifica from "./components/Classifica";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nome" element={<Nome />} />
          <Route path="/classifica" element={<Classifica />} />
          <Route path="/foto" element={<Foto />} />
          <Route path="/home" element={<Start />} />
          <Route path="/special" element={<Special />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
