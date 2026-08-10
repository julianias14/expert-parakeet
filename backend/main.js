import { auth, db, storage } from "./firebase.js";

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-storage.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

window.loadProfile = async function(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  console.log(snap.data());
};

async function renderUser(user) {
  const snap = await getDoc(doc(db, "users", user.uid));

  if (!snap.exists()) return;

  const data = snap.data();

  document.querySelector(".container").innerHTML = `
    <h2>WELCOME ${data.name}</h2>
    <p>Age: ${data.age}</p>
    <p>Email: ${data.email}</p>
    <button onclick="logout()">Logout</button>
  `;
  console.log("Rendering user UI");
}

// make function global so HTML can access it
window.handleSignup = async function () {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    await setDoc(doc(db, "users", user.uid), {
      name,
      age,
      email
    });

    console.log("User created:", user.uid);

    // 🔥 FORCE UI UPDATE HERE
    await renderUser(user);

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

window.handleLogin = async function () {
  try {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    console.log("Logged in:", user.uid);

    await renderUser(user);

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

window.logout = async function () {
  await signOut(auth);
  location.reload();
};

onAuthStateChanged(auth, async (user) => {
  if (user) {
    await renderUser(user);
  }
});