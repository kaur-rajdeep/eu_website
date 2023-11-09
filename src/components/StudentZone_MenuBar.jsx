import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [clubsDropdownOpen, setClubsDropdownOpen] = useState(false);
  const academicsRef = useRef(null);
  const clubsRef = useRef(null);

  const handleDocumentClick = (e) => {
    if (academicsRef.current && !academicsRef.current.contains(e.target)) {
      setAcademicsDropdownOpen(false);
    }
    if (clubsRef.current && !clubsRef.current.contains(e.target)) {
      setClubsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const toggleAcademicsDropdown = () => {
    setAcademicsDropdownOpen(!academicsDropdownOpen);
    // Close the clubs dropdown when opening academics
    if (clubsDropdownOpen) {
      setClubsDropdownOpen(false);
    }
  };

  const toggleClubsDropdown = () => {
    setClubsDropdownOpen(!clubsDropdownOpen);
    // Close the academics dropdown when opening clubs
    if (academicsDropdownOpen) {
      setAcademicsDropdownOpen(false);
    }
  };

  return (
    <>
      <nav className=" px-4  justify-between items-center">
        
        <ul className="flex sm:space-x-4  ">
          
          <li
            className=" lg:space-x-80 lg:w-60 rounded-md text-3xl font-bold pt-2 bg-[#05161A] text-white cursor-pointer"
            onClick={toggleAcademicsDropdown}
            ref={academicsRef}
          >
            Academics
            {academicsDropdownOpen && (
              <div className="dropdown-content backdrop-blur-lg bg-blue-100 text-black font-semibold text-2xl mt-4 rounded-md">
                <li className="p-2 border-2 ">
                  <CustomLink to="/academics/syllabus">Syllabus</CustomLink>
                </li>
                <li className="p-2 border-2">
                  <CustomLink to="/academics/question-paper">
                    Question Paper
                  </CustomLink>
                </li>
                <li className="p-2 border-2">
                  <CustomLink to="/academics/timetable">Timetable</CustomLink>
                </li>
                <li className="p-2 border-2">
                  <CustomLink to="/academics/datesheet">Datesheet</CustomLink>
                </li>
                <li className="p-2 border-2 rounded-md">
                  <CustomLink to="/academics/result">Result</CustomLink>
                </li>
              </div>
            )}
          </li>
          <li className=" w-60  pt-2 bg-[#05161A] text-white rounded-md text-3xl font-bold">
            <CustomLink to="/nss">NSS</CustomLink>
          </li>
          <li className="w-60 pt-2  bg-[#05161A] text-white rounded-md text-3xl font-bold">
            <CustomLink to="/ncc">NCC</CustomLink>
          </li>
          <li className=" w-60 pt-2 h-14 bg-[#05161A] text-white rounded-md text-3xl font-bold">
            <CustomLink to="/Clubs">Clubs</CustomLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

