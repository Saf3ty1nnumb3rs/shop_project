import { takeLatest, all, call, put } from 'redux-saga/effects'

import { REQUEST_SIGN_OUT_SUCCESS } from '../actions/actionTypes'
import { clearCart } from '../actions/cartActions'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}
export function* requestSignOutSuccess() {
  yield takeLatest(REQUEST_SIGN_OUT_SUCCESS, clearCartOnSignOut)
}
export function* cartSagas() {
  yield all([call(requestSignOutSuccess)])
}
