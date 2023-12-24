/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let duplicate = {};
    for (let i = 0; i < nums.length; i++) {
        if (duplicate[nums[i]]) {
            return true;
        } else {
            duplicate[nums[i]] = true;
        }
    }

    return false;
};

console.log(containsDuplicate[1,2,3,1]);
console.log(containsDuplicate[1,2,3,4]);