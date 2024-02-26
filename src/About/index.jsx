import React from "react"
import QualitySection from "@Components/QualityManagement/QualitySection"
import StorySection from "@Components/HowtoStory/StorySection"
import TechnologyPeopleSection from "@Components/TechnologyPeople/TechnologyPeopleSection"
import AboutBannerSection from "@Components/AboutBanner/AboutBannerSection"
import WhyPlanetseraSection from "@Components/WhyPlanetsera/WhyPlanetseraSection"
import ProcessSection from "@Components/Process/ProcessSection"
import AdvanceSection from "@Components/AdvanceTechnology/AdvanceSection"
import DishSection from "@Components/Dish/DishSection"
import IngredientSection from "@Components/Ingredients/IngredientSection"
import PlanetseraSection from "@Components/PlanetseraMasala/PlanetseraSection"
import DiscoverSection from "@Components/Discover/DiscoverSection"
import DigitalGallery from "@Components/Digital/DigitalGallery"
import AboutHeader from "@Components/AboutHeader/AboutHeader"
import CompanySection from "@Components/CompanyGallery/CompanySection"
import Footer from "@Components/Footer/Footer"
const index = () => {
  return (
    <>
      <AboutHeader />
      <DiscoverSection />
      <DishSection />
      <DigitalGallery />
      <PlanetseraSection />
      <IngredientSection />
      <AdvanceSection />

      <ProcessSection />
      <WhyPlanetseraSection />
      <AboutBannerSection />
      <StorySection />
      <QualitySection />
      <TechnologyPeopleSection />
      <CompanySection />
      <Footer page="about" />
    </>
  )
}

export default index
