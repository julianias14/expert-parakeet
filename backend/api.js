export async function translateUI(language) {
  await new Promise(r => setTimeout(r, 300));

  const base = {
    signup_title: "SIGN UP",
    login_title: "LOGIN",
    welcome: "WELCOME"
  };

  const result = {};

  for (const key in base) {
    result[key] = `[${language}] ${base[key]}`;
  }

  return result;
}