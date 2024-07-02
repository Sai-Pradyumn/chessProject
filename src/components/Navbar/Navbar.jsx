import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  useEffect(() => {
    const handleClick = (e) => {
      // const smallMenu = document.querySelector('.small-menu');
      const menuButton = document.querySelector('.small img');
      const isMenuButton = e.target === menuButton || menuButton.contains(e.target);
      // const isSmallMenu = e.target === smallMenu || smallMenu.contains(e.target);

      // if (!isMenuButton && !isSmallMenu) {
      if (!isMenuButton) {
        // Close the small menu if clicked outside
        setOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array to run only once on component mount

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="./logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="small">
        <img src="./menu.png" alt="" onClick={toggleMenu} />
        {open && (
          <div className="small-menu">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            {/* <li>
              <Link to="/auth" className="signin" onClick={toggleMenu}>
                Sign In
              </Link>
            </li> */}
          </div>
        )}
      </ul>
      <ul className="large">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* <li>
          <Link to="/auth" className="signin">
            Sign In
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
