import "./FormComponent.css"; // Import the CSS file for styling
import { FaUser, FaEnvelope, FaPhone, FaClipboardList } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


function FormComponent() {
  return (
    <div>
      <div className="form-container">
      <div className="form-box">
        <div className="form-group">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Full Name *" required />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email *" required />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <FaPhone className="input-icon" />
            <input type="tel" placeholder="Phone *" required />
          </div>
          <div className="input-group">
            <FaClipboardList className="input-icon" />
            <input type="text" placeholder="Services" required />
          </div>
        </div>
        <textarea placeholder="Message" rows="4"></textarea>
        <button type="submit">SUBMIT</button>
      </div>

      <div className="info-section">
        <div className="why-book">
          <h4>WHY BOOK WITH US?</h4>
          <ul>
            <li>Best Price Guarantee</li>
            <li>Customer care available 24/7</li>
            <li>Free Travel Insurance</li>
            <li>Hand-picked Tours & Activities</li>
          </ul>
        </div>
        <div className="get-question">
          <h4>GET A QUESTION?</h4>
          <p>Do not hesitate to give us a call. We are an <br />
           expert team and we are happy to talk to you.</p>
          <p><IoIosMail className="get-icon"/> Email: holidayplanners@gmail.com</p>
          <p><FaPhoneAlt className="get-icon"/> Phone: +123 456 7890</p>
        </div>
      </div>
      
    </div>
    
    </div>
  );
}

export default FormComponent;
