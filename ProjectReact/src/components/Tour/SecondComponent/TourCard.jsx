import './TourCard.css';
import { FaUserGroup } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

const TourCard = ({ country, discount, title, duration, groupSize, price, image }) => {
    return (
        <div className="tour-card">
            <div className="tour-image" style={{ backgroundImage: `url(${image})` }}>
                {discount && <div className="discount">{discount}</div>}
                <div className="country-tag">{country}</div>
            </div>
            <div className="tour-info">
                <h4>{title}</h4>
                <div className='text-card'>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,...
                </div>
                <div className="details">
                    <span><MdAccessTimeFilled className='icons-card'/> {duration}</span>
                    <span><FaUserGroup className='icons-card'/> {groupSize}</span>
                </div>
                
                <div className='details'>
                <div className="price">{price}</div>
                {/* <button className="book-now-card">BOOK NOW</button> */}
                <button>BOOK</button>

                </div>
            </div>
        </div>
    );
};

export default TourCard;
