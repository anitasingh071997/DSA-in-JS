/* Stacks - pop Exercise
Implement the following methods on the Stack class

pop - removes the node at the top of the stack and returns the value of that node.

Note: The tests for pop rely on push working (it has been implemented for you)

var stack = new Stack();
 
stack.push(10);
stack.push(100);
stack.push(1000);
var removed = stack.pop();
removed // 1000
stack.size // 2
stack.pop();
stack.pop();
stack.size // 0
*/

// Node class definition 
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Stack class definition 
class Stack{
    constructor(){
        this.first = null;
        this.last = null;     
        this.size = 0;
    }
    
    // push method
    push(value){
        var node = new Node(value);

        if (!this.first){
            this.first = node;
            this.last = node;
        } else {
            var tmp = this.first;
            this.first=node;
            this.first.next=tmp;
        }

        return ++this.size;
    }
    
    // Pop method to remove the node at the top of the stack
    pop(){
        
        if(!this.first) return null; // if the stack is empty, return null
        let temp = this.first; // store the current first node
        if(this.first === this.last) {
            // if there's only one node, set both first and last null
            this.last = null;
        }
        
        this.first = this.first.next // Move the firs pointer to the next node
        this.size--; // Decrease the size of the stack
        return temp.value; // return the value of the removed node
    }
}

// Example usage

var stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);

var removed = stack.pop();
console.log(removed); 
console.log(stack.size); 

stack.pop();
stack.pop();
console.log(stack.size); 
