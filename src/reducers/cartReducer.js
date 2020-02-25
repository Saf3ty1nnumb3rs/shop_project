import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../actions/actionTypes'
import initialState from './initialState'
import { addItemToCart } from '../utils/cart'

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer
