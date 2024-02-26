import experience1 from "@assets/images/experience-1.png"
import experience2 from "@assets/images/experience-2.png"
import experience3 from "@assets/images/experience-3.png"
import experience4 from "@assets/images/experience-4.png"
import experience5 from "@assets/images/experience-5.png"
import experience6 from "@assets/images/experience-6.png"
const ExperienceSection1 = () => {
  return (
    <>
      <div
        className="basis-6/12 pl-14 desktop-display"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="flex m-1 md:-m-2">
          <div className="flex flex-wrap">
            <div className="w-1/2 mr-6 ">
              <div
                style={{
                  backgroundImage: `url(${experience1})`,
                  width: "355px",
                  height: "355px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
                className="hover:scale-110 transition-all"
              />
              {/* <Card cursorPointer={false} shineStrength={0.75}>
              <img src={experience1} className="mb-2" />
            </Card> */}
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-3/3 flex items-end">
              <div
                style={{
                  backgroundImage: `url(${experience2})`,
                  width: "277px",
                  height: "232px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
                className="hover:scale-110 transition-all"
              />
              {/*    <Card cursorPointer={false} shineStrength={0.75}>
              <img src={experience2} className="mb-2" />
            </Card> */}
            </div>
          </div>
        </div>
        <div className="flex md:-m-2">
          <div className="basis-4/12 mt-5 mr-3">
            {/* <Card cursorPointer={false} shineStrength={0.75}>
            <img src={experience3} />
          </Card> */}
            <div
              style={{
                backgroundImage: `url(${experience3})`,
                width: "252px",
                height: "309px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              className="hover:scale-110 transition-all"
            />
          </div>

          <div className="basis-4/12 mt-5 mr-3">
            <div
              style={{
                backgroundImage: `url(${experience4})`,
                width: "220px",
                height: "227px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              className="hover:scale-110 transition-all"
            />

            {/* <Card cursorPointer={false} shineStrength={0.75}>
            <img src={experience4} />
          </Card> */}
          </div>

          <div className="basis-4/12 mt-5 mr-3">
            <div className="basis-4/12">
              <div
                style={{
                  backgroundImage: `url(${experience5})`,
                  width: "167px",
                  height: "175px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  marginBottom: "10px",
                }}
                className="hover:scale-110 transition-all"
              />
            </div>
            <div className="basis-4/12">
              <div
                style={{
                  backgroundImage: `url(${experience6})`,
                  width: "166px",
                  height: "168px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
                className="hover:scale-110 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="basis-6/12 pl-14 mobile-display">
        <div className="flex m-1 md:-m-2">
          <div className="flex flex-wrap">
            <div className="w-1/2 mr-3 ">
              <img src={experience1} />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 flex items-end">
              <img src={experience2} />
            </div>
          </div>
        </div>
        <div className="flex md:-m-2">
          <div className="basis-4/12 mt-5 mr-3">
            <img src={experience3} />
          </div>

          <div className="basis-4/12 mt-5 mr-3">
            <img src={experience4} />
          </div>

          <div className="basis-4/12 mt-5 mr-3">
            <div className="basis-4/12">
              <img src={experience5} />
            </div>
            <div className="basis-4/12">
              <img src={experience6} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExperienceSection1
