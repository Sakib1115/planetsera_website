import "./SuccessSection.css"
import masalaDetail1 from "@assets/images/success-3.png"
import masalaCircle1 from "@assets/images/ciricle-3.png"
import masalaDetail2 from "@assets/images/success-2.png"
import masalaCircle2 from "@assets/images/ciricle-2.png"
import masalaDetail3 from "@assets/images/success-3.png"
import masalaCircle3 from "@assets/images/ciricle-3.png"
import masala3 from "@assets/images/pizza.png"

const SuccessSection = () => {
  return (
    <section class="carousel" aria-label="Gallery">
      <ol class="carousel__viewport">
        {/* <li id="carousel__slide1" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper">
            <div className="basis-12/12 flex mt-40">
              <div className="basis-6/12">
                <div className="basis-12/12 flex">
                  <div className="basis-6/12">
                    <img
                      loading="lazy"
                      src={masalaDetail1}
                      className="success-img-1"
                    />
                  </div>
                  <div className="basis-6/12 success-alignment">
                    <img loading="lazy" src={masalaCircle1} className="success-img" />
                  </div>
                </div>
              </div>
              <div className="basis-5/12">
                <h1 className="success-heading">
                Spices with authentic Enhanced Flavour
                </h1>
                <p className="success-text mt-10">
                The Fiery spice blend of Red chilli Powder adds depth to your food. It makes your food incredibly flavorful and enjoyable to eat.
                </p>
                <a href="#" className="SuccessButton  block">
                  Learn More
                </a>
              </div>
              <div className="basis-1/12"></div>
            </div>
          </div>
        </li> */}

        <li id="carousel__slide2" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper">
            <div className="basis-12/12 flex mt-40">
              <div className="basis-6/12">
                <div className="basis-12/12 flex">
                  <div className="basis-6/12">
                    <img
                      loading="lazy"
                      src={masalaDetail2}
                      className="success-img-1"
                    />
                  </div>
                  <div className="basis-6/12 success-alignment">
                    <img
                      loading="lazy"
                      src={masalaCircle2}
                      className="success-img"
                    />
                  </div>
                </div>
              </div>
              <div className="basis-5/12">
                <h1 className="success-heading">
                  Enticing Aroma to Gratify your cooking experience{" "}
                </h1>
                <p className="success-text mt-10">
                  The aromatic properties of spices play an essential role in
                  creating a rich and satisfying cooking and eating experience.
                  When you use spices, their unique fragrances are released,
                  filling your kitchen with an enticing aroma that can stimulate
                  your senses and enhance your appetite.{" "}
                </p>
                <a href="#" className="SuccessButton  block">
                  Learn More
                </a>
              </div>
              <div className="basis-1/12"></div>
            </div>
          </div>
        </li>

        <li id="carousel__slide3" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper">
            <div className="basis-12/12 flex mt-40">
              <div className="basis-6/12">
                <div className="basis-12/12 flex">
                  <div className="basis-6/12">
                    <img
                      loading="lazy"
                      src={masalaDetail3}
                      className="success-img-1"
                    />
                  </div>
                  <div className="basis-6/12 success-alignment">
                    <img
                      loading="lazy"
                      src={masalaCircle3}
                      className="success-img"
                    />
                  </div>
                </div>
              </div>
              <div className="basis-5/12">
                <h1 className="success-heading">
                  Spices that promise goodness and versatility{" "}
                </h1>
                <p className="success-text mt-10">
                  PlanetsEra Spices are a versatile ingredient that can be used
                  in a variety of dishes, from savory to sweet, and can be
                  combined in endless ways to create new and exciting flavors.
                  The unique taste profiles of each spice allow for an almost
                  infinite number of flavor combinations, making them an
                  essential ingredient in any kitchen.{" "}
                </p>
                <a href="#" className="SuccessButton  block">
                  Learn More
                </a>
              </div>
              <div className="basis-1/12"></div>
            </div>
          </div>
        </li>
      </ol>
      <aside class="carousel__navigation mt-10">
        <ol class="carousel__navigation-list">
          <li class="carousel__navigation-item  pr-6">
            <a href="#carousel__slide2" class="carousel__navigation-button">
              <i className="fa fa-arrow-left"></i>
            </a>
          </li>

          <li class="carousel__navigation-item">
            <a href="#carousel__slide3" class="carousel__navigation-button">
              <i className="fa fa-arrow-right"></i>
            </a>
          </li>
          {/* <li class="carousel__navigation-item">
            <a href="#carousel__slide3" class="carousel__navigation-button">
              <i className="fa fa-arrow-right"></i>
            </a>
          </li> */}
        </ol>
      </aside>
      <img loading="lazy" src={masala3} className="pizza-img" />
    </section>
  )
}

export default SuccessSection
