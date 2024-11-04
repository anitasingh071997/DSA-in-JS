/* Binary Search Tree - remove Exercise
Implement the following function on the BinarySearchTree.
prototype. insert is implemented to help with testing.

remove
This function should remove a node from a binary search tree. 
Your remove function should be able to handle removal of the root node, 
removal of a node with one child and removal of a node with two children. 
The function should return the node removed.

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
binarySearchTree.remove(50);
binarySearchTree.root.right.value // 20
binarySearchTree.root.right.right // null
 
binarySearchTree.remove(5);
binarySearchTree.root.left.left.value // 1
binarySearchTree.root.left.left.right // null
 
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
 
binarySearchTree.remove(1);
binarySearchTree.root.left.left.value // 5
binarySearchTree.root.left.left.left // null
binarySearchTree.root.left.left.right // null
 
binarySearchTree.remove(20);
binarySearchTree.root.right.value // 50
binarySearchTree.root.right.right // null
binarySearchTree.root.right.left // null
 
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50)
    .insert(60)
    .insert(30)
    .insert(25)
    .insert(23)
    .insert(24)
    .insert(70);
 
binarySearchTree.remove(10);
binarySearchTree.root.left.value // 12
binarySearchTree.root.left.left.value // 1
binarySearchTree.root.left.left.right.value // 5
 
binarySearchTree.remove(50);
binarySearchTree.root.right.value // 20
binarySearchTree.root.right.right.value // 60
binarySearchTree.root.right.right.left.value // 30
 
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(22)
    .insert(49)
    .insert(85)
    .insert(66)
    .insert(95)
    .insert(90)
    .insert(100)
    .insert(88)
    .insert(93)
    .insert(89)
 
binarySearchTree.remove(85);
binarySearchTree.root.right.right.value // 88
binarySearchTree.root.right.right.right.left.left.value // 89
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
    
  //   Helper method to find the minimum value Node
  findMin(node) {
      while(node.left !== null) {
          node = node.left;
      }
      return node;
  }
  // Remove method
    remove(value) {
        this.root = this._removeNode(this.root, value);
    }
    
    _removeNode(node, value) {
        if(node === null) return null;
        
        if(value < node.value) {
            node.left = this._removeNode(node.left, value);
        } else if (value > node.value){
            node.right = this._removeNode(node.right, value);
        } else {
          //   Node to be removed found
          
          if(node.left === null && node.right === null) {
              return null; // Case 1 : No children
          } else if(node.left === null) {
              return node.right; // Case 2 : One Child (right)
          } else if(node.right === null) {
              return node.left; // Case 2 : One Child (left)
          } else {
              // Case 3 : Two Children
              let minNode = this.findMin(node.right); // Find the smallest value in the right subtree
              node.value = minNode.value; // Replace value with the smallest value
              node.right = this._removeNode(node.right, minNode.value); // Remove the duplicate node
          }
          
        }
        
        return node;
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
  
  binarySearchTree.remove(50);
  console.log(binarySearchTree.root.right.value); 
  console.log(binarySearchTree.root.right.right); 
  
  binarySearchTree.remove(5);
  console.log(binarySearchTree.root.left.left.value); 
  console.log(binarySearchTree.root.left.left.right); 
  
  binarySearchTree.remove(1);
  console.log(binarySearchTree.root.left.left.value); 
  console.log(binarySearchTree.root.left.left.left); 
  console.log(binarySearchTree.root.left.left.right); 
  