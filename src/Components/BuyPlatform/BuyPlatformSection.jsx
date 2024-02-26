import "./BuyPlatformStyle.css"
import BuyPlatformImg1 from "@assets/images/BuyPlatformImg1.png"
import BuyPlatformImg2 from "@assets/images/BuyPlatformImg2.png"
import BuyPlatformImg3 from "@assets/images/BuyPlatformImg3.png"
import solutionBg from "@assets/images/desireAb.png"

const BuyPlatformSection = () => {
  return (
    <>
      <div className="buyContainer">
        <div className="buyImg">
            <img src={BuyPlatformImg1}/>
        </div>
        <div className="buyImg">
            <img src={BuyPlatformImg2}/>
        </div>
        <div className="buyImg">
            <img src={BuyPlatformImg3}/>
        </div>
      </div>
    </>
  )
}

export default BuyPlatformSection
