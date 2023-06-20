const repeat = (arr, length) => {
  return Array
    .from({length}, () => arr)
    .reduce((acc, arr) => acc.concat(arr))
}

const rand = () => Math.random() - .5

const stepper = (max) => {
  let index = -1
  return () => {
    index = index == max ? 0 : index + 1
    return index
  }
}

const compare = (() => {
  const dataset = repeat([-1, 0, 1], 3)
  const next = stepper(dataset.length)
  dataset.sort(rand)
  return () => dataset[next()]
})()

const shuffle = arr => arr.slice().sort(compare)

module.exports = shuffle