/* Implement the following methods on the Stack class

push - takes in a node and puts it at the top of the stack.
Should return the new size of the stack.

var stack = new Stack();
 
stack.push(10) // 1
stack.first.value // 10
stack.last.value // 10
stack.push(100);
stack.first.value // 100
stack.last.value // 10
stack.push(1000);
stack.first.value // 1000
stack.last.value // 10
 
var stack = new Stack();
 
stack.push(10) // 1
stack.size // 1
stack.push(100) // 2
stack.size // 2
stack.push(1000) // 3
stack.size // 3
*/
// Define the node class
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Define the stack class
class Stack{
    constructor(value){
        this.first = null;
        this.last = null;  
        this.size = 0;
    }
    
    // Push method to add new node to the top of the stack
    push(value){
        
        let newNode = new Node(value);
        if(!this.first) {
            // if the stack is empty , set the first and last to the new Node
            this.first = newNode;
            this.last = newNode
        } else {
            // otherwise, put the new node at the top of the stack
            newNode.next = this.first;
            this.first = newNode;
        }
        // Increment the size of the stack
        this.size;
        return this.size;
        
    }
}

// Example Usage

var stack = new Stack();

console.log(stack.push(10)); 
console.log(stack.first.value); 
console.log(stack.last.value); 

stack.push(100);
console.log(stack.first.value); 
console.log(stack.last.value); 

stack.push(1000);
console.log(stack.first.value); 
console.log(stack.last.value); 

// More tests
var stack = new Stack();

console.log(stack.push(10)); 
console.log(stack.size); 
console.log(stack.push(100)); 
console.log(stack.size); 
console.log(stack.push(1000)); 
console.log(stack.size); 

// Error : subject push_returns_the_new_size_of_the_stack