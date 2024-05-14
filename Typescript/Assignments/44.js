// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    ingredients.forEach(function (ingredient) {
        console.log("- " + ingredient);
    });
    console.log("Enjoy your sandwich!");
}
// Call the function with different numbers of arguments
console.log("Making 3 sandwiches with:");
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese", "Avocado");
makeSandwich("Peanut Butter", "Jelly");
