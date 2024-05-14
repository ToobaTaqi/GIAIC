// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var List = [
    "Mount Everest",
    "Nile River",
    "Japan",
    "Istanbul",
    "Urdu",
    "Taj Mahal",
    "SunFlower",
    "Abstract Expressionism",
    "'Mona Lisa' by Leonardo da Vinci",
    "Pizza",
    "Beach",
];
for (var i = 0; i < List.length; i++) {
    console.log("".concat(i + 1, " -> ").concat(List[i]));
}
