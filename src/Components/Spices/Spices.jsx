import "./spices.css"
import SpicesInfo from "./SpicesInfo"
import bg1 from "../../assets/spices1.jpeg"
import bg2 from "../../assets/spices2.jpeg"
import { useSelector } from "react-redux"

const Spices = () => {
  const colorMe = useSelector((state) => state.colorUs.color)

  return (
    <div className="spices-container lg:w-[100%] m-auto relative flex lg:ml-5 mt-20">
      <div className="basis-7/12 lg:ml-5 box-container">
        <div className="box">
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div
              style={{ backgroundColor: colorMe }}
              className="lg:w-[282px] lg:h-[101px] small-box ml-5 absolute z-10"
            ></div>
          </div>
          <div
            style={{ backgroundImage: `url(${bg1})` }}
            className="box1 z-20 lg:w-[424px] lg:h-[523px] absolute bg-center bg-cover border-white border shadow-lg"
          ></div>
        </div>
        <div className="box">
          <div
            style={{ backgroundImage: `url(${bg2})` }}
            className="box2 z-30 lg:w-[424px] lg:h-[499px] absolute bg-center border-white border shadow-md"
          ></div>
          <div
            style={{ backgroundColor: colorMe }}
            className="lg:w-[282px] lg:h-[101px] small-box2 ml-5 absolute"
          ></div>
        </div>
      </div>
      <div className="basis-5/12">
        <SpicesInfo />
      </div>
    </div>
  )
}

export default Spices
