import React from "react";
import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const formTab = [
    { label: "What is your name?", placeholder: "Type here" },
    { label: "What is your email?", placeholder: "Type here" },
    { label: "What is your phone number?", placeholder: "Type here" },
    { label: "What is your address?", placeholder: "Type here" }
  ];

  const contactTab = [
    {
      icon: <FaMapSigns className="text-4xl" />,
      title: "Address",
      description: `Nasaret 10, 421 11 Sweden`,
    },
    {
      icon: <BsFillTelephoneFill className="text-4xl" />,
      title: "Contact Number",
      description: `+ 1234 5678 99`,
    },
    {
      icon: <FaPaperPlane className="text-4xl" />,
      title: "Email Address",
      description: `info@health-balance.com`,
    },
    {
      icon: <BsGlobeAmericas className="text-4xl" />,
      title: "Website",
      description: "www.health-balance.com",
    },
  ];

  return (
    <>
      <div>
        <div className="md:w-96 mx-auto text-center my-24">
          <div className="text-xl pb-5 ">
          EMPOWER YOURSELF WITH HEALTH BALANCE APP AND
          </div>
          <div className="text-2xl font-bold">Contact Us</div>
        </div>
        {/* Cards */}
        <div className="container mx-auto my-12 h-auto">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.map((x, index) => {
              return (
                <div key={index} className="card w-full  shadow-xl h-auto ">
                  <div className="card-body items-center flex-grow-0  text-center">
                    <h2 className="card-title">{x.icon}</h2>
                    <p className="text-lg font-bold my-3">{x.title}</p>
                    <div className="">
                      <p className=" text-lg font-semibold">{x.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" container mx-auto  flex flex-wrap shadow-2xl my-20 rounded-md p-5">
        <div className="lg:w-1/2 w-full p-4">
          <form className="  shadow-md rounded-lg px-2 pt-6 pb-8 mb-4">
            <div className="flex  flex-col">
              {formTab.map((x, index) => {
                return (
                  <div key={index} className="mx-auto form-control w-full">
                    <label className="label">
                      <span className="label-text">{x.label}</span>
                    </label>
                    <input
                      type="text"
                      placeholder={x.placeholder}
                      className="input input-bordered w-full  "
                    />
                  </div>
                );
              })}
              <div className="w-full my-4 flex justify-end ">
                <button className="btn rounded-full w-full">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 w-full   p-4">
          <div className="relative aspect-w-16 h-[50vw] lg:h-full aspect-h-9 ">
            <iframe className="rounded-lg drop-shadow-md" width="98%" height="98%"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244640.20079641198!2d11.843553971403166!3d57.742630752141174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464f8e67966c073f%3A0x4019078290e7c40!2zR8O2dGVib3Jn!5e0!3m2!1ssv!2sse!4v1712860704908!5m2!1ssv!2sse"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
