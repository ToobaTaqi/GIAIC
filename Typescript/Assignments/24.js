"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let flower = "sunflower";
// • Tests for equality and inequality with strings
console.log("equality test: ", flower == "sunflower");
console.log("inequality test: ", flower != "sunflower");
// • Tests using the lower case function
console.log("Lower case function: ", flower.toLowerCase() == "sunflower");
console.log("Lower case function: ", flower.toLowerCase() != "sunflower");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const n1 = 7;
const n2 = 4;
console.log("'Numerical tests'");
console.log("equality test: ", n1 == n2);
console.log("inequality test: ", n1 != n2);
console.log("greater than test: ", n1 > n2);
console.log("less than test: ", n1 < n2);
console.log("greater than or equal to test: ", n1 >= n2);
console.log("less than or equal to test: ", n1 <= n2);
// • Tests using "and" and "or" operators
console.log("AND operator test:", n1 == 7 && n2 == 7);
console.log("OR operator test:", n1 == 7 || n2 == 7);
// • Test whether an item is in a array
let arr1 = [1, 2, 3, 4, 5];
console.log("Item in array test:", arr1.includes(3));
// • Test whether an item is not in a array
let arr2 = [1, 2, 3, 4, 5];
console.log("Item in array test:", !arr2.includes(3));
