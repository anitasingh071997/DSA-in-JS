/* DLL reverse - Exercise
reverse
This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

let doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20)
doublyLinkedList.reverse(); // singlyLinkedList;
doublyLinkedList.length; // 4
doublyLinkedList.head.val); // 20
doublyLinkedList.head.next.val; // 15
doublyLinkedList.head.next.next.val; // 10
doublyLinkedList.head.next.next.next.val; // 5

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
  
    reverse() {
      if (!this.head) return this;
  
      let current = this.head;
      let temp = null;
  
      // Traverse the list and swap `next` and `prev` pointers for each node
      while (current) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
      }
  
      // After the loop, swap the head and tail
      temp = this.head;
      this.head = this.tail;
      this.tail = temp;
  
      return this;
    }
  }
  
  
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.push(5).push(10).push(15).push(20);
  
  doublyLinkedList.reverse();
  
  console.log(doublyLinkedList.length); 
  console.log(doublyLinkedList.head.val);
  console.log(doublyLinkedList.head.next.val); 
  console.log(doublyLinkedList.head.next.next.val); 
  console.log(doublyLinkedList.head.next.next.next.val);
  