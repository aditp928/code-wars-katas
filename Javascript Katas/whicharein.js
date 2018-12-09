
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

// Beware: r must be without duplicates.
// Don't mutate the inputs.


// function recur(n, op) { return (op) ? op.call(op, n) : n; }
// function zero(op)     { return recur(0, op); }
// function one(op)      { return recur(1, op); }
// function two(op)      { return recur(2, op); }
// function three(op)    { return recur(3, op); }
// function four(op)     { return recur(4, op); }
// function five(op)     { return recur(5, op); }
// function six(op)      { return recur(6, op); }
// function seven(op)    { return recur(7, op); }
// function eight(op)    { return recur(8, op); }
// function nine(op)     { return recur(9, op); }

// function plus(num) {
//     return function(res) {
//         return res + num;
//     };
// }
// function minus(num) {
//     return function(res) {
//         return res - num;
//     };
// }
// function times(num) {
//     return function(res) {
//         return res * num;
//     };
// }
// function dividedBy(num) {
//     return function(res) {
//         return res / num;
//     };
// }

function inArray(array1, array2) {
    return array1
      .filter(word1 => array2.some(word2 => word2.includes(word1)))
      .sort()
  }