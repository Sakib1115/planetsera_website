import "./PrivacyPolicy.css"
import { PrivacyData } from "./PrivacyData"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import PrivacyHeader from "./PrivacyHeader"

const PrivacySection = () => {
  return (
    <>
      <PrivacyHeader />
      <div className="container mb-28">
        <div className="basis-12/12 flex">
          <div className="basis-1/12"></div>
          <div className="basis-10/12">
            <Accordion preExpanded={["a", "c"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What Information Do We Collect?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h1> What Information Do We Collect?</h1>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ratione itaque molestias quod
                    eum aliquid ab, laborum est blanditiis quibusdam! Aliquid
                    quasi nobis quod architecto. Enim, voluptatem!
                    Necessitatibus minus est maxime quia, sequi officiis
                    obcaecati quae tenetur architecto impedit blanditiis illo
                    magnam distinctio cum pariatur ullam facere ipsum ipsa,
                    expedita ipsam? Id expedita doloremque, non voluptatibus a
                    laboriosam facilis perspiciatis veniam eum fuga recusandae,
                    obcaecati porro corporis officiis ea, adipisci deleniti!
                    Alias quisquam minima recusandae quidem, aperiam debitis rem
                    provident, aliquam asperiores quaerat tenetur, fugiat iste
                    eos impedit soluta voluptatem
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>No Spam Policy</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h1>No Spam Policy</h1>

                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Do We Use Cookies?</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h1>Do We Use Cookies?</h1>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Conduct</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h1>Conduct</h1>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Third Party Links</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h1>Third Party Links</h1>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Changes To Our Privacy Policy
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h1>Changes To Our Privacy Policy</h1>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Description Of Content Policy
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h1>Description Of Content Policy</h1>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim. Exercitation in fugiat est ut ad ea
                    cupidatat ut in cupidatat occaecat ut occaecat consequat est
                    minim minim esse tempor laborum consequat esse adipisicing
                    eu reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="basis-1/12"></div>
        </div>
        <div className="basis-12/12 flex mt-16">
          <div className="basis-1/12"></div>
          <div className="basis-8/12">
            <h4 className="address-heading">Contact Us</h4>
            <p style={{ fontFamily: "myregular", color: "#75797f" }}>
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us by e‑mail at info@planetsera.com or by mail using the
              details provided below:
            </p>
            <br />
            <address>
              <span className="company">Planetsera Ltd.</span>
              <div>
                <i className="fa fa-home"></i>
                <span>
                  H-150 Sector 63 <br />
                  Noida UP
                </span>
              </div>
              <div>
                <i className="fa fa-phone"></i>+91 123456899
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <a href="#">info@planetera.com</a>
              </div>
            </address>
          </div>
          <div className="basis-1/12"></div>
        </div>
      </div>
    </>
  )
}

export default PrivacySection
