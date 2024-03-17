import React from "react";

const Contact = () => {
  return (
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
  );
};

export default Contact;
