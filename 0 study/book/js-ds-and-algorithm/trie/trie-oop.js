class TrieNode {
  constructor() {
    this.children = new Map()
    this.endOfWord = false
  }
  addChild(key) {
    this.children.set(key, new TrieNode())
  }
  getChild(key) {
    return this.children.get(key)
  }
  removeChild(key) {
    delete this.children.delete(key)
  }
  hasChild(key) {
    return this.children.has(key)
  }
  hasChildren() {
    return !!this.children.size
  }
  isEndWord() {
    return this.endOfWord
  }
  setEndWord() {
    this.endOfWord = true
  }
  resetEndWord() {
    this.endOfWord = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word) {
    let current = this.root
    Array.from(word).forEach(ch => {
      if (!current.hasChild(ch)) {
        current.addChild(ch)
      }
      current = current.getChild(ch)
    })
    current.setEndWord()
  }
  search(word) {
    let current = this.root
    for (const ch of Array.from(word)) {
      if (!current.hasChild(ch)) {
        return false
      }
      current = current.getChild(ch)
    }
    return current.isEndWord()
  }
  delete(word) {
    this.deleteRecursively(this.root, word, 0)
  }
  deleteRecursively(current, word, index) {
    if (index === word.length) {
      if (current.isEndWord()) {
        current.resetEndWord()
        return !current.hasChildren()
      }
    } else {
      const ch = word[index]
      if (current.hasChild(ch)) {
        const shouldDeleteCurrentNode = this.deleteRecursively(
          current.getChild(ch),
          word,
          index + 1
        )
        if (shouldDeleteCurrentNode) {
          current.removeChild(ch)
          return !current.hasChildren()
        }
      }
    }
    return false
  }
}

console.group('trie-oop')
const trie = new Trie()
trie.insert('sammie')
trie.insert('simran')
trie.insert('sam')
trie.insert('sarada')
trie.insert('apple')
console.log(trie.search('simran') === true)
console.log(trie.search('sam') === true)
console.log(trie.search('sarada') === true)
console.log(trie.search('apple') === true)
trie.delete('sammie')
trie.delete('simran')
console.log(trie.search('sammie') === false)
console.log(trie.search('simran') === false)
console.groupEnd('trie-oop')
