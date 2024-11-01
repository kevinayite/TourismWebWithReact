import './Footer.css';
import {  FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import visaLogo from './logos-picture/visa.jpg';
import masterLogo from './logos-picture/mastercard.png';
import paypalLogo from './logos-picture/paypal.jpg';
import expressLogo from './logos-picture/american-express.png';
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <div className="footer-column">
        <h3>Newsletter</h3>
        <img src="path/to/logo.png" alt="logo-picture" className="logo" />
        Holiday Planners sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.
        <br /> <br />
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
        <div className="footer-images">
        <img src={paypalLogo} alt="Description of image 1" className="footer-image" />
        <img src={visaLogo} alt="Description of image 1" className="footer-image" />
        <img src={masterLogo} alt="Description of image 1" className="footer-image" />
        <img src={expressLogo} alt="Description of image 1" className="footer-image" />
        </div>
      </div>
      
      <div className="footer-column">
      <div className='line'>
        <h3>Navigation</h3>
        </div>
        <ul className="square-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/destination">Destination</Link></li>
            <li><Link to="/tour">Tour</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        {/* <ul className="square-list">
          <li><a >Home</a></li>
          <li><a >About</a></li>
          <li><a >Destination</a></li>
          <li><a >Tour</a></li>
          <li><a >Blog</a></li>
          <li><a >Contact us</a></li>
        </ul> */}
      </div>
      <div className="footer-column">
        <div className='line'>
        <h3>Need help</h3>
        </div>
        <p>Call Us <br/>
        +123 456 7890</p>
        <br />
        <p>Email for Us <br/>
        holidayplanners@gmail.com</p> <br />
        <p>Location <br/>
        Main Street, Victoria 8007.</p> <br />

        <p>Follow us <br/>
        <div className="social-icons">
          <FaFacebookF className="icon-style" />
          <FaInstagram className="icon-style" />
          <FaTwitter className="icon-style" />
        </div>
            </p>
      </div>
      <br />
      <br />
      
      
    </footer>
    
    </div>
  );
}

export default Footer;


