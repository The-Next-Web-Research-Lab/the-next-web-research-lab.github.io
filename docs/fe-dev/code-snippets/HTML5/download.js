const downloadFile = (url) => {
  const a = Object.assign(document.createElement('a'), {
    href: url,
    download: true
  })
  a.click()
}