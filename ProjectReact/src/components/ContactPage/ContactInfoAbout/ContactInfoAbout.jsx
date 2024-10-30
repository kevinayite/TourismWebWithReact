//import React from 'react';
import './ContactInfoAbout.css';
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";

const ContactInfoAbout = () => {
  return (
    <div className="container">
      
      <div className="office-info">
        <div className="office-section">
          <h4>INDIA OFFICE</h4>
          <p><IoLocationSharp className='icons-contact-info'/> 54, Beside Shopping Mall, Gujarat.</p>
          <p><IoCallSharp className='icons-contact-info'/> +123 456 7890</p>
          <p><MdAlternateEmail className='icons-contact-info'/> holidayplanners@gmail.com</p>
        </div>

        <div className="office-section">
          <h4>USA OFFICE</h4>
          <p><IoLocationSharp className='icons-contact-info'/> 888 S Greenville, TX 75081, United States.</p>
          <p><IoCallSharp className='icons-contact-info'/>+123 456 7890</p>
          <p><MdAlternateEmail className='icons-contact-info'/> holidayplannersusa@gmail.com</p>
        </div>

        <div className="office-section">
          <h4>VICTORIA OFFICE</h4>
          <p><IoLocationSharp className='icons-contact-info'/> Main Street, Victoria 8007.</p>
          <p><IoCallSharp className='icons-contact-info'/> +123 456 7890</p>
          <p><MdAlternateEmail className='icons-contact-info'/> holidayplannersvic@gmail.com</p>
        </div>
      </div>

      
      <div className="map">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.1352860904826!2d-96.73534112465442!3d32.96480037425942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19e8e9a1a1c9%3A0x2498f9e1c8d8b218!2s888%20S%20Greenville%20Ave%2C%20Richardson%2C%20TX%2075081%2C%20USA!5e0!3m2!1sen!2sin!4v1602523132222!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfoAbout;
