class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const serialize = (node) => {
  return JSON.stringify(node);
}

const deserialize = (nodeString) => {
  const jsonObject = JSON.parse(nodeString);
  return Object.assign(new Node(), jsonObject)
}

const node = new Node('root', new Node('left', new Node('left.left')), new  Node('right'));
console.log(deserialize(serialize(node)).left.left.val === 'left.left'); 	// true
