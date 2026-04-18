import { observeAuth, logout, getUserData } from "./auth.js";

const app = document.getElementById("app");

observeAuth(async (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const data = await getUserData(user.uid);

  app.innerHTML = `
    <h2>WELCOME ${data.name}</h2>
    <p>Email: ${data.email}</p>
    <p>Age: ${data.age}</p>
  `;
});

document.getElementById("logoutBtn").onclick = async () => {
  await logout();
  window.location.href = "index.html";
};