import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';

function Navbar() {
    return (
      <nav className="navbar-sound d-flex">
          <div className="sound m-3">
            <Link style={{color:"white"}} to='/'>
             <img src={logo} alt="logo" width="30px" />Soundwave
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
              <span className="navbar-toggle-icon"></span>
            </button>
            </div>
          <div className="ms-auto">
            <ul className="d-flex justify-content-end">
              <li className="m-3">
                <Link style={{color:"white"}} to='/Discover'>Discover</Link>
              </li>
              <li className="m-3">
                <Link style={{color:"white"}} to='/Join'>Join</Link>
              </li>
              </ul>
          </div>
      </nav>
    );
  }

  export default Navbar;