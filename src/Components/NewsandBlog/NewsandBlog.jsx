import Cards from "./Cards"
import Cards2 from "./Cards2"
import "./newsandblog.css"
import NewsInfo from "./NewsInfo"
import Spoon from "@assets/spoon.png"
import transbg from "@assets/transbg.png"
import { NewsData } from "./Newsdata"
import masala6 from "@assets/customerabsolute.png"
const newsCards = NewsData.map((item) => {
  return (
    <div className="">
      <Cards item={item} />
    </div>
  )
})
const NewsandBlog = () => {
  return (
    <div className="newsandblog mx-auto relative">
      <NewsInfo />
      <div className="flex cards w-[95%] justify-around flex-wrap mt-20 mx-auto">
        {newsCards}
      </div>

      <img loading="lazy" src={masala6} />
    </div>
  )
}

export default NewsandBlog
