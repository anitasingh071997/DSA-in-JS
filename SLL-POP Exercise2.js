/* Implement the following on the 
    SinglyLinkedList.prototype:

pop

This function should remove a node at 
the end of the SinglyLinkedList. It 
should return the node removed.

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
 
singlyLinkedList.pop().val; // 15
singlyLinkedList.tail.val; // 10
singlyLinkedList.length; // 2
singlyLinkedList.pop().val; // 10
singlyLinkedList.length; // 1
singlyLinkedList.pop().val; // 5
singlyLinkedList.length; // 0
singlyLinkedList.pop(); // undefined
singlyLinkedList.length; // 0
*/

class Node{
    constructor(val){
        this.val = val
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
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }
    pop(){
        if(!this.head) return undefined; // if the list is empty, return undefined
        let current = this.head;
        let newTail = current;
        
        
        // traverse to the end of the list, stoping one node before the tail
        while(current.next){
            newTail = current;
            current = current.next;
        }
        
        // update tail to be the new tail
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        
        // if the list is now empty, reset head and tail to null
        
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        
        return current; // return the removed node
    }
}
