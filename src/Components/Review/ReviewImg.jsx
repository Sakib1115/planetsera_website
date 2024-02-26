import "./review.css"
import { useSelector } from "react-redux"
import experience1 from "@assets/reviewRed.png"
import experience2 from "@assets/reviewyellow.png"
import experience3 from "@assets/reviewGreen.png"
const ReviewImg = () => {
  const colorMe = useSelector((state) => state.colorUs.color)
  const changeBg = (colorMe) => {
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
    <div className="review-img w-[47%] flex flex-col justify-center mt-5">
      <div style={{ backgroundColor: colorMe }} className="small-box1"></div>
      <div className="spices5"></div>
      <div
        style={{ backgroundImage: `url(${changeBg(colorMe)})` }}
        className="spices6"
      ></div>
      <div className="order absolute z-50 bg-gray-50 rounded-3xl border rotating-border rotating-border--google mt-20">
        <div className="order-info w-[85%] mx-auto my-3">
          <div>
            <p className="order-desc mt-6">
              Discover new flavours and elevate your dishes with PlanetsEra
              Spices - order now to start cooking with the best
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewImg
