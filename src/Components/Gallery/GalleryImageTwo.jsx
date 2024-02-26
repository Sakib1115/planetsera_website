import gallery2 from "@assets/images/GalleryImg.png"
const GalleryImageTwo = () => {
  return (
    <div className="basis-12/12 myPhoto">
      <div class="content-overlay"></div>
      <img loading="lazy" src={gallery2} className="" />
      <div class="gallery-contentfirst">
        <h3 class="gallery-heading">A blend of perfection PlanetsEra spices for every dish.</h3>
      </div>
    </div>
  )
}

export default GalleryImageTwo
