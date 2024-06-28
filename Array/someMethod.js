// some method

const numbers = [3, 5, 8, 9];

// kya ek bhi number esa hai jo even hai 
// true

// const ans = numbers.some((number) => number % 2 === 0);
// console.log(ans);

const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "Laptop", price: 22000 },
    { productId: 3, productName: "Tv", price: 15000 },
    { productId: 4, productName: "mackbook", price: 250000 },
];


const ans = userCart.some((cartItem) => cartItem.price > 100000);
console.log(ans);