"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalList = void 0;
var people = ["mno", "abc", "pqr", "jkl", "ghi", "stu"];
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people for dinner");
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (people.length > 2) {
    var removedGuest = people.pop();
    console.log("Sorry ".concat(removedGuest, ", but we'll have to cancel your invitation."));
}
// console.log(people);
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
var i;
var finalList = people.length;
exports.finalList = finalList;
for (i = 0; i < people.length; i++) {
    console.log("".concat(people[i], ", You're Still invited!"));
}
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (i = 0; i <= people.length; i++) {
    people.pop();
}
console.log(people);
