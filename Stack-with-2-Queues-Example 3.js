/* Stack with 2 Queues
Implement a stack using two queues:

You should implement the following functions:
- push (returns the stack)
- pop (returns the value popped)

Comment on your time complexity for all of these operations:

var s = new Stack()
s.push(10).push(20).push(30)
s.pop() // 30
s.pop() // 20
s.pop() // 10
s.pop() // null
s.push(30).push(40).push(50)
s.pop() // 50
s.push(60)
s.pop() // 60
*/


class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(value) {
      this.items.push(value);
    }
  
    dequeue() {
      return this.items.length ? this.items.shift() : null;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    peek() {
      return this.items.length ? this.items[0] : null;
    }
  }
  
  class Stack {
    constructor() {
      this.queue1 = new Queue();
      this.queue2 = new Queue();
    }
  
    push(value) {
      this.queue1.enqueue(value);
      return this; // Returning 'this' allows method chaining
    }
  
    pop() {
      if (this.queue1.isEmpty()) return null;
  
      // Move all elements except the last from queue1 to queue2
      while (this.queue1.size() > 1) {
        this.queue2.enqueue(this.queue1.dequeue());
      }
  
      // The last element in queue1 is the one to be popped
      const poppedValue = this.queue1.dequeue();
  
      // Swap the names of queue1 and queue2
      const temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
  
      return poppedValue;
    }
  }
  
  // Example usage
  var s = new Stack();
  s.push(10).push(20).push(30);
  console.log(s.pop()); // 30
  console.log(s.pop()); // 20
  console.log(s.pop()); // 10
  console.log(s.pop()); // null
  s.push(30).push(40).push(50);
  console.log(s.pop()); // 50
  s.push(60);
  console.log(s.pop()); // 60

//   Time complexity
// Push() : O(1)
// pop() : O(n)
  