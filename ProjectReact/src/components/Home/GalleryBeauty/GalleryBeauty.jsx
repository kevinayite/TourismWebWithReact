import { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './GalleryBeauty.css';
import { FaUserGroup } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

const GalleryBeauty = ({ items }) => {
    const [isLoading, setIsLoading] = useState(true);
    const galleryRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate image loading
        return () => clearTimeout(timer);
    }, []);

    // Auto-scroll logic
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (galleryRef.current) {
                galleryRef.current.scrollBy({
                    left: 300, // Amount to scroll
                    behavior: 'smooth', // Smooth scrolling effect
                });

                // Check if we've reached the end, reset scroll
                if (
                    galleryRef.current.scrollLeft + galleryRef.current.clientWidth >=
                    galleryRef.current.scrollWidth
                ) {
                    galleryRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 3000); // Every 3 seconds, it scrolls

        return () => clearInterval(scrollInterval); // Clean up interval on component unmount
    }, []);

    return (
        <div className="gallery" ref={galleryRef}>
            {items.map((item, index) => (
                <div className="gallery-item" key={index}>
                    {isLoading ? (
                        <Skeleton height={200} width={300} />
                    ) : (
                        <img src={item.image} alt="gallery" className="gallery-image" />
                    )}
                    <div className="content">
                        <span className="location">{isLoading ? <Skeleton width={100} /> : item.location}</span>
                        <h2>Holiday Planners is a World Leading Online Tour Booking Platform</h2>
                        <p className="description">
                            {isLoading ? (
                                <Skeleton width={200} />
                            ) : (
                                "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia..."
                            )}
                        </p>
                        <div className="details">
                        <MdAccessTimeFilled className='icons'/>
                            <div className="duration">
                                <span>Duration</span>
                                <p>{isLoading ? <Skeleton width={80} /> : "7 days 8 hours"}</p>
                            </div>
                            <FaUserGroup className='icons'/>
                            <div className="group-size">
                            
                                <span>Group Size</span>
                                <p>{isLoading ? <Skeleton width={80} /> : "50+ People"}</p>
                            </div>
                        </div>
                        <div className="price-button-container">
                        <p className="price">{isLoading ? <Skeleton width={60} /> : `$${item.price}`}</p>
                        <button className="book-now">BOOK NOW</button>

                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GalleryBeauty;
