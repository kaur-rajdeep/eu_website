import './App.css'
import React from "react";
import Acet  from "./pages/Acet";
import "./index.css";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Student from "./pages/Student";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import NCC from './pages/NCC';
import NSS from './pages/NSS';
import Clubs from './pages/Clubs';
import Socailmedia from "./components/Socailmedia";

function App() {
  return (
    <>
      <Navbar />
      <Socailmedia />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/acet" element={<Acet />} />
        <Route path="/students" element={<Student />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/NCC" element={<NCC />} />
        <Route path="/NSS" element={<NSS />} />
        <Route path="/Clubs" element={<Clubs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
