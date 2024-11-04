/* Binary Search Tree - find
Implement the following functions on the `BinarySearchTree.prototype`. 
insert has been implemented for you to help with testing.

findIteratively

This function should find a node in a binary tree. 
It should return the node if found, otherwise return `undefined`. 
This should be solved using iteration or recursion. 
The tests for this method assume that insertIteratively has been implemented correctly.

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);
var foundNode = binarySearchTree.find(20);
foundNode.value // 20
foundNode.left // null
foundNode.right // null
 
var binarySearchTree = new BinarySearchTree();
 
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);
var foundNode = binarySearchTree.find(120);
foundNode // undefined
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
    
  //   Insert method for reference
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
            } 
              current = current.right;
            } else{
              //   If the value already exists, we don't insert It
              return this;
            }
          }
      }
    }
    
  //   findIteratively Method
      find(value){
          let current = this.root;
          while(current) {
              if(value === current.value){
                  return current;
              } else if (value < current.value) {
                  current = current.left;
              } else {
                  current = current.right;
              }
          }
          
          return undefined;
      }
  }
  
  // Example usage
  
  var binarySearchTree = new BinarySearchTree();
  binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);
  
  var foundNode = binarySearchTree.find(20);
  console.log(foundNode.value); 
  console.log(foundNode.left); 
  console.log(foundNode.right); 
  
  foundNode = binarySearchTree.find(120);
  console.log(foundNode); 
  
  