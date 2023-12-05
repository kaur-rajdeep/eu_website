import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

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
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        About us
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
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
      </Menu>
    </div>
  );
}
