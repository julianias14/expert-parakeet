export function getCache(lang) {
  return JSON.parse(localStorage.getItem(`lang_${lang}`));
}

export function setCache(lang, data) {
  localStorage.setItem(`lang_${lang}`, JSON.stringify(data));
}