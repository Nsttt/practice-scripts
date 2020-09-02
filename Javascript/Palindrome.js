// Determine whether an integer is a palindrome.
// An integer is a palindrome when it reads the same backward as forward.

const palindrome = (data) => {
  let reverse = 0;
  let newData = data;

  if (data < 0) return false;

  while (newData > 0) {
    const lastNumber = newData % 10;
    reverse = reverse * 10 + lastNumber;
    newData = (newData / 10) | 0;
  }
  return data === reverse;
};

console.log(palindrome(121)) // True
console.log(palindrome(150)) // False