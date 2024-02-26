import experience1 from "@assets/extraTesteRed.png"
import experience2 from "@assets/extraTesteYellow.png"
import experience3 from "@assets/extraTesteGreen.png"
import { useSelector } from "react-redux"

const ExperienceSection3 = () => {
  const colorMe = useSelector((state) => state.colorUs.color)
  const checkImg1 = (colorMe) => {
    if (colorMe === "#FF4F4F") {
      return experience1
    }
    if (colorMe === "#ffde39") {
      return experience2
    }
    if (colorMe === "#2dc83c") {
      return experience3
    }
  }
  return (
    <>
      <div className="md:px-8 hover:scale-105 transition-transform">
        <img src={checkImg1(colorMe)} />
      </div>
    </>
  )
}

export default ExperienceSection3
