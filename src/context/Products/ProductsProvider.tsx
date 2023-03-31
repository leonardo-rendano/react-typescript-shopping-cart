import { createContext, ReactElement, useState, useEffect } from "react";
import { ProductType, UseProductsContextType } from "./types";

const initialState: ProductType[] = [
  {
    "sku": "item0001",
    "name": "Widget",
    "price": 9.99
  },
  {
    "sku": "item0002",
    "name": "Premium Widget",
    "price": 19.99
  },
  {
    "sku": "item0003",
    "name": "Deluxe Widget",
    "price": 29.99
  }
]


const initialContextState: UseProductsContextType = { products: [] }

export const ProductsContext = createContext<UseProductsContextType>(initialContextState)

type ChildrenType = {
  children?: ReactElement | ReactElement[]
}

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initialState)

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch('http://localhost:3500/products')
  //     .then(response => {
  //       return response.json()
  //     }).catch(error => {
  //       if (error instanceof Error) console.log(error.message)
  //     })
  //     return data
  //   }

  //   fetchProducts().then(products => setProducts(products))
  // }, [])

  return (
    <ProductsContext.Provider value={{
      products
    }}>
      {children}
    </ProductsContext.Provider>
  )
}