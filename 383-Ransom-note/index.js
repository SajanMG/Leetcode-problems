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