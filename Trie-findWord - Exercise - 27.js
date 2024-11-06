/* : Trie Exercise - findWord
Write a function called findWord which accepts a string and returns 
the characters object for the last character in that word if the string 
is a word in the Trie, otherwise it returns undefined. 
Try to solve this without having to find every single word in the Trie. 
addWord is implement to help you test the function.

var t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
 
t.findWord('taco') // undefined
t.findWord('fat').characters // {t: Trie}
t.findWord('father').characters // {}
t.findWord('father').isWord // true

*/ 

// Trie Node Constructor
function Trie() {
    this.characters = {};
    this.isWord = false;
  }
  
  // Method to add a word recursively (already provided)
  Trie.prototype.addWord = function(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
      return;
    }
    const char = word[index];
    if (!this.characters[char]) {
      this.characters[char] = new Trie();
    }
    this.characters[char].addWord(word, index + 1);
  };
  
  // Method to find a word in the Trie
  Trie.prototype.findWord = function(word, index = 0) {
    // Base case: if we've reached the end of the word
    if (index === word.length) {
      return this.isWord ? this : undefined;
    }
    
    // Get the current character and check if it exists in characters
    const char = word[index];
    if (!this.characters[char]) {
      return undefined; // Character not found, so the word doesn't exist
    }
    
    // Recursively move to the next character
    return this.characters[char].findWord(word, index + 1);
  };
  
  // Example usage
  var t = new Trie();
  t.addWord('fun');
  t.addWord('fast');
  t.addWord('fat');
  t.addWord('fate');
  t.addWord('father');
  
  console.log(t.findWord('taco')); 
  console.log(t.findWord('fat').characters); 
  console.log(t.findWord('father').characters); 
  console.log(t.findWord('father').isWord);
  