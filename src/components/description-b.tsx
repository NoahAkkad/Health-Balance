import React from 'react'

const DescriptionB = () => {
  const InfoDesc = [
    {src: "/photo5.jpg", text: "Holistic view of health", description: "Integrating different aspects of health for a balanced lifestyle."},
    {src: "/photo6.jpg", text: "Tailored Recommendations", description: "Tailor plans and advice to your unique needs and goals."},
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

export default DescriptionB;
