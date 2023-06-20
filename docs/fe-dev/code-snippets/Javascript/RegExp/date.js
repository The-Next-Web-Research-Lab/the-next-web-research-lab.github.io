const [year, month, date] = birthDateStr
  .replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
  .split('-')

'2018.02.14'
  .replace(/\d{4}.(\d{2}).(\d{2})/, '$1/$2')
  .replace(/^0/, '') // 2/14
'2018.12.14'
  .replace(/\d{4}.(\d{2}).(\d{2})/, '$1/$2')
  .replace(/^0/, '') // 12/14
