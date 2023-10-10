import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACzUMxYWlhdUeeFMO_c-MtqzJ2jBWR1DI",
  authDomain: "application-1-f4cd6.firebaseapp.com",
  projectId: "application-1-f4cd6",
  storageBucket: "application-1-f4cd6.appspot.com",
  messagingSenderId: "186308642213",
  appId: "1:186308642213:web:1acb1cd09db24ba919544c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
