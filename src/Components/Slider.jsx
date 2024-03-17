import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homes } from "../utils/slider";

const ImagePicker = ({ images, onSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three images at a time
    slidesToScroll: 1,
    centerMode: false, // Adjusted to false
    variableWidth: true,
    focusOnSelect: true,
    beforeChange: (current, next) => {
      if (images && images[next]) {
        setSelectedImage(images[next]);
      }
    },

    responsive: [
      {
        breakpoint: 768, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 2, // Display two images per slide for medium devices
        },
      },
      {
        breakpoint: 640, // Small devices (landscape phones, 640px and up)
        settings: {
          slidesToShow: 1, // Display one image per slide for small devices
        },
      },
    ],
  };

  const handleSelectImage = () => {
    if (selectedImage) {
      onSelect(selectedImage);
    }
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="image-picker-container relative mt-5">
      <h3 className="px-3 text-orange-400">Beast chioce </h3>
      <h1 className="px-3 text-darkBlue">Popular Residencies</h1>
      <div className="slider-container relative">
        <Slider {...settings} ref={sliderRef}>
          {homes.map((item, index) => (
            <div key={index} className="image-slide">
              <div className="max-w-80 mx-auto md:gap-4 overflow-hidden p-4 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:border-2">
                <img
                  src={item.image}
                  alt="logo"
                  className=" w-full md:w-80 h-60 object-cover saturate-200"
                />
                <div className="mt-2">
                  <div className="font-bold font-sans text-lg">{item.name}</div>
                  <p className="text-gray-700">
                    <span className="text-orange-400">#</span>
                    {item.price}
                  </p>
                  <p className="text-start font-sans text-xl text-gray-700">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="prev-button absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded-l z-10"
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className="next-button absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white px-3 py-2 rounded-r z-10"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
      <button
        onClick={handleSelectImage}
        className="absolute bottom-4 left-1/3 py-2  text-white items-center rounded-md bg-blue-700  p-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
      >
        Values
      </button>
    </div>
  );
};

export default ImagePicker;
