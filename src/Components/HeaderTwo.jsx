import "./HeaderTwo.css"
import Logo from "./logo"
import SocialSection from "./SocialSection"
import PouchSection from "./PouchSection"
import bg from "@assets/images/HeroSlider.png"
import NavigationMobile from "./MobileNavigation/NavigationMobile"
import NavItem from "./Navigation/NavItem"
const HeaderTwo = () => {
  return (
    <>
      <NavItem page={"product"} />
      <div className="navMobile">
        <NavigationMobile />
      </div>

      <div className="image-box flex absolute z-10 w-full flex-wrap px-6 ">
        <div className="basis-2/12 flex justify-start detailContainer mt-14">
          {/* <Logo /> */}
        </div>
        <div className="basis-12/12 flex justify-end ml-auto items-baseline detailContainer"></div>

        <div className="container flex flex-wrap w-full mt-40">
          <div className="basis-12/12 w-full flex">
            <div className="basis-12/12">
            <h1 className="text-center tracking-[5px]  SecondPageHeading">
                Experience a burst of flavors with every sprinkle only with 
               <span className="font-thin"> PlanetsEra</span> premium spices
              </h1>

              <p className="SecondPageHeading-text mt-5 mx-48">
                Unlock the secrets of ancient spice blends and bring <br/>the
                timeless flavors of history into your kitchen
              </p>
            </div>
          </div>
          <div className="basis-12/12 flex w-full justify-center">
            <div className="basis-5/12"></div>
            <div className="basis-2/12 flex justify-center">
              <a href="#exploreSection">
                <button type="button" class="text-white SecondPagebutton tracking-[1px] btn2">
                  Explore more
                </button>
              </a>
            </div>
            <div className="basis-5/12"></div>
          </div>

          <div className="basis-12/12 flex w-full justify-around mt-5 ">
            <div className="basis-5/12"></div>
            <div className="basis-2/12 StarIcon flex justify-center tracking-[1px] pl-2">
              <i className="fa fa-star "></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="basis-5/12"></div>
          </div>
        </div>
        <PouchSection />
      </div>

      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="container flex hero-Image "
      ></div>
    </>
  )
}

export default HeaderTwo
