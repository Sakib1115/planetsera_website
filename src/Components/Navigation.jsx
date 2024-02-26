import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import "./HeaderTwo.css"
const Navigation = ({ page }) => {
  const dispatch = useDispatch()

  const changeColor = () => {
    dispatch(changeColor("#FF4F4F"))
  }
  return (
    <ul
      id="navigation"
      className="hidden md:flex space-x-6 lg:float-right text-white rounded-3xl px-20"
    >
      <li className={page === "home" ? "active-11" : ""}>
        <Link to="/" onClick={() => changeColor()}>
          Home
        </Link>
      </li>
      <li className={page === "products" ? "active-11" : ""}>
        <Link to="/Product">Product</Link>
      </li>
      {/*  <li className={page === "aboutUs" ? "active-11" : ""}>
        <Link to="/About">About</Link>
      </li> */}

      <li className={page === "contactUs" ? "active-11" : ""}>
        <Link to="/ContactUs" className="mr-1">
          Contact Us
        </Link>
      </li>
      <li>
        <a href="https://www.facebook.com/planetseraspices" target="_blank">
          <i className="fa fa-facebook text-white text-lg"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/Planetseraspice" target="_blank">
          <i className="fa fa-twitter text-white text-lg"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/planetseraspices/" target="_blank">
          <i className="fa fa-instagram text-white text-lg"></i>
        </a>
      </li>
    </ul>
  )
}

export default Navigation
