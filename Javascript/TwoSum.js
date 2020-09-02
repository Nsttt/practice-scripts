// Given an array of integers nums and and integer target, return the indices of the two numbers such that they add up to target.
// You can return the answer in any order.

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([15, 7, 11, 2], 9)); // OUTPUT: [1, 3]
