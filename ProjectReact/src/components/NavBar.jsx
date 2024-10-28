

// import { IoIosMail } from "react-icons/io";
// import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import './Navbar.css';

// const NavBar = () => {
//   return (
//     <div className="container">
//       <div className="first-line">
//         <div className="contact-info">
//           <IoIosMail className="icon-style" />
//           holidayplanners@gmail.com |
//           <FaPhoneAlt className="icon-style" />
//           +250783168747
//         </div>
//         <div className="social-icons">
//           <FaFacebookF className="icon-style" />
//           <FaInstagram className="icon-style" />
//           <FaTwitter className="icon-style" />
//         </div>
//       </div>
//       <nav className="navbar">
//         <img src="path/to/logo.png" alt="logo-picture" className="logo" />
//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About Us</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>


//     </div>
//   );
// };

// export default NavBar;


// import { useState } from 'react';
// import { IoIosMail } from "react-icons/io";
// import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import './Navbar.css';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="container">
//       <div className="first-line">
//         <div className="contact-info">
//           <IoIosMail className="icon-style" />
//           holidayplanners@gmail.com |
//           <FaPhoneAlt className="icon-style" />
//           +250783168747
//         </div>
//         <div className="social-icons">
//           <FaFacebookF className="icon-style" />
//           <FaInstagram className="icon-style" />
//           <FaTwitter className="icon-style" />
//         </div>
//       </div>
//       <nav className="navbar">
//         <img src="path/to/logo.png" alt="logo-picture" className="logo" />
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isOpen ? 'Close' : 'Menu'}
//         </button>
//         <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About Us</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//       {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
//     </div>
//   );
// };

// export default NavBar;


// import { useState } from 'react';
// import { IoIosMail } from "react-icons/io";
// import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import { IoMenu } from "react-icons/io5";

// import './Navbar.css';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="container">
//       <div className="first-line">
//         <div className="contact-info">
//           <IoIosMail className="icon-style" />
//           holidayplanners@gmail.com |
//           <FaPhoneAlt className="icon-style" />
//           +250783168747
//         </div>
//         <div className="social-icons">
//           <FaFacebookF className="icon-style" />
//           <FaInstagram className="icon-style" />
//           <FaTwitter className="icon-style" />
//         </div>
//       </div>
//       <nav className="navbar">
//         <img src="path/to/logo.png" alt="logo-picture" className="logo" />
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isOpen ? 'Close' : <IoMenu />}
//         </button>
//         <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About Us</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//       {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
//     </div>
//   );
// };

// export default NavBar;



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