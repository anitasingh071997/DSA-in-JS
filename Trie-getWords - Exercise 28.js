/* Trie Exercise - getWords
Write a function on the Trie.prototype called getWords 
which returns an array of all of the words in the Trie.

var t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
t.addWord('forget')
t.addWord('awesome')
t.addWord('argue')
 
t.getWords() // ["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]
 
t.getWords().length // 8

*/

// Trie node constructor
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
    
    this.characters[char].addWord(word, index +1);
};

// Method to get all words in the Trie

Trie.prototype.getWords = function(prefix = "") {
    let words = [];
    
    // If this node marks the end of a word, add the word to the array 
    
    if (this.isWord) {
        words.push(prefix);
    }
    
    // Recursively find words for each character in the Trie 
    for (let char in this.characters) {
        words = words.concat(this.characters[char].getWords(prefix + char));
    }
    
    return words;
};

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

console.log(t.getWords()); 
console.log(t.getWords().length); 