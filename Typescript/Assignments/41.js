"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicianNames = void 0;
let magicianNames = ["Donkey", "Horse", "Bangali baji"];
exports.magicianNames = magicianNames;
// Define the show_magicians function
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicianNames);
