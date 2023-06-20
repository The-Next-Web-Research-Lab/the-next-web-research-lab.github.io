class TrieNode {
  constructor() {
    this.children = {}
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
      let node = current.children[ch]
      if (!node) {
        node = new TrieNode()
        current.children[ch] = node
      }
      current = node
    })
    current.endOfWord = true
  }
  search(word) {
    let current = this.root
    for(const ch of Array.from(word)) {
      const node = current.children[ch]
      if (!node) {
        return false
      }
      current = node
    }
    return current.endOfWord
  }
  delete(word) {
    this.deleteRecursively(this.root, word, 0)
  }
  deleteRecursively(current, word, index) {
    if (index === word.length) {
      if (!current.endOfWord) {
        return false
      }
      current.endOfWord = false
      return Object.keys(current.children).length === 0
    }
    const ch = word[index]
    const node = current.children[ch]
    if (!node) {
      return false
    }
    const shouldDeleteCurrentNode = this.deleteRecursively(node, word, index + 1)
    if (shouldDeleteCurrentNode) {
      delete current.children[ch]
      return Object.keys(current.children).length === 0
    }
    return false
  }
}

console.group('trie')
const trie = new Trie()
trie.insert('sammie')
trie.insert('simran')
console.log(trie.search('simran'))
trie.delete('sammie')
trie.delete('simran')
console.log(trie.search('sammie'))
console.log(trie.search('simran'))
console.groupEnd('trie')
