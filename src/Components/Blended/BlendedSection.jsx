import "./BlendedSection.css"
import masala1 from "@assets/images/blended-1.png"
import masala2 from "@assets/images/blended-2.png"
import masala3 from "@assets/images/blended-3.png"
import masala4 from "@assets/images/blended-4.png"
import masala5 from "@assets/images/blended-5.png"
import masala6 from "@assets/images/menu.png"
import BlendedSpicesBg from "@assets/images/BlendedSpicesBg.png"

const BlendedSection = () => {
  return (
    <div className="container relative" id="blendedSpices">
      <div className="basis-12/12 blendedbg">
        <img src={BlendedSpicesBg}/>
      </div>
      <div className="basis-12/12">
        <div className="basis-1/12"></div>
        <div className="basis-10/12">
          <p className="blended-text">
          Craving for restaurant-like food at home?
          <br/>
          Bring home the multi-cuisine spice blends by PlanetsEra to get amazing restaurant-like food at home along with the ease of hassle free cooking.
          </p>
        </div>
        <div className="basis-1/12"></div>
      </div>

      <div class="container grid grid-cols-3 gap-2 mx-auto blended">
        <div class="w-full rounded spaceBlendedImg blendedImgBox">
          <img loading="lazy" src={masala1} className="mx-auto" />
          <h2 className="blended-text2">Garam Masala</h2>
          {/* <br /> */}
          <p className="blended-text3">(50gm, 100gm)</p>
          <p className="blended-text4">Zipper Pouch</p>
        </div>
        <div class="w-full rounded spaceBlendedImg blendedImgBox">
          <img loading="lazy" src={masala2} className="mx-auto" />
          <h2 className="delight-text2">Jaljeera Masala</h2>
          {/* <br /> */}
          <p className="blended-text3">(50gm)</p>
          <p className="blended-text4">Zipper Pouch</p>
        </div>
        <div class="w-full rounded spaceBlendedImg blendedImgBox">
          <img loading="lazy" src={masala3} className="mx-auto" />
          <h2 className="delight-text2">Meat Masala</h2>
          {/* <br /> */}
          <p className="blended-text3">(50gm, 100gm)</p>
          <p className="blended-text4">Zipper Pouch</p>
        </div>
        <div class="w-full rounded mt-10 spaceBlendedImg blendedImgBox">
          <img loading="lazy" src={masala4} className="mx-auto" />
          <h2 className="delight-text2">Chaat Masala</h2>
          {/* <br /> */}
          <p className="blended-text3">(50gm, 100gm)</p>
          <p className="blended-text4">Zipper Pouch</p>
        </div>
        <div class="w-full rounded mt-10 blendedImgBox">
          <img loading="lazy" src={masala5} className="mx-auto" />
          <h2 className="delight-text2">Sabji Masala</h2>
          {/* <br /> */}
          <p className="blended-text3">(50gm, 100gm)</p>
          <p className="blended-text4">Zipper Pouch</p>
        </div>
      </div>

      <div className="basis-12/12 absolute blendedMenuImg">
        <img loading="lazy" src={masala6} />
      </div>
    </div>
  )
}

export default BlendedSection
