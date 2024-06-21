const numbers = [4, 2, 5, 8]

// _____________________________________________________-
// function multiplyBy2(number, index) {
//     console.log(`index is ${index} & number is ${number}`);
//     // console.log("index is", index);
//     console.log(`${number} * 2 = ${number * 2}`);
// }

// _____________________________________________________-
// for (let i = 0; i < numbers.length; i++) {
//     multiplyBy2(numbers[i], i)
// }

// _____________________________________________________-
// numbers.forEach(multiplyBy2)

// _____________________________________________________-
// numbers.forEach(function (number, index) {
//     console.log(`index is ${index} & number is ${number}`);
//     console.log(`${number} * 2 = ${number * 2}`);
// })

// Now some real example

const users = [
    { firstName: "harshit", age: 23 },
    { firstName: "mohan", age: 21 },
    { firstName: "nitish", age: 22 },
    { firstName: "garima", age: 20 },
]

// using for

// for(let user of users) {
//     console.log(user.firstName);
// }


// using forEach

// users.forEach(function(user) {
//     console.log(user.firstName);
// })

users.forEach((user) => {
    console.log(user.firstName);
})