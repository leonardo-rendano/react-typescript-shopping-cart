import { useContext } from "react";
import CartContext from "../context/Cart/CartProvider";
import { UseCartContextType } from "../context/Cart/CartProvider";

const useCart = (): UseCartContextType => {
  return useContext(CartContext)
}

export default useCart;