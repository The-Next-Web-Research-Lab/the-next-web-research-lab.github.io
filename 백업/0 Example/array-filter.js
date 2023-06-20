const shoppingBasket = [
  { name: '물', price: 500, count: 3, checked: true },
  { name: '즉석밥', price: 1000, count: 2, checked: true },
  { name: '라면', price: 1000, count: 1, checked: true },
  { name: '귤', price: 10000, count: 1, checked: false },
  { name: '수세미', price: 2000, count: 1, checked: false }
]

const totalPrice = shoppingBasket
  .filter(({checked}) => checked)
  .map(({price, count}) => price * count)
  .reduce((totalPrice, producePrice) => totalPrice + producePrice)

console.log(totalPrice) // 4500
