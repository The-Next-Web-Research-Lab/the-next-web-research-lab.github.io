const range = length => Array.from({length})
const list = range(10000000)

// 1 Phase
{
  const f = list => list
    .map(a => a + 1)
    .map(a => a + 1)
    .filter(a => a % 2)

  console.time('map+filter')
  f(list)
  console.timeEnd('map+filter')
  // map+filter: 5832.8291015625ms
}

// 2 Phase
{
  const magic = f => list => list.flatMap(x => f([x]))
  const f = list => list
    .map(a => a + 1)
    .map(a => a + 1)
    .filter(a => a % 2)
  const f2 = magic(f)

  console.time('map+filter+flatMap')
  f2(list)
  console.timeEnd('map+filter+flatMap')
  // map+filter+flatMap: 3426.182861328125ms
}

// 3 Phase
{
  const magic = f => list => list.flatMap(x => f([x]))
  const f = list => list
    .map(a => a + 1)
    .map(a => a + 1)
    .filter(a => a % 2)
  const f2 = magic(f)

  Array.prototype.flatMap = function (f) {
    var i = -1, tl = this.length, res = [], b, j, bl
    while (++i < tl) {
      if (Array.isArray(b = f(this[i], i, this))) {
        j = -1, bl = b.length
        while (++j < bl) res.push(b[j])
      } else res.push(b)
    }
    return res
  }

  console.time('map+filter+custom flatMap')
  f2(list)
  console.timeEnd('map+filter+custom flatMap')
  // map+filter+custom flatMap: 2705.951904296875ms
}
