/* Queues - enqueue Exercise
Implement the following methods on the Queue class.

enqueue
This function adds the value to the end of the queue. 
This should be an O(1) operation and return the new size of the queue.

var queue = new Queue();
queue.enqueue(10) // 1
queue.size // 1
queue.enqueue(100) // 2
queue.size // 2
queue.enqueue(1000) // 3
queue.size // 3

*/

class Queue {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    enqueue(value){
      this.items.push(value); // add the value to the end of the Queue
      this.size++; // Increment the size of the Queue
      return this.size; // return the new size of the Queue
    }
}

// Example usage
var queue = new Queue();
console.log(queue.enqueue(10)); 
console.log(queue.size);
console.log(queue.enqueue(100)); 
console.log(queue.size); 
console.log(queue.enqueue(1000)); 
console.log(queue.size); 