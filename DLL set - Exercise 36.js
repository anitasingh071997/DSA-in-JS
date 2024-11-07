/* DLL set - Exercise
Implement the following on the DoublyLinkedList.prototype

set

This function should accept an index and a value and update the value of the node in the DoublyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.

Examples

(Note: you don't need to re-implement push, the tests will be provided with it.)

var doublyLinkedList = new DoublyLinkedList();
 
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.set(0,10) // true
doublyLinkedList.length // 4
doublyLinkedList.head.val // 10
 
doublyLinkedList.set(10,10) // false
 
doublyLinkedList.set(2,100) // true
doublyLinkedList.head.next.next.val; // 100 
*/


class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(val) {
      const newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    get(index) {
      if (index < 0 || index >= this.length) return null;
      let current;
      if (index < this.length / 2) {
        current = this.head;
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
      } else {
        current = this.tail;
        for (let i = this.length - 1; i > index; i--) {
          current = current.prev;
        }
      }
      return current;
    }
  
    set(index, val) {
      const node = this.get(index);
      if (node) {
        node.val = val;
        return true;
      }
      return false;
    }
  }
  
  // Example usage
  var doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.push(5).push(10).push(15).push(20);
  
  console.log(doublyLinkedList.set(0, 10)); // true
  console.log(doublyLinkedList.head.val); // 10
  
  console.log(doublyLinkedList.set(10, 10)); // false
  
  console.log(doublyLinkedList.set(2, 100)); // true
  console.log(doublyLinkedList.head.next.next.val); // 100
  