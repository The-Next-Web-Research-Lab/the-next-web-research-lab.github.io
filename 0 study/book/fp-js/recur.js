const evenSteven = n => n === 0 ?
  true :
  oddJohn(Math.abs(n) - 1)
const oddJohn = n => n === 0 ?
  false :
  evenSteven(Math.abs(n) - 1)

evenSteven(100000)
