import React, { useState } from "react";
import { Link } from "react-router-dom";
import BasicMenu from "./MenuAbout"; // Import the BasicMenu component
import { SvgIcon } from "@mui/material";

export default function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "ACET", link: "/acet" },
    { name: "STUDENT ZONE", link: "/students" },
    { name: "FACULTY ZONE", link: "/faculty" },
    { name: "CONTACT US", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="grid place-items-center">
        <div className="navbar shadow-md  h-16 fixed top-0 left-0 backdrop-blur-lg mt-[-2px] z-10 m-0 w-[100%] ">
          <div className="md:flex items-center justify-end py-4 md:px-10 px-7">
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden text-white mb-2"
            >
              <SvgIcon viewBox="0 0 24 24">
                <path
                  d={
                    open
                      ? "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12Z"
                      : "M3 18h18v-2H3v2zM3 6v2h18V6H3zM3 12v2h18v-2H3z"
                  }
                />
              </SvgIcon>
            </div>
            <ul
              className={`navbar md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]  left-0 w-full md:w-auto md-pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 opacity-100" : "top-[-490px]"
              } md:opacity-100 opacity-0`}
            >
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-6">
                  {link.name === "ABOUT" ? (
                    <BasicMenu />
                  ) : (
                    <Link
                      to={link.link}
                      onClick={() => setOpen(!open)}
                      className="text-white hover:underline decoration-3  font-medium duration-500"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

// // New Nav Bar

// import React, { useState, useRef } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { SvgIcon } from "@mui/material";
// import AboutMenuBar from "./AboutMenu";

// export default function Navbar() {
//   const aboutMenuBarRef = useRef(null);
//   const [open, setOpen] = useState(false);
//   const [showAboutMenu, setShowAboutMenu] = useState(false);

//   const toggleAboutMenu = () => {
//     setShowAboutMenu(!showAboutMenu);
//   };

//   const handleAboutClick = () => {
//     toggleAboutMenu();
//     setOpen(false);
//     aboutMenuBarRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const Links = [
//     { name: "HOME", link: "/" },
//     { name: "ABOUT", onClick: handleAboutClick },
//     { name: "ACET", link: "/acet" },
//     { name: "STUDENT ZONE", link: "/students" },
//     { name: "FACULTY ZONE", link: "/faculty" },
//     { name: "CONTACT US", link: "/contact" },
//   ];

//   return (
//     <nav>
//       <div className="grid place-items-center">
//         <div className="navbar shadow-md  h-16 fixed top-0 left-0 backdrop-blur-lg mt-[-2px] z-10 m-0 w-[100%] ">
//           <div className="md:flex items-center justify-end py-4 md:px-10 px-7">
//             <div
//               onClick={() => setOpen(!open)}
//               className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden text-white   mt-12 mb-12"
//             >
//               <SvgIcon viewBox="0 0 24 24">
//                 <path
//                   d={
//                     open
//                       ? "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12Z"
//                       : "M3 18h18v-2H3v2zM3 6v2h18V6H3zM3 12v2h18v-2H3z"
//                   }
//                 />
//               </SvgIcon>
//             </div>
//             <ul
//               className={`navbar md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]  left-0 w-full md:w-auto md-pl-0 pl-9 transition-all duration-500 ease-in ${
//                 open ? "top-20 opacity-100" : "top-[-490px]"
//               } md:opacity-100 opacity-0`}
//             >
//               {Links.map((link, index) => (
//                 <li
//                   key={index}
//                   className="md:ml-8 text-xl md:my-0 my-6 mt-16 mb-16"
//                 >
//                   {link.onClick ? (
//                     <span
//                       className="text-white hover:underline decoration-3 font-medium duration-500"
//                       onClick={link.onClick}
//                     >
//                       {link.name}
//                     </span>
//                   ) : (
//                     <NavLink
//                       to={link.link}
//                       onClick={() => {
//                         setOpen(false);
//                         setShowAboutMenu(false);
//                       }}
//                       className="text-white hover:underline decoration-3 font-medium duration-500"
//                     >
//                       {link.name}
//                     </NavLink>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div>
//         {showAboutMenu && <AboutMenuBar ref={aboutMenuBarRef} />}
//       </div>
//     </nav>
//   );
// }
