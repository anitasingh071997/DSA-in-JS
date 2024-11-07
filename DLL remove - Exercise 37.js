/* DLL remove - Exercise
Implement the following on the DoublyLinkedList class

remove
This function should remove a node at a specified index in a DoublyLinkedList. 
It should return the removed node. if the index is valid, or undefined if the index is invalid.

Examples
(Note: you don't need to re-implement push, the tests will be provided with it)
var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.remove(2).val; // 15
doublyLinkedList.remove(100); // undefined
doublyLinkedList.length // 3
doublyLinkedList.head.val // 5
doublyLinkedList.head.next.val // 10
doublyLinkedList.head.next.next.val // 20

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
  
    shift() {
      if (this.length === 0) return undefined;
      const oldHead = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
      }
      this.length--;
      return oldHead;
    }
  
    pop() {
      if (this.length === 0) return undefined;
      const oldTail = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = oldTail.prev;
        this.tail.next = null;
        oldTail.prev = null;
      }
      this.length--;
      return oldTail;
    }
  
    remove(index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
      
      const nodeToRemove = this.get(index);
      const beforeNode = nodeToRemove.prev;
      const afterNode = nodeToRemove.next;
      
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      
      nodeToRemove.next = null;
      nodeToRemove.prev = null;
      
      this.length--;
      return nodeToRemove;
    }
  }
  
  // Example usage
  var doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.push(5).push(10).push(15).push(20);
  
  console.log(doublyLinkedList.remove(2).val); 
  console.log(doublyLinkedList.length); 
  console.log(doublyLinkedList.head.val); 
  console.log(doublyLinkedList.head.next.val); 
  console.log(doublyLinkedList.head.next.next.val); 
  console.log(doublyLinkedList.remove(100)); 
  