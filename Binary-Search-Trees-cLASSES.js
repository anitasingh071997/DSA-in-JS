/* BINARY SEARCH TREES

Tree : A data structure that consists of nodes in a parent / child relationship.

TREE TERMINOLOGY 

#   Root - The top node in a tree.
#   Child -A node directly connected to another node when moving away from the Root.
#   Parent - The converse notion of a child.
#   Siblings -A group of nodes with the same parent.
#   Leaf - A node with no children.
#   Edge - The connection between one node and another.

Kinds of trees
#   Trees
#   Binary Trees
#   Binary Search Trees
*/
// The BinarySearchTree Class
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
