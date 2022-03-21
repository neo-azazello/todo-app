export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  const str = localStorage.getItem(key);
  return JSON.parse(str) || [];
}
