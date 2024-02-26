import "./GallerySection.css"

import GalleryImageOne from "./GalleryImageOne"
import GalleryImageTwo from "./GalleryImageTwo"
import GalleryImageThree from "./GalleryImageThree"
import GalleryImageFour from "./GalleryImageFour"
import GalleryImageFive from "./GalleryImageFive"
import GalleryImageSix from "./GalleryImageSix"
import RecycleInfo from "@assets/images/recycleInfo.png"
import VariousSpices from "@assets/images/various-spices.png"

const GallerySection = () => {
  return (
    <div className="container  px-6">
      <div className="recycleImg">
        <img src={RecycleInfo}/>
      </div>
      <div className="basis-12/12 flex justify-evenly w-full ">
        <div className="">
          <div class="content">
            <a >
              <GalleryImageTwo />
            </a>
          </div>
          <div class="content">
            <a >
              <GalleryImageThree />
            </a>
          </div>
        </div>

        <div className="">
          <div class="content">
            <a >
              <GalleryImageFive />
            </a>
          </div>

          <div class="content">
            <a >
              <GalleryImageSix />
            </a>
          </div>
        </div>
      </div>
      <div className="variousSpicesImg">
        <img src={VariousSpices}/>
      </div>
    </div>
  )
}

export default GallerySection
