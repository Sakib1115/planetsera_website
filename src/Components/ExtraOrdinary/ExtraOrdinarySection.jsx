import "./ExtraOrdinarySection.css"
import ordinary1 from "@assets/images/ordinary-1.png"
import ordinary2 from "@assets/images/ordinary-2.png"
import ordinary3 from "@assets/images/ordinary-3.png"
import ordinary4 from "@assets/images/ordinary-4.png"
// import ordinary5 from "@assets/images/ordinary-5.png";

const ExtraOrdinarySection = () => {
  return (
    <div className="container mt-60 px-6 ordinaryConatiner">
      <div className="basis-12/12 flex justify-evenly w-full">
        <div className="">
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 photo">
              <img loading="lazy" src={ordinary1} className="" />
            </div>
            <div className="basis-12/12 ordinary-alignment">
              <h2 class="ordinary-text">Guaranteed Freshness</h2>
            </div>
          </div>
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 photo">
              <img loading="lazy" src={ordinary2} className="" />
            </div>
            <div className="basis-12/12 ordinary-alignment2">
              <h2 class="ordinary-text">Premium Quality</h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 ordinary-second photo">
              <img loading="lazy" src={ordinary3} className="" />
            </div>
            <div className="basis-12/12 ordinary-alignment2">
              <h2 class="ordinary-text">Hand Selected and Pure</h2>
            </div>
          </div>
          <div className="basis-6/12 relative flex justify-center">
            <div className="basis-12/12 ordinary-three photo">
              <img loading="lazy" src={ordinary4} className="ordinary-img4" />
            </div>
            <div className="basis-12/12 ordinary-alignment4">
              <h2 class="ordinary-text">Organically and Handpicked</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtraOrdinarySection
