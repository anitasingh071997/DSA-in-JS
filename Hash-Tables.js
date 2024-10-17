/* WHAT IS A HASH TABLE?
Hash tables are used to store key-value pairs.

They are like arrays, but the keys are not ordered.

Unlike arrays, hash tables are fast for all of 
the following operations: finding values, 
adding new values, and removing values!

## WHY SHOULD I CARE? ##
Nearly every programming language 
has some sort of hash table data structure

## HASH Function ##
A function that performs this task is called a HASH Function.
*/
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      let value = char.charCodeAt(0) - 96
      total = (total + value) % arrayLen;
    }
    return total;
  }

