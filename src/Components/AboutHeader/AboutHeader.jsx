import React from "react"
import "./AboutHeader.css"
import NavItem from "@Components/Navigation/NavItem"
import NavigationMobile from "@Components/MobileNavigation/NavigationMobile"
const AboutHeader = () => {
  return (
    <>
      <section class="relative bg-[url(@assets/images/aboutheaderbg.png)] bg-cover bg-center bg-no-repeat mb-52">
        <NavItem page={"about"} />
        <NavigationMobile />

        <div class="absolute inset-0 bg-white/7"></div>

        <div class="relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-2xl sm:text-left">
            <h1 class="aboutH-heading">
              Establishing the bond of love and trust through PlanetsEra spices
              {/* <strong class="block font-extrabold text-rose-700">
                Forever Home.
              </strong> */}
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed aboutT-text">
              Uncovering Our Unique Qualities: Discover More About Who We Are
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#discover"
                class="more-button px-12 py-3 text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutHeader
