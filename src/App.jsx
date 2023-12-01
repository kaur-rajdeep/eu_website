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
import Post from "./pages/Post";

import RegistrationForm from './components/RegistrationForm';
import Register from './components/Register';
import Login from './components/Login';
import ACET_CLUBS from './pages/Courses/ACET_CLUBS';
import RegistrationForm from './components/RegistrationForm';
import UniversityManagement from './pages/About us/UniversityManagement';
import AnualReports from './pages/About us/AnualReport';
import MinutesOfMeeting from './pages/About us/MinutesOfMeeting';
import ViceChancellor from './pages/About us/ViceChancellor';
import ProViceChancellor from './pages/About us/ProViceChancellor';
import FacultyList from './pages/About us/FacultyList';
import Recognition from './pages/About us/Recognition';


function App() {
  return (
    <>
      <Navbar />
      <Socailmedia />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UniversityManagement" element={<UniversityManagement />} />
        <Route path="/AnualReport" element={<AnualReports />} />
        <Route path="/MinutesOfMeeting" element={<MinutesOfMeeting />} />
        <Route path="/ViceChancellor" element={<ViceChancellor />} />
        <Route path="/ProViceChancellor" element={<ProViceChancellor />} />
        <Route path="/FacultyList" element={<FacultyList />} />
        <Route path="/Recognition" element={<Recognition />} />
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
        <Route path="/Register" element={<Register  />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Post" element={<Post/>} />
        <Route path="/ACET_CLUBS" element={<ACET_CLUBS/>} />
        <Route path="/register" element={<RegistrationForm context="Clubs" />} />
        

      </Routes>
      <Footer />
    </>
  );
}

export default App
