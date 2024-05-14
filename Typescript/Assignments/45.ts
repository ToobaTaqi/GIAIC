// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

const car=(manufacturer:string, modelName:string, options:{[key:string]:any})=>{
    const car: { manufacturer: string; modelName: string; [key: string]: any } = {
        manufacturer,
        modelName,
        ...options
      };
      return car;
}

const mycar=car("Toyota", "Camry", {color: "black", year: 2023} );
console.log(mycar)