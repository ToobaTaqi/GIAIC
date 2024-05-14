// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

import { usernames } from "./30";
// • If the list is empty, print the message We need to find some users!
const check = () => {
  if (usernames.length == 0) {
    console.log("We need to find some users!");
  }
};
check()
// • Remove all of the usernames from your array, and make sure the correct message is printed.
usernames.splice(0, usernames.length);
console.log(usernames.length);

check()
