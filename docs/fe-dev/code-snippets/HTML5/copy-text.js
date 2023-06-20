// 사용자 이벤트 후 발생하도록 해야 함
const copyText = (value) => {
  const textarea = Object.assign(
    document.createElement('textarea'),
    {value}
  )

  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}