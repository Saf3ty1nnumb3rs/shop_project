import directory from '../utils/directories'

const initialState = {
  user: {
    currentUser: null,
    errorMessage: null
  },
  cart: {
    hidden: true,
    cartItems: []
  },
  directory,
  collections: {
    collections: null,
    isFetching: false,
    errorMessage: null
  }
}

export default initialState
