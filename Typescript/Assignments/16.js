"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
const people = ["abc", "jkl", "ghi"];
console.log("Great News!!  We found a bigger dinner table.");
// • Add one new guest to the beginning of your array.
people.unshift("mno");
// • Add one new guest to the middle of your array.
let middleIndex = Math.floor(people.length / 2);
people.splice(middleIndex, 0, "pqr");
// • Use append() to add one new guest to the end of your list.
people.push("stu");
// • Print a new set of invitation messages, one for each person in your list.
console.log("New set of Invites:");
let i;
for (i = 0; i < people.length; i++) {
    console.log(`${i + 1}- Dear ${people[i]},\nYou are invited to dinner at my place. It would be an honor to have you join us.\nLooking forward to seeing you!`);
}
console.log(people);
