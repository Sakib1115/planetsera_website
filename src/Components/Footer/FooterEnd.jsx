import React from "react";
import footerlogo from "../../../src/assets/footerlogo.png";

const FooterEnd = () => {
  return (
    <div className="flex footer-end justify-around">
      <div className="lg:basis-9/12 lg:h-36 social-container bg-[#0D0D0D] flex justify-around">
        <div className="basis-12/12 footAli">
          <div className="basis-4/12 flex justify-center">
            <div className="logo my-auto">
              <img src={footerlogo} alt="" className="lg:w-40" />
            </div>
          </div>
          <div className="basis-8/12 flex">
            <div className="menu lg:my-auto">
              <ul className="flex menu-links text-white lg:justify-between lg:items-center my-auto">
                <li className="px-8">
                  <a href={"Product"}>Best Spices</a>
                </li>
                {/* <li className="px-8">Social Media</li> */}
                <li className="px-8">Made in India</li>
                {/* <li className="px-8">Your Shop</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:basis-3/12 lg:h-36 lg:bg-black flex items-center justify-center copyright">
        {/* <p className="text-white text-xs copyright-text">
          The Copyright 2023 guide covers 14 jurisdictions.
        </p> */}
      </div>
    </div>
  );
};

export default FooterEnd;
