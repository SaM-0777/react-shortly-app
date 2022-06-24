import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';

import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-nav">
        <div className="app__navbar-brand">
          <a href="/"><h1>Shortly</h1></a>
        </div>
        <ul className="app__navbar-links">
          <li className="app__navbar-items">
            <a href="#about">Features</a>
          </li>
          <li className="app__navbar-items">
            <a href="#about">Pricing</a>
          </li>
          <li className="app__navbar-items">
            <a href="#docs">Resources</a>
          </li>
        </ul>
      </div>
      <div className="app__navbar-login">
        <a className="app__navbar-items" href="#login">
          Login
        </a>
        <div />
        <a className="app__navbar-items signup__button" href="#signup">
          Sign Up
        </a>
      </div>
      <div className="app__navbar-responsive">
        <HiOutlineMenu
          color=""
          fontSize="27px"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-responsive_overlay flex__center slide-bottom">
            <GrClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-responsive_links">
              <li className="app__navbar-items">
                <a href="#about">Features</a>
              </li>
              <li className="app__navbar-items">
                <a href="#about">Pricing</a>
              </li>
              <li className="app__navbar-items">
                <a href="#docs">Documents</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}


export default Navbar
