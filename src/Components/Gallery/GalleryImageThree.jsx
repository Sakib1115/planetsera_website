import gallery3 from "@assets/images/gallery-2.png"

const GalleryImageThree = () => {
  return (
    <div className="basis-12/12 relative myPhoto">
      <div class="content-overlay"></div>
      <img loading="lazy" src={gallery3} className="" />
      <div class="gallery-content">
        <h3 class="gallery-text">Cardamom</h3>
      </div>
    </div>
  )
}

export default GalleryImageThree
