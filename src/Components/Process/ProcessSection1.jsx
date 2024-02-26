import React from "react";
import processOne from "@assets/images/process-1.png";
import processTwo from "@assets/images/process-2.png";

const ProcessSection1 = () => {
  return (
    <>
      <div className="container mt-40">
        <div className="basis-12/12 lg:flex md:flex sm:block justify-center">
          <div className="basis-5/12">
            <img src={processTwo} />
            <figcaption className="fig-text">
              Packaging in Airtight zipper bags to retain the flavor of spices
            </figcaption>
          </div>
          <div className="basis-1/12"></div>

          <div className="basis-5/12">
            <img src={processOne} />
            <figcaption className="fig-text">
              Lab testing at PlanetsEra Laboratory to ensure the quality
              standards
            </figcaption>
          </div>
        </div>

        <div className="container mt-40">
          <div className="basis-12/12">
            <div className="w-full mb-20 mt-20 relative">
              <h1 className="planetseraHeading">Organic sourcing:</h1>
              <div className="organic-line"></div>
              <p className="planetseraText">
                We carefully select the finest, organically grown spice
                ingredients from trusted farmers.The raw spices are cleaned and
                inspected to ensure purity and quality.
              </p>
            </div>
            <div className="w-full mb-20 relative">
              <h1 className="planetseraHeading">Expert blending:</h1>
              <div className="expert-line"></div>
              <p className="planetseraText">
                Our team of experts carefully blends the spices to achieve the
                perfect balance of flavors and aromas.
              </p>
            </div>
            <div className="w-full mb-20 relative">
              <h1 className="planetseraHeading">Airtight packaging:</h1>
              <div className="airtight-line"></div>
              <p className="planetseraText">
                The spices are packed in airtight zipper bags to retain their
                freshness and flavour for an extended shelf life. This process
                ensures that every PlanetsEra spice is a pure, natural, and
                authentic addition to any dish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessSection1;
