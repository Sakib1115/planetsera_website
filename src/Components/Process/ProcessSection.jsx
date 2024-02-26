import React from "react";
import "./Process.css";
import iconOne from "@assets/images/planetseraicon1.png";
import iconTwo from "@assets/images/planetseraicon2.png";
import processAB from "@assets/images/processAbsolute.png";
import ProcessSection1 from "./ProcessSection1";

const ProcessSection = () => {
  return (
    <>
      <div className="container px-6 mt-40">
        <div className="basis-12/12 flex flex-col relative">
          <h1 className="processHeading mb-5">MANUFACTURING PROCESSES</h1>
          <div className="manufacturing-line"></div>
          <p className="processText">
            At PlanetsEra Spices, we use the most advanced manufacturing
            technology and adhere to strict quality standards to ensure that our
            spices are of the highest quality. Our skilled team of experts
            carefully selects and blends the finest ingredients, which are then
            carefully packaged to preserve their authentic flavor and aroma.
          </p>
        </div>
        <ProcessSection1 />
        {/* <img src={processAB} className="processMax" /> */}
      </div>
    </>
  );
};

export default ProcessSection;
