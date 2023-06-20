class Iterator {
  constructor (items) {
    this.index = 0
    this.items = items
  }
  first () {
    this.index = 0
  }
  last () {
    this.index = this.count() - 1
  }
  count () {
    return this.items.length
  }
  next () {
    if (!this.hasNext()) {
      throw new Error(`Index is last item. use hasNext method.`)
    }
    this.index++
  }
  previous () {
    if (!this.hasPrevious()) {
      throw new Error(`Index is first item. use hasPrevious method.`)
    }
    this.index--
  }
  hasNext () {
    return this.index < this.count()
  }
  hasPrevious () {
    return this.index >= 0
  }
  currentItem () {
    return this.items[this.index]
  }
  forEach (callback=()=>{}) {
    for (this.first(); this.hasNext(); this.next()) {
      callback(this.currentItem())
    }
  }
  forEachRight (callback=()=>{}) {
    for (this.last(); this.hasPrevious(); this.previous()) {
      callback(this.currentItem())
    }
  }
}

const items = ['one', 2, 'circle', true, "Applepie"];
const iter = new Iterator(items);

iter.forEach(item => console.log(item))
iter.forEachRight(item => console.log(item))
