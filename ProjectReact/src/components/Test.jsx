//import React from 'react'
import './test.css'

const Test = () => {
  return (
    <div>
        <div className="cont4">
        <div className='video-container'>
          <video autoPlay muted loop>
            <source src="https://html.geekcodelab.com/holiday-planners/assets/images/highlight-video.mp4" type="video/mp4" />
            {/* <source src="https://v1.pinimg.com/videos/mc/expMp4/e2/08/57/e20857a86aafe36b32f5d2f56338d486_t1.mp4" type="video/mp4" /> */}
            
          </video>
        </div>
        <div className='sec-wrap1'>
          <h1 className='block'>Traveling Highlights</h1>
          <h2 className='block'>Your New Traveling Idea</h2>
        </div>
        </div>


    </div>
  )
}

export default Test