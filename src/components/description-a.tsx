import React from 'react'

const DescriptionA = () => {
  const InfoDesc = [
    {src: "/photo2.jpg", text: "Personal Health Plan", description: "Create a customized plan based on your physical, mental, emotional and social health"},
    {src: "/photo3.jpg", text: "Daily tracking and feedback"
    , description: "Track your daily activities and emotions and get feedback and recommendations"},
    {src: "/photo4.jpg", text: "Community and support features"
    , description: "Join a community of like-minded people to share progress and get support"},
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
export default DescriptionA;
