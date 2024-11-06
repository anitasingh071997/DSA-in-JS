/* Trie Exercise - autoComplete
Write a function on the Trie class named autoComplete which accepts 
a string and returns an array of all the possible options in the 
Trie for that string.

var t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
t.addWord('forget')
t.addWord('awesome')
t.addWord('argue')
 
t.autoComplete('fa') // ["fast","fat", "fate", "father"] 
t.autoComplete('a') // ["awesome", "argue"]
t.autoComplete('arz') // []

*/

// Trie node constructor
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
    // Method to get all words in the Trie
    getWords(prefix = "") {
        let words = [];

        if (this.isWord) {
            words.push(prefix);
        }

        for (let char in this.characters) {
            words = words.concat(this.characters[char].getWords(prefix + char));
        }

        return words;
    }
    // Method to auto-complete a prefix
    autoComplete(prefix) {
        let currentNode = this;

        // Traverse down the trie to the end of the prefix
        for (let char of prefix) {
            if (!currentNode.characters[char]) {
                return []; // If the prefix does not exist, return an empty array 
            }

            currentNode = currentNode.characters[char];
        }

        // Get all the words starting from this node
        return currentNode.getWords(prefix);
    }
}




// Example Usage

var t = new Trie();
t.addWord('fun');
t.addWord('fast');
t.addWord('fat');
t.addWord('fate');
t.addWord('father');
t.addWord('forget');
t.addWord('awesome');
t.addWord('argue');

console.log(t.autoComplete('fa'));
console.log(t.autoComplete('a'));
console.log(t.autoComplete('arz')); 