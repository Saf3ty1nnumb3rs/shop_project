import {
  REQUEST_SIGN_UP,
  REQUEST_SIGN_UP_SUCCESS,
  REQUEST_SIGN_UP_FAILURE,
  REQUEST_GOOGLE_SIGN_IN,
  REQUEST_SIGN_IN_SUCCESS,
  REQUEST_SIGN_IN_FAILURE,
  REQUEST_EMAIL_SIGN_IN,
  CHECK_USER_SESSION,
  REQUEST_SIGN_OUT,
  REQUEST_SIGN_OUT_SUCCESS,
  REQUEST_SIGN_OUT_FAILURE
} from './actionTypes'

export const requestSignUp = userCredentials => ({
  type: REQUEST_SIGN_UP,
  payload: userCredentials
})

export const requestSignUpSuccess = ({ user, additionalData }) => ({
  type: REQUEST_SIGN_UP_SUCCESS,
  payload: { user, additionalData }
})

export const requestSignUpFailure = error => ({
  type: REQUEST_SIGN_UP_FAILURE,
  payload: error.message
})

export const requestGoogleSignIn = () => ({
  type: REQUEST_GOOGLE_SIGN_IN
})

export const requestSignInSuccess = user => ({
  type: REQUEST_SIGN_IN_SUCCESS,
  payload: user
})

export const requestSignInFailure = error => ({
  type: REQUEST_SIGN_IN_FAILURE,
  payload: error.message
})

export const requestEmailSignIn = emailAndPassword => ({
  type: REQUEST_EMAIL_SIGN_IN,
  payload: emailAndPassword
})

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
})

export const requestSignOut = () => ({
  type: REQUEST_SIGN_OUT
})

export const requestSignOutSuccess = () => ({
  type: REQUEST_SIGN_OUT_SUCCESS
})

export const requestSignOutFailure = error => ({
  type: REQUEST_SIGN_OUT_FAILURE,
  payload: error.message
})
