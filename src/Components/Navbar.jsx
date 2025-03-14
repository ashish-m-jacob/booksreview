import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/home" className="linkItem">
          Home
        </Link>
        <Link to="/bookList" className="linkItem">
          Book List
        </Link>
        <Link to="/bookDetails" className="linkItem">
          Book Details
        </Link>
        <Link to="/profile" className="linkItem">
          Profile
        </Link>
        <Link to="/dashboard" className="linkItem">
          Dashboard
        </Link>
        <Link to="/" className="linkItem">
          Sign Out
        </Link>
      </div>
    </>
  );
};

export default Navbar;
