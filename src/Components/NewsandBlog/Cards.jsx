import { useSelector } from "react-redux"

const Cards = ({ item }) => {
  const colorMe = useSelector((state) => state.colorUs.color)

  return (
    <div className="cards  scale-75 md:scale-100  product-font text-center mb-[-40px] md:mb-16 ">
      <div
        className="img-div card1 mx-auto mb-4"
        style={{
          backgroundImage: `url(${item.productImg})`,
        }}
      />
      <h1 style={{ color: colorMe }} className="text-2xl mb-2">
        {item.productName}
      </h1>
      <p className="text-xl">{item.productDesc}</p>
    </div>
  )
}

export default Cards
