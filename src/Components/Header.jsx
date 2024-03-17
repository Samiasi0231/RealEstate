import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className=" mx-auto items-center bg-orange-400 py-2">
      <nav className="mx-auto">
        <div className="h-14 flex items-center justify-between">
          <div>
            <img src="\images\logo.png" alt="logo" className="w-20" />
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex gap-4">
              {/* Hide on small screens */}
              <Link to={"/residence"} className="no-underline text-white">
                Residences
              </Link>
              <Link to={"/value"} className="no-underline text-white">
                Our Value
              </Link>
              <Link to={"/contact"} className="no-underline text-white">
                Contact Us
              </Link>
              <Link to="/" className="no-underline text-white">
                Get Started
              </Link>
            </div>
            <Link to={"/about"} className="no-underline">
              <button className="text-white items-center rounded-md bg-blue-700 ml-2 p-2 transform transition-transform duration-300 ease-in-out hover:scale-110">
                about us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
