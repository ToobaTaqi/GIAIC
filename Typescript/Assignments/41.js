"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicianNames = void 0;
var magicianNames = ["Donkey", "Horse", "Bangali baji"];
exports.magicianNames = magicianNames;
// Define the show_magicians function
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicianNames);
