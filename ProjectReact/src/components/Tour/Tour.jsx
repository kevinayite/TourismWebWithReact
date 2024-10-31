//import React from 'react';

import NavBar from "../NavBar"
import FirstPageTour from "./FirstPageTour/FirstPageTour";
import Footer from '../Footer/Footer'
import SecondComponent from "./SecondComponent/SecondComponent";


const Tour = () => {
  return (
    <div>
      <NavBar/>
      <FirstPageTour/>
      <SecondComponent/>
      <Footer/>

    </div>
  )
}

export default Tour