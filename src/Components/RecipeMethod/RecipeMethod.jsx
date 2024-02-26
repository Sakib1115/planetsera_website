import "./RecipeMethod.css"
import RecipeData from "./RecipeData"
import RecipeHeading from "./RecipeHeading"
import masala1 from "@assets/images/timer.png"
import masala2 from "@assets/images/forkKnife.png"
const RecipeMethod = () => {
  return (
    <div className="container px-6">
      <RecipeHeading />
      <div className="basis-12/12 flex flex-wrap">
        {RecipeData.map((items) => {
          return (
            <div class="basis-3/12 relative mb-10 px-6">
              <div className="recipeImg">
                <i className="fa fa-heart"></i>
              </div>
              <img
                loading="lazy"
                class="w-full rounded-lg"
                src={items.recipeImage}
              />
              <div class="py-4 w-full">
                <div class="mb-2 recipe-heading">
                  <h3>{items.recipeHeading}</h3>
                </div>
              </div>
              <div class="pt-4 pb-2">
                <div className="basis-12/12 flex">
                  <div className="basis-6/12 flex">
                    <img
                      loading="lazy"
                      src={masala1}
                      className="self-center"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <span className="pl-3" style={{ color: "#00000099" }}>
                      {items.spanText1}
                    </span>
                  </div>

                  <div className="basis-6/12 flex justify-end">
                    <img
                      loading="lazy"
                      src={masala2}
                      className="self-center"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <span className="pl-3" style={{ color: "#00000099" }}>
                      {items.spanText2}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecipeMethod
