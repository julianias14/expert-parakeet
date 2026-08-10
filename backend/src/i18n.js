let translations = {};

export function setTranslations(data) {
  translations = data;
}

export function t(key) {
  return translations[key] || key;
}

export function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}