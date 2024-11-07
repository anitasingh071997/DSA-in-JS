/* DLL get - Exercise
Implement the following on the DoublyLinkedList.prototype

get
This internal/helper function should find a node at a specified index in a DoublyLinkedList. 
It should return the found node.

Examples
(Note: you don't need to re-implement push, the tests will be provided with it.)

var doublyLinkedList = new DoublyLinkedList(); 
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.get(0).val // 5
doublyLinkedList.get(1).val // 10
doublyLinkedList.get(2).val // 15
doublyLinkedList.get(3).val // 20
doublyLinkedList.get(4) // null

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
    get(index) {
    if (index < 0 || index >= this.length) return null; // Index out of bounds

    let current;
    if (index < this.length / 2) {
      // Start from the head if the index is in the first half
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      // Start from the tail if the index is in the second half
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }
}

// Example usage
var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);

console.log(doublyLinkedList.get(0).val); // 5
console.log(doublyLinkedList.get(1).val); // 10
console.log(doublyLinkedList.get(2).val); // 15
console.log(doublyLinkedList.get(3).val); // 20
console.log(doublyLinkedList.get(4)); // null