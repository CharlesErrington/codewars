// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

// My solution

function sum() {
    // return the sum of all arguments given.
    return [...arguments].reduce((sum, num) => sum + num, 0)
  }

