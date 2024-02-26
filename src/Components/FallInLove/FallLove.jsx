import "./FallLove.css"
import masala1 from "@assets/images/falllove-1.png"
import masala2 from "@assets/images/falllove-2.png"
import solutionBg from "@assets/images/desireAb.png"

const FallLove = () => {
  return (
    <>
      <img loading="lazy" src={solutionBg} style={{ margin: "50px 0" }} />

      <div className="basis-4/12 flex flex-col justify-center m-auto">
        <h1 className="falllove-heading">
          "Get fit with flavor - PlanetsEra spices bring a healthy kick to your
          meals."
        </h1>
        <div className="fallLoveLine"></div>
      </div>
      <div className="container fallloveBackground mt-20 px-6">
        <div className="basis-12/12 flex justify-between">
          <div className="basis-4/12">
            <img loading="lazy" src={masala1} className="myMenuImage" />
          </div>

          <div className="basis-4/12 myMenuImage-2 ">
            <img loading="lazy" src={masala2} className="myMenuImage" />
          </div>
        </div>
      </div>
      <div className="container lovePad">
        <div className="basis-12/12 flex">
          <div className="basis-3/12">
            <a href="#blendedSpices">
              <button type="button" className="fallloveButton mx-auto block">
                Blended
              </button>
            </a>
          </div>
          <div className="basis-6/12"></div>
          <div className="basis-3/12">
            <a href="#groundSpices">
              <button
                type="button"
                className="fallloveButton mx-auto block mt-3"
              >
                Pure
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FallLove
