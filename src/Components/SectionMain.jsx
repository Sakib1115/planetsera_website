// import "./App.css";
import mOne from "@assets/images/m1.png"
import cusinesImage from "@assets/images/cusinesImg.png"
import { useSelector } from "react-redux"

function SectionMain() {
  const colorMe = useSelector((state) => state.colorUs.color)

  return (
    <div id="produce" className="container mt-401 bg-no-repeat relative">
      <div className="basis-12/12 flex taste-cooking">
        {/* <div className="basis-1/12 cooking-dis"></div> */}
        <div className="basis-12/12 w-full">
          <div data-aos="slide-left" data-aos-anchor-placement="top-bottom">
            <h2
              style={{ color: colorMe }}
              className="text-center produce-heading my-5 tracking-wide"
            >
              Producing the treasures of the Indian cuisines
            </h2>
            <div
              style={{ backgroundColor: colorMe }}
              className="productionLine"
            ></div>
          </div>
        </div>
        {/* <div className="basis-1/12 cooking-dis"></div> */}
      </div>
      <div className="basis-12/12 flex px-5">
        {/* <div className="basis-1/12"></div> */}
        <div className="basis-12/12 w-full">
          <div data-aos="slide-right">
            <p class="taste-text text-center text-md md:text-2xl md:px-16 md:mb-16">
              Spices have an inseparable bond with our Indian culture. Each and
              every flavor of different spices in our country reflect the taste
              of the region and carry the story of the richness of our country.
              Relishing your taste buds with the best quality of spices to add
              spice to your life and devouring delicacies, PlanetsEra spices is
              a step ahead.
            </p>
          </div>
        </div>
        {/* <div className="basis-1/12"></div> */}
      </div>

      <div className="basis-12/12 flex my-3 px-5">
        {/* <div className="basis-1/12 cooking-dis"></div> */}
        <div className="basis-12/12 w-full">
          <img src={mOne} class="max-w-full h-auto vert-move mx-auto" />
        </div>
        {/* <div className="basis-1/12 cooking-dis"></div> */}
      </div>
      {/* <div data-aos="slide-right" className="slideRight">
        <img src={cusinesImage} className="cusines-image" />
      </div> */}
    </div>
  )
}
export default SectionMain
