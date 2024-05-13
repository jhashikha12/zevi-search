import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <>
    <div className="navbar">
        <img src={logo} alt="Zevi Logo" className="logo" />
    </div>
    </>
  );
}

export default Navbar;
