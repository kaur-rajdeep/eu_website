import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "../App.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className="text-xl text-white"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        ABOUT
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          style: {
            backgroundColor: "#05161A",
            marginTop: "4px",
            height: "264px", // Override background color
          },
        }}
      >
        <div className="border-[2px] rounded-md text-white bg-[#05161A] font-[Poppins] drop-shadow-lg">
          <MenuItem onClick={handleClose}>
            <Link to="/ProViceChancellor">Pro Vice Chancellor</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/ViceChancellor">Vice Chancellor</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/UniversityManagement">Management</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/FacultyList">Faculty List</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/MinutesOfMeeting">Minute of Meeting</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/AnualReport">Anual Report</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/Recognition">Recogination, regulation and quality</Link>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
