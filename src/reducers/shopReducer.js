import initialState from './initialState'
import { UPDATE_COLLECTIONS } from '../actions/actionTypes'

const shopReducer = (state = initialState.collections, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
