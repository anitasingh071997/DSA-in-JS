/* Implement the following on the 
    SinglyLinkedList class

rotate
This function should rotate all the nodes 
in the list by some number passed in. 
For instance, if your list looks like 1 -> 2 ->
3 -> 4 -> 5 and you rotate by 2, the list 
should be modified to 3 -> 4 -> 5 -> 1 -> 2.
The number passed in to rotate can
be any integer.

Time Complexity: O(N), where N is the 
length of the list.

Space Complexity: O(1)

Examples
(Note: push is implemented to help you 
test your rotate function)

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(3);
singlyLinkedList.head.val; // 20
singlyLinkedList.head.next.val; // 25
singlyLinkedList.head.next.next.val; // 5
singlyLinkedList.head.next.next.next.val; // 10
singlyLinkedList.head.next.next.next.next.val; // 15
singlyLinkedList.tail.val; // 15
singlyLinkedList.tail.next; // null
var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(-1);
singlyLinkedList.head.val; // 25
singlyLinkedList.head.next.val; // 5
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 15
singlyLinkedList.head.next.next.next.next.val; // 20
singlyLinkedList.tail.val; // 20
singlyLinkedList.tail.next // null
var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(1000);
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.head.next.next.next.val; // 20
singlyLinkedList.head.next.next.next.next.val; // 25
singlyLinkedList.tail.val; // 25
singlyLinkedList.tail.next // null
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    rotate(rotateBy) {
        if (!this.head || this.length <= 1) return this; // No rotation needed for empty or single-node list 
        
        // normalize the rotation count 
        rotateBy = rotateBy % this.length;
    if (rotateBy < 0) rotateBy += this.length; // Convert negative rotation to equivalent positive

    if (rotateBy === 0) return this; // No rotation needed

    // Find the new tail at (length - rotateBy - 1) and new head at (length - rotateBy)
    let newTail = this.head;
    for (let i = 1; i < this.length - rotateBy; i++) {
      newTail = newTail.next;
    }

    const newHead = newTail.next;
    newTail.next = null;
    this.tail.next = this.head;
    this.head = newHead;
    this.tail = newTail;

    return this;
  }
}
