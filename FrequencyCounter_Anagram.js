/* Question : Given two strings , write a function to determine if the second string is an anagram of the first one.
An Anagram is a word , phrase or name formed by rearranging the letters of another, eg cinema formed from iceman

[note :you only have to pass string of lowercase characters , don't worry about special characters or numbers etc.]

expected input and their outputs
isAnagram("", "") // true
isAnagram("bba", "aab") // false
isAnagram("car", "rat") // false
isAnagram("anagram", "nagaram") // true
isAnagram("silent", "listen") // true
isAnagram("hey", "yea") // false 

// check if length is equal
// reperesent the frequency of every character in both strings
// check if character and frequency matches in  both strings */ 

function isAnagram(str1, str2) {

    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    // add regular expression

    if(str1.length !== str2.length){
        return false;
    }

    const frequencyCount1 = {};
    const frequencyCount2 = {};

    for (let val of str1) {
        frequencyCount1[val] = (frequencyCount1[val] || 0) + 1;
    }
    for (let val of str2) {
        frequencyCount2[val] = (frequencyCount2[val] || 0) +1;
    }

    console.log(" frquencyCount1", frequencyCount1);
    console.log(" frquencyCount2", frequencyCount2);

    for (let key in frequencyCount1) {
      if (!(key in frequencyCount2)) {
        return false;
      }

      if (frequencyCount2[key] !== frequencyCount1[key]) {
        return false;
      }
    }

    return true;
}


