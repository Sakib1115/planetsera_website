import "./SliderProduct.css"
import { Carousel } from "3d-react-carousal"
import prod1 from "@assets/images/ourproduct-1.png"
import prod2 from "@assets/images/ourproduct-2.png"
import prod3 from "@assets/images/ourproduct-3.png"
import prod4 from "@assets/images/ourproduct-4.png"
import prod5 from "@assets/images/ourproduct-4.png"

let slides = [
  <img loading="lazy" src={prod1} alt="1" />,
  <img loading="lazy" src={prod2} alt="2" />,
  <img loading="lazy" src={prod3} alt="3" />,
  <img loading="lazy" src={prod4} alt="3" />,
  <img loading="lazy" src={prod5} alt="3" />,
]

const SliderProduct = () => {
  return <Carousel slides={slides} autoplay={false} interval={5000} />
}

export default SliderProduct
