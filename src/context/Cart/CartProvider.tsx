import { createContext } from "react";
import { CartItemType, CartStateType, ReducerAction, REDUCER_ACTION_TYPE } from "./types";

const initialCartState: CartStateType = {
  cart: []
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error('action.payload missing in ADD action')
      }
      const { sku, name, price } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

      const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)

      const quantity: number = itemExists ? itemExists.quantity + 1 : 1

      return {
        ...state,
        cart: [...filteredCart, {
          sku, name, price, quantity
        }]
      }
    } 
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error('action.payload missing in REMOVE action')
      }

      const { sku } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

      return {
        ...state,
        cart: [...filteredCart]
      }
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error('action.payload missing in QUANTITY action')
      }

      const { sku, quantity } = action.payload

      const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)

      if (!itemExists) {
        throw new Error('Item must exist in order to update quantity')
      }

      const updatedItem: CartItemType = {...itemExists, quantity}

      const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

      return {
        ...state,
        cart: [...filteredCart, updatedItem]
      }
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return {
        ...state,
        cart: []
      }
    }
    default:
      throw new Error('Reducer action type não identificado!')
  }
}
