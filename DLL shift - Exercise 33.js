/* DLL shift - Exercise
Implement the following on the DoublyLinkedList class

shift
This function should remove a node at the beginning of the DoublyLinkedList. 
It should return the node removed.

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
 
doublyLinkedList.shift().val; // 15
doublyLinkedList.length; // 2
doublyLinkedList.shift().val; // 10
doublyLinkedList.length; // 1
doublyLinkedList.shift().val; // 5
doublyLinkedList.length; // 0
doublyLinkedList.pop(); // undefined
doublyLinkedList.length; // 0
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
    // Shift method to remove the first node from the list
  shift() {
    if (this.length === 0) return undefined; // If the list is empty
    const removedNode = this.head;
    if (this.length === 1) { // If there is only one node in the list
      this.head = null;
      this.tail = null;
    } else { // If there are multiple nodes in the list
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }
}

// Example usage
var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.shift(5);
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5

doublyLinkedList.shift(10);
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 10
console.log(doublyLinkedList.head.next.val); // 5
console.log(doublyLinkedList.tail.val); // 5

doublyLinkedList.shift(15);
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 15
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.head.next.next.val); // 5

console.log(doublyLinkedList.shift().val); // 15
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.shift().val); // 10
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.shift().val); // 5
console.log(doublyLinkedList.length); // 0
console.log(doublyLinkedList.shift()); // undefined
console.log(doublyLinkedList.length); // 0

