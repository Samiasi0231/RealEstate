import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="">
        <div className="max-w-full h-52  bg-darkBlue rounded-md text-white text-center">
          <h1 className="font-sans">Get started with Homyz</h1>
          <p className="text-gray-400">
            Subscribe and find super attractive price qoutes from us <br />
            find your residence soon
          </p>
          <button className="p-2 mt-4 bg-blue-500  rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110 px-5 py-2">
            Get Started
          </button>
        </div>
        <div className="mt-5 flex flex-col items-center md:flex md:flex-row md:justify-between md:px-10">
          <div className="items-center px-12">
            <img src="\images\logo2.png" alt="logo" />

            <p className="text-start text-sm">
              Our vision is make all people <br />
              the best place to live for them. <br />
              A pioneering real estate company leveraging cutting-edge
              technology to <br /> offer seamless virtual property experiences,
              prioritize sustainability through green building practices, <br />
              and provide flexible solutions tailored to evolving lifestyle
              needs.
            </p>
          </div>
          <div className="items-center">
            <h1 className="text-blue-900">Information</h1>
            <p className="font-bold">#9.Odums Alakahia,Choba Port-Harcourt</p>
            <ul className="font-bold mt-4 text-orange-400 grid grid-cols-2 gap-4  md:flex">
              <li>Property</li> <li>Service</li> <li>Product</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
