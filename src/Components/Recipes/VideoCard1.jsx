import bookmark from "@assets/bookmark.png"
import share from "@assets/share.png"
import like from "@assets/like.png"
import comment from "@assets/comment.png"
import playBtn from "@assets/Play.png"

const VideoCard1 = ({ item }) => {
  //console.log(item)
  return (
    <div
      className="video-card-1 bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient( 0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)), url(${item.bgImg})`,
      }}
    >
      <div className="chef-section">
        <div className="chef-info flex justify-around items-center mt-4">
          <div className="flex justify-around items-center w-[50%]">
            <div className="chef-wrapper">
              <div className="lg:w-[75px] lg:h-[75px] flex justify-center items-center rounded-full chef-container ">
                <img
                  loading="lazy"
                  src={item.chefImg}
                  alt=""
                  className="chef-img"
                />
              </div>
            </div>
            <div>
              <p className="chef-name">{item.chefName}</p>
              <p className="recipe-time">{item.time}</p>
            </div>
          </div>
          <div className="bookmark flex justify-center items-center rounded-full">
            <img loading="lazy" src={bookmark} alt="" width={"30px"} />
          </div>
        </div>
      </div>
      <div className="play-btn mx-auto text-center mt-40 flex justify-center items-center">
        <img loading="lazy" src={playBtn} alt="" />
      </div>
      <div className="video-info flex flex-col items-end text-center w-[100%] h-44 justify-around ">
        <div className="share mb-5 mr-6">
          <img loading="lazy" src={share} alt="" width={"25px"} />
        </div>
        <div className="comment mr-6 mb-3">
          <img loading="lazy" src={comment} alt="" width={"25px"} />
          <p className="comments">133</p>
        </div>
        <div className="like mr-5">
          <img loading="lazy" src={like} alt="" width={"25px"} />
          <p className="likes">2.9k</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard1
