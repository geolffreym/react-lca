import Node, { deserializeBT, LCA } from '../Node';

describe('deserializes BT correctly', () => {
  const dfs = (node: Node | null, preOrder: number[]): void => {
    if (!node) {
      return;
    }

    preOrder.push(node.value);
    dfs(node.left, preOrder);
    dfs(node.right, preOrder);
  };

  it('should correctly work with a raw array', () => {
    const serializedArray = [3, 9, 7, 2, 6, null, 4];
    const tree = deserializeBT(serializedArray);

    expect(tree).toMatchSnapshot();

    const preOrder: number[] = [];
    dfs(tree, preOrder);

    expect(preOrder).toStrictEqual([3, 9, 2, 6, 7, 4]);
  });

  it('should work with json array', () => {
    const stringArray = '[3, 9, 7, 2, 6, null, 4]';
    const tree = deserializeBT(JSON.parse(stringArray));

    expect(tree).toMatchSnapshot();

    const preOrder: number[] = [];
    dfs(tree, preOrder);

    expect(preOrder).toStrictEqual([3, 9, 2, 6, 7, 4]);
  });

  it('should find the LCA based on root, p,q', () => {
    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
    const tree = deserializeBT(array);

    expect(LCA(tree, 18, 19)?.value).toStrictEqual(9)
    expect(LCA(tree, 10, 15)?.value).toStrictEqual(1)
  })

  it('should return null for invalid LCA based on root, p,q', () => {
    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
    const tree = deserializeBT(array);

    expect(LCA(tree, 100,50)).toStrictEqual(null)
  })

});
