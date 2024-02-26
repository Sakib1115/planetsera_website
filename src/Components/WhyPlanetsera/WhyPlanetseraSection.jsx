import React from "react";
import "./whyPlanetsera.css";
import iconOne from "@assets/images/planetseraicon1.png";
import iconTwo from "@assets/images/planetseraicon2.png";
import iconThree from "@assets/images/planetseraicon3.png";
import WhyPlanetserasection1 from "./WhyPlanetserasection1";

const WhyPlanetseraSection = () => {
  return (
    <>
      <div className="container px-6">
        {/* <div className="basis-12/12 relative">
          <h1 className="planetHeading text-center mb-20">Why PlanetsEra?</h1>
          <div className="why-line"></div>
        </div> */}
        {/* <div className="basis-12/12 flex">
          <div className="basis-4/12">
            <img src={iconOne} className="block mx-auto mb-5 plannWd" />
            <p className="icon-text">
              High Nutritional
              <br />
              Value
            </p>
          </div>
          <div className="basis-4/12">
            <img src={iconTwo} className="block mx-auto mb-5 plannWd" />
            <p className="icon-text">
              Preserves the <br />
              Environment
            </p>
          </div>
          <div className="basis-4/12">
            <img src={iconThree} className="block mx-auto mb-5 plannWd" />
            <p className="icon-text">
              No Chemicals & <br />
              Pesticides
            </p>
          </div>
        </div> */}
        <WhyPlanetserasection1 />
      </div>
    </>
  );
};

export default WhyPlanetseraSection;
