/* Question 1 : Counting Frequencies

Task : Write a function that takes an array of integers and returns an object where the keys
        are the integers from the array, and the values are their respective counts.
*/

function countFrequencies(arr) {
    const frequencyMap = {}; // we initialize an empty object frequencyMap to store counts.
    for (const num of arr) { // We iterate through each number in array. for each number,
        frequencyMap[num] = (frequencyMap[num] || 0) +1; //  we either initialize its count to 1 or increment its existing count.
    }

    return frequencyMap; // Finally, we return the frequencyMap

}


/* Question 2 : Most Frequent Element

Task : Implement a function that finds the most frequently occuring element in an array.
        If there are multiple elements with the same highest frequency, return any one of them.
*/

function mostFrequent(arr) {
    const frequencyMap = countFrequencies(arr); // We reuse the countFrequencies function to get the frequency of each number.
    let maxCount = 0; // We initialize maxCount to track the highest frequency.
    let mostFrequentNum = null; // and mostFrequentNum to store the number with that frequency.

    for (const num in frequencyMap) { // We loop through the frequency map to find the number with the maximum frequency.
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequentNum = Number(num);
        }
    }

    return mostFrequentNum; // finally, we return that number.
}


/* Question 3 : Frequency Sort

Task : Write a function that sorts an array based on the frequency of its elements. Elements 
        with higher frequency should appear first. If two elements have the samne frequency, sort them 
        in ascending order.
*/

function frequencySort (arr) {
    const frequencyMap = countFrequencies(arr); // We first count the frequencies using countFrequencies.
    return arr.sort ((a, b) => {  // We then sort the array using the sort method. The sort compares the frequencies and, in case of ties, sorts by the actual values in ascending order.
        const freqA = frequencyMap[a];
        const freqB = frequencyMap[b];

        if (freqA === freqB) {
            return a - b; // Sort by value if frequencies are equal
        }

        return freqB - freqA; // Sort by frequency 
    });
}

/* Question 4 : K Most Frequent Elements

Task : Create a function that returns the k most frequent elements from an array. If there are 
        fewer than k unique elements, return all of them.
*/

function kMostFrequent(arr, k) {
    const frequencyMap = countFrequencies(arr);
    const sortedFrequencies = Object.entries(frequencyMap)
        .sort (([, freqA], [, freqB]) => freqB - freqA); // Sort by frequency


    return sortedFrequencies.slice(0, k).map(([num]) => Number(num));
}

/*  1. We first get the frequency of each number.
    2. We convert the frequency map into an array of entries and sort it based on frequency.
    3. We then take the first k entries and return their numbers as an array.
*/

/* Question 5 : Distinct Freuency Check 

Task : Write a function that checks if all elements in an array
        have distinct frequencies. If all frequencies are 
        unique, return true; otherwise, return false.
*/

function hasDistinctFrequencies(arr) {
    const frequencyMap = countFrequencies(arr); // We count the frequencies using countFrequencies.
    const frequencySet = new Set(Object.values(frequencyMap)); // Use a set to track unique frequencies, We create a set from the frequencies, which automatically handles duplicates.
    return frequencySet.size === Object.keys(frequencyMap).length; //compare sizes
    // finally, we check if the size of the set (unique frequencies) is the same as the number of
    // unique elements in the frequency map. If they match, it means all frequencies are distinct.
}