import React from "react";
import "../Navbar/Navbar.css";
// import Logo from "../../assets/images/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>DARKOR.uz</span>
      </div>
      <ul className="navbar-links">
        <li>Vakansiyalar</li>
        <li>Kandidatlar</li>
        <li>Kompaniyalar</li>
        <li>Xizmatlar</li>
        <li>Ta'lim</li>
        <li>
        O'zb <span className="dropdown-arrow">▼</span>
        </li>
      </ul>
      <button className="navbar-button">Boshlash</button>
    </nav>
  );
};

export default Navbar;