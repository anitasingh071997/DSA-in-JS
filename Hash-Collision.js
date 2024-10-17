/*  Dealing with Collisions
    Even with a large array and a great hash function, collisions are inevitable. 

    There are many strategies for dealing with collisions, but we'll focus on two:

    1.  Separate Chaining
    With separate chaining, at each index in our array we 
    store values using a more sophisticated data 
    structure (e.g. an array or a linked list).

    This allows us to store multiple key-value pairs at the same index.


    2.  Linear Probing
    With linear probing, when we find a collision, we 
    search through the array to find the next empty slot.

    Unlike with separate chaining, this allows us to store a
    single key-value at each index.
*/
    // A HashTable Class

    class HashTable {
        constructor(size=53){
          this.keyMap = new Array(size);
        }
      
        _hash(key) {
          let total = 0;
          let WEIRD_PRIME = 31;
          for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
          }
          return total;
        }
      }

