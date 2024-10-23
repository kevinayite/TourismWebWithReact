

import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import './Navbar.css';

const NavBar = () => {
  return (
    <div className="container">
      <div className="first-line">
        <div className="contact-info">
          <IoIosMail className="icon-style" />
          holidayplanners@gmail.com |
          <FaPhoneAlt className="icon-style" />
          +250783168747
        </div>
        <div className="social-icons">
          <FaFacebookF className="icon-style" />
          <FaInstagram className="icon-style" />
          <FaTwitter className="icon-style" />
        </div>
      </div>
      <nav className="navbar">
        <img src="path/to/logo.png" alt="logo-picture" className="logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>


    </div>
  );
};

export default NavBar;
