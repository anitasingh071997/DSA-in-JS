/* Binary Search Tree - insert Exercise
Write a function on the BinarySearchTree class
insert - accepts a value and inserts it into the BST in the correct position. 
The function should return the binary search tree. 

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.root.value // 15
binarySearchTree.root.right.value // 20
binarySearchTree.root.left.right.value // 12
 
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);
binarySearchTree.root.value // 15
binarySearchTree.root.right.value // 20
binarySearchTree.root.left.right.value // 12
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
    insert(value){
       const newNode = new Node(value);
       
       if (this.root === null){
           this.root = newNode;
           return this;
       }
       
       let current = this.root;
       while(true){
           if(value < current.value){
              //  Go left
              if (current.left === null) {
                  current.left = newNode;
                  return this;
              }
              
              current = current.left; 
           } else if (value > current.value){
              //  Go right
              if (current.right === null) {
                  current.right = newNode;
                  return this;
              }
              
              current = current.right;
           } else {
              //  Value already exists in the tree, do nothing
              
              return this;
           }
       }
    }
  }
  
  // Example usage
  
  var binarySearchTree = new BinarySearchTree();
  binarySearchTree.insert(15);
  binarySearchTree.insert(20);
  binarySearchTree.insert(10);
  binarySearchTree.insert(12);
  console.log(binarySearchTree.root.value); 
  console.log(binarySearchTree.root.right.value); 
  console.log(binarySearchTree.root.left.right.value); 
  