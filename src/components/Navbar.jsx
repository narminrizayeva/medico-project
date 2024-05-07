import React, { useState } from 'react';
import medico from "../assets/medico.logo.webp";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <nav className={`navbar ${isBurgerMenuOpen ? 'burger-menu-open' : ''}`}>
      <div className='navbar-container'>
        <img className='medico-logo' src={medico} alt="" />
        <div className='navbar-elements'>
          <Link to="/" className='a-header' href="">Home</Link>
          <Link to="/about" className='a-header' href="">About</Link>
          <Link to="/doctors" className='a-header' href="">Doctors</Link>
          <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a className='a-header' href="">Pages</a>
            <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
              <Link to="/services" className='a-header' href="#">Services</Link>
              <Link to="/departments" className='a-header' href="#">Departments</Link>
            </div>
          </div>
          <Link to="/contacts" className='a-header' href="">Contact</Link>
        </div>
        <button className='navbar-button'>HOT LINE-09856</button>
        <div className='burger-icon' >
          <FontAwesomeIcon icon={faBars} onClick={toggleBurgerMenu} />
          <div className='navbar-elements-burger' style={isBurgerMenuOpen ? { display: "flex", flexDirection: "column" } : { display: "none" }}>
            <Link to="/" className='a-header' href="">Home</Link>
            <Link to="/about" className='a-header' href="">About</Link>
            <Link to="/doctors" className='a-header' href="">Doctors</Link>
            <Link to="/departments" className='a-header' href="#">Departments</Link>
            <Link to="/contacts" className='a-header' href="">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

