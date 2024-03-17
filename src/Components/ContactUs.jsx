import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSquarePhone,
  faCommentDots,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1640px] items-center flex flex-col md:flex-row p-4 py-4 justify-between gap-4 px-2 ">
        {/*left side*/}
        <div className="items-center">
          <h1 className="text-orange-400 text-center md:px-2">Our Values</h1>
          <h3 className="text-darkBlue text-3xl  text-center md:px-2">
            Easy To Contact Us
          </h3>
          <p className="text-xl font-san text-center md:px-2">
            We are always ready to help by providing the best service for <br />
            you.We believe a good place to live can make your life better
          </p>

          <div className="mt-8 px-2 py-5 grid grid-cols-2 gap-2 border-gray-200">
            {/* First two boxes */}
            <div className="mt-2">
              <div className="bg-transparent max-w-60 flex-col justify-items-center rounded-lg shadow-md overflow-hidden">
                <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                  <div className="flex justify-between items-center gap-3 p-2">
                    <span className="text-4xl">
                      <FontAwesomeIcon icon={faSquarePhone} />
                    </span>
                    <div>
                      <span className="font-bold">CALL</span> <br />
                      +2341896755
                    </div>
                  </div>
                </div>
                <p className="px-2 py-2 rounded-md mt-4 text-white text-center bg-gray-900 transform transition-transform duration-300 ease-in-out hover:scale-110">
                  Call center
                </p>
              </div>
              {/*first end */}
              <div className="bg-transparent max-w-60 flex-col justify-items-center rounded-lg shadow-md overflow-hidden">
                <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                  <div className="flex justify-between items-center gap-3 p-2">
                    <span className="text-4xl">
                      <FontAwesomeIcon icon={faCommentDots} />
                    </span>
                    <div>
                      <span className="font-bold">Chat</span> <br />
                      +2341896753
                    </div>
                  </div>
                </div>
                <p className="px-2 py-2 rounded-md mt-4 text-white text-center bg-gray-900 transform transition-transform duration-300 ease-in-out hover:scale-110">
                  Chat Now
                </p>
              </div>
            </div>
            {/* Last two boxes */}
            <div className="mt-2">
              <div className="bg-transparent max-w-60 flex-col justify-items-center rounded-lg shadow-md overflow-hidden">
                <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                  <div className="flex justify-between items-center gap-2 p-2">
                    <span className="text-4xl">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <div>
                      <span className="font-bold ">Email</span> <br />
                      Hom@gmail.com
                    </div>
                  </div>
                </div>
                <p className="px-2 py-2 rounded-md mt-4 text-white text-center bg-gray-900 transform transition-transform duration-300 ease-in-out hover:scale-110">
                  Message
                </p>
              </div>
              {/*3rd box end */}
              <div className="bg-transparent max-w-60 flex-col justify-items-center rounded-lg shadow-md overflow-hidden">
                <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                  <div className="flex justify-between items-center gap-3 p-2">
                    <span className="text-4xl">
                      <FontAwesomeIcon icon={faMessage} />
                    </span>
                    <div>
                      <span className="font-bold"> Message</span> <br />
                      +2341896755
                    </div>
                  </div>
                </div>
                <p className="px-2 py-2 rounded-md mt-4 text-white text-center bg-gray-900 transform transition-transform duration-300 ease-in-out hover:scale-110">
                  Message
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*rightside*/}
        <div>
          <img
            src="\images\contact.jpg"
            alt="pic"
            className="w-[500px] mt-4 h-[500px]  rounded-t-full saturate-200 "
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
