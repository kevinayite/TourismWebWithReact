
import React from 'react';
import '../TravelGrid/TravelGrid.css';


const DestinationCard = ({ country, image, description, isWide, isTall }) => {
  return (
    <div className={`card ${isWide ? 'cardWide' : ''} ${isTall ? 'cardTall' : ''}`}>
      <div className="imageContainer">
        <img
          src={image}
          alt={description}
          className="image"
        />
        <div className="overlay"></div>
        <div className="label">{country}</div>
      </div>
    </div>
  );
};

const TravelGridInverse = () => {
  const destinations = [
    {
      country: "Greece",
      image: "https://media.istockphoto.com/id/1458297519/photo/old-white-church.jpg?s=1024x1024&w=is&k=20&c=zTHOBbYL5cArKFvcGwLZMgvEz7DCWO9l4Y4uYh4552g=",
      description: "Santorini's iconic white buildings and blue domes",
      isWide: true,
      isTall: false
    },
    {
      country: "India",
      image: "https://media.istockphoto.com/id/2177982622/vector/history-and-landmarks-of-usa-monumental-statue-native-chief-lincoln-park-chicago.jpg?s=1024x1024&w=is&k=20&c=FyRF-q_ENQN7OEPh9-xPOISoaSv9hGBZTtyDx_kedy8=",
      description: "Spiritual statue against blue sky",
      isWide: false,
      isTall: true
    },
    {
      country: "Thailand",
      image: "https://media.istockphoto.com/id/1533495845/photo/sanctuary-of-truth-pattaya-thailand-wooden-temple-by-the-ocean-at-sunset-on-the-beach-of.jpg?s=1024x1024&w=is&k=20&c=ykI0xd2TcP_2s3ZTRiBIc2NjgMmqGgXrVal7prIGn_A=",
      description: "Tropical beach with turquoise waters",
      isWide: false,
      isTall: false
    },
    {
      country: "Switzerland",
      image: "https://media.istockphoto.com/id/1680616339/photo/view-of-the-old-town-in-montreux-switzerland.jpg?s=1024x1024&w=is&k=20&c=lc1MJ8cgg3ggNU1oTQjNG1i16s-o6krw1OeOtCIZfK8=",
      description: "Snow-capped mountain peak with lake",
      isWide: false,
      isTall: false
    }
  ];

  return (
    <div className="container">
      <div className="grid">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.country}
            {...dest}
          />
        ))}
      </div>
    </div>
  );
};

export default TravelGridInverse;
