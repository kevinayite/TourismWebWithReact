// NavBar.jsx
import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="first-line">
        <div className="contact-info">
          <IoIosMail className="icon-style" />
          <span className="contact-text">holidayplanners@gmail.com</span>
          <span className="separator">|</span>
          <FaPhoneAlt className="icon-style" />
          <span className="contact-text">+250783168747</span>
        </div>
        <div className="social-icons">
          <FaFacebookF className="icon-style" />
          <FaInstagram className="icon-style" />
          <FaTwitter className="icon-style" />
        </div>
        <br /><br />
        <br /><br />
      </div>

      <nav className="navbar">
        <img src="/api/placeholder/150/50" alt="logo" className="logo" />
        
        <button 
          onClick={toggleSidebar}
          className="sidebar-toggle"
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li className="nav-item current">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#destination">Destination</a>
          </li>
          <li className="nav-item">
            <a href="#tour">Tour</a>
          </li>
          <li className="nav-item">
            <a href="#blog">Blog</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact us</a>
          </li>
        </ul>

        {/* Mobile Sidebar */}
        <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
          <div className="sidebar-header">
            <button onClick={toggleSidebar} className="close-button">
              <IoClose />
            </button>
          </div>
          <ul className="sidebar-links">
            <li className="sidebar-item current">
              <a href="#home">Home</a>
            </li>
            <li className="sidebar-item">
              <a href="#about">About</a>
            </li>
            <li className="sidebar-item">
              <a href="#destination">Destination</a>
            </li>
            <li className="sidebar-item">
              <a href="#tour">Tour</a>
            </li>
            <li className="sidebar-item">
              <a href="#blog">Blog</a>
            </li>
            <li className="sidebar-item">
              <a href="#contact">Contact us</a>
            </li>
          </ul>
          <div className="sidebar-footer">
            <div className="sidebar-social-icons">
              <FaFacebookF className="icon-style" />
              <FaInstagram className="icon-style" />
              <FaTwitter className="icon-style" />
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div 
            className="overlay"
            onClick={toggleSidebar}
          />
        )}
      </nav>
    </div>
  );
};

export default NavBar;