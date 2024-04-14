import React from 'react';

// Define the interface for each item in the description array
interface InfoItem {
  src: string; // Image source
  text: string; // Title text
  description: string; // Description text
}

// Define the DescriptionC component
const DescriptionC: React.FC = () => {
  // Array containing information for each description item
  const infoItems: InfoItem[] = [
    {
      src: "/photo7.jpg",
      text: "MARKET DIFFERENTIATION",
      description: "Our application offers a comprehensive and personalized experience to improve health and well-being, With a focus on tailored recommendations and community engagement, our app stands out on the market."
    },
    {
      src: "/photo8.jpg",
      text: "TARGET GROUP ANALYSIS",
      description: "Our target group includes people who are interested in improving their overall well-being and living a balanced life"
    },
  ];

  return (
    <div>
      {/* Map through infoItems array and render InfoDescription component for each item */}
      {infoItems.map(({ src, text, description }) => (
        <InfoDescription key={src} src={src} text={text} description={description} />
      ))}
    </div>
  );
};

// Define the props interface for the InfoDescription component
interface InfoDescriptionProps extends InfoItem {}

// Define the InfoDescription component
const InfoDescription: React.FC<InfoDescriptionProps> = ({ src, text, description }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-5 inline-block">
      {/* Render image */}
      <figure><img src={src} alt="photo" className="rounded-lg"/></figure>
      <div className="card-body">
        {/* Render title */}
        <h2 className="card-title text-2xl font-bold">{text}</h2>
        {/* Render description */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionC;
