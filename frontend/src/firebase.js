import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZFMjYBeptcSflFOtRMMO7WKFJ21xwwrk",
  authDomain: "expert-parakeet.firebaseapp.com",
  projectId: "expert-parakeet",
  storageBucket: "expert-parakeet.appspot.com",
  messagingSenderId: "488940113425",
  appId: "1:488940113425:web:79f9e491bb89ba08abebb0",
  measurementId: "G-WBHY4C24Z6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);