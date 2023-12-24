/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// first solution

var countCharacterOccurrences = function (str) {
    var charCount = {};

    for (var i = 0; i < str.length; i++) {
        var char = str[i];

        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

var isAnagram = function (s, t) {
    const firstCharCount = countCharacterOccurrences(s);
    const secondCharCount = countCharacterOccurrences(t);

    for (var char in firstCharCount) {
        if (firstCharCount[char] !== secondCharCount[char]) {
            return false;
        }
    }

    for (var char in secondCharCount) {
        if (!firstCharCount[char]) {
            return false;
        }
    }

    return true;

};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));

// second solution
