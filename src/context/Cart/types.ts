import { ReactElement } from "react"

export type CartItemType = {
  sku: string,
  name: string,
  price: number,
  quantity: number
}

export type CartStateType = { cart: CartItemType[] }

export const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
  type: string,
  payload?: CartItemType,
}

export type ChildrenType = {
  children?: ReactElement | ReactElement[]
}
