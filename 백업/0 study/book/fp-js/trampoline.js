const evenSteven = n => n === 0 ?
  true :
  () => oddJohn(Math.abs(n) - 1)
const oddJohn = n => n === 0 ?
  false :
  () => evenSteven(Math.abs(n) - 1)

const trampoline = (fun, arg) => {
  let result = fun(arg)
  while (typeof result === "function") {
    result = result()
  }
  return result
}


trampoline(evenSteven, 100000)
