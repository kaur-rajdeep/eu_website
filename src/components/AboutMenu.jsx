import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function AboutMenuBar() {
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const academicsRef = useRef(null);

  const handleDocumentClick = (e) => {
    if (academicsRef.current && !academicsRef.current.contains(e.target)) {
      setAcademicsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleAcademicsDropdown = () => {
    setAcademicsDropdownOpen(!academicsDropdownOpen);
  };

  return (
    <>
      <nav className="grid md:place-items-center">
        <ul className="grid grid-cols-6 gap-1 md:gap-4 md:mt-20  lg:mt-16 mb-0">
          <li
            className="md:h-16 text-center rounded-lg md:text-sm lg:text-lg text-base md:font-bold font-medium p-2 md:p-4  lg:m-2 bg-[#05161A]  text-white cursor-pointer "
            onClick={toggleAcademicsDropdown}
            ref={academicsRef}
          >
            Message
            {academicsDropdownOpen && (
              <div className="dropdown-content backdrop-blur-md bg-black bg-opacity-40 text-white sm:font-normal lg:text-xl  mt-6 w-[250px] rounded-md border-2">
                <li className="p-2 ">
                  <CustomLink to="/ProViceChancellor">
                    Pro Vice Chancellor
                  </CustomLink>
                </li>
                <li className="p-2 ">
                  <CustomLink to="/ViceChancellor">Vice Chancellor</CustomLink>
                </li>
              </div>
            )}
          </li>
          <li className="md:h-16 text-center rounded-lg md:text-sm lg:text-lg  text-base md:font-bold font-medium p-2 md:p-4  lg:m-2 bg-[#05161A] text-white cursor-pointer ">
            <CustomLink to="/UniversityManagement">Management</CustomLink>
          </li>
          <li className="md:h-16 text-center rounded-lg md:text-sm lg:text-lg text-base md:font-bold font-medium p-2 md:p-4  lg:m-2 bg-[#05161A] text-white cursor-pointer ">
            <CustomLink to="/FacultyList">Faculty List</CustomLink>
          </li>
          <li className="md:h-16 text-center rounded-lg md:text-sm lg:text-lg text-base md:font-bold font-medium p-2 md:p-4  lg:m-2 bg-[#05161A] text-white cursor-pointer ">
            <CustomLink to="/MinutesOfMeeting">Minute of Meeting</CustomLink>
          </li>
          <li className="md:h-16 text-center  rounded-lg md:text-sm lg:text-lg text-base md:font-bold font-medium p-2 md:p-4  lg:m-2 bg-[#05161A] text-white cursor-pointer ">
            <CustomLink to="/AnualReport">Annual Report</CustomLink>
          </li>
          <li className="md:h-16 text-center rounded-lg md:texsmxl text-base md:font-bold font-medium p-2 md:p-4  lg:m-2 bg-[#05161A] text-white cursor-pointer ">
            <CustomLink to="/Recognition">
              Recogination, regulation and quality
            </CustomLink>
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
