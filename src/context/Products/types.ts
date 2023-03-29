export type ProductType = {
  sku: string,
  name: string,
  price: number
}

export type UseProductsContextType = { products: ProductType[] }