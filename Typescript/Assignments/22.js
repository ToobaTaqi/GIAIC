// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var arr = [1, 2, 3, 4, 5];
console.log("Value at index 10:", arr[10]); // Intentional error: accessing index 10 which doesn't exist
// Try to access an element at an invalid index
if (arr.length > 10) {
    console.log("Value at index 10:", arr[10]);
}
else {
    console.log("Array does not have 10 elements."); // Output this message instead if array length is not sufficient
}
