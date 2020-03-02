import { all, call } from 'redux-saga/effects'
import { requestCollections } from './shopSagas'
import { userSagas } from './userSagas'
import { cartSagas } from './cartSagas'

export default function* rootSaga() {
  yield all([call(requestCollections), call(userSagas), call(cartSagas)])
}
