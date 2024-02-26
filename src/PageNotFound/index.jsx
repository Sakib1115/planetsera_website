import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

const index = () => {
  const dispatch = useDispatch()

  const changeColor = () => {
    dispatch(changeColor("#FF4F4F"))
  }
  return (
    <div className=" h-[100vh] flex justify-center items-center">
      <Link to="/" onClick={() => changeColor()}>
        <div className="text-center">
          <h2>Page Not Found</h2>
          <h3 className="text-2xl cursor-pointer animate-bounce mt-4">Home</h3>
        </div>
      </Link>
    </div>
  )
}

export default index
