import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link, Element } from 'react-scroll';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">

        <div className="logo">
          <Link to="gallery" smooth={true} duration={500}>Huchu</Link>
        </div>

        <div className="pc-menu">
          <ul>
            <li><Link to="gallery" smooth={true} duration={500}>Gallery</Link></li>
            <li><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
          </ul>
        </div>

        <input id="menu-toggle" type="checkbox" checked={menuOpen} onChange={toggleMenu} />
        <label className='menu-button' htmlFor="menu-toggle">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </label>

        <div className={`navbar__menu--mobile ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="gallery" smooth={true} duration={500} onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="blog" smooth={true} duration={500} onClick={closeMenu}>Blog</Link></li>
          </ul>
        </div>
      </nav>

      <Element name="gallery" className="section"><Gallery /></Element>
      <Element name="blog" className="section"><Blog /></Element>
    </>
  );
}

export default App;
