export const deserializeBT = (arr: (number | null)[]): Node | null => {
  if (!arr.length || arr[0] == null) {
    return null;
  }

  const stack: Node[] = [];
  const first = arr.shift()! // non-null value
  const root = new Node(first);
  stack.push(root); // Add first node as root in stack

  while (stack.length && arr.length) {
    const node = stack.shift();
    if (!node) {
      return root;
    }

    const lVal = arr.shift();
    const rVal = arr.shift();

    node.left = lVal ? new Node(lVal) : null;
    node.right = rVal ? new Node(rVal) : null;

    // Circular node memory stack reference
    // Every new node after being added to btree position (left, right) is added to the stack as a reference.
    // The memory keep a track of each node and create a "pseudo-recursive" tree generation.
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }

  return root;
};


/**
 * Find LCA for p and q
 * 
 * Pre-order behavior: Executing first the function over the node and then recursively left and right node.
 * @param node: Root tree node
 * @param p: Node A to find common ancestor
 * @param q: Node B to find common ancestor 
 * @returns Node if found else null
 */
export const LCA = (node: Node | null, p: number, q: number): Node | null => {
  if (!node) return null
  if (node.value === p || node.value === q) return node
  let left: Node | null = LCA(node.left, p, q)
  let right: Node | null = LCA(node.right, p, q)

  if (left && right) return node
  if (!left && !right) return null
  return left ? left : right
}

// shadowing name for typescript Node
export default class Node {
  public value: number;
  public left: Node | null = null;
  public right: Node | null = null;

  constructor(val: number) {
    this.value = val;
  }
}
