import HeaderTwo from "@Components/HeaderTwo"
import ProductSection from "@Components/ProductSection/ProductSection"
import InboxSection from "@Components/InboxSection/inboxSection"
import GallerySection from "@Components/Gallery/GallerySection"
import ExtraOrdinarySection from "@Components/ExtraOrdinary/ExtraOrdinarySection"
import SpicySection from "@Components/Spicy/SpicySection"
import OurProduct from "@Components/OurProduct/OurProduct"
import RecipeMethod from "@Components/RecipeMethod/RecipeMethod"
import MasalaGallery from "@Components/MasalaGallery/MasalaGallery"
import FallLove from "@Components/FallInLove/FallLove"
import GalleryMenu from "@Components/GalleryMenu/GalleryMenu"
import InstagramRecipe from "@Components/InstagramRecipe/InstagramRecipe"
import SliderProduct from "@Components/Slider/SliderProduct"
import SuccessSection from "@Components/ScreteSuccess/SuccessSection"
import DelightSection from "@Components/HomeDelight/DelightSection"
import BlendedSection from "@Components/Blended/BlendedSection"
import Footer from "@Components/Footer/Footer"
import ProductInfoSection from "@Components/ProductInfo/ProductInfoSection"
import SpicesInfo from "@Components/SpicesInfo/SpicesInfoSection"
import BuyPlatform from "@Components/BuyPlatform/BuyPlatformSection"

const Products = () => {
  return (
    <>
      <HeaderTwo />
      <GalleryMenu />
      <MasalaGallery />
      {/* <SuccessSection /> */}
      <SpicySection />
      <ExtraOrdinarySection />
      <FallLove />
      <ProductInfoSection />
      {/* <SliderProduct /> */}
      <ProductSection />
      <SpicesInfo />
      {/* <BuyPlatform /> */}
      <DelightSection />
      <BlendedSection />
      <OurProduct />
      <GallerySection />
      {/* <RecipeMethod /> */}
      <InstagramRecipe />
      {/* <InboxSection /> */}
      <Footer page={"product"} />
    </>
  )
}

export default Products
