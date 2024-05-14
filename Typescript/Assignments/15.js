// hanging Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var people = ["abc", "def", "ghi"];
var i;
for (i = 0; i < people.length; i++) {
    console.log("".concat(i + 1, "- Dear ").concat(people[i], ",\nYou are invited to dinner at my place. It would be an honor to have you join us.\nLooking forward to seeing you!"));
}
console.log("Unfortunately, ".concat(people[1], " cant make it"));
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
people[1] = "jkl";
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("New set of invites:");
for (i = 0; i < people.length; i++) {
    console.log("".concat(i + 1, "- Dear ").concat(people[i], ",\nYou are invited to dinner at my place. It would be an honor to have you join us.\nLooking forward to seeing you!"));
}
