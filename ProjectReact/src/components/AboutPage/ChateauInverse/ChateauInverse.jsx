//import React from 'react';
import './ChateauInverse.css'; // Create a CSS file for styling
import { FaCheckSquare } from 'react-icons/fa'; // Import checkmark icon

const ChateauInverse = () => {
  return (
    <div className="container-inverse">
      <div className="left-section-inverse">
        <h4>Bookmarksgrove, <strong>the headline</strong> <br />of <strong>Alphabet Village</strong> sublime.</h4>
        <p>
        Far far away, behind the word mountains, far from the countries Vokalia and <br />
         Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right <br />
          at the coast of the Semantics.
        </p>
        <div className="checklist-container">
          <ul className="checklist">
            <li><FaCheckSquare /> Far far away, behind the word mountains.</li>
            <li><FaCheckSquare /> Countries Vokalia and Consonantia, there live.</li>
          </ul>
          <ul className="checklist">
            <li><FaCheckSquare /> Separated they live in Bookmarksgrove right.</li>
            <li><FaCheckSquare /> The coast of the Semantics.</li>
            <li><FaCheckSquare /> Word mountains, far from the countries Vokalia.</li>
          </ul>
        </div>
      </div>
      <div className="right-section-inverse">
        <img 
          src="https://st2.depositphotos.com/1003620/7314/i/450/depositphotos_73145299-stock-photo-teamwork-couple-climbing-helping-hand.jpg" 
          alt="Beautiful architecture" 
          className="image" 
        />
      </div>
    </div>
  );
};

export default ChateauInverse;
