import React from "react";
import "./AdvanceSection.css";
import bannerOne from "@assets/images/Develop-1.png";
import advanceOne from "@assets/images/advance-1.gif";
import advanceThree from "@assets/images/advance-3.gif";
import advanceTwo from "@assets/images/advance-2.gif";

const AdvanceSection1 = () => {
  return (
    <>
      <section class="relative px-6 mt-40">
        <div class="basis-12/12 lg:flex md:flex sm:block flex-wrap">
          <div class="basis-5/12">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              src={bannerOne}
            />
          </div>
          <div className="basis-1/12"></div>
          <div class="basis-6/12">
            {/* <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8"></div> */}
            <h3 className="advanceHeading mb-5">
              Experience the Flavours of Precision: The Advanced Technology
              Behind PlanetsEra Spices
            </h3>
            <div className="plan-line"></div>
            <p class="advanceText">
              At PlanetsEra Spices, we utilise the most advanced technology for
              the manufacturing of our spices.We ensure complete precision in
              the development of our spices and preserve them efficiently to
              retain their authenticity and pungency for a longer
              period.Experience the difference that advanced technology can make
              in your spice collection. Shop our range of high-quality spices
              today.
            </p>
            <ul className="list-none mt-6 advance-alignment">
              <li class="py-2">
                <div className="basis-12/12 proFlex">
                  <div className="basis-2/12 proWd">
                    <img src={advanceOne} />
                  </div>
                  <div className="basis-10/12 relative">
                    <h4 className="advanceHeading">
                      Exceptional Quality Spices
                    </h4>
                    <div className="except-line"></div>
                    <p className="advanceText">
                      We are committed to delivering exceptional quality spices
                      through our focus on precision manufacturing techniques
                      and careful sourcing of high-quality raw materials
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="basis-12/12 proFlex">
                  <div className="basis-2/12 proWd">
                    <img src={advanceTwo} />
                  </div>
                  <div className="basis-10/12 relative">
                    <h4 className="advanceHeading">Developed by Experts</h4>
                    <div className="develop-line"></div>
                    <p className="advanceText">
                      Expertly crafted premium spices for elevated culinary
                      experiences, made from only the finest organic ingredients
                      by our artisanal team.
                    </p>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="basis-12/12 proFlex">
                  <div className="basis-2/12 proWd">
                    <img src={advanceThree} />
                  </div>
                  <div className="basis-10/12 relative">
                    <h4 className="advanceHeading">
                      Pure and Balanced Organic Blends
                    </h4>
                    <div className="pure-line"></div>
                    <p className="advanceText">
                      Our organic spice blends are crafted with care and
                      sustainability. We use only the finest, organically grown
                      ingredients to create perfectly balanced blends for a pure
                      and natural taste.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvanceSection1;
