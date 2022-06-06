import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Default/Header/Index";
import Footer from "./Default/Footer/Index";
import Main from "./main/Index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
