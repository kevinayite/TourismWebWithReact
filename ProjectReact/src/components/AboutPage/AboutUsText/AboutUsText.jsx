import './AboutUsText.css';

const AboutUsText = () => {
  return (
    <div className="about-container">
      <div className="about-left"> {/* Moved the text section first */}
        <h2>| About us</h2>
        <h1>Plan Your Trip with Us</h1>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and 
          <br/>Consonantia, there live the blind texts. Separated they live in <br/>
          Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
          <br/>A small river named Duden flows by their place and supplies it with the<br/>
          necessary regelialia. It is a paradisematic country, in which roasted parts of <br/>
          sentences fly into your mouth. Even the all-powerful Pointing has no control <br/>
          about the blind texts it is an almost unorthographic. Italic Mountains, she<br/>
          had a last view back on the skyline. <br /><br />
          The Big Oxmox advised her not to do so, because there were thousands of bad <br />
           Commas, wild Question Marks and devious Semikoli, but the Little Blind Text 
          <br />didn’t listen. She packed her seven versalia she had a last view back <br />
           on the skyline of her hometown
        </p>

     
      </div>
      <div className="about-right"> {/* Moved the image section after the text */}
        <img src="https://www.sunderland.edu.hk/wp-content/uploads/2023/10/Blog-2-01.jpg" alt="Me" className="about-img large-img" />
        <img src="https://www.sunderland.edu.hk/wp-content/uploads/2023/10/Blog-2-01.jpg" alt="Project Snapshot" className="about-img small-img" />
      </div>
    </div>
  );
};

export default AboutUsText;
