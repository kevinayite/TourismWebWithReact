//import React from "react";
import "./Features.css"; 
import { FaBus } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { FaHotel } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-item">
        <div className="feature-icon">
        <FaBus />
        </div>
        <h3>700+ DESTINATIONS</h3>
        <p>Far far away, behind the word mountains, far countries Vokalia.</p>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
        <TiWorld />
        </div>
        <h3>BEST PRICE GUARANTEE</h3>
        <p>Far far away, behind the word mountains, far countries Vokalia.</p>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
        <FaHotel />
        </div>
        <h3>TOP NOTCH SUPPORT</h3>
        <p>Far far away, behind the word mountains, far countries Vokalia.</p>
      </div>

      <div className="feature-item">
        <div className="feature-icon">
        <FaUserClock />
        </div>
        <h3>TOP NOTCH SUPPORT</h3>
        <p>Far far away, behind the word mountains, far countries Vokalia.</p>
      </div>
    </div>
  );
};

export default Features;
