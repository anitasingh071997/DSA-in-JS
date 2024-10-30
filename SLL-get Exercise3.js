/* Implement the following on the 
    SinglyLinkedList class

get
This function should find a node at a 
specified index in a SinglyLinkedList. It 
should return the found node.

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.get(0).val // 5
singlyLinkedList.get(1).val // 10
singlyLinkedList.get(2).val // 15
singlyLinkedList.get(3).val // 20
singlyLinkedList.get(4) // null
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
    get(index){
        if (index < 0 || index >= this.length) return null; // return null if index is out of bound
        
        let current = this.head;
        let counter = 0;
        
        // traverse the list to the specified index
        
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        
        return current; // return the node at the specified index
    }
}
