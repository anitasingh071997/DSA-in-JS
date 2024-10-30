/* Implement the following on the SinglyLinkedList class:

push

This function should take in a value and
add a node to the end of the SinglyLinkedList. 
It should return the SinglyLinkedList.

Examples
var singlyLinkedList = new SinglyLinkedList();
 
singlyLinkedList.push(5); // singlyLinkedList
singlyLinkedList.length; // 1
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 5
 
singlyLinkedList.push(10); // singlyLinkedList
singlyLinkedList.length; // 2
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.tail.val; // 10
 
singlyLinkedList.push(15); // singlyLinkedList
singlyLinkedList.length; // 3
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.tail.val; // 15
*/

class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(value){
        // YOUR CODE GOES HERE
        const newNode = new Node(value);
        
        if(!this.head) {
            // if the list is empty, set head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // otherwise attatch new node to the end of the list and update tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++; // increment the length of the list
        return this; // returnthe entire list for method chaining
    }
}
