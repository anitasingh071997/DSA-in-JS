/*  DLL insert / remove - Exercise
Implement the following on the DoublyLinkedList class

insert
This internal/helper function should insert a node at a specified index in a DoublyLinkedList. 
It should return true if the index is valid, and false if the index is invalid 
(less than 0 or greater than the length of the list).

remove
This function should remove a node at a specified index in a DoublyLinkedList.
It should return the removed node. if the index is valid, or undefined if the index is invalid.

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.insert(2,12); // true
doublyLinkedList.insert(100,12); // false
doublyLinkedList.length // 5
doublyLinkedList.head.val // 5
doublyLinkedList.head.next.val // 10
doublyLinkedList.head.next.next.val // 12
doublyLinkedList.head.next.next.next.val // 15
doublyLinkedList.head.next.next.next.next.val // 20
 
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
  
    insert(index, val) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.unshift(val);
      if (index === this.length) return !!this.push(val);
      
      const newNode = new Node(val);
      const beforeNode = this.get(index - 1);
      const afterNode = beforeNode.next;
  
      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      afterNode.prev = newNode;
  
      this.length++;
      return true;
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
  
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.push(5).push(10).push(15).push(20);
  
  console.log(doublyLinkedList.insert(2, 12)); // true
  console.log(doublyLinkedList.insert(100, 12)); // false
  console.log(doublyLinkedList.length); // 5
  console.log(doublyLinkedList.head.val); // 5
  console.log(doublyLinkedList.head.next.next.val); // 12
  
  doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.push(5).push(10).push(15).push(20);
  
  console.log(doublyLinkedList.remove(2).val); // 15
  console.log(doublyLinkedList.remove(100)); // undefined
  console.log(doublyLinkedList.length); // 3
  console.log(doublyLinkedList.head.next.next.val); // 20
  