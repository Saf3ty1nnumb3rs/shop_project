import {
  REQUEST_SIGN_IN_SUCCESS,
  REQUEST_SIGN_IN_FAILURE,
  REQUEST_SIGN_OUT_SUCCESS,
  REQUEST_SIGN_OUT_FAILURE,
  REQUEST_SIGN_UP_FAILURE
} from '../actions/actionTypes'
import initialState from './initialState'

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case REQUEST_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null
      }
    case REQUEST_SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      }
    case REQUEST_SIGN_IN_FAILURE:
    case REQUEST_SIGN_OUT_FAILURE:
    case REQUEST_SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default userReducer
