export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  const str = localStorage.getItem(key);
  const parsed = JSON.parse(str);
  return parsed ? parsed.todos : [];
}
