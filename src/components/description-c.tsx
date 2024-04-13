import React from 'react'

const DescriptionC = () => {
  const InfoDesc = [
    {src: "/photo7.jpg", text: "MARKET DIFFERENTIATION", description: "Our application offers a comprehensive and personalized experience to improve health and well-being, With a focus on tailored recommendations and community engagement, our app stands out on the market."},
    {src: "/photo8.jpg", text: "TARGET GROUP ANALYSIS", description: "Our target group includes people who are interested in improving their overall well-being and living a balanced life"},
  ];

  return (
    <div>
      {InfoDesc.map(x => <InfoDescription key={x.src} {...x}/>)}
    </div>
  )
}

interface InfoDescriptionProps {
  src: string;
  text: string;
  description: string;
}

const InfoDescription: React.FC<InfoDescriptionProps> = ({src, text, description}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-5 inline-block">
      <figure><img src={src} alt="photo" className="max-w-md rounded-lg shadow-2xl" width="350px" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{text}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  )
}

export default DescriptionC;
