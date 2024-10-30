/* Implement the following on the 
SinglyLinkedList class

remove
This function should remove a node at a 
specified index in a SinglyLinkedList. It 
should return the removed node. if the 
index is valid, or undefined if the index is 
invalid.

Examples
(Note: you don't need to re-implement push, 
the tests will be provided with it)

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.remove(2).val; // 15
singlyLinkedList.remove(100); // undefined
singlyLinkedList.length // 3
singlyLinkedList.head.val // 5
singlyLinkedList.head.next.val // 10
singlyLinkedList.head.next.next.val // 20
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
    get(index) {
        if (index >= this.length || index < 0) {
            return null;
        }
        
        cur = this.head;
        var count = 0;
        for (var cur = this.head; cur !== null && count != index; cur = cur.next) {
            count++;
        }
        
        return cur;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined; // return undefined if index is undefined
        
        if(index === 0){
            // remove the head
            const removedNode = this.head;
            this.head = this.head.next;
            this.length--;
            if(this.length === 0) this.tail = null; // if list is now empty, update tail
            return removedNode;
        }
        
        // Use the get method to find the node right before the one we want to removedNode
        const previousNode = this.get(index - 1);
        const removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        
        if(index === this.length - 1) {
            // if we are removing the tail, update the tail to previousNode
            this.tail = previousNode;
        }
        
        this.length--;
        return removedNode;
    }
}

// const SinglyLinkedList = new SinglyLinkedList();