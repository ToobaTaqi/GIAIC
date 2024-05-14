// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var people = ["abc", "def", "ghi"];
var i;
for (i = 0; i < people.length; i++) {
    console.log("".concat(i + 1, "- Dear ").concat(people[i], ",\nYou are invited to dinner at my place. It would be an honor to have you join us.\nLooking forward to seeing you!"));
}
