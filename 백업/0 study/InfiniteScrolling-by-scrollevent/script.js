const TARGET_ELEMENT = '.wrapper'
const STEP = 10
let currentNum = 0

const assign = (obj, ...objs) => Object.assign(obj, ...objs)
const findElem = selector => document.querySelector(selector)

const addElems = () => {
  const wrapper = findElem(TARGET_ELEMENT)
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
  wrapper.appendChild(frag)
  currentNum += STEP
}

const addScrollEvent = () => {
  const wrapper = findElem(TARGET_ELEMENT)
  wrapper.addEventListener('scroll', () => {
    const isBottom = wrapper.scrollHeight - wrapper.scrollTop === wrapper.clientHeight
    if (isBottom) {
      addElems()
    }
  })
}

window.onload = () => {
  addElems()
  addScrollEvent()
}
