/* BinaryHeap - extractMax Exercise
Implement the following functions on the maxBinaryHeap class

extractMax
Implement the `extractMax` function on the `MaxBinaryHeap.prototype`: 
This function should remove the root node in a binary heap. 
Make sure to re-order the heap after removal if necessary.

binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
binaryHeap.insert(6)
binaryHeap.extractMax()
binaryHeap.values[0] // 5
 
binaryHeap.values // [5,4,2,1,3])
 
binaryHeap.extractMax()
binaryHeap.values // [4,3,2,1])
 
binaryHeap.extractMax()
binaryHeap.values // [3,1,2])
*/

class MaxBinaryHeap{
    constructor(){
        this.values = [];    
    }
    insert(value){
        this.values.push(value);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            
            if(element <= parent) break;
            
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    
    extractMax() {
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) return this.values.pop();
        
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        
        return max;
    }
    
    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                    ) {
                        swap = rightChildIndex;
                    }
            }
            
            if (swap === null) break;
            
            
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

// Example usage

const binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);

console.log(binaryHeap.extractMax()); 
console.log(binaryHeap.values[0]);    
console.log(binaryHeap.values);       

console.log(binaryHeap.extractMax()); 
console.log(binaryHeap.values);       

console.log(binaryHeap.extractMax()); 
console.log(binaryHeap.values);      