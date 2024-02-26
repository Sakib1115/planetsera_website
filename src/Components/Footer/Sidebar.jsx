import "./footer.css";
import footerSide from "@assets/footerside.png";

const SideBar = () => {
  return (
    <>
      <div className="flex sidebar-container bg-black md:h-[250px]">
        <div className="basis-12/12 w-full">
          <img src={footerSide} className="h-72 block w-full mx-auto" />
        </div>

        {/* 
y
        
      <div className="flex sidebar-container bg-black">
        <div className="lg:basis-9/12 lg:h-[21.5rem] bg-red-50 imaged"></div> 

        <div className="lg:basis-3/12 lg:h-[21.5rem] bg-black flex flex-col justify-start side-bar">
          <div className="lg:w-40 lg:my-auto ml-10 siderbar-container"> 
            <div className="mb-5">
              <p className="text-sm text-white">More Opinions</p>
              <p className="text-xs text-gray-400 font-thin">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className="mb-5">
              <p className="text-sm text-white">Newsletter</p>
              <p className="text-xs font-thin text-gray-400 ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className="subscibe-sidebar">
              <p className="text-sm text-white">Subscribe</p>
              <p className="text-gray-400 text-xs font-thin">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div> 
           
          </div>
        </div>
        </div>
        
      */}
        {/* <div className=" mt-auto p-4">
          <p className="text-gray-400 text-xs font-thin">
            The Copyright 2023 guide covers 14 jurisdictions.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default SideBar;
