import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-cover bg-center" style={{backgroundImage: 'url(/Photo1.jpeg)'}}>
        <div className=" bg-opacity-50 h-full flex flex-col justify-center items-center">
          <div className="text-center text-black max-w-md p-5">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5 text-2xl font-bold">TO OUR INNOVATIVE HEALTH BALANCE APP.</p>
            <p className="mb-5 text-lg">Our innovative health balance application aims to offer a comprehensive and personal experience for users by integrating different aspects of health in an innovative way.</p>
            <p className="mb-5 text-lg">With customized recommendations and community engagement, our application has great potential to make a significant positive impact on users' lives and well-being.</p>
            <Link href={"/description/description-a"}><button className="btn btn-primary">Show More</button></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
