import './TourFilter.css';
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
const TourFilter = () => {
    return (
        <div>
            <div className="tour-filter">
            <h3>Find Your Tour</h3>
            <div className="input-container">
                <FaSearch className="input-icon" />
                <input type="text" placeholder="Search Tour" />
            </div>
            
            <div className="input-container">
                <FaLocationDot className="input-icon" />
                <input type="text" placeholder="Where To?" />
            </div>
            <div className="input-container">
                <MdCalendarMonth className="input-icon" />
                <select>
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>    
                </select>
            </div>
            <div className="input-container">
                <label>Duration</label>
                <select>
                    <option>Any</option>
                    <option>1 Day Tour</option>
                    <option>2-4 Days Tour</option>
                    <option>5-7 Days Tour</option>
                    <option>7+ Days Tour</option>
                </select>
            </div>
            <div className="price-range">
                <div className="price-input">
                    <label>Min Price</label>
                    <input type="number" min="1" placeholder="1" />
                </div>
                <div className="price-input">
                    <label>Max Price</label>
                    <input type="number" min="1" placeholder="0" />
                </div>
            </div>
            <div className="categories">
                <label><input type="checkbox" /> Cultural</label>
                <label><input type="checkbox" /> Adventure</label>
                <label><input type="checkbox" /> Historical</label>
                <label><input type="checkbox" /> Seaside</label>
                <label><input type="checkbox" /> Discovery</label>
            </div>
            <button className="find-now">FIND NOW</button>            
            
        </div>
        <br /><br />

        <div className="info-section-tour">
        <div className="why-book-tour">
          <h4>WHY BOOK WITH US?</h4>
          <ul>
            <li>Best Price Guarantee</li>
            <li>Customer care available 24/7</li>
            <li>Free Travel Insurance</li>
            <li>Hand-picked Tours & Activities</li>
          </ul>
        </div>
        <div className="get-question-tour">
          <h4>GET A QUESTION?</h4>
          <p>Do not hesitate to give us a call. We are an <br />
           expert team and we are happy to talk to you.</p>
          <p><IoIosMail className="get-icon-tour"/> Email: holidayplanners@gmail.com</p>
          <p><FaPhoneAlt className="get-icon-tour"/> Phone: +123 456 7890</p>
        </div>
    </div>

        </div>
    );
};

export default TourFilter;
