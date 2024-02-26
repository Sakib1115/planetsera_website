import React from "react";
import "./IngredientSection.css";
import ingrdientPic from "@assets/images/ingredientsImg.png";
import ingredientFour from "@assets/images/ingredientIcon-4.png";
import ingredientFive from "@assets/images/ingredientIcon-5.png";
import ingredientSix from "@assets/images/ingredientIcon-6.png";
import ingredientab from "@assets/images/ingredientAB.png";
import myOur from "./IngredientData";
// import myVisual from "./IngredientData1"

const IngredientSection = () => {
  return (
    <>
      <div className="container mt-40">
        <div className="basis-12/12 relative">
          <h1 className="delicious-heading">
            Spices like no other - PlanetsEra Spices
          </h1>
          <div className="spices-line"></div>
          <p className="delicious-text  mb-20">
            Delicious and natural way to enhance your well-being.
          </p>
        </div>
      </div>
      <div className="container lg:flex md:flex sm:block">
        <div className="basis-12/12 lg:flex md:flex sm:block flex-col ingredWid">
          {myOur.map((items) => {
            return (
              <div className="basis-5/12 flex">
                <div className="w-full basis-2/12">
                  <img src={items.myIngre1} className="" />
                </div>

                <div className="w-full basis-10/12 flex flex-col">
                  <h1 className="ingredient-heading mb-2">
                    {items.myIngreFormat1}
                  </h1>
                  <p className="ingredient-text">{items.myIngreFormat2}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="basis-5/12">
          <img src={ingrdientPic} className="myImage-main" />
        </div>

        <div className="basis-5/12 flex flex-col">
          <div className="basis-5/12 flex">
            <div className="w-full basis-2/12">
              <img src={ingredientFour} className="" />
            </div>

            <div className="w-full basis-10/12 flex flex-col">
              <h1 className="ingredient-heading mb-2">Organically Grown</h1>
              <p className="ingredient-text">
                PlanetsEra spices are grown organically and handpicked to ensure
                hygiene and quality
              </p>
            </div>
          </div>
          <div className="basis-5/12 flex">
            <div className="w-full basis-2/12">
              <img src={ingredientFive} className="" />
            </div>

            <div className="w-full basis-10/12 flex flex-col">
              <h1 className="ingredient-heading mb-2">Distinctive aroma</h1>
              <p className="ingredient-text">
                PlanetsEra Spices have enchanting aroma that brings out the true
                flavor.
              </p>
            </div>
          </div>
          <div className="basis-5/12 flex">
            <div className="w-full basis-2/12">
              <img src={ingredientSix} className="" />
            </div>

            <div className="w-full basis-10/12 flex flex-col">
              <h1 className="ingredient-heading mb-2">Authentic flavours</h1>
              <p className="ingredient-text">
                PlanetsEra spices reflect the taste of India that relish the
                tastebuds.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="basis-12/12 flex flex-col" style={{ width: "41.66%" }}>
          {myOur.map((items) => {
            return (
              <div className="basis-5/12 flex">
                <div className="w-full basis-2/12">
                  <img src={items.myIngre1} className="" />
                </div>

                <div className="w-full basis-10/12 flex flex-col">
                  <h1 className="ingredient-heading mb-2">
                    {items.myIngreFormat1}
                  </h1>
                  <p className="ingredient-text">{items.myIngreFormat2}</p>
                </div>
              </div>
            );
          })}

          
        </div> */}
      </div>
      <div className="container">
        <img src={ingredientab} className="mt-10" />
      </div>
    </>
  );
};

export default IngredientSection;
