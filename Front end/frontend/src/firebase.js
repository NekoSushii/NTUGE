import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_MAaiSZCLCvNNXNeNwNzd1RWXLn1c254",
  authDomain: "wenzhang-4a2ab.firebaseapp.com",
  projectId: "wenzhang-4a2ab",
  storageBucket: "wenzhang-4a2ab.appspot.com",
  messagingSenderId: "895999763909",
  appId: "1:895999763909:web:a9f4be11a9d1fcf28297ac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}