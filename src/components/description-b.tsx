import React from 'react';

// Define the interface for each item in the description array
interface InfoItem {
  src: string; // Image source
  text: string; // Title text
  description: string; // Description text
}

// Define the DescriptionB component
const DescriptionB: React.FC = () => {
  // Array containing information for each description item
  const infoItems: InfoItem[] = [
    {
      src: "/photo5.jpg",
      text: "Holistic view of health",
      description: "Integrating different aspects of health for a balanced lifestyle."
    },
    {
      src: "/photo6.jpg",
      text: "Tailored Recommendations",
      description: "Tailor plans and advice to your unique needs and goals."
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
    <div className="card w-96 glass inline-block m-5">
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

export default DescriptionB;
