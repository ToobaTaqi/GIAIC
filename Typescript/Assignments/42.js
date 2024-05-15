"use strict";
// reat Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
let magicianNames = ["Donkey", "Horse", "Bangali baji"];
let greatMagicianNames = make_great(magicianNames);
show_magicians(greatMagicianNames);
