import image from "@assets/Headerimage.png"
import frame from "@assets/Frame.png"
import NavigationMobile from "@Components/MobileNavigation/NavigationMobile"
import "./ContactUsHeader.css"
import NavItem from "@Components/Navigation/NavItem"
const ContactUsHeader = () => {
  return (
    <>
      <div className="navMobile ">
        <NavigationMobile />
      </div>
      {<NavItem page={"contactUs"} />}
      <div
        className="md:h-[84vh] h-[22vh] bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="basis-12/12 flex justify-end ml-auto items-baseline detailContainer "></div>

        <div className="text-white text-center py-12 md:py-[20vh]  md:mx-4 mx-[10vh] md:text-7xl text-xs  body-font font-semibold  contactText 2xl:text-7xl ">
          Spice up your life - contact us with
          <br />
          any inquiries or requests.
        </div>
        <div className="md:mt-[-20vh] mt-[-9vh] md:p-24 p-8 2xl:mt-[-13vh] 2xl:mx-24">
          <img src={frame} />
          <p className="text-center md:text-6xl  mt-[-5vh] md:mt-[-19vh] md:tracking-[18px] tracking-[4px] font-light 2xl:mt-[-18vh] 2xl:mx-[20vh] ">
            Contact Us
          </p>
        </div>
      </div>
    </>
  )
}
export default ContactUsHeader
