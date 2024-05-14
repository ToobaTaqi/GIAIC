// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users = [
    "Afreen",
    "Nashrah",
    "Tooba",
    "Bushra",
    "Yumna",
];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["AFREEN", "Nashrah", "Rabia", "Khizra", "jaweria"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
var i;
var j;
for (i = 0; i < new_users.length; i++) {
    var lowercase_new_user = new_users[i].toLowerCase();
    var usernameAvailable = true;
    for (j = 0; j < current_users.length; j++) {
        if (current_users[j].toLowerCase() === lowercase_new_user) {
            console.log("Sorry, the username \"".concat(new_users[i], "\" is already taken. Please choose a different username."));
            usernameAvailable = false;
            break;
        }
    }
    if (usernameAvailable) {
        console.log("Congratulations! The username \"".concat(new_users[i], "\" is available."));
        // current_users.push(new_users[i]);
    }
}
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
