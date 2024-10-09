/* WHAT IS A LINKED LIST?

    A data structure that contains a head, tail and length property.

    Linked Lists consist of nodes, and each node have a value
    and a pointer to another node or null.

    COMPARISONS WITH ARRAYS
    LISTS

    # Do not have indexes!
    # Connected via nodes with a next pointer
    # Random access is not allowed.

    ARRAYS

    # Indexed in order!
    # Insertion and deletion can be expensive
    # Can quickly be accessed at a specific index.
*/

// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")

// Singly_Linked_List_Push

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")

/* PUSHING PSEUDOCODE
#   This function should accept a value
#   Create a new node using the value passed to the function
#   If there is no head property on the list, set the head and tail to be the newly created node.
#   Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
#   Increment the length by one.

*/