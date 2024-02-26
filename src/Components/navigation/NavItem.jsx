import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Logo from "@assets/images/logo.png"

import "./header.css"
const NavItem = ({ page }) => {
  const dispatch = useDispatch()
  const colorMe = useSelector((state) => state.colorUs.color)
  const changeColor = () => {
    dispatch(changeColor("#FF4F4F"))
  }
  return (
    <div
      className={"absolute  w-full left-0 z-30 justify-between md:flex hidden"}
    >
      <Link className="scale-[0.8]" to="/" onClick={() => changeColor()}>
        <img className="" src={Logo} alt="logo" />
      </Link>
      <ul
        id="navigation"
        className={`hidden md:flex space-x-6 lg:float-right ${
          page === "about" ? "text-black" : "text-white"
        } rounded-3xl pb-6 `}
      >
        <li
          className={
            page === "home" &&
            ` text-gray-600 w-32  justify-center  mx-24 active-11 `
          }
        >
          {/* <li className={page === "home" ? `text-[${colorMe}] active-11 ` : ""}> */}
          <Link to="/" onClick={() => changeColor()}>
            Home
          </Link>
        </li>
        <li
          className={
            page === "product" &&
            ` text-gray-600 w-32  justify-center mx-24  active-11 `
          }
        >
          <Link to="/Product">Product</Link>
        </li>
        <li
          className={
            page === "about" &&
            ` text-gray-200 w-32  justify-center mx-24  active-11 bg-green-500`
          }
        >
          <Link to="/About">About</Link>
        </li>
        <li
          className={
            page === "contactUs" &&
            ` text-gray-600 w-32 mx-24  justify-center  active-11 `
          }
        >
          <Link to="/ContactUs" className="mr-1">
            Contact Us
          </Link>
        </li>
        <li className={` ${page === "about" ? "text-black" : "text-white"} `}>
          <a href="https://www.facebook.com/planetseraspices" target="_blank">
            <i className="fa fa-facebook  text-lg"></i>
          </a>
        </li>
        <li className={` ${page === "about" ? "text-black" : "text-white"} `}>
          <a href="https://twitter.com/Planetseraspice" target="_blank">
            <i className="fa fa-twitter text-lg"></i>
          </a>
        </li>
        <li className={` ${page === "about" ? "text-black" : "text-white"} `}>
          <a href="https://www.instagram.com/planetseraspices/" target="_blank">
            <i className="fa fa-instagram text-lg"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavItem
