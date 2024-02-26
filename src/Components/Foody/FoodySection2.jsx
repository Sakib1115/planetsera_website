import product1 from "@assets/spiceTasteGreen1.png"
import product2 from "@assets/spiceTasteGreen2.png"
import product3 from "@assets/spiceTasteGreen3.png"
import product4 from "@assets/spiceTasteYellow1.png"
import product5 from "@assets/spiceTasteYellow2.png"
import product6 from "@assets/spiceTasteYellow3.png"
import product7 from "@assets/spiceTasteRed1.png"
import product8 from "@assets/spiceTasteRed2.png"
import product9 from "@assets/spiceTasteRed3.png"
import { useSelector } from "react-redux"

const FoodySection2 = () => {
  const colorMe = useSelector((state) => state.colorUs.color)
  const checkImg1 = (colorMe) => {
    if (colorMe === "#FF4F4F") {
      return product7
    }
    if (colorMe === "#ffde39") {
      return product4
    }
    if (colorMe === "#2dc83c") {
      return product1
    }
  }
  const checkImg2 = (colorMe) => {
    if (colorMe === "#FF4F4F") {
      return product8
    }
    if (colorMe === "#ffde39") {
      return product5
    }
    if (colorMe === "#2dc83c") {
      return product2
    }
  }
  const checkImg3 = (colorMe) => {
    if (colorMe === "#FF4F4F") {
      return product9
    }
    if (colorMe === "#ffde39") {
      return product6
    }
    if (colorMe === "#2dc83c") {
      return product3
    }
  }
  return (
    <div className="basis-6/12 self-center pr-5">
      <div className="basis-12/12 pb-2.5">
        <img
          loading="lazy"
          src={checkImg1(colorMe)}
          class="mx-w-full height-auto"
        />
      </div>
      <div
        className="basis-12/12 flex"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="basis-6/12">
          <img
            loading="lazy"
            src={checkImg2(colorMe)}
            class="mx-w-full height-auto"
          />
        </div>
        <div className="basis-6/12">
          <img
            loading="lazy"
            src={checkImg3(colorMe)}
            class="height-auto mx-w-full "
          />
        </div>
      </div>
    </div>
  )
}

export default FoodySection2
