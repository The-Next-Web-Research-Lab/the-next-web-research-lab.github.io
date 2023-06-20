const createTrieNode = (children = {}) => {
  return {
    children,
    endOfWord: false
  }
}

const createTrie = () => {
  return { root: createTrieNode() }
}

const insertWord = (word, trie) => {
  return {
    root: insertWordInTrieNode(word, trie.root)
  }
}

const insertWordInTrieNode = (word, trieNode) => {
  const [head, ...tail] = word

  if (head === undefined) {
    return trieNode
  }

  const newTrieNode = createTrieNode(trieNode.children)
  const child = newTrieNode.children[head] || createTrieNode()
  newTrieNode.children[head] = insertWordInTrieNode(tail, child)
  return newTrieNode
}

console.group('trie-fp')
const trie = createTrie()
const newTrie = insertWord('simran', insertWord('sammie', trie))
console.log(newTrie)
// insert('simran')
// insert('sam')
// insert('sarada')
// insert('apple')
console.groupEnd('trie-fp')
