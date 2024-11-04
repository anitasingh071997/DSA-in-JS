/* Binary Search Tree - DFS Exercise
Implement the following functions on the BinarySearchTree.prototype. 
insert has been implemented for you to help with testing.

DFSPreOrder
This function should search through each node in the binary search tree 
using pre-order depth first search and return an array containing each node's value.

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
binarySearchTree.DFSPreOrder() // [15, 10, 1, 5, 12, 20, 50]
DFSInOrder

This function should search through each node in the binary search tree 
using in-order depth first search and return an array containing each node's value.

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
binarySearchTree.DFSInOrder() // [1, 5, 10, 12, 15, 20, 50]
DFSPostOrder

This function should search through each node in the binary search tree 
using post-order depth first search and return an array containing each node's value.

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
binarySearchTree.DFSPostOrder() // [5, 1, 12, 10, 50, 20, 15]
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
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  //   DFS Pre-Order: Root -> Left -> right 
    DFSPreOrder() {
        const result = [];
        function traverse(node) {
            if(!node) return;
            result.push(node.value); //Visit the Root
            traverse(node.left); // Visit the left subtree
            traverse(node.right); // Visit the right subtree
        }
        traverse(this.root);
        return result;
    }
  //  DFS In-Order: left -> Root -> right 
    DFSInOrder() {
        const result = [];
        function traverse(node) {
            if(!node) return;
            traverse(node.left); // Visit the left subtree
            result.push(node.value); // Visit the Root
            traverse(node.right); // Visit the right subtree
        }
        traverse(this.root);
        return result;
    }
  //   DFS post-Order: left -> right -> Root
    DFSPostOrder() {
        const result = [];
        function traverse(node) {
            if(!node) return;
            traverse(node.left); // Visit the left subtree
            traverse(node.right); // Visit the right subtree
            result.push(node.value); // Visit the Root
        }
        traverse(this.root);
        return result;
    }
  }
  // Example usage
  
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
  
  console.log(binarySearchTree.DFSPreOrder());  
  console.log(binarySearchTree.DFSInOrder());   
  console.log(binarySearchTree.DFSPostOrder());