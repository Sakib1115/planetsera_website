import { swiffyslider } from "swiffy-slider";
import "./CompanySection.css";

window.swiffyslider = swiffyslider;
window.addEventListener("load", () => {
  window.swiffyslider.init();
});
import comOne from "@assets/images/dig-1.png";
import comTwo from "@assets/images/dig-2.png";
import comThree from "@assets/images/dig-3.png";
import comFour from "@assets/images/dig-4.png";
import comFive from "@assets/images/dig-5.png";
import comSix from "@assets/images/dig-6.png";
import comSeven from "@assets/images/masala-spoon.png";

const CompanySection = () => {
  return (
    <>
      <div className="container mag relative">
        {/* <img src={comSeven} /> */}
        <div class="basis-12/12 relative">
          <h1 class="digital-heading mb-5">Digital Gallery</h1>
          <div class="digital-line"></div>
        </div>
      </div>
      <div
        class="swiffy-slider slider-item-ratio slider-item-ratio-16x9 slider-nav-animation slider-nav-animation-fadein slider-item-first-visible flex justify-center"
        id="swiffy-animation"
      >
        <ul class="slider-container mycontain" id="container1">
          <li id="slide1" class="slide-visible">
            <img src={comOne} alt="..." loading="lazy" />
          </li>
          <li id="slide2" class="">
            <img src={comTwo} alt="..." loading="lazy" />
          </li>
          <li id="slide3">
            <img src={comThree} alt="..." loading="lazy" />
          </li>
          <li id="slide4">
            <img src={comFour} alt="..." loading="lazy" />
          </li>
          <li id="slide5">
            <img src={comFive} alt="..." loading="lazy" />
          </li>
          <li id="slide5">
            <img src={comSix} alt="..." loading="lazy" />
          </li>
        </ul>
        <div className="myArrow">
          <button
            type="button"
            class="slider-nav"
            aria-label="Go to previous"
          ></button>
        </div>
        <div className="myArrow-1">
          <button
            type="button"
            class="slider-nav slider-nav-next"
            aria-label="Go to next"
          ></button>
        </div>

        <div class="slider-indicators">
          <button aria-label="Go to slide" class="active"></button>
          <button aria-label="Go to slide" class=""></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
        </div>
      </div>
      <div className="container">
        <div className="basis-12/12 flex justify-around">
          <div className="basis-1/12"></div>
          <div className="basis">
            <img src={comOne} alt="..." loading="lazy" />
          </div>
          <div className="basis">
            <img src={comTwo} alt="..." loading="lazy" />
          </div>
          <div className="basis">
            <img src={comThree} alt="..." loading="lazy" />
          </div>

          <div className="basis-1/12"></div>
        </div>
        <div className="basis-12/12 mt-5 flex justify-around">
          <div className="basis-1/12"></div>
          <div className="basis">
            <img src={comFour} alt="..." loading="lazy" />
          </div>
          <div className="basis">
            <img src={comFive} alt="..." loading="lazy" />
          </div>
          <div className="basis">
            <img src={comSix} alt="..." loading="lazy" />
          </div>

          <div className="basis-1/12"></div>
        </div>
      </div>
    </>
  );
};

export default CompanySection;
