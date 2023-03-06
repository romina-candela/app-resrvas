import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className="logo">Tu Sistema de Reservas</span>
        <div className="navItems">
          <button className="navButton">Registro</button>
          <button className="navButton">Login</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
