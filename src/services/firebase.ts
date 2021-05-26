import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNgxwc83Wpf9SU9eIPVypNyk1ggbEJpPU",
  authDomain: "cloudadmin-298a3.firebaseapp.com",
  projectId: "cloudadmin-298a3",
  storageBucket: "cloudadmin-298a3.appspot.com",
  messagingSenderId: "1002265695027",
  appId: "1:1002265695027:web:f2e239477c891aabe3e446",
}

const fb = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

export const db = fb.firestore()
