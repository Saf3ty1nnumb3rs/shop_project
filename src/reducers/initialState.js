import directory from '../utils/directories'
import shopItems from '../utils/shopItems'

const initialState = {
  user: {
    currentUser: null
  },
  cart: {
    hidden: true,
    cartItems: []
  },
  directory,
  collections: null
}

export default initialState
