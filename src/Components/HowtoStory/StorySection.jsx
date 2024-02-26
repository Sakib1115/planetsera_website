import React from "react";
import "./StorySection.css";
const StorySection = () => {
  return (
    <>
      <div className="container px-6 mt-40">
        <div className="basis-12/12 relative">
          <h1 className="story-heading mb-5">How Our Story</h1>
          <div className="how-line"></div>
          <p className="story-text">
            Welcome to PlanetsEra Spices, where every spice is a reflection of
            the richness of Indian culture and carries a unique story of its
            own. Our journey began with the vision of our founder, Devender
            Mishra, to create a company that not only produces the finest
            quality spices but also upholds the core values of sustainability
            and ethical corporate citizenship.
            <br />
            <br />
            At PlanetsEra Spices, we believe that spices have an inseparable
            bond with our Indian culture. Each flavor of different spices in our
            country reflects the taste of the region and carries the story of
            the richness of our country. We take pride in our commitment to
            producing the best quality spices that capture the essence of nature
            and are true to their taste. With no artificial preservatives, our
            spices are produced with the utmost care and advanced technologies
            to ensure that you get nothing but the best.
          </p>
        </div>
      </div>
    </>
  );
};

export default StorySection;
