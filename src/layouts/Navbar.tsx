import React from "react";
import "./Navbar.css";
import viteLogo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        Weather Forecast
      </div>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default Navbar;
