import masala2 from "@assets/blogabsolute.png"
import { useSelector } from "react-redux"

const NewsInfo = () => {
  const colorMe = useSelector((state) => state.colorUs.color)

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img loading="lazy" src={masala2} className="blogTab" />
      <div className="basis-12/12 flex">
        <div className="basis-1/12"></div>
        <div className="basis-10/12">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h1
              style={{ color: colorMe }}
              className="heading text-center tracking-widest"
            >
              Latest News and Blog
            </h1>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="blog-para mt-4 text-center text-lg md:text-4xl ">
              Get more information on the how our spices give desirable taste
              enriched with authenticity in flavor. PlanetsEra Spices are
              handpicked for quality to ensure that each product of ours is
              packed with the love of nature.
            </p>
          </div>
        </div>
        <div className="basis-1/12"></div>
      </div>
    </div>
  )
}

export default NewsInfo
