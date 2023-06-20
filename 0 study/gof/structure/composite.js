class Node {
  constructor (name) {
    this.children = [];
    this.name = name
  }
  add (child) {
    this.children.push(child)
  }
  remove (child) {
    const length = this.children.length;
    for (let i = 0; i < length; i++) {
      if (this.children[i] === child) {
        this.children.splice(i, 1);
        return
      }
    }
  }
  getChild (i) {
    return this.children[i]
  }
  hasChildren () {
    return this.children.length > 0
  }
}

const traverse = (indent, node) => {
  console.log(`${'--'.repeat(indent)} ${node.name}`);
  indent++;

  for (let i = 0, len = node.children.length; i < len; i++) {
    traverse(indent, node.getChild(i))
  }
};

const tree = new Node('root');

const left = new Node('left');
const leftleft = new Node('leftleft');
const leftright = new Node('leftright');

const right = new Node('right');
const rightleft = new Node('rightleft');
const rightright = new Node('rightright');

tree.add(left);
tree.add(right);
tree.remove(right);
tree.add(right);

left.add(leftleft);
left.add(leftright);

right.add(rightleft);
right.add(rightright);

traverse(0, tree);
