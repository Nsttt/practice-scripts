//  Write a function called fizzbuzz that accepts a single argument n.
//  fizzbuzz should return "Fizz" if n is a multiple of 3,
//  "Buzz" if n is a multiple of 5,
//  “FizzBuzz” if n is a multiple of both 3 and 5,
//  and n if n is a multiple of neither 3 nor 5.

function FizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      console.log("FizzBuzz");
    } else
    if (i % 3 == 0) {
      console.log('Fizz')
    } else
    if (i % 5 == 0) {
      console.log('Buzz')
    } else {
      console.log(n)
    }
  }
}    

// Program must fit within a tweet (max 140 characters).
function shorterFizzBuzz(n) {
  for(let i=0;i<n;)
    console.log(
      (++i%3?'':'fizz')+(i%5?'':'buzz')||i
    )
}