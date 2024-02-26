import "./footer.css"
import Icons from "./Icons"
import SideBar from "./SideBar"
import FooterEnd from "./FooterEnd"
import Footerbg from "@assets/footerbg.jpeg"
import Footerbg1 from "@assets/footerbg.jpeg"
import Footerbg2 from "@assets/footerbg2.png"
import Footerbg3 from "@assets/footerbg3.png"

const Footer = ({ page }) => {
  function checktext(id) {
    if (id === "contactUs") {
      return "Make every meal memorable with PlanetsEra spices"
    }
    if (id === "product") {
      return "Make every Meal memorable with PlanersEra spices"
    }
    if (id === "home") {
      return "Elevate your meals with PlanetsEra's flavourful blends"
    }
    if (id === "about") {
      return "Make every meal memorable with PlanetsEra spices"
    }
  }
  function checkpage(id) {
    if (id === "contactUs") {
      return Footerbg
    }
    if (id === "product") {
      return Footerbg3
    }
    if (id === "home") {
      return Footerbg2
    } else {
      return Footerbg1
    }
  }
  //console.log(page)
  return (
    <>
      <div
        style={{ backgroundImage: `url(${checkpage(page)})` }}
        className="main-container lg:w-full mt-8 imaged bg-cover"
      >
        <div className="footer flex bg-center bg-cover">
          <div className="basis-9/12 flex items-center">
            <div className="basis-12/12 flex">
              <div className="basis-1/12"></div>
              <div className="basis-10/12">
                <h1
                  className="diverse-text text-center p-8 text-2xl md:text-5xl md:p-2s "
                  style={{ fontFamily: "Original Surfer" }}
                >
                  {checktext(page)}
                </h1>
              </div>
              <div className="basis-1/12"></div>
            </div>
          </div>
          <div className="basis-3/12">
            <div className="lg:basis-3/12 social lg:h-48 bg-[#1E1E1E] flex flex-col justify-center lg:items-start">
              <p className="text-white lg:text-xl lg:ml-10 social-text">
                Follow Us
              </p>
              <Icons />
            </div>
            <SideBar />
          </div>
          {/* <div class="lg:basis-9/12 subscibe lg:h-48 flex justify-around items-center">
            <div className="subscribe-text mr-8">
              <h2 className="lg:text-4xl text-white font-bold">
                Subscribe <br />
                To <br />
                Newsletter
              </h2>
            </div>
            <div className="join">
              <input
                type="text"
                className="input px-3"
                placeholder="Enter Your Email"
              />
              <button className="footer-btn btn3">Subscribe</button>
            </div>
          </div> */}
          {/* <div className="lg:basis-3/12 social lg:h-48 bg-[#1E1E1E] flex flex-col justify-center lg:items-start">
            <p className="text-white lg:text-xl lg:ml-10 social-text">
              Social Media
            </p>
            <Icons />
          </div> */}
        </div>
        <></>
      </div>
      <FooterEnd />
    </>
  )
}

export default Footer
