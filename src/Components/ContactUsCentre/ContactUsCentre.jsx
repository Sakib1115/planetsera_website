import image from "@assets/rectangle.png"
import locationimage from "@assets/Location.png"
import mailimage from "@assets/Vector.png"
import callimage from "@assets/Call.png"
import instaimage from "@assets/Insta.png"
import facebookimage from "@assets/facebook.png"
import twitterimage from "@assets/twitter.png"
import { CREATE_CONTACT_RESPONSE } from "../../../apollo/queries"
import { useMutation } from "@apollo/client"
import "./ContactUsCenter.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react"
const ContactUsCentre = () => {
  const [createContactUsResponse] = useMutation(CREATE_CONTACT_RESPONSE)
  const [formName, setFormName] = useState("")
  const [formEmail, setFormEmail] = useState("")
  const [formContact, setFormContact] = useState("")
  const [formSubject, setFormSubject] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    {
      createContactUsResponse({
        variables: {
          name: "Planetsera: " + formName,
          email: "Planetsera: " + formEmail,
          company: "Planetsera: " + formContact,
          Subject: "Planetsera: " + formSubject,
          message: "Planetsera: " + formMessage,
        },
      })
    }
    clearForm()
  }
  const clearForm = () => {
    toast.success("Message Submitted!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
    setTimeout(() => {
      location.reload()
    }, "3200")
  }
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className=" p-12 md:p-14 bg-cover flex flex-col-reverse md:flex-row"
    >
      <div className=" w-3/3 md:w-2/3 ">
        <div className="md:h-[80vh] rounded-xl bg-white p-2 md:p-8 md:m-4 ">
          {/* <div className=" md:p-1 border-y-2  border-orange-200 w-fit ">
            Send a Message
          </div> */}
          <div className="tracking-[5px] md:tracking-[10px] text-xl md:text-4xl my-1 md:my-4 HeadText py-2 md:py-0">
            {" "}
            Have a Question?
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <ToastContainer />
            <input
              className="border h-10  md:h-14 placeholder:text-slate-800 placeholder:font-normal placeholder:text-lg pl-4 border-black rounded-2xl w-full md:w-[48%] md:my-4  my-2 p-2 md:mr-2 FontText"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setFormName(e.target.value)
              }}
              required
            />
            <input
              className="border h-10 md:h-14 placeholder:text-slate-800 placeholder:font-normal placeholder:text-lg pl-4 border-black rounded-2xl w-full md:w-[48%] md:my-4 md:mx-2 my-2 p-2 m md:mr-2 FontText"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setFormEmail(e.target.value)
              }}
              required
            />
            <input
              className="border h-10 md:h-14 placeholder:text-slate-800 placeholder:font-normal placeholder:text-lg pl-4 border-black rounded-2xl w-full md:w-[48%] md:my-4 my-2 p-2 md:mr-2 FontText"
              type="text"
              placeholder="Subject"
              onChange={(e) => {
                setFormSubject(e.target.value)
              }}
              required
            />
            <input
              className="border h-10 md:h-14 placeholder:text-slate-800 placeholder:font-normal placeholder:text-lg pl-4 border-black rounded-2xl w-full md:w-[48%] md:my-4 md:mx-2 my-2 p-2 md:mr-2 FontText"
              type="number"
              placeholder="Phone"
              onChange={(e) => {
                setFormContact(e.target.value)
              }}
              required
            />
            <textarea
              className="border placeholder:text-slate-800 placeholder:font-normal placeholder:text-lg placeholder:pl-0  border-black rounded-2xl w-full md:w-[98%] md:my-6  my-2 md:p-4 p-4 md:mr-2 md:h-36 h-24 FontText"
              type="text"
              placeholder="Message"
              onChange={(e) => {
                setFormMessage(e.target.value)
              }}
              required
            />
            <button
              type="submit"
              className=" border rounded-2xl  md:w-36 w-[25vh] h-12 hover:scale-105 transition-all hover:text-white hover:bg-black bg-white  border-black FontText"
            >
              Send
            </button>
          </form>
        </div>
        <div className=" md:hidden mt-8">
          <div className="flex">
            <div className="  md:p-[-3vh] p-3 md:pl-0  hover:scale-105">
              <img className="scale-125" src={locationimage} />
            </div>
            <div className="text-white md:pb-3 md:m-1 p-1 address">
              H-150, Sector-63 Noida, Gautam Budh Nagar, 201301
            </div>
          </div>
          <div className=" flex">
            <div className="md:p-4 p-2 md:pl-0  w-22  hover:scale-105">
              <img src={mailimage} />
            </div>
            <div className="text-white md:p-3 p-1 infoText ">
              Care@ramaera.in
            </div>
          </div>
          <div className=" flex">
            <div className="md:p-3 p-1 md:pl-0 w-22  hover:scale-105">
              <img src={callimage} />
            </div>
            <div className="text-white md:p-4 p-1 infoText">0120-4152818</div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-[0px] md:pl-2">
        <h2 className="text-white md:text-[28px] text-[22px] md:font-bold  tracking-widest  md:px-0 pl-2 py-5 mb-0  md:py-10 md:pt-1 md:pb-12 h-2 min-h-0 md:min-h-0  infoText">
          Contact Information
        </h2>
        <p className="text-white md:text-[18px] text-[12px]  tracking-wider md:px-1 px-3 md:py-0 py-5 hy-2 font-extralight  ">
          We believe that communication is key to <br />
          building strong relationships with our <br /> customers.
          <br />
          Our team is passionate about spices and
          <br /> we love sharing our knowledge with our <br />
          customers. Contact us if you have any
          <br /> questions about our products or if you <br />
          need help selecting the perfect spice for <br />
          your recipe.
          {/* Bring the table win-win survival strategies
          <br /> ensure proactive domination the end of <br />
          the day going real times multiple touch-
          <br />
          points. */}
        </p>
        <div className="md:flex hidden">
          <div className="  md:p-[-3vh] p-3 md:pl-0  hover:scale-105">
            <img src={locationimage} />
          </div>
          <div className="text-white md:pb-3 md:m-1 p-1 address">
            H-150, Sector-63 Noida, Gautam Budh Nagar, 201301
          </div>
        </div>
        <div className="md:flex hidden">
          <div className="md:p-4 p-2 md:pl-1  w-22  hover:scale-105 ">
            <img src={mailimage} />
          </div>
          <div className="text-white md:p-3 p-1 infoText ">Care@ramaera.in</div>
        </div>
        <div className="md:flex hidden ">
          <div className="md:p-3 p-1 md:pl-0 w-22  hover:scale-105">
            <img src={callimage} />
          </div>
          <div className="text-white md:p-4 p-1 infoText">0120-4152818</div>
        </div>
        <div className="md:flex hidden md:p-5 md:pl-2  p-4">
          <div className="pr-10  hover:scale-105">
            <a
              href="https://www.instagram.com/planetseraspices/"
              target="_blank"
            >
              <img src={instaimage} />
            </a>
          </div>
          <div className="pr-10  hover:scale-105">
            <a href="https://www.facebook.com/planetseraspices" target="_blank">
              <img src={facebookimage} />
            </a>
          </div>
          <div className="pr-10  hover:scale-105">
            <a href="https://twitter.com/Planetseraspice" target="_blank">
              <img src={twitterimage} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactUsCentre
