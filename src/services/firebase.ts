import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
}

const fb = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

export const db = fb.firestore()
