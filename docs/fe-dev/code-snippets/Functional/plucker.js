const plucker = field => obj => (obj && obj[field])

const best = { title: '인피니티워', author: 'Peter' }
const books = [{title: '스파이더맨'}, {title: '아이언맨'}, {title: '토르'}]

const extractTitle = plucker('title')
const extractThird = plucker(2)

extractTitle(best) // '인피니티워'
extractThird(books) // {title: '토르'}