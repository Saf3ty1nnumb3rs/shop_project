import { takeLatest, call, put, all } from 'redux-saga/effects'
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase'
import { requestCollectionsSuccess, requestCollectionsFailure } from '../actions/shopActions'
import { REQUEST_COLLECTIONS } from '../actions/actionTypes'

// takeEvery handles effects within your calls - similar to async on some levels
export function* getCollections() {
  yield console.log('FIRE!!!!!!!!!!!!!!!!')
  try {
    const collectionRef = firestore.collection('collections')
    const snapShot = yield collectionRef.get()
    // call invokes functions with a function and parameters
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot)
    // put is like the dispatch of sagas
    yield put(requestCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(requestCollectionsFailure(error))
  }
}

export function* requestCollections() {
  yield takeLatest(REQUEST_COLLECTIONS, getCollections)
}

export function* shopSagas() {
  yield all([call(requestCollections)])
}
