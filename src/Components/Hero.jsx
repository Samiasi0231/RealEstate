import CountUp from "../utils/Countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className=" bg-darkBlue">
      {/*deflex*/}
      <div className="container mx-auto max-w-[1640px] items-center flex flex-col md:flex-row p-3 py-4 justify-between gap-4 md:px-2 ">
        {/*leftpart*/}
        <div className=" flex-col items-center ">
          <div className=" absolute rounded-full bg-orange-500 h-6 w-6 z-0 left-40 md:left-64 md:ml-3"></div>
          <h1 className=" font-serif text-4xl text-start text-white font-bold relative z-10 ">
            Discover <br />
            Most Suitable <br /> Property
          </h1>
          <div className="py-4 flex-col items-center text-orange-500  text-xl text-start">
            <span className="font-serif">
              find a variety of properties that suit you very esaility
            </span>
            <br />
            <span className="font-serif">
              For get all difficuiltie in finding a residence for you
            </span>
          </div>
          {/*search*/}
          <div className="flex-col items-start">
            <div className="bg-gray-50  rounded-full flex flex-row px-2 mt-4 items-center max:w-80">
              <FontAwesomeIcon icon={faLocationDot} className="h-6" />
              <input
                type="text"
                className="bg-transparent p-2 w-full focus:outline-none"
                placeholder=""
              />
              <button className=" transform bg-blue-700 rounded transition-transform duration-300 ease-in-out hover:scale-110">
                Search
              </button>
            </div>
          </div>
          <div className="flex-col items-start">
            <span>
              <CountUp start={8800} end={9000} duration={4} />
              <span>+</span>
            </span>
            <span>primum</span>
            <span>Happy Customers</span>
            <span>Award wining</span>
          </div>
        </div>
        {/*rightpart image*/}
        <div className="right-side">
          <div className="image-container bg-white">
            <img
              src="\images\hero-image.png"
              alt=""
              className="w-[500px] h-[500px] rounded-t-full saturate-200 "
            />
          </div>
        </div>
      </div>
      {/*brand section*/}
      <section className="bg-white">
        <div className="flex flex-col items-center py-4 justify-evenly md:flex-row">
          <img
            src="\images\prologis.png"
            alt=""
            className=" saturate-200 w-40 h-40"
          />

          <img
            src="\images\tower.png"
            alt=""
            className=" saturate-200 w-40 h-40 "
          />
          <img
            src="\images\equinix.png"
            alt=""
            className=" saturate-200 w-40 h-40 "
          />
          <img
            src="\images\realty.png"
            alt=""
            className=" saturate-200 w-40 h-40"
          />
        </div>
      </section>
    </section>
  );
};

export default Hero;
