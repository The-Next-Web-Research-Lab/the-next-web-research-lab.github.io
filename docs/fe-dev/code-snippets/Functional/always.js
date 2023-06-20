const always = v => _ => v

const five = always(5)
console.log(five()) // 5
