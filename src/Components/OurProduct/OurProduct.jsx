import "./OurProduct.css"
import Our from "./OurProductData"
import masala2 from "@assets/images/masalabg.png"
import masala3 from "@assets/images/menu.png"
import GroundSpicesBg from "@assets/images/GroundSpicesBg.png"

const OurProduct = () => {
  return (
    <div className="container relative mt-10 containerBorder" id="groundSpices">
      <div className="basis-12/12 absolute ourbg">
        {/* <img loading="lazy" src={masala2} /> */}
      </div>
      <div className="basis-12/12 groundbg">
        <img src={GroundSpicesBg} />
      </div>
      <div className="basis-12/12 flex">
        <div className="basis-1/12"></div>
        <div className="basis-10/12">
          <p className="grounded-text">
            Every spice carries a story and expresses the cultural richness of
            every region. With PlanetsEra Spices, we preserve the richness and
            authenticity of our Indian cuisine.
          </p>
        </div>
        <div className="basis-1/12"></div>
      </div>
      <div className="basis-12/12 flex flex-wrap ml-4 groundedContainer">
        {Our.map((items) => {
          return (
            <div className="basis-4/12 mb-20 groundedImg">
              <img
                loading="lazy"
                src={items.masalaImg}
                style={{ width: "fit-content", height: "fit-content" }}
              />

              <h2 className="grounded-text5">{items.masalaName}</h2>
              <p className="grounded-text3">{items.masalaGaram}</p>
              <p className="grounded-text4">Zipper Pouch</p>
            </div>
          )
        })}
      </div>
      <div className="basis-12/12 absolute myMenu">
        <img loading="lazy" src={masala3} />
      </div>
    </div>
  )
}

export default OurProduct
