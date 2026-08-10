import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

import { auth, db } from "./firebase.js";


// SIGN UP
export async function signup(email, password, name, age) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCred.user;

  await setDoc(doc(db, "users", user.uid), {
    name,
    age,
    email
  });

  return user;
}


// LOGIN
export async function login(email, password) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  return userCred.user;
}


// LOGOUT
export function logout() {
  return signOut(auth);
}


// GET USER DATA
export async function getUserData(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}


// AUTH LISTENER (important for protection)
export function observeAuth(callback) {
  onAuthStateChanged(auth, callback);
}