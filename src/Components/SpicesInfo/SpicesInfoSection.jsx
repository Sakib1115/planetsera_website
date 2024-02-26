import React from "react";
import "./SpicesInfoSection.css";
import SpicesImg from "@assets/images/SpicesImg.png";
import myOur from "./SpicesInfoData.jsx";

const SpicesInfoSection = () => {
  return (
    <>
      <div className="container mt-20 spicesInfoContainer">
        <div className="basis-12/12">
          <h1 className="delicious-heading">
            Spices like no other - PlanetsEra Spices
          </h1>
          <p className="delicious-text  mb-20">
            Delicious and natural way to enhance your well-being.
          </p>
        </div>
      </div>

      <div className="container flex SpicesContainer">

        <div className="basis-12/12 flex flex-col spicesBox1" style={{ width: "41.66%" }}>
          {myOur.slice(0,3).map((items) => {
            return (
              <div className="basis-5/12 flex">
                <div className="w-full basis-3/12">
                  <img src={items.myIngre1} className="" />
                </div>
                <div className="w-full basis-9/12 flex flex-col">
                  <h1 className="ingredient-heading mb-2">
                    {items.myIngreFormat1}
                  </h1>
                  <p className="ingredient-text">{items.myIngreFormat2}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="basis-5/12 spicesBox2">
          <img src={SpicesImg} className="myImage-main" />
        </div>

        <div className="basis-12/12 flex flex-col spicesBox3" style={{ width: "41.66%" }}>
          {myOur.slice(3,6).map((items2) => {
            return (
              <div className="basis-5/12 flex">
                <div className="w-full basis-9/12 flex flex-col">
                  <h1 className="ingredient-heading mb-2 rtl">
                    {items2.myIngreFormat1}
                  </h1>
                  <p className="ingredient-text rtl">{items2.myIngreFormat2}</p>
                </div>
                <div className="w-full basis-3/12">
                  <img src={items2.myIngre1} className="" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <div className="container mt-10">
      </div>
    </>
  );
};
export default SpicesInfoSection;