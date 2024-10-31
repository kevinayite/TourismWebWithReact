import TourCard from './TourCard';
import TourFilter from './TourFilter';
import './SecondComponent.css'


const SecondComponent = () => {
    return (
        <div className="tour-booking-app">
            <div className="sort-filter">
                
                <label>Sort by:</label>
                <select>
                    <option>Release Date</option>
                    <option>Tour Date</option>
                    <option>Title</option>
                    <option>Price</option>
                    <option>Popularity</option>
                    <option>Rating</option>
                    <option>Duration</option>
                    
                </select>
                <select>
                    <option>Descending</option>
                    <option>Ascending</option>
                </select>
            </div>
            <div className="content">
                <div className="tour-list">
                    <TourCard 
                        country="ITALY"
                        discount={null}
                        title="Holiday Planners is a World Leading Online Tour Booking Platform"
                        duration="2 days"
                        groupSize="6 People"
                        price="$1200"
                        image="https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2016/03/Manarola_iStock_Freeartist_www.istockphoto-1024x682.jpg"
                    />
                    <TourCard 
                        country="GREECE"
                        discount="15% off"
                        title="Holiday Planners is a World Leading Online Tour Booking Platform"
                        duration="6 days 3 hours"
                        groupSize="15+ People"
                        price="$2500"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Parthenon_%2830276156187%29.jpg/300px-Parthenon_%2830276156187%29.jpg"
                    />
                    <TourCard 
                        country="Switzerland"
                        discount={null}
                        title="Holiday Planners is a World Leading Online Tour Booking Platform"
                        duration="2 days"
                        groupSize="6 People"
                        price="$1200"
                        image="https://www.alphatrad.com/sites/alphatrad.com/files/styles/news_image/public/images/articles/what-are-the-languages-spoken-in-switzerland.jpg?itok=7TptHWyA"
                    />
                    
                    <TourCard 
                        country="ITALY"
                        discount={null}
                        title="Holiday Planners is a World Leading Online Tour Booking Platform"
                        duration="2 days"
                        groupSize="6 People"
                        price="$1200"
                        image="https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2016/03/Manarola_iStock_Freeartist_www.istockphoto-1024x682.jpg"
                    />
                    <TourCard 
                        country="GREECE"
                        discount="15% off"
                        title="Holiday Planners is a World Leading Online Tour Booking Platform"
                        duration="6 days 3 hours"
                        groupSize="15+ People"
                        price="$2500"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Parthenon_%2830276156187%29.jpg/300px-Parthenon_%2830276156187%29.jpg"
                    />
                    <TourCard 
                        country="Switzerland"
                        discount={null}
                        title="Holiday Planners is a World Leading Online Tour Booking Platform"
                        duration="2 days"
                        groupSize="6 People"
                        price="$1200"
                        image="https://www.alphatrad.com/sites/alphatrad.com/files/styles/news_image/public/images/articles/what-are-the-languages-spoken-in-switzerland.jpg?itok=7TptHWyA"
                    />
                    
                    
                </div>
                <TourFilter />
            </div>
        </div>
    );
};

export default SecondComponent;
