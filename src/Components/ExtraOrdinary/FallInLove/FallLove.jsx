import "./FallLove.css"
import masala1 from "@assets/images/falllove-1.png"
import masala2 from "@assets/images/falllove-2.png"
const FallLove = () => {
  return (
    <>
      <div className="container fallloveBackground mt-40 px-6">
        <div className="basis-12/12 flex">
          <div className="basis-4/12">
            <img loading="lazy" src={masala1} className="myMenuImage" />
          </div>

          <div className="basis-4/12 flex flex-col justify-center">
            <p className="falllove-text">OUR MENU</p>
            <h1 className="falllove-heading">
              Menu That Always Makes You Fall In Love
            </h1>
          </div>
          <div className="basis-4/12 myMenuImage-2 ">
            <img loading="lazy" src={masala2} className="myMenuImage" />
          </div>
        </div>
      </div>
      <div className="container lovePad">
        <div className="basis-12/12 flex">
          <div className="basis-3/12">
            <button type="button" className="fallloveButton mx-auto block">
              Blended
            </button>
          </div>
          <div className="basis-6/12"></div>
          <div className="basis-3/12">
            <button type="button" className="fallloveButton mx-auto block mt-3">
              Pure
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FallLove
