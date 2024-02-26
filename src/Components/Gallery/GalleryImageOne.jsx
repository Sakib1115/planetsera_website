import gallery1 from "@assets/images/gallery-1.png"
const GalleryImageOne = () => {
  return (
    <div className="basis-3/12">
      <div class="content-overlay1"></div>
      <img loading="lazy" src={gallery1} className="imgHeight1 content-image" />
      <div class="content-details fadeIn-bottom flex justify-center items-center">
        <div className="hover-box">
          <h3 class="content-title">Antibiotics</h3>
          <p class="content-text">Flavoring Additive</p>
          <button type="button" class="text-white hoverBoxButton">
            Explore More
          </button>
        </div>
      </div>
    </div>
  )
}

export default GalleryImageOne
