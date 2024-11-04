/* Binary Search Tree Exercise - Find 2nd largest node
Write a function on the BinarySearchTree class:
findSecondLargest - finds and returns the second largest value in the BST. 
If the tree has fewer than two nodes, return undefined.

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.findSecondLargest(); // returns 15
 
var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(10);
binarySearchTree2.findSecondLargest(); // returns undefined
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
           // only accept numbers....watch out since NaN is typeof number!
      if (typeof value === 'number' && !isNaN(value)) {
          // if there is nothing in the tree, start it off with a new node!
          if (this.root === null ) {
              this.root = new Node(value);
              return this;
          } 
          else {
              // current variable used for traversal, just like linked lists!
              var current = this.root;
              // keep looping till we get to the correct spot;
              while (true) {
                  if (value < current.value) {
                      // if there is nothing on the left
                      if (current.left === null ) {
                          // make a new node and get out
                          current.left = new Node(value);
                          return this;
                      }
                      // otherwise, keep moving on!
                       
                      else {
                          current = current.left;
                      }
                  } 
                  else if (value > current.value) {
                      // if there is nothing on the right
                      if (current.right === null ) {
                          // make a new node and get out
                          current.right = new Node(value);
                          return this;
                      } else {
                          current = current.right;
                      }
                  }
                  // otherwise it must be a duplicate so let's get out of here
                   
                  else {
                      return "duplicate!";
                  }
              }
          }
      } 
      else
          return "Please insert a number";
    }
        findSecondLargest() {
            if(this.root === null || (this.root.left === null && this.root.right === null)) {
                return undefined; // Tree has fewer than two nodes
            }
            
            let current = this.root;
            let parent = null;
            
          //   Traverse to the largest Node
          while(current.right !== null) {
              parent = current;
              current = current.right;
          }
          
          // Case 1 : If the largest node has a left subtree
          if (current.left !== null) {
              let secondLargest = current.left;
              while(secondLargest.right !== null) {
                  secondLargest = secondLargest.right;
              }
              
              return secondLargest.value;
          }
          
          // Case 2 : otherwise, the parent of the largest node is the second largest
          
          return parent ? parent.value : undefined;
          }
  }
  
  // Example usage
  
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insert(15);
  binarySearchTree.insert(20);
  binarySearchTree.insert(10);
  binarySearchTree.insert(12);
  console.log(binarySearchTree.findSecondLargest()); 
  
  const binarySearchTree2 = new BinarySearchTree();
  binarySearchTree2.insert(10);
  console.log(binarySearchTree2.findSecondLargest()); 