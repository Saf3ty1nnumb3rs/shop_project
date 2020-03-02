import { takeLatest, all, call, put } from 'redux-saga/effects'
import {
  requestSignInSuccess,
  requestSignInFailure,
  requestSignOutSuccess,
  requestSignOutFailure,
  requestSignUpSuccess,
  requestSignUpFailure
} from '../actions/userActions'
import {
  REQUEST_GOOGLE_SIGN_IN,
  REQUEST_EMAIL_SIGN_IN,
  REQUEST_SIGN_UP,
  REQUEST_SIGN_OUT,
  CHECK_USER_SESSION,
  REQUEST_SIGN_UP_SUCCESS
} from '../actions/actionTypes'

import { auth, createUserProfileDocument, googleProvider, getCurrentUser } from '../firebase/firebase'

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
    const userSnapShot = yield userRef.get()
    yield put(requestSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
  } catch (error) {
    yield put(requestSignInFailure(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(requestSignInFailure(error))
  }
}

// LISTENER
export function* requestGoogleSignIn() {
  yield takeLatest(REQUEST_GOOGLE_SIGN_IN, signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(requestSignInFailure(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield put(requestSignUpSuccess({ user, additionalData: { displayName } }))
  } catch (error) {
    yield put(requestSignUpFailure(error))
  }
}
export function* requestSignUp() {
  yield takeLatest(REQUEST_SIGN_UP, signUp)
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData)
}
export function* onSignUpSuccess() {
  yield takeLatest(REQUEST_SIGN_UP_SUCCESS, signInAfterSignUp)
}
// LISTENER
export function* requestEmailSignIn() {
  yield takeLatest(REQUEST_EMAIL_SIGN_IN, signInWithEmail)
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    yield put(requestSignInFailure(error))
  }
}
export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(requestSignOutSuccess())
  } catch (error) {
    yield put(requestSignOutFailure(error))
  }
}

export function* requestSignOut() {
  yield takeLatest(REQUEST_SIGN_OUT, signOut)
}
export function* userSagas() {
  yield all([
    call(requestGoogleSignIn),
    call(requestEmailSignIn),
    call(isUserAuthenticated),
    call(requestSignOut),
    call(requestSignUp),
    call(onSignUpSuccess)
  ])
}
