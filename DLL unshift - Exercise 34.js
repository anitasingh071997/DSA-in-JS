/* DLL unshift - Exercise
Implement the following on the DoublyLinkedList class

unshift
This function should accept a value and add a node to the beginning of the DoublyLinkedList 
with the given value. It should return the DoublyLinkedList.

Examples
var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.unshift(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(10); doublyLinkedList 
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 10
doublyLinkedList.head.next.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(15); doublyLinkedList
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 15
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.next.next.val; // 5

*/

class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    // Unshift method to add a node to the beginning of the list
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

// Example usage
var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.unshift(5);
console.log(doublyLinkedList.length); 
console.log(doublyLinkedList.head.val); 
console.log(doublyLinkedList.tail.val); 

doublyLinkedList.unshift(10);
console.log(doublyLinkedList.length); 
console.log(doublyLinkedList.head.val); 
console.log(doublyLinkedList.head.next.val); 
console.log(doublyLinkedList.tail.val); 

doublyLinkedList.unshift(15);
console.log(doublyLinkedList.length); 
console.log(doublyLinkedList.head.val); 
console.log(doublyLinkedList.tail.val); 
console.log(doublyLinkedList.head.next.next.val); 

console.log(doublyLinkedList.shift().val); 
console.log(doublyLinkedList.length); 
console.log(doublyLinkedList.shift().val); 
console.log(doublyLinkedList.length);
console.log(doublyLinkedList.shift().val); 
console.log(doublyLinkedList.length);
console.log(doublyLinkedList.shift()); 
console.log(doublyLinkedList.length); 