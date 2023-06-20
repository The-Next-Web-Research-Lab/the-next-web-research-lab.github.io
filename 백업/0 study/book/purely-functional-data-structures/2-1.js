{
  console.group('명령형')
  const xsTail = [2, null]
  const xsNode = [1, xsTail]
  const xsHead = [0, xsNode]
  const xs = [xsHead, xsTail]

  const ysTail = [5, null]
  const ysNode = [4, ysTail]
  const ysHead = [3, ysNode]
  const ys = [ysHead, ysTail]

  const cons = (xs, ys) => {
    xs[1][1] = ys[0]
    return [xs[0], ys[1]]
  }

  const zs = cons(xs, ys)

  console.log(xs[0].toString()) // 0,1,2,3,4,5
  console.log(ys[0].toString()) // 3,4,5
  console.log(zs[0].toString()) // 0,1,2,3,4,5
  console.groupEnd()
}

const copyList = (list, lastIndex) => {
  const head = list[0]
  const copiedHead = [head[0], head[1]]
  let node = copiedHead
  let index = 0
  while(node[1]) {
    const nextPoint = node[1]
    node[1] = [nextPoint[0], nextPoint[1]]
    node = nextPoint
    index++
    if (index === lastIndex) {
      break
    }
  }
  return [copiedHead, node]
}
const listSize = (list) => {
  let node = list[0]
  let index = 1
  while(node[1]) {
    node = node[1]
    index++
  }
  return index
}

{
  console.group('함수형')
  const xsTail = [2, null]
  const xsNode = [1, xsTail]
  const xsHead = [0, xsNode]
  const xs = [xsHead, xsTail]

  const ysTail = [5, null]
  const ysNode = [4, ysTail]
  const ysHead = [3, ysNode]
  const ys = [ysHead, ysTail]

  const cons = (xs, ys) => {
    const size = listSize(xs)
    const zs = copyList(xs, size - 1)
    zs[1][1] = ys[0]
    return zs
  }

  const zs = cons(xs, ys)

  console.log(xs[0].toString()) // 0,1,2
  console.log(ys[0].toString()) // 3,4,5
  console.log(zs[0].toString()) // 0,1,2,3,4,5

  console.groupEnd()
}

{
  console.group('함수형')
  const xsTail = [4, null]
  const xsHead = [0, [1, [2, [3, xsTail]]]]
  const xs = [xsHead, xsTail]

  const update = (xs, index, value) => {
    // copy
    const zs = copyList(xs, index)
    // update value
    zs[1][0] = value
    // update tail
    zs[1] = xs[0]
    return zs
  }

  const zs = update(xs, 2, 7)

  console.log(xs[0].toString()) // 0,1,2
  console.log(zs[0].toString()) // 0,1,2,3,4,5

  console.groupEnd()
}