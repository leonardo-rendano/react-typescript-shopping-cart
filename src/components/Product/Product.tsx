import { ProductType } from "../../context/Products/types"
import { ReducerActionType, ReducerAction } from "../../context/Cart/types"
import { ReactElement } from "react"

type PropsType = {
  product: ProductType,
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType,
  inCart: boolean
}

export const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
  
  const img: string = new URL(`../../images/${product.sku}.jpeg`, import.meta.url).href

  const onAddToCart = () => dispatch({ 
    type: REDUCER_ACTIONS.ADD, 
    payload: { ...product, quantity: 1 } 
  })

  const itemInCart = inCart ? ' → Item in Cart: ✔️' : null

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img
        src={img}
        alt={product.name}
        className="product_img"
      />
      <p>
        {new Intl.NumberFormat('en-US', {
          style: 'currency', currency: 'USD'
        }).format(product.price)}{itemInCart}
      </p>
      <button onClick={onAddToCart}>
        Add to Cart
      </button>
    </article>
  )

  return content
}