# Visualizing "Find the Least Common Ancestor of a Binary Tree"

The goal of the project is to visualize an algorithm that you will implement to find the Least Common Ancestor (LCA) of a Binary Tree (NOTE: not a BST) when given a tree and two nodes in that tree. The least common ancestor is defined as the closest relative to both of those nodes. For example, assume we have the following tree:

```
     3
    / \
   9   7
  / \   \
 2   6   4
```

For this tree, the lowest common ancestor for `2` and `6` is `9` because it is the closest relative to both of those. For `6` and `7` the answer is `3` because that is the closest relative.

## Requirements

1. The app should have an input field that allows us to input a binary tree as an array and convert it into the above tree structure. The method for doing this conversion is already defined in the `Node` file (feel free to implement your own, but you should be using the `Node` class as is without modification for this). It takes in an as input an array of the form `[3, 9, 7, 2, 6, null, 4]` which represents a level order traversal from left to right.
2. The app should take `Node` parsed above and visualize that tree similarly to the tree above (or however you wanna visualize it, get creative!)
3. The app should take in two numbers as input and return the LCA of those two numbers by visually marking the node in the tree
4. Write up a short (1 page max) explaining your approach, what bugs and TODOs need to be addressed, and what a future iteration might look like

## Assumptions

1. The input is a Binary Tree, not a Binary Search Tree
2. The values in the tree are unique, so you don't need to worry about duplicates
3. A `Node` DOES NOT have pointers to its parents. If you need to add other properties to aid with visualization you can do that, but the properties should not aid in finding the LCA

# Approach

First, a tree structure is created based on a raw array of numbers in string format, which is then parsed to build the array for javascript.
These values will be assigned to each node during the construction of the tree. During the execution of the algorithm, a tree is created nesting the nodes keeping a recursive reference in memory, call this "Circular node memory stack reference": Every new node after being added to btree position (left, right) is added to the stack as to reference. The memory keep a track of each node and create a "pseudo-recursive" tree generation.

Based on the requirements, the process of finding the common ancestor of an established pair of nodes is performed by recursively searching down from the root of the tree to its leaves. Executing first the function over the "parent node" and then recursively left and right node.

For the visualization of the tree a recursive component is created that shows the hierarchy of the nodes; In addition, tools are provided for the construction of the tree and for the search for LCA.

In the process of defining the tree through the input, a "debounce" is established and useMemo to improve the performance of the application avoiding overload in the construction of the tree.

The input for node A and node B is added, both are passed to the search function (LCA) along with the root of the tree to obtain the "common ancestor", if the result is valid, the life cycle of react (rendering) to compare the "ancestor" with the value provided to each node in the component's props (each node is evaluated recursively to build the tree), when one of the nodes coincides with said ancestor a property is established to mark the node in the display graph.

## Possible issues

Among the possible bugs could be the input of text and not numbers in the input array and the values of the nodes for the search.
Uncontrolled tree growth could cause display problems and potentially performance issues.

## TODO

* Responsive design improvements
* Connect nodes with lines

## Future improvements

The user experience is important so part of the future should include improvements to the visualization, navigation and pagination of the tree which would have a positive impact on performance and usability.
eg:

* Add tree interactivity
* Remove raw string array to populate tree
* Dynamically add values to each node
* Add/remove/update child nodes directly from parent nodes
* Remove sub-trees

For instance part of the weaknesses in the app is that the use is not intuitive, since not all users know the array structure.
"Not everyone thinks like a programmer"

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

* You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

* To learn React, check out the [React documentation](https://reactjs.org/).

* React anti patterns [Anti-patterns](https://oozou.com/blog/6-react-anti-patterns-to-avoid-206)
