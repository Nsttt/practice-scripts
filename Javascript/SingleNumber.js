// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

const nums = [1, 2, 3, 4, 2, 3, 1];

let data = nums.filter(function (a) {
  return (
    nums.filter(function (b) {
      return b == a;
    }).length == 1
  );
});

console.log(data);
