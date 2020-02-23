import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBsLKIUyMYm3r_LvSLiXKlumd4R-8HiogY',
  authDomain: 'crown-db-8faf7.firebaseapp.com',
  databaseURL: 'https://crown-db-8faf7.firebaseio.com',
  projectId: 'crown-db-8faf7',
  storageBucket: 'crown-db-8faf7.appspot.com',
  messagingSenderId: '501014962214',
  appId: '1:501014962214:web:9360736cc958563c6006e7',
  measurementId: 'G-QQWBW2662C'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
