import React from "react";
import planetseraIdeal from "@assets/images/planetseraIcon.png";
import masalaThree from "@assets/images/three3.png";

const PlanetseraIconFour = () => {
  return (
    <div className="planetseraIcon-4">
      <div class="group flex relative">
        <span>
          <img src={planetseraIdeal} />
        </span>
        <div class="tootip-3 group-hover:opacity-100 transition-opacity bg-white-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 opacity-0 m-4 mx-auto">
          <div className="w-full flex">
            <img src={masalaThree} style={{ width: "100px" }} />
            <h1 className="tootip-text">Sharp and Savoury</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetseraIconFour;
