/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// first solution

var sortSolution = function(s, t) {
    // Sort the characters in the strings
    const sortedStr1 = s.split('').sort().join('');
    const sortedStr2 = t.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// second solution

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counter = new Map();

    for (let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!counter.has(char) || counter.get(char) === 0) {
            return false;
        }
        counter.set(char, counter.get(char) - 1);
    }

    return true;
};

// sample usage

console.log(sortSolution("anagram", "nagaram"));
console.log(hashMapSolution("rat", "car"));
console.log(isAnagram("a", "ab"));