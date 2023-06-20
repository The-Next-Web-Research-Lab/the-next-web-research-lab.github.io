const rand = () => Math.random() - .5 > 0 ? 1 : -1

const stepper = (max) => {
  let index = -1
  return () => {
    index = index == max ? 0 : index + 1
    return index
  }
}

const compare = (() => {
  const dataset = Array.from({length: 9}).map(rand)
  const next = stepper(dataset.length)
  return () => dataset[next()]
})()

const shuffle = arr => arr.slice().sort(compare)

module.exports = shuffle