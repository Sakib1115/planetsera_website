import React from "react";
import planetseraOne from "@assets/images/planetsera-1.png";
import planetseraTwo from "@assets/images/planetsera-2.png";

const WhyPlanetserasection1 = () => {
  return (
    <>
      <div className="container mt-40">
        <div className="basis-12/12 lg:flex md:flex sm:block mb-20">
          <div className="basis-1/12"></div>

          <div className="basis-4/12 self-center relative">
            <h1 className="planetseraHeading">Precision milling</h1>
            <div className="precision-line"></div>
            <p className="planetseraText">
              The spices are precisely milled to preserve their authenticity and
              pungency for a longer period.
            </p>
          </div>
          <div className="basis-1/12"></div>
          <div className="basis-5/12">
            <img src={planetseraTwo} />
          </div>
          <div className="basis-1/12"></div>
        </div>

        <div className="basis-12/12 myfLex">
          <div className="basis-1/12"></div>

          <div className="basis-5/12 myfirst">
            <img src={planetseraOne} />
          </div>
          <div className="basis-1/12"></div>
          <div className="basis-4/12 self-center relative mysecond">
            <h1 className="planetseraHeading">Lab Testing</h1>
            <div className="lab-line"></div>
            <p className="planetseraText">
              Our spices undergo rigorous lab testing to ensure their safety,
              quality, and compliance with regulatory standards.
            </p>
          </div>

          <div className="basis-1/12"></div>
        </div>
      </div>
    </>
  );
};

export default WhyPlanetserasection1;
