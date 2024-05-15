"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
const _41_1 = require("./41");
let i;
let namesCopy = [];
const make_great = () => {
    for (i = 0; i < _41_1.magicianNames.length; i++) {
        namesCopy.push(`Great ${_41_1.magicianNames[i]}`);
        console.log(namesCopy[i]);
    }
};
make_great();
