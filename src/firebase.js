import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApF2KXH-83yxZSvIHFjVu-erpfyuXYJwA",
  authDomain: "whatsapp-mern-6f3e5.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-6f3e5.firebaseio.com",
  projectId: "whatsapp-mern-6f3e5",
  storageBucket: "whatsapp-mern-6f3e5.appspot.com",
  messagingSenderId: "1087686981619",
  appId: "1:1087686981619:web:120477c08d3cf2ecc2c486",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = new firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
