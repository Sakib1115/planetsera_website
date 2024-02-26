import "./InboxSection.css"
const InboxSection = () => {
  return (
    <div className="container w-full flex  mt-60 flex-wrap">
      <div className="basis-1/12"></div>
      <div className="basis-10/12 InboxSectionImg flex flex-col justify-center">
        <h2 className="InboxSection-text">Deliciousness to your inbox</h2>
        <div className="basis-12/12 flex w-full justify-center">
          <div className="basis-3/12"></div>
          <div className="basis-6/12">
            <p className="InputSectionPara text-center text-white text-white-400 text-sm">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
          <div className="basis-3/12"></div>
        </div>
      </div>
      <div className="basis-1/12"></div>
    </div>
  )
}

export default InboxSection
