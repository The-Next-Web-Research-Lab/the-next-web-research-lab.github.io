const STEP = 10
let currentNum = 0

const assign = (obj, ...objs) => Object.assign(obj, ...objs)
const findElem = selector => document.querySelector(selector)

const addElems = () => {
  const wrapper = findElem('.wrapper')
  const detector = findElem('.detector')
  const frag = document.createDocumentFragment()
  const liTag = assign(document.createElement('div'), {
    className: 'box'
  })

  Array
    .from({length: STEP})
    .map((v, i) => {
      const textContent = currentNum + i + 1
      return assign(liTag.cloneNode(), {textContent})
    })
    .forEach(elem => {
      frag.appendChild(elem)
    })
  wrapper.insertBefore(frag, detector)
  currentNum += STEP
}

window.onload = () => {
  addElems()
  mountInfiniteScroll({
    detector: findElem('.detector'),
    detectListener: addElems,
    detectRatio: .5,
  })
}