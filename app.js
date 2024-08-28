// let delhi = {
//     latitude: "28.7041 N" 
//     longitude: "77.1825 E"
// };

// const student = {
//     name: "Aditya",
//     age: 23,
//     marks: 89.5,
//     city: "Delhi"
// };

// const item = {
//     price: 100.99,
//     discount: 40,
//     color: ["red", "pink"]
// };
// const post = {
//     username: "@dhanrajadi",
//     content: "This is my #NewPost",
//     likes: 180,
//     tags: ["@dhanrajcompany","@hadup"]
// };

// let student = {
//     name: "aditya",
//     marks: 87.52
// };

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };

// const student = {
//     name : "aditya",
//     age : "24",
//     marks: "78",
//     city: "Delhi"
// };

// const classInfo = {
//     aditya : {
//         grade: "A+",
//         city: "Delhi"
//     },
//     neha : {
//         gade: "A",
//         city: "Pune"
//     },
//     karan : {
//         grade: "O",
//         city: "Mumbai"
//     }
// };

// const classInfo = [
//     {
//         name: "aditya",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "neha",
//         gade: "A",
//         city: "Pune"
//     },
//     {
//         name: "Karan",
//         grade: "O",
//         city: "Mumbai"
//     }
// ]; 
// Gessing games?


// const max = prompt("enter the max number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number");

// while(true) {
//     if(guess == "quit") {
//         console.log("user quit");
//         break;
//     }

//     if(guess == random) {
//         console.log("you are right! congrats!! random number was", random);
//         break;
//     // } else  {
//     //     guess = prompt("your gess was wrong. please try again");
//     // }
//     } else if (guess < random){
//         guess = prompt("hint : your guess was too small. please try again");
//     } else {
//         guess = prompt("hint : your guess was too large. please try again");
//     }
// }

// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6]

// let dice = Math.floor( Math.random() * 6) + 1;
// console.log(dice);

// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

// const car = {
//     name: "maruti Suzuki",
//     model: "Maruti Suziki Dzire",
//     color: "white"
// };
// console.log(car.name);


// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

const Person = {
    name: "Jane Doe",
    age: 21,
    city: "New Jersey"
};
Person.city = "New York";
Person.country = "United States";
console.log(Person);