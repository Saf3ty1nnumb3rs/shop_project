import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM_FROM_CART, REMOVE_ITEM, CLEAR_CART } from './actionTypes'

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
})
export const removeItemFromCart = item => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item
})

export const clearCart = () => ({
  type: CLEAR_CART
})
