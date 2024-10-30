//import React from 'react'

import Features from '../Features/Features'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar'
import AboutUsText from './AboutUsText/AboutUsText'
import ChateauComponent from './ChateauComponent/ChateauComponent'
import ChateauInverse from './ChateauInverse/ChateauInverse'
import ContentOfAboutPage from './ContentOfAboutPage/ContentOfAboutPage'
import ProgressComponent from './ProgressComponent/ProgressComponent'

const AboutPage = () => {
  return (
    <div>
        <NavBar/>
        <ContentOfAboutPage/>
        <Features/>
        <AboutUsText/>
        <ChateauComponent/>
        <ProgressComponent/>
        <ChateauInverse/>
        <Footer/>
    </div>
  )
}

export default AboutPage