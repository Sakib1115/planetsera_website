import React from "react";
import "./QualitySection.css";
import spiac from "@assets/images/quality-1.png";
import spiac1 from "@assets/images/quality-2.png";
import spiac10 from "@assets/images/founderAb.png";

const QualitySection = () => {
  return (
    <>
      <div className="container quality-container px-6 mt-40">
        <img src={spiac10} className="absolute qualityEmg" />
        <div className="basis-12/12 lg:flex md:flex sm:block">
          <div className="basis-4/12 relative">
            <img src={spiac} className="absolute quality-img-1" />
            <img src={spiac1} className="absolute quality-img" />
          </div>
          <div className="basis-2/12"></div>
          <div className="basis-6/12 self-center relative qualityOne">
            {/* <h1 className="management-heading mb-5">
              Our Founder, Mr. Devender Mishra addressing the press at the
              launch of PlanetsEra Spices
            </h1>
            <div className="quality-line"></div> */}
            <p className="management-text1">
              Our journey has been inspired by our motive to make a mark in the
              most popular industrial sectors, providing employment to thousands
              of diligent youth striving to earn and secure their future. We
              also believe in taking care of the environment and have embarked
              on a mission to be the first company in the world to be completely
              carbon positive, waste recycling, and water conserving.
              <br />
              <br />
              As a company, we are consistent in serving you the best with due
              honesty and world-class standards. Your trust has been the main
              pillar of our phenomenal growth and has enabled us to uphold the
              core values of establishing sustainability along with excellence
              and innovation in customer services.
            </p>
          </div>
        </div>
      </div>
      <div className="container flex">
        <div className="basis-12/12 lg:flex md:flex sm:block w-full flex relative pressAlign">
          <div className="basis-2/12"></div>
          <div className="basis-4/12 relative">
            <h1 className="management-heading mb-5">
              Our Founder, Mr. Devender Mishra addressing the press at the
              launch of PlanetsEra Spices
            </h1>
            <div className="quality-line"></div>
          </div>
          <div className="basis-6/12"></div>
        </div>
      </div>
    </>
  );
};

export default QualitySection;
