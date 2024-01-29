export function saveStorage(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

export function getStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

export function clearStorage() {
  window.localStorage.clear();
}
