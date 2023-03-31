import { useContext } from "react";
import { ProductsContext } from "../context/Products/ProductsProvider";
import { UseProductsContextType } from "../context/Products/types";

const useProducts = (): UseProductsContextType => {
  return useContext(ProductsContext)
}

export default useProducts;