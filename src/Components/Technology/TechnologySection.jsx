import TechnologySection1 from "./TechnologySection1"
import TechnologySection2 from "./TechnologySection2"
import { useSelector } from "react-redux"
import manuabsolute from "@assets/images/manuabsolute.png"
import manuabsolute2 from "@assets/images/manuabsolute2.png"
import manuabsolute3 from "@assets/images/manuabsolute3.png"
function TechnologySection() {
  const colorMe = useSelector((state) => state.colorUs.color)
  const checkbg = (colorMe) => {
    if (colorMe === "#FF4F4F") {
      return manuabsolute
    }
    if (colorMe === "#ffde39") {
      return manuabsolute2
    }
    if (colorMe === "#2dc83c") {
      return manuabsolute3
    }
  }
  return (
    <>
      <div className="container relative">
        <TechnologySection1 />
        <TechnologySection2 />

        <img className=" manuAb " src={checkbg(colorMe)} />
      </div>
    </>
  )
}

export default TechnologySection
