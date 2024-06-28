// every method

// Remainder zero aa raha hai ya nahi aa raha

// callback function ---> true / false (boolean) return karta hai

// every method -----> true / false (boolean) returnn karta hai

// agar array ke sare elements 'true' return karte hai to hi every method 'true' return karega nahi to 'false'

// const numbers1 = [2, 4, 6, 8, 10];
// const numbers2 = [2, 4, 6, 8, 9, 10];

// const ans = numbers1.every((number) => number % 2 === 0);

// console.log(ans);



// real example

const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "Laptop", price: 22000 },
    { productId: 3, productName: "Tv", price: 15000 },
];

// check every product < 30000

const isLessThan30k = userCart.every((cartItem) => cartItem.price < 30000);
console.log(isLessThan30k);