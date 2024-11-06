/* Trie Exercise - addWord
This function should add the given word 
starting from the given index to the Trie.

It will be recursive and notify the correct child of this 
Trie to add the word starting from a later index.

Consider what the add function should do when it 
reaches the end of the word as a word does not necessarily 
end at a leaf.

You must mark nodes which are the ends of words so that the 
words can be reconstructed later.

var firstTrie = new Trie();
firstTrie.addWord("fun")
firstTrie.characters // {f: Trie}
!!firstTrie.characters["f"] // true
 
firstTrie.characters.f.characters.u // {u: Trie}
!!firstTrie.characters.f.characters.u // true
 
firstTrie.characters.f.characters.u.characters.n.isWord // true
!!firstTrie.characters.f.characters.u.characters.n // true
!!firstTrie.characters.f.characters.u.characters.n.characters // {}
 
!!firstTrie.characters.f.characters.u.characters.l // true
 
var secondTrie = new Trie();
secondTrie.addWord("ha")
secondTrie.addWord("hat")
secondTrie.addWord("has")
secondTrie.addWord("have")
secondTrie.addWord("hate")
 
secondTrie.characters.h.characters.a.isWord // true
secondTrie.characters.h.characters.a.characters.t.isWord // true
secondTrie.characters.h.characters.a.characters.v.isWord // false
secondTrie.characters.h.characters.a.characters.v.characters.e.isWord // true
secondTrie.characters.h.characters.a.characters.t.characters.e.isWord // true
 
Object.keys(secondTrie.characters.h.characters.a.characters).length // 3
*/ 

// Trie Node Constructor
class Trie {
    constructor() {
        this.characters = {}; // An object to hold the child nodes
        this.isWord = false; // A boolean to mark the end of a word
    }
    // Method to add a word recursively
    addWord(word, index = 0) {
        // Base case: If we've reached the end of the word
        if (index === word.length) {
            this.isWord = true; // Mark this node as a complete word
            return;
        }

        // Get the current character from the word
        const char = word[index];

        // If this character does not exist in the current Trie, create a new Trie node
        if (!this.characters[char]) {
            this.characters[char] = new Trie();
        }

        // Recursively add the next character in the word
        this.characters[char].addWord(word, index + 1);
    }
}
  
  
  // Example usage:
  var firstTrie = new Trie();
  firstTrie.addWord("fun");
  
  console.log(firstTrie.characters); // {f: Trie}
  console.log(!!firstTrie.characters["f"]); // true
  console.log(!!firstTrie.characters.f.characters.u); // true
  console.log(firstTrie.characters.f.characters.u.characters.n.isWord); // true
  console.log(!!firstTrie.characters.f.characters.u.characters.n); // true
  console.log(!!firstTrie.characters.f.characters.u.characters.n.characters); // {}
  console.log(!!firstTrie.characters.f.characters.u.characters.l); // false (since "l" is not added)
  
  // Adding multiple words to a new Trie
  var secondTrie = new Trie();
  secondTrie.addWord("ha");
  secondTrie.addWord("hat");
  secondTrie.addWord("has");
  secondTrie.addWord("have");
  secondTrie.addWord("hate");
  
  // Testing secondTrie structure
  console.log(secondTrie.characters.h.characters.a.isWord); // true
  console.log(secondTrie.characters.h.characters.a.characters.t.isWord); // true
  console.log(secondTrie.characters.h.characters.a.characters.v.isWord); // false
  console.log(secondTrie.characters.h.characters.a.characters.v.characters.e.isWord); // true
  console.log(secondTrie.characters.h.characters.a.characters.t.characters.e.isWord); // true
  console.log(Object.keys(secondTrie.characters.h.characters.a.characters).length); // 3
  
  