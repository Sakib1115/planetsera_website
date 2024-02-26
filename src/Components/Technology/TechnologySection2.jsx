import React from "react"
import machines from "@assets/images/machine.png"
import { useSelector } from "react-redux"
import machines2 from "@assets/images/machine2.png"
import machines3 from "@assets/images/machine3.png"

const TechnologySection2 = () => {
  const colorMe = useSelector((state) => state.colorUs.color)
  const checkbg = (colorMe) => {
    if (colorMe === "#FF4F4F") {
      return machines
    }
    if (colorMe === "#ffde39") {
      return machines2
    }
    if (colorMe === "#2dc83c") {
      return machines3
    }
  }

  return (
    <div className="basis-12/12 bussiness-Flex">
      {/* <div data-aos="fade-right" data-aos-duration="1000"> */}
      <div
        className="basis-5/12 bussiness-Item pl-141"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1
          style={{ color: colorMe }}
          className="bussiness-head-mobile-technology my-3"
        >
          Quality Preservation Using Latest Technology
        </h1>
        <div className="technologyLine"></div>

        <p className="taste-text mb-3 md:text-2xl">
          To maintain the quality and originality of the spices, we make sure
          that the spices are stored and maintained at lower temperatures
        </p>

        <p className="taste-text mb-3 md:text-2xl">
          Contemporary spice industries, use hammer mills that enable the
          temperature to rise upto 120°C , which causes the spices to lose their
          pungency and flavors.
        </p>
      </div>
      {/* </div> */}
      {/* <div className="basis-1/12"></div> */}
      <div
        className="basis-7/12 relative bussiness-background"
        data-aos="fade-down-left"
      >
        <div data-aos="fade-up-left">
          <img
            src={checkbg(colorMe)}
            className="float-right bussiness-image w-max-full"
          />
        </div>
      </div>
    </div>
  )
}

export default TechnologySection2
