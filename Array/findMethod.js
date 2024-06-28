// find method

// const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string) {
//     return string.length === 3;
// }

// const ans = myArray.find(isLength3);

// console.log(ans);

const users = [
    { userId: 1, userName: "sagar" },
    { userId: 2, userName: "manish" },
    { userId: 3, userName: "asmit" },
    { userId: 4, userName: "rupesh" },
    { userId: 5, userName: "aditya" },
];

const myUser = users.find((user) => {
    return user.userId === 3;
});

console.log(myUser);