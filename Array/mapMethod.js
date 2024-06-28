// map method
const numbers = [3, 4, 6, 1, 8]

const square = function (number, index) {
    return `index: ${index}, number: ${number} & square: ${number * number}`;
}

// Note:: map return me new array deta hai

const squareNumber = numbers.map(square)
// console.log(squareNumber);


// now some real life example

const users = [
    { firstName: "harshit", age: 23 },
    { firstName: "mohan", age: 21 },
    { firstName: "nitish", age: 22 },
    { firstName: "garima", age: 20 },
]

const userNames = users.map((user) => {
    // return user;
    return user.firstName;
})

console.log(userNames);