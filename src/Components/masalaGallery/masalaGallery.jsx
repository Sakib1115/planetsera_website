import { swiffyslider } from "swiffy-slider"
import "./MasalaGallery.css"
window.swiffyslider = swiffyslider
window.addEventListener("load", () => {
  window.swiffyslider.init()
})
import masala1 from "@assets/images/ourproduct-12.png"
import masala2 from "@assets/images/ourproduct-1.png"
import masala3 from "@assets/images/ourproduct-2.png"
import masala4 from "@assets/images/ourproduct-3.png"
import masala5 from "@assets/images/ourproduct-4.png"
import masala6 from "@assets/images/ourproduct-5.png"
const MasalaGallery = () => {
  return (
    <>
      <div class="swiffy-slider slider-item-show2 slider-item-reveal slider-nav-outside slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-fadein slider-item-first-visible containerBorder  slider-nav-autoplay slider-nav-autopause">
        <ul class="slider-container py-24">
          {/* <li class="slide-visible">
          <div class="h-100 relative">
            <div class="ratio ratio-16x9">
              <img
                loading="lazy"
                src={masala1}
                class="card-img-top"
                alt="..."
              />
            </div>
            <h1 className="text-center invention-text">Red Chilli Powder</h1>
            <div className="inventionBorder"></div>
          </div>
        </li> */}
          <li class="slide-visible">
            <div class="h-100 relative">
              <div class="ratio ratio-16x9">
                <img
                  loading="lazy"
                  src={masala2}
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <h1 className="text-center invention-text">Sabji Masala</h1>
              <div className="inventionBorder"></div>
            </div>
          </li>
          <li class="slide-visible">
            <div class="h-100 relative">
              <div class="ratio ratio-16x9">
                <img
                  loading="lazy"
                  src={masala5}
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <h1 className="text-center invention-text">Garam Masala</h1>
              <div className="inventionBorder"></div>
            </div>
          </li>

          <li class="slide-visible">
            <div class="h-100 relative">
              <div class="ratio ratio-16x9">
                <img
                  loading="lazy"
                  src={masala3}
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <h1 className="text-center invention-text">Chat Masala</h1>
              <div className="inventionBorder"></div>
            </div>
          </li>
          <li class="slide-visible">
            <div class="h-100 relative">
              <div class="ratio ratio-16x9">
                <img
                  loading="lazy"
                  src={masala4}
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <h1 className="text-center invention-text">Amchur Powder</h1>
            </div>
          </li>
          {/* <li class="slide-visible">    
          <div class="h-100">
            <div class="ratio ratio-16x9">
              <img
                loading="lazy"
                src={masala6}
                class="card-img-top"
                alt="..."
              />
            </div>
            <h1 className="text-center invention-text">
              Black Pepper Powder
            </h1>
            <div className="inventionLeftBorder"></div>
          </div>
        </li> */}
        </ul>
        <div class="slider-indicators pt-20 pb-12">
          <button class="active" aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
        </div>
      </div>
    </>
  )
}
export default MasalaGallery
