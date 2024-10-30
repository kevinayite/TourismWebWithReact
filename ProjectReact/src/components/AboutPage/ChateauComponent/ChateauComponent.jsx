// //import React from 'react';
// import './ChateauComponent.css'; // Create a CSS file for styling
// import { FaCheckSquare } from 'react-icons/fa'; // Import checkmark icon

// const ChateauComponent = () => {
//   return (
//     <div className="container">
//       <div className="left-section">
//         <img 
//           src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/c5/e9/62/himeji-castle-himeji.jpg?w=500&h=500&s=1" 
//           alt="Beautiful architecture" 
//           className="image" 
//         />
//       </div>
//       <div className="right-section">
//         <h1>Bookmarksgrove, <strong>the headline</strong> <br />of <strong>Alphabet Village</strong> sublime.</h1>
//         <p>
//           Far far away, behind the word mountains, far from the countries Vokalia and 
//           Consonantia, there live the blind texts. Separated they live in Bookmarksgrove 
//           right at the coast of the Semantics.
//         </p>
//         <ul className="checklist">
//           <li><FaCheckSquare /> Far far away, behind the word mountains.</li>
//           <li><FaCheckSquare /> Countries Vokalia and Consonantia, there live.</li>
//           <li><FaCheckSquare /> Separated they live in Bookmarksgrove right.</li>
//           <li><FaCheckSquare /> The coast of the Semantics.</li>
//           <li><FaCheckSquare /> Word mountains, far from the countries Vokalia.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ChateauComponent;




//import React from 'react';
import './ChateauComponent.css'; // Create a CSS file for styling
import { FaCheckSquare } from 'react-icons/fa'; // Import checkmark icon

const ChateauComponent = () => {
  return (
    <div className="container-chateau">
      <div className="left-section">
        <img 
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/c5/e9/62/himeji-castle-himeji.jpg?w=500&h=500&s=1" 
          alt="Beautiful architecture" 
          className="image-chateau" 
        />
      </div>
      <div className="right-section">
        <h1>Bookmarksgrove, <strong>the headline</strong> <br />of <strong>Alphabet Village</strong> sublime.</h1>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia <br /> and 
          Consonantia, there live the blind texts. Separated they live in Bookmarksgrove  <br />
          right at the coast of the Semantics.
        </p>
        <div className="checklist-container">
          <ul className="checklist">
            <li><FaCheckSquare /> Far far away, behind the word mountains.</li>
            <li><FaCheckSquare /> Countries Vokalia and Consonantia, there live.</li>
          </ul>
          <ul className="checklist">
            <li><FaCheckSquare /> Separated they live <br />in Bookmarksgrove right.</li>
            <li><FaCheckSquare /> The coast of the Semantics.</li>
            <li><FaCheckSquare /> Word mountains, far <br /> from the countries Vokalia.</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default ChateauComponent;
