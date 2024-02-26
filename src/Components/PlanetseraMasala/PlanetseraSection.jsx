import React from "react";
import "./PlanetseraSection.css";
import PlanetseraFirst from "@assets/images/planetseraMasala.png";

import PlanetseraIconOne from "./PlanetseraIconOne";
import PlanetseraIconTwo from "./PlanetseraIconTwo";
import PlanetseraIconThree from "./PlanetseraIconThree";
import PlanetseraIconFour from "./PlanetseraIconFour";

const PlanetseraSection = () => {
  return (
    <>
      <div className="container mt-10 relative">
        <div className="basis-12/12">
          <img src={PlanetseraFirst} />
          <PlanetseraIconOne />
          <PlanetseraIconTwo />
          <PlanetseraIconThree />
          <PlanetseraIconFour />
        </div>
      </div>
    </>
  );
};

export default PlanetseraSection;
