import { PropsType } from "./types"
import { Nav } from "../Nav/Nav"
import useCart from "../../hooks/useCart"

export const Header = ({ viewCart, setViewCart }: PropsType) => {

  const { totalItems, totalPrice } = useCart()

  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Acme Co.</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>

      <Nav viewCart={viewCart} setViewCart={setViewCart}/>
    </header>
  )

  return content
}