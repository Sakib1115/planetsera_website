import "./HomeDelight.css"
import masala1 from "@assets/images/delight-1.png"
import masala2 from "@assets/images/delight-2.png"
import masala3 from "@assets/images/delight-3.png"
import masala4 from "@assets/images/delight-4.png"
import masala5 from "@assets/images/delight-5.png"
import masala6 from "@assets/images/menu.png"
import DelightBg from "@assets/images/DelightBg.png"
const DelightSection = () => {
  return (
    <div className="container relative">
      
      <div className="basis-12/12 delightbg">
        <img src={DelightBg} />
      </div>

      <div className="basis-12/12">
        <div className="basis-1/12"></div>
        <div className="basis-10/12">
          <p className="blended-text">
          Gratify your inner child's desire to enjoy tangy and flavorful spice blends by PlanetsEra
          </p>
        </div>
        <div className="basis-1/12"></div>
      </div>

      <div class="container grid grid-cols-3 gap-2 mx-auto delightContainer">
        <div class="w-full rounded spaceContainer widthMob">
          <img loading="lazy" src={masala1} className="mx-auto pouch-size" />
          <h2 className="delight-text2">Sabji Masala</h2>

          <p className="delight-text3">(Pouch)</p>
        </div>
        <div class="w-full rounded spaceContainer widthMob">
          <img loading="lazy" src={masala2} className="mx-auto pouch-size" />
          <h2 className="delight-text2">Jaljeera Masala</h2>

          <p className="delight-text3">(Pouch)</p>
        </div>
        <div class="w-full rounded spaceContainer widthMob">
          <img loading="lazy" src={masala3} className="mx-auto pouch-size" />
          <h2 className="delight-text2">Garam Masala</h2>

          <p className="delight-text3">(Pouch)</p>
        </div>
        <div class="w-full rounded widthMob2">
          <img loading="lazy" src={masala4} className="mx-auto pouch-size1" />
          <h2 className="delight-text2">Chat Masala</h2>

          <p className="delight-text3">(Pouch)</p>
        </div>
        <div class="w-full rounded widthMob2">
          <img loading="lazy" src={masala5}
            className="mx-auto pouch-size1"
            style={{ marginLeft: "50px" }}
          />
          <h2 className="delight-text2">Meat Masala</h2>

          <p className="delight-text3">(Pouch)</p>
        </div>
      </div>

      <div className="basis-12/12 absolute blendedMenuImg">
        <img loading="lazy" src={masala6} />
      </div>
    </div>
  )
}

export default DelightSection
