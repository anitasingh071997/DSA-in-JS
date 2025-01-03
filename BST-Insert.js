/* INSERTING A NODE
Steps - Iteratively or Recursively

#   Create a new node
#   Starting at the root
    #   Check if there is a root, if not - the root now becomes that new node!
    #   If there is a root, check if the value of the new node is greater than or less than the value of the root
    #   If it is greater 
        #   Check to see if there is a node to the right
            #   If there is, move to that node and repeat these steps
            #   If there is not, add that node as the right property
    #   If it is less
        #   Check to see if there is a node to the left
            #   If there is, move to that node and repeat these steps
            #   If there is not, add that node as the left property
*/
  

// If we were trying to insert 13, where would that go on this list

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)




