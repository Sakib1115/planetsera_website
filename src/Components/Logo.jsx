import "./HeaderTwo.css"
import logoImage from "@assets/images/logo.png"

const Logo = () => {
  return (
    <img
      loading="lazy"
      src={logoImage}
      alt="logo"
      className="max-w-auto h-14 mt-4 "
    />
  )
}

export default Logo
