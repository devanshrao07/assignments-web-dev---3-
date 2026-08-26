// testEven.js

const isEven = require("./isEven");

const numbers = [2, 5, 8, 11, 20];

numbers.forEach((number) => {
    if (isEven(number)) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
});