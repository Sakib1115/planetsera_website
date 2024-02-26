import { useSelector } from "react-redux"

const FoodySection1 = () => {
  const colorMe = useSelector((state) => state.colorUs.color)

  return (
    <div className="basis-5/12 p-14">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <h3 className="foodyHeading mt-28 mb-7 text-5xl text-white">
          Spices - that are true to their taste
        </h3>
      </div>
      <div data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <p style={{ fontSize: "1.2rem" }} className="mb-3">
          With no artificial preservatives, we ensure that Planetsera spices are
          produced with the essence of nature and are true to their taste.
          Caring for your health and requirements, we utilize the most advanced
          technologies for the production of these spices, so that we do not
          keep you waiting to eat your favourite dishes served with the homely
          touch of the finely ground spices.
        </p>
      </div>
      <div className="basis-4/12"></div>
      <div class="clearfix"></div>
      {/*  <a
        style={{ color: colorMe }}
        href="#"
        className="explore-foody btn2 flex bg-white p-4 justify-center items-center my-3"
      >
        Read More
      </a> */}
    </div>
  )
}

export default FoodySection1
