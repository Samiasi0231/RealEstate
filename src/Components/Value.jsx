import React from "react";
import Accordion from "./Accordion";

const Value = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1640px] items-center flex flex-col md:flex-row p-3 py-4 justify-between gap-4 md:px-2 ">
        {/*leftside*/}
        <div>
          <img
            src="\images\value.png"
            alt="pic"
            className="w-[500px] h-[500px] rounded-t-full saturate-200 "
          />
        </div>
        <div className="mt-5">
          <h1 className="text-orange-400">Our Values</h1>
          <h3 className="text-darkBlue text-3xl">Values We Give To You</h3>
          <p className="text-sm font-san py-4">
            We'er always ready to help by providing the best services for you.
            <br />
            We belive a good place to live can make your life better
          </p>
          <div>
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
