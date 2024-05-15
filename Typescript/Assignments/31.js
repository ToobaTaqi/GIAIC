"use strict";
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
Object.defineProperty(exports, "__esModule", { value: true });
const _30_1 = require("./30");
// • If the list is empty, print the message We need to find some users!
const check = () => {
    if (_30_1.usernames.length == 0) {
        console.log("We need to find some users!");
    }
};
check();
// • Remove all of the usernames from your array, and make sure the correct message is printed.
_30_1.usernames.splice(0, _30_1.usernames.length);
console.log(_30_1.usernames.length);
check();
