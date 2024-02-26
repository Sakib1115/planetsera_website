import React from "react";
import "./AboutBanner.css";
import bannerOne from "@assets/images/aboutBannerAbsolute.png";
import rectOne from "@assets/images/rect.png";

const AboutBannerSection = () => {
  return (
    <>
      <div className="container relative lg:flex md:flex sm:block mt-40">
        <img src={bannerOne} className="imageAb" />
        <div className="basis-1/12"></div>
        <div className="container aboutbanner flex justify-center items-center maOne relative">
          <div className="basis-12/12">
            <h1 className="aboutbanner-text">
              Know the journey behind
              <br /> the establishment of PlanetsEra Spices
            </h1>
            <div>
              <img src={rectOne} className="spiceRect" />
            </div>
          </div>
        </div>

        <div className="basis-1/12"></div>
      </div>
    </>
  );
};

export default AboutBannerSection;
