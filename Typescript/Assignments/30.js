"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usernames = void 0;
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var usernames = ["admin", "tooba", "afreen", "yumna", "nashrah"];
exports.usernames = usernames;
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
usernames.map(function (value, index) {
    if (value == "admin") {
        console.log("Hello ".concat(value, ", would you like to see a status report?"));
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else {
        console.log("Hello ".concat(value, ", thank you for logging in again"));
    }
});
