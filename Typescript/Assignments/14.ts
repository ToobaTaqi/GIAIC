// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const people: string[] = ["abc", "def", "ghi"];
let i: number;
for (i = 0; i < people.length; i++) {
  console.log(
    `${i+1}- Dear ${people[i]},\nYou are invited to dinner at my place. It would be an honor to have you join us.\nLooking forward to seeing you!`
  );
}
