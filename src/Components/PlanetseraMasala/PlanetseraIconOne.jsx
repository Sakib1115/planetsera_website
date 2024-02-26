import React from "react";
import planetseraIdeal from "@assets/images/planetseraIcon.png";
import masalaFirst from "@assets/images/one1.png";

const PlanetseraIconOne = () => {
  return (
    <div className="planetseraIcon-1">
      <div class="group flex relative">
        <span>
          <img src={planetseraIdeal} />
        </span>
        <div class="tootip-1 group-hover:opacity-100 transition-opacity bg-white-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 opacity-0 m-4 mx-auto">
          <div className="w-full flex">
            <img src={masalaFirst} style={{ width: "100px" }} />
            <h1 className="tootip-text">Rich and Exotic</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetseraIconOne;
