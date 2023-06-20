const clone = json => JSON.parse(JSON.stringify(json))

const produce = (state, recipe) => {
  const clonedState = clone(state)
  recipe(clonedState)
  return clonedState
}

const baseState = [
  {
    todo: "Learn typescript",
    done: true
  },
  {
    todo: "Try immer",
    done: false
  }
]

const nextState = produce(baseState, (draftState) => {
  draftState.push({todo: "Tweet about it"})
  draftState[1].done = true
})

console.log(baseState.length === 2) // true
console.log(nextState.length === 3) // true

console.log(baseState[1].done === false) // true
console.log(nextState[1].done === true) // true

console.log(nextState[0] === baseState[0]) // false
console.log(nextState[1] !== baseState[1]) // true