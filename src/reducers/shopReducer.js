import initialState from './initialState'
import { REQUEST_COLLECTIONS, REQUEST_COLLECTIONS_SUCCESS, REQUEST_COLLECTIONS_FAILURE } from '../actions/actionTypes'

const shopReducer = (state = initialState.collections, action) => {
  switch (action.type) {
    case REQUEST_COLLECTIONS:
      return {
        ...state,
        isFetching: true
      }
    case REQUEST_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case REQUEST_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
