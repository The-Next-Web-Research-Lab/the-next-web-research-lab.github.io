type EmptyNode = null
type TreeNode<T> = EmptyNode | {
  left: TreeNode<T>
  value: T
  right: TreeNode<T>
}

type TreeType<T> = {
  empty: TreeNode<T>
  insert(elem: T, tree: TreeNode<T>): TreeNode<T>
  member(elem: T, tree: TreeNode<T>): boolean
}

const Tree: TreeType<number> = {
  empty: null,
  member(elem: number, tree: TreeNode<number>): boolean {
    if (tree === Tree.empty) {
      return false
    }

    const {left, value, right} = tree
    if (elem < value) {
      return Tree.member(elem, left)
    } else if (elem > value) {
      return Tree.member(elem, right)
    } else {
      return true
    }
  },
  insert(elem: number, tree: TreeNode<number>): TreeNode<number> {
    if (tree == Tree.empty) {
      return {
        left: Tree.empty,
        value: elem,
        right: Tree.empty
      }
    }

    const {left, value, right} = tree
    if (elem < value) {
      return {
        left: Tree.insert(elem, left),
        value,
        right
      }
    } else if (elem > value) {
      return {
        left,
        value,
        right: Tree.insert(elem, right)
      }
    } else {
      return tree
    }
  }
}

const one = Tree.insert(3, Tree.empty)
console.log(one)
const two = Tree.insert(2, one)
console.log(two)
const three = Tree.insert(4, two)
console.log(three)
const four = Tree.insert(1, three)
console.log(four)
const five = Tree.insert(5, four)
console.log(five)

console.log(Tree.member(4, five))
