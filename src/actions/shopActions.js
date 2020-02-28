import { REQUEST_COLLECTIONS, REQUEST_COLLECTIONS_SUCCESS, REQUEST_COLLECTIONS_FAILURE } from './actionTypes'
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase'

export const requestCollections = () => ({
  type: REQUEST_COLLECTIONS
})

export const requestCollectionsSuccess = collectionsMap => ({
  type: REQUEST_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const requestCollectionsFailure = error => ({
  type: REQUEST_COLLECTIONS_FAILURE,
  payload: error.message
})

export const getCollections = () => async dispatch => {
  dispatch(requestCollections())
  const collectionRef = firestore.collection('collections')
  try {
    const snapShot = await collectionRef.get()
    dispatch(requestCollectionsSuccess(convertCollectionsSnapshotToMap(snapShot)))
  } catch (error) {
    dispatch(requestCollectionsFailure(error))
  }
}
