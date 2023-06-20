const BROWSER_STORAGE = sessionStorage
const setItem = (key, value) => {
  BROWSER_STORAGE.setItem(key, JSON.stringify(value))
}
const getItem = (key) => {
  return JSON.parse(BROWSER_STORAGE.getItem(key))
}