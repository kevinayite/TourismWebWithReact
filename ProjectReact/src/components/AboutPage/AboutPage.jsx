//import React from 'react';
import Footer from '../Footer/Footer';
import FormComponent from './FormComponents/FormComponent';
import NavBar from '../NavBar';
import ContactInfoAbout from './ContactInfoAbout/ContactInfoAbout';
import ContentAbout from './ContentAbout/ContentAbout';

const AboutPage = () => {
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

export default AboutPage