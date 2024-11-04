/* BinaryHeap - insert Exercise
Implement the following functions on the maxBinaryHeap class

insert
Implement the `insert` function on the `MaxBinaryHeap.
prototype`: This function should insert a node in a binary heap. 
Make sure to re-order the heap after insertion if necessary.

binaryHeap = new MaxBinaryHeap()
binaryHeap.insert(1)
binaryHeap.values[0] // 1
 
binaryHeap.insert(2)
binaryHeap.values[0] // 2
 
binaryHeap.values // [2, 1]
 
binaryHeap.insert(3)
binaryHeap.values[0] // 3
 
binaryHeap.values // [3, 1, 2]
 
binaryHeap.insert(4)
binaryHeap.values[0] // 4
 
binaryHeap.values // [4, 3, 2, 1]
 
binaryHeap.insert(5)
binaryHeap.values[0] // 5
 
binaryHeap.values // [5, 4, 2, 1, 3]
 
binaryHeap.insert(6)
binaryHeap.values[0] // 6
 
binaryHeap.values // [6, 4, 5, 1, 3, 2]
*/

class MaxBinaryHeap{
    constructor(){
        this.values = [];    
    }
    insert(value){
        // Add the value to the end of the heap
        this.values.push(value);
        // Bubble up the new value to restore the heap property
        this.bubbleUp();
        return this; // Return the heap for chaining
    }
    
    bubbleUp(value){
        let index = this.values.length - 1;
        const element = this.values[index];
        
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            
            // If the parent is greater than or equal to the element, we are done 
            if(element <= parent) break;
            
            // swap the element with its parent
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex; // update the index to the parent index
        }
    }
}

// Example usage

const binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
console.log(binaryHeap.values[0]); 

binaryHeap.insert(2);
console.log(binaryHeap.values[0]); 
console.log(binaryHeap.values);    

binaryHeap.insert(3);
console.log(binaryHeap.values[0]); 
console.log(binaryHeap.values);    

binaryHeap.insert(4);
console.log(binaryHeap.values[0]); 
console.log(binaryHeap.values);    

binaryHeap.insert(5);
console.log(binaryHeap.values[0]); 
console.log(binaryHeap.values);    

binaryHeap.insert(6);
console.log(binaryHeap.values[0]); 
console.log(binaryHeap.values);    