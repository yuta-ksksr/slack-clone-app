import firebase from 'firebase/app' // firebase 全般の機能を利用するために必要
import 'firebase/auth' // ログイン機能を使うために読み込み
import 'firebase/firestore' // データベース機能を使うために読み込み

if (!firebase.apps.length) {
 const config = {
   apiKey: "AIzaSyC_jrRdZFqZFzRrmJN7e2neShNr5QxvX1I",
   authDomain: "slack-clone-app-3c07e.firebaseapp.com",
   databaseURL: "https://slack-clone-app-3c07e.firebaseio.com",
   projectId: "slack-clone-app-3c07e",
   storageBucket: "slack-clone-app-3c07e.appspot.com",
   messagingSenderId: "39530309597"
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}