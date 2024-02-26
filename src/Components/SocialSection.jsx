import "./HeaderTwo.css"

const SocialSection = () => {
  return (
    <div className="container flex justify-around mt-4">
      <a href="https://www.facebook.com/planetseraspices" target="_blank">
        <i className="fa fa-facebook text-white text-lg"></i>
      </a>
      <a href="https://twitter.com/Planetseraspice" target="_blank">
        <i className="fa fa-twitter text-white text-lg"></i>
      </a>
      <a href="https://www.instagram.com/planetseraspices/" target="_blank">
        <i className="fa fa-instagram text-white text-lg"></i>
      </a>
    </div>
  )
}

export default SocialSection
