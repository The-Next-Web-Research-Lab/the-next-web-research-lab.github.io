const clone = function <T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

const produce = function <T>(fn: (state: T, ...options: any[]) => void) {
  return (state: T, ...options: any[]): T => {
    const clonedState = clone(state)
    fn(clonedState, ...options)
    return clonedState
  }
}

const baseState: any[] = [
  {
    todo: "Learn typescript",
    done: true
  },
  {
    todo: "Try immer",
    done: false
  }
]

const nextState = produce((draftState: any[]) => {
  draftState.push({todo: "Tweet about it"})
  draftState[1].done = true
})(baseState)

console.log(baseState.length === 2)
console.log(nextState.length === 3)

console.log(baseState[1].done === false)
console.log(nextState[1].done === true)

console.log(nextState[0] === baseState[0])
console.log(nextState[1] !== baseState[1])

produce((draftState: {x : number }) => {
  draftState.x = 10
})({ x: 0 })