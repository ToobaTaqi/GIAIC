// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

let places: string[] = [
  "Tokyo",
  "Santorini",
  "Machu Picchu",
  "Iceland",
  "Bora Bora",
];

// • Print your array in its original order.
let i: number;

console.log("Original Array");
for (i = 0; i < places.length; i++) {
  console.log(`${i} - ${places[i]}`);
}

// • Print your array in alphabetical order without modifying the actual list.
console.log("Sorted in Alphabetical order");
for (i = 0; i < places.slice().sort().length; i++) {
  console.log(`${i} - ${places.slice().sort()[i]}`);
}

// • Show that your array is still in its original order by printing it.
console.log("Original order");
for (i = 0; i < places.length; i++) {
  console.log(`${i} - ${places[i]}`);
}

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order");
for (i = 0; i < places.slice().sort().reverse().length; i++) {
  console.log(`${i} - ${places.slice().sort().reverse()[i]}`);
}

// • Show that your array is still in its original order by printing it again.
console.log("original order");
for (i = 0; i < places.length; i++) {
  console.log(`${i} - ${places[i]}`);
}

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order of list");
places = places.slice().reverse();
for (i = 0; i < places.length; i++) {
  console.log(`${i} - ${places[i]}`);
}

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse the order of list Again = back to its original order");
places = places.reverse();
for (i = 0; i < places.length; i++) {
  console.log(`${i} - ${places[i]}`);
}

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted array");
places = places.sort();
for (i = 0; i < places.length; i++) {
  console.log(`${i} - ${places[i]}`);
}

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reverse alphabetical order");
places = places.reverse();
for (i = 0; i < places.length; i++) {
  console.log(`${i} - ${places[i]}`);
}
