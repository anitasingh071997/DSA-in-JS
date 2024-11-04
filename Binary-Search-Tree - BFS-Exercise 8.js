/* Binary Search Tree - BFS Exercise
Implement the following function on the BinarySearchTree.prototype. 
insert is implemented to help with testing.

breadthFirstSearch
This function should search through each node in the binary search tree 
using breadth first search and return an array containing each node's value.

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
binarySearchTree.breadthFirstSearch() // [(15, 10, 20, 1, 12, 50, 5)];
*/
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        var current = this.root;
        while (true) {
          if (value < current.value) {
            if (current.left === null) {
              current.left = new Node(value);
              return this;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = new Node(value);
              // If the value already exists, we don't insert it
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  //   Breadth First Search
    breadthFirstSearch() {
        const result = [];
        const queue = [];
        
        if (this.root) {
            queue.push(this.root);
        }
        while(queue.length > 0) {
            let currentNode = queue.shift(); // Dequeue the front Node
            result.push(currentNode.value); // Process the current Node
            
            
            if(currentNode.left) {
                queue.push(currentNode.left); // Enqueue left child
            }
            
            if(currentNode.right) {
                queue.push(currentNode.right); // Enqueue right child
            }
        }
        
        return result;
    }
  }
  
  // Example Usage
  
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
  
  console.log(binarySearchTree.breadthFirstSearch()); // [15, 10, 20, 1, 12, 50, 5]
  
  