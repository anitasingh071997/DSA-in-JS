/* Trie Exercise - removeWord
Write a function called removeWord which accepts a string and 
removes the word from the Trie. addWord is implemented to help you 
test the function.

var t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
t.addWord('forget')
t.addWord('awesome')
t.addWord('argue')

t.removeWord('fat')
t.characters.f.characters.a.characters.t.isWord // false
t.characters.f.characters.a.characters.t.characters.e.isWord // true
 
t.removeWord('argue')
 
t.characters.a.characters.r // undefined

*/

// Trie Node Constructor
class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    // Method to add a word recursively
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
            return;
        }
        const char = word[index];
        if (!this.characters[char]) {
            this.characters[char] = new Trie();
        }
        this.characters[char].addWord(word, index + 1);
    }
    // Method to remove a word recursively
    removeWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = false; // Unmark the end of the word
            return;
        }

        const char = word[index];
        const child = this.characters[char];

        if (child) {
            child.removeWord(word, index + 1);

            // If the child node has no characters and is not a word, delete it
            if (Object.keys(child.characters).length === 0 && !child.isWord) {
                delete this.characters[char];
            }
        }
    }
}
  
  
  
  // Example usage
  var t = new Trie();
  t.addWord('fun');
  t.addWord('fast');
  t.addWord('fat');
  t.addWord('fate');
  t.addWord('father');
  t.addWord('forget');
  t.addWord('awesome');
  t.addWord('argue');
  
  t.removeWord('fat');
  console.log(t.characters.f.characters.a.characters.t.isWord); 
  console.log(t.characters.f.characters.a.characters.t.characters.e.isWord); 
  
  t.removeWord('argue');
  console.log(t.characters.a.characters.r); 
  