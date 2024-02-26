import bg1 from "@assets/spiceOrganicRed.png"
import bg2 from "@assets/spiceOrganicYellow.png"
import bg3 from "@assets/spiceOrganicGreen.png"
import { useSelector } from "react-redux"

import "./handpicked.css"

const HandPicked = () => {
  const colorMe = useSelector((state) => state.colorUs.color)
  const checkImg1 = (colorMe) => {
    if (colorMe === "#FF4F4F") {
      return bg1
    }
    if (colorMe === "#ffde39") {
      return bg2
    }
    if (colorMe === "#2dc83c") {
      return bg3
    }
  }
  return (
    <div className="relative mt-32 md:mt-0">
      <div className=" absolute hidden z-10 h-full text-white md:flex justify-center md:flex-col p-12 md:px-24 mt-[30px]  md:mt-24 2xl:mt-36 ">
        <div data-aos="fade-right">
          <p className="text-center text-sm lg:text-6xl font-light 	tracking-wider 2xl:text-7xl">
            Spices that are grown organically and handpicked for uncompromised
            taste
          </p>
          <p className="text-center absolute text-sm lg:text-6xl font-light mt-[-117px] mr-[-5px] z-[-10] text-gray-900	tracking-wider  2xl:hidden">
            Spices that are grown organically and handpicked for uncompromised
            taste
          </p>
        </div>
        <div data-aos="fade-left">
          <p className=" p-4 md:px-[7.2rem] space-y-4	text-xs lg:text-2xl font-thin 2xl:px-48">
            PlanetsEra spices give you unmatched taste and tempting aroma. Get
            your desired flavor of spices blessed with the benefits of Nature
            and heavenly delicacy.
          </p>
        </div>
      </div>
      <div className="btn-container" data-aos="fade-up">
        {/* <button className="hand-btn rounded-full text-white mt-7 uncompromiseButton">
              Read More
            </button> */}
        <img
          src={checkImg1(colorMe)}
          alt=""
          className=" scale-110 md:scale-90"
        />
      </div>
    </div>
  )
}

export default HandPicked
