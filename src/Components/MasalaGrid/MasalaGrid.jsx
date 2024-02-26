import bg1 from "@assets/images/img-1.png"
import bg2 from "@assets/images/img-2.png"
import bg5 from "@assets/images/img-5.png"
import bg4 from "@assets/images/img-4.png"
import bg8 from "@assets/images/img-8.png"
import bg6 from "@assets/images/img-6.png"
import bg99 from "@assets/images/masalaAbsolute.png"

import masalaBackground from "@assets/images/masalabg.png"
// import { MasalaGridData } from "./MasalaGridData";
import Our from "./MasalaGridData"
import { useSelector } from "react-redux"

function MasalaGrid() {
  const colorMe = useSelector((state) => state.colorUs.color)

  return (
    <>
      <div className="container px-28 mx-auto lg:pt-22 mt-24">
        <div className="basis-12/12">
          <div data-aos="slide-right" data-aos-duration="1000">
            <h2
              style={{ color: colorMe }}
              className="text-center my-5 bussiness-head tracking-widest	"
            >
              Perfect spicy twist for every occasion
            </h2>
            <div className="masalaLine"></div>
          </div>
        </div>
        <div className="basis-12/12 masalaTab ml-4">
          {Our.map((items) => {
            return (
              <div className="basis-4/12 mb-20 text-center text-2xl font-extralight tracking-wider space-y-1">
                <img src={items.ourproductImage} className="w-full" />

                <h2 className="font-light text-3xl tracking-widest">
                  {items.productText}
                </h2>
                <p>{items.productGaram}</p>
                <p>Zipper Pouch</p>
              </div>
            )
          })}
        </div>

        {/* <div className="masalaMobile-flex" data-aos="slide-up">
          {MasalaGridData.map((item) => {
            return (
              <div className="m-[2%] masalaMobile-width">
                <div className="w-full p-1 md:p-2 relative flex justify-center items-center">
                  <div className="flex justify-center items-end absolute h-3">
                    <h3 className={item.gradientProperty1}>
                      {item.masalaName}
                    </h3>
                  </div>
                  <img src={item.masalaImg} className="gra-img" />
                </div>
              </div>
            );
          })}
          <img src={masalaBackground} className="masala-background" />
        </div> */}
        <div className="basis-12/12 flex my-10">
          <div className="basis-5/12"></div>
          <div className="basis-2/12 flex justify-center items-center">
            {/* <a
              style={{ backgroundColor: colorMe, outline: "1px solid white" }}
              href="#"
              className="masala-button mx-auto flex justify-center items-center btn-masala"
            >
              See All
            </a> */}
          </div>
          <div className="basis-5/12"></div>
        </div>
      </div>
      <img src={bg99} />
    </>
  )
}
export default MasalaGrid
