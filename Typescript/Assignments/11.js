// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Abc", "Def", "ghi", "jkl"];
for (var i = 0; i < names.length; i++) {
    console.log("Friend # ".concat(i + 1, ": ").concat(names[i]));
}
