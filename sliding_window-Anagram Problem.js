/*

COUNT OCCURENCES OF ANAGRAM

Given a word and a text, return the count of occurences of the anagrams of the word in the text.
 
Input : text = gotxxotgxdogt, word = got
Output : 3

countAnagrams("gotxxotgxdogt","got")

*/

function countAnagrams(text, word) {
    const count = 0;
    let anagram = ''
     
    for(let i=0; i< word.length; i++) {
        anagram += text[i]

        // console.log(anagram);
    }
    // console.log(isAnagram(anagram , word))
    if(isAnagram (anagram , word)){
        count += 1
    }

    for(let i=1; i< text.length; i++){
        //console.log('current anagram',anagram, 'substring->',anagram.substring(1),'text in current position --',text[1],'current index',i);
        anagram = anagram.substring(1) + text[i];

        if(isAnagram(anagram, word)) {
            count += 1;
        }
        console.log('anagram window',anagram);
    }

    return count; 
}