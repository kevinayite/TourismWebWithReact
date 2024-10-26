import  { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Gallery.css';

const GalleryItem = ({ image, price, reductionRate, location }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate image loading
        return () => clearTimeout(timer);
    }, []);

    return (
        
        <div className="gallery-item">
            {isLoading ? (
                <Skeleton height={200} width={300} />
            ) : (
                <img src={image} alt="gallery" height={200} width={300} />
            )}
            <div className="info">
                {isLoading ? (
                    <Skeleton width={100} />
                ) : (
                    <p>Price: ${price}</p>
                )}
                {isLoading ? (
                    <Skeleton width={80} />
                ) : (
                    <p>Reduction: {reductionRate}%</p>
                )}
                {isLoading ? (
                    <Skeleton width={120} />
                ) : (
                    <p>Location: {location}</p>
                )}
            </div>
        </div>
    );
};

const Gallery = ({ items }) => {
    const galleryRef = useRef(null);

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
                <GalleryItem 
                    key={index} 
                    image={item.image} 
                    price={item.price} 
                    reductionRate={item.reductionRate} 
                    location={item.location} 
                />
            ))}
        </div>
    );
};

export default Gallery;
