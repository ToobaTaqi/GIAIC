// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

const names: string[] = ["Abc", "Def", "ghi", "jkl"];
for (let i = 0; i < names.length; i++) {
  console.log(`Friend # ${i + 1}: ${names[i]}`);
}
