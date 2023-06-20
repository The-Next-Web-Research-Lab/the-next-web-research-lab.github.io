const URL_REGEXP = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

const urlToAnchor = (url) => {
  return url.replace(URL_REGEXP, '<a href="$&">$&</a>')
}
