import FoodySection1 from "./FoodySection1"
import FoodySection2 from "./FoodySection2"
import { useSelector } from "react-redux"
import bg1 from "@assets/images/background-1.png"
import bg2 from "@assets/images/background-2.png"
import bg3 from "@assets/images/background-3.png"

function FoodySection() {
  const colorMe = useSelector((state) => state.colorUs.color)
  const checkbg = (colorMe) => {
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
    <div class="container flex mt-40">
      <div
        className="basis-12/12 foodyBackground bussiness-Flex bg-no-repeat"
        style={{ backgroundImage: `url(${checkbg(colorMe)})` }}
        data-aos="slide-right"
        data-aos-duration="1000"
      >
        <FoodySection1 />
        <div class="col-1"></div>
        <FoodySection2 />
      </div>
    </div>
  )
}
export default FoodySection
