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
import Syllabus from "./pages/Syllabus";
import Question from "./pages/Question";
import Timetable from "./pages/Timetable";
import Datesheet from "./pages/Datesheet";
import Result from "./pages/Result";
import Btech from "./pages/Courses/Btech";
import Mtech from "./pages/Courses/Mtech";
import ACET_CLUBS from './pages/Courses/ACET_CLUBS';
import RegistrationForm from './components/RegistrationForm';


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
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/question-paper" element={<Question />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/datesheet" element={<Datesheet />} />
        <Route path="/result" element={<Result />} />
        <Route path="/btech" element={<Btech />} />
        <Route path="/mtech" element={<Mtech />} />
        <Route path="/ACET_CLUBS" element={<ACET_CLUBS/>} />
        <Route path="/register" element={<RegistrationForm context="Clubs" />} />
        

      </Routes>
      <Footer />
    </>
  );
}

export default App
