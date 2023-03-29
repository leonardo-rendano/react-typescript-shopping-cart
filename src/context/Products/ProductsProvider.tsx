import { createContext, ReactElement, useState, useEffect } from "react";
import { ProductType, UseProductsContextType } from "./types";

const initialState: ProductType[] = []

const initialContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initialContextState)

type ChildrenType = {
  children?: ReactElement | ReactElement[]
}

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initialState)

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch('http://localhost:3500/products')
      .then(response => {
        return response.json()
      }).catch(error => {
        if (error instanceof Error) console.log(error.message)
      })
      return data
    }

    fetchProducts().then(products => setProducts(products))
  }, [])

  return (
    <ProductsContext.Provider value={{
      products
    }}>
      {children}
    </ProductsContext.Provider>
  )
}