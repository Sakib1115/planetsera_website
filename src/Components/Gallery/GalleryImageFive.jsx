import gallery5 from "@assets/images/gallery-3.png"
const GalleryImageFive = () => {
  return (
    <div className="basis-12/12 relative myPhoto">
      <div class="content-overlay"></div>
      <img loading="lazy" src={gallery5} className="" />
      <div class="gallery-content">
        <h3 class="gallery-text">Nutmeg</h3>
      </div>
    </div>
  )
}

export default GalleryImageFive
