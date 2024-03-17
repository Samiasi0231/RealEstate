import React, { useState } from "react";
import { data, data2 } from "../utils/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
const Accordion = () => {
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const onItemClick1 = (index) => {
    setActiveIndex1(index === activeIndex1 ? null : index);
  };

  const onItemClick2 = (index) => {
    setActiveIndex2(index === activeIndex2 ? null : index);
  };

  return (
    <div className="max-w-md mx-auto py-3 bg-white shadow-md rounded-md">
      {/* First accordion */}
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="flex justify-between items-center px-4 py-3 w-full text-left border-b border-gray-200 focus:outline-none"
            onClick={() => onItemClick1(index)}
          >
            <span>
              {" "}
              <FontAwesomeIcon icon={faCircleDown} />
              <br />
              {item.heading}
            </span>
            <svg
              className={`w-4 h-4 fill-current ${
                index === activeIndex1 ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 14.293a1 1 0 011.414 0L12 15.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM12 4a1 1 0 110 2H8a1 1 0 110-2h4z" />
            </svg>
          </button>
          <div
            className={`accordion-item-content px-4 py-3 ${
              index === activeIndex1 ? "block" : "hidden"
            }`}
          >
            <div className="text-xl text-gray-400  md:text-sm">
              {item.detail}
            </div>
            <div className="font-sans text-xl text-gray-400  md:text-sm">
              {item.Features.map((feature, i) => (
                <div key={i}>{feature}</div>
              ))}
            </div>
            <div className="text-xl text-gray-400  md:text-sm">
              {item.Description}
            </div>
          </div>
        </div>
      ))}

      {/* Second accordion */}
      {data2.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="flex justify-between items-center px-4 py-3 w-full text-left border-b border-gray-200 focus:outline-none"
            onClick={() => onItemClick2(index)}
          >
            <span>
              <FontAwesomeIcon icon={faCircleDown} />
              <br />
              {item.heading2}
            </span>
            <svg
              className={`w-4 h-4 fill-current ${
                index === activeIndex2 ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 14.293a1 1 0 011.414 0L12 15.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM12 4a1 1 0 110 2H8a1 1 0 110-2h4z" />
            </svg>
          </button>
          <div
            className={`accordion-item-content px-4 py-3 ${
              index === activeIndex2 ? "block" : "hidden"
            }`}
          >
            <div className="text-gray-400 text-xl md:text-sm">
              {item.detail2}
            </div>
            <div className="font-sans text-xl md:text-sm text-gray-400 dtext-">
              {item.Features2.map((feature, i) => (
                <div key={i}>{feature}</div>
              ))}
            </div>
            <div className="text-xl text-gray-400  md:text-sm">
              {item.Description2}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
