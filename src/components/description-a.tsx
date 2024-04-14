import React from 'react';

// Define the interface for each item in the description array
interface InfoItem {
  src: string; // Image source
  text: string; // Title text
  description: string; // Description text
}

// Define the DescriptionA component
const DescriptionA: React.FC = () => {
  // Array containing information for each description item
  const infoItems: InfoItem[] = [
    {
      src: "/photo2.jpg",
      text: "Personal Health Plan",
      description: "Create a customized plan based on your physical, mental, emotional and social health"
    },
    {
      src: "/photo3.jpg",
      text: "Daily tracking and feedback",
      description: "Track your daily activities and emotions and get feedback and recommendations"
    },
    {
      src: "/photo4.jpg",
      text: "Community and support features",
      description: "Join a community of like-minded people to share progress and get support"
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
    <div className="card lg:card-side bg-base-100 shadow-xl m-5">
      {/* Render image */}
      <figure><img src={src} alt="photo" className="rounded-lg" /></figure>
      <div className="card-body">
        {/* Render title */}
        <h2 className="card-title text-2xl font-bold">{text}</h2>
        {/* Render description */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionA;
