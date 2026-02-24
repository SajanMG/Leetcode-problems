// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //using the map method 
    //count the total freq of letters in magazine and check if it is enough for the letters in ransom note

    const map = {}    // we declare an empty variable map and initialize it with empty objeect

    for (let char of magazine) {
        map[char] = (map[char] || 0) + 1; //get the current value stored for that letter, if it doesn't exist it return undefined and use 0 instead. if it already exist then add 1 in that value
    }

    for (let char of ransomNote) {
        if (!map[char]) return false;
        map[char]--;
    }
    return true;
};

// time complexity will be O(m + n) as it go through each char in magazine and ransom note
// space complexity will be O(1) as k = 26 is constant