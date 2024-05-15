"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const cars = [
    "Bugatti Chiron",
    "Lamborghini Veneno",
    "Ferrari LaFerrari",
    "Audi R8",
    "Pagani Huayra",
];
for (let i = 0; i < cars.length; i++) {
    console.log(`I would like to own a ${cars[i]}`);
}
