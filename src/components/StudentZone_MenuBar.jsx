import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const academicsRef = useRef(null);

  const handleDocumentClick = (e) => {
    if (academicsRef.current && !academicsRef.current.contains(e.target)) {
      setAcademicsDropdownOpen(false);
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


  return (
    <>
      <nav className="grid px-1 md:place-items-center">
        <ul className="grid grid-cols-4 gap-1 md:gap-4">
          <li
            className="rounded-md md:text-2xl lg:max-h-[8vh] md:max-h-[5vh] max-h-[6vh] text-base md:font-bold font-medium p-2 md:p-4  lg:m-2 bg-[#05161A] text-white cursor-pointer "
            onClick={toggleAcademicsDropdown}
            ref={academicsRef}
          >
            Academics
            {academicsDropdownOpen && (
              <div className="dropdown-content backdrop-blur-md bg-black bg-opacity-40 text-white sm:font-normal lg:text-xl  mt-6 w-[250px] rounded-md border-2">
                <li className="p-2 ">
                  <CustomLink to="/academics/syllabus">Syllabus</CustomLink>
                </li>
                <li className="p-2 ">
                  <CustomLink to="/academics/question-paper">
                    Question Paper
                  </CustomLink>
                </li>
                <li className="p-2 ">
                  <CustomLink to="/academics/timetable">Timetable</CustomLink>
                </li>
                <li className="p-2">
                  <CustomLink to="/academics/datesheet">Datesheet</CustomLink>
                </li>
                <li className="p-2">
                  <CustomLink to="/academics/result">Result</CustomLink>
                </li>
              </div>
            )}
          </li>
          <li className="md:w-[20vw] lg:w-[15vw] rounded-md md:text-2xl text-base md:font-bold font-medium p-2 md:p-4  lg:m-2 bg-[#05161A] text-white cursor-pointer ">
            <CustomLink to="/nss">NSS</CustomLink>
          </li>
          <li className="md:w-[20vw] lg:w-[15vw] rounded-md md:text-2xl text-base md:font-bold font-medium p-2 md:p-4  lg:m-2 bg-[#05161A] text-white cursor-pointer ">
            <CustomLink to="/ncc">NCC</CustomLink>
          </li>
          <li className="md:w-[20vw] lg:w-[15vw] rounded-md md:text-2xl text-base md:font-bold font-medium p-2 md:p-4  lg:m-2 bg-[#05161A] text-white cursor-pointer ">
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