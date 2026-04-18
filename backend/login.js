import { signup, login, observeAuth } from "./auth.js";

// SIGN UP
document.getElementById("signupBtn").onclick = async () => {
  const email = suEmail.value;
  const password = suPassword.value;
  const name = suName.value;
  const age = suAge.value;

  try {
  await signup(email, password, name, age);
  window.location.href = "home.html";
} catch (err) {
  if (err.code === "auth/email-already-in-use") {
    showError("⚠️ Account already exists. Try logging in.");
  } else if (err.code === "auth/weak-password") {
    showError("⚠️ Password should be at least 6 characters.");
  } else {
    showError("⚠️ Something went wrong. Try again.");
  }
}
};


// LOGIN
document.getElementById("loginBtn").onclick = async () => {
  const email = liEmail.value;
  const password = liPassword.value;

  try {
  await login(email, password);
  window.location.href = "home.html";
} catch (err) {
  if (err.code === "auth/user-not-found") {
    showError("⚠️ No account found.");
  } else if (err.code === "auth/wrong-password") {
    showError("⚠️ Incorrect password.");
  } else {
    showError("⚠️ Login failed.");
  }
}
};


// if already logged in → go to home
observeAuth((user) => {
  if (user) {
    window.location.href = "home.html";
  }
});

function showError(message) {
  const popup = document.getElementById("errorPopup");
  popup.textContent = message;
  popup.classList.remove("hidden");

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 3000);
}