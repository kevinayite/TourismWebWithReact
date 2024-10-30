//import React from 'react';
import FormComponent from './FormComponents/FormComponent';
import NavBar from '../NavBar';
import ContactInfoAbout from './ContactInfoAbout/ContactInfoAbout';
import ContentAbout from './ContentAbout/ContentAbout';
import Footer from '../Footer/Footer';

const ContactPage = () => {
  return (
    <div>
        <NavBar/>
        <ContentAbout/>
        <FormComponent/>
        <ContactInfoAbout/>
        <Footer/>
        
    </div>
  )
}

export default ContactPage