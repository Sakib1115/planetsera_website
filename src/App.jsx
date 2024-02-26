import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import PageNotFound from "./PageNotFound"
import Products from "./Products"
import PrivacyPolicy from "./PrivacyPolicy"
import About from "./About"
import AOS from "aos"
import "aos/dist/aos.css"
import "./App.css"
import "./MediaQuery.css"
import ContactUs from "./ContactUs/ContactUs"

const App = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"Product"} element={<Products />} />
      <Route path={"ContactUs"} element={<ContactUs />} />
      {/* <Route path={"privacypolicy"} element={<PrivacyPolicy />} /> */}
      <Route path={"About"} element={<About />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  )
}

export default App
