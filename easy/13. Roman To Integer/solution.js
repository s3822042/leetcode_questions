/**
 * @param {string} s
 * @return {number}
 */

symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

const romanToInt = function (s) {
    let value = 0;
    for (let i = 0; i < s.length - 1; i++) {
        symbols[s[i]] < symbols[s[i + 1]] ? value -= symbols[s[i]] : value += symbols[s[i]]
    }
    return value + symbols[s[s.length - 1]];
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
