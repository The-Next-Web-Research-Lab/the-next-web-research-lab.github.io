const isValidUrl = url => {
  try {
    new URL(url)
    return true
  } catch (e) {
    return false
  }
}

console.log(isValidUrl('http://www.naver.com')) // true
console.log(isValidUrl('http:/')) // false