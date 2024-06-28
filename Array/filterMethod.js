// filter method

// Note: Jo filter ka callback function hoga wo hamesha return karna chaiye boolean value.

const numbers = [1, 3, 2, 6, 4, 8];

// callback function for Even numbers
const isEven = function (number) {
    return number % 2 === 0;
}


// callback function for Odd numbers
const isOdd = function (number) {
    return number % 2 !== 0;
}

const EvenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
const OddNumbers = numbers.filter(isOdd);

console.log(`EvenNumbers: `, EvenNumbers);

console.log(`OddNumbers: `, OddNumbers);